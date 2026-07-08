<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

include_once("con.php");
$pdo = conectar();

$response = ["status" => "error", "message" => ""];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
    $option = $_POST['option'] ?? '';

    if ($option === 'Save Photo') {
        
        $iduser = $_POST['iduser'] ?? null;
        $uploadDir = "uploads/users/";

        // Cria a pasta se não existir
        if (!is_dir($uploadDir)) {
            mkdir($uploadDir, 0755, true);
        }

        if (isset($_FILES['photo']) && $_FILES['photo']['error'] === UPLOAD_ERR_OK) {
            
            $fileTmpPath = $_FILES['photo']['tmp_name'];
            $fileName     = $_FILES['photo']['name'];
            $fileSize     = $_FILES['photo']['size'];
            $mimeType     = $_FILES['photo']['type'];

            // Validações
            $allowedTypes = ['image/jpeg', 'image/png', 'image/jpg', 'image/webp'];
            
            if (!in_array($mimeType, $allowedTypes)) {
                $response['message'] = "Tipo de arquivo não permitido. Use JPG, PNG ou WEBP.";
            } 
            elseif ($fileSize > 5 * 1024 * 1024) { // 5MB
                $response['message'] = "Arquivo muito grande. Máximo 5MB.";
            } 
            else {
                // Gera nome único
                $ext = pathinfo($fileName, PATHINFO_EXTENSION);
                $newFileName = "user_" . $iduser . "_" . time() . "." . strtolower($ext);
                $destPath = $uploadDir . $newFileName;

                // === VERIFICA SE USUÁRIO JÁ TEM FOTO ===
                $stmt = $pdo->prepare("SELECT photo_url, filename FROM userPhoto WHERE iduser = ?");
                $stmt->bindValue(1, $iduser);
                $stmt->execute();
                $existingPhoto = $stmt->fetch(PDO::FETCH_ASSOC);

                if (move_uploaded_file($fileTmpPath, $destPath)) {

                    if ($existingPhoto) {
                        // === ATUALIZAR ===
                        $oldFilePath = $existingPhoto['photo_url'];

                        // Remove arquivo antigo (opcional, mas recomendado)
                        if (file_exists($oldFilePath)) {
                            unlink($oldFilePath);
                        }

                        $stmt = $pdo->prepare("UPDATE userPhoto 
                                              SET photo_url = ?, filename = ?, mime_type = ? 
                                              WHERE iduser = ?");
                        $stmt->bindValue(1, $destPath);
                        $stmt->bindValue(2, $newFileName);
                        $stmt->bindValue(3, $mimeType);
                        $stmt->bindValue(4, $iduser);
                    } else {
                        // === INSERIR ===
                        $stmt = $pdo->prepare("INSERT INTO userPhoto (iduser, photo_url, filename, mime_type) 
                                               VALUES (?, ?, ?, ?)");
                        $stmt->bindValue(1, $iduser);
                        $stmt->bindValue(2, $destPath);
                        $stmt->bindValue(3, $newFileName);
                        $stmt->bindValue(4, $mimeType);
                    }
                    
                    if ($stmt->execute()) {
                        $response = [
                            "status"  => "success",
                            "message" => "Foto salva com sucesso!",
                            "foto"    => $newFileName,
                            "caminho" => $destPath
                        ];
                    } else {
                        $response['message'] = "Erro ao salvar no banco de dados.";
                    }
                } else {
                    $response['message'] = "Erro ao mover o arquivo para a pasta.";
                }
            }
        } else {
            $response['message'] = "Nenhuma foto enviada ou erro no upload.";
        }
    } else {
        $response['message'] = "Opção inválida.";
    }
} else {
    $response['message'] = "Método não permitido.";
}

echo json_encode($response);
?>