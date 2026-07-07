<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header("Access-Control-Allow-Headers: *");

ini_set('display_errors', true);
error_reporting(E_ALL);

include_once("con.php");

$pdo = conectar();

$data = file_get_contents("php://input");
$data = json_decode($data);

@$option = $data->option;

if($data) {
    $option = $data->option;
} else {
    $option = $_GET['option'];
}

switch ($option) {
    case 'Register User':

        $cpf = $data->cpf;
        $sex = $data->sex;
        $dateBirth = $data->dateBirth;
        $city = $data->city;
        $email = $data->email;
        $name = $data->name;
        $password = md5($data->password);

        $checkIfCPFExists=$pdo->prepare("SELECT cpf FROM users WHERE cpf=:cpf");
        $checkIfCPFExists->bindValue("cpf", $cpf);
        $checkIfCPFExists->execute();

        $numRows = $checkIfCPFExists->rowCount();

        if($numRows > 0) {
            $message = "CPF já existente";
            
			$return = array(
				'status' => 0,
				'msg' => $message
			);

			echo json_encode($return);
        } else {

            $insertUser=$pdo->prepare("INSERT INTO users (id, cpf, sex, dateBirth, city, email, user, password) VALUES(?, ?, ?, ?, ?, ?, ?, ?)");
            $insertUser->bindValue(1, NULL);
            $insertUser->bindValue(2, $cpf);
            $insertUser->bindValue(3, $sex);
            $insertUser->bindValue(4, $dateBirth);
            $insertUser->bindValue(5, $city);
            $insertUser->bindValue(6, $email);
            $insertUser->bindValue(7, $name);
            $insertUser->bindValue(8, $password);
            $insertUser->execute();

            $lastId = $pdo->lastInsertId();

            $return = array(
				'iduser' => $lastId,
				'username' => $name
			);

            echo json_encode($return);

        }

        break;

    case 'Get User Data':

        $iduser = $_GET['iduser'];
        
        $getUserData=$pdo->prepare("SELECT city, email FROM users WHERE id=:id");
        $getUserData->bindValue(":id", $iduser);
        $getUserData->execute();

        while ($linha=$getUserData->fetch(PDO::FETCH_ASSOC)) {

            $email = $linha['email'];
            $city = $linha['city'];

            $return = array(
                'email'	=> $email,
                'city'	=> $city
            );

        }

        echo json_encode($return);

        break;

    case 'Login User':

        $email = $_GET['email'];
        $password = md5($_GET['password']);

        $getUser=$pdo->prepare("SELECT * FROM users WHERE email=:email AND password=:password");
        $getUser->bindValue(":email", $email);
        $getUser->bindValue(":password", $password);
        $getUser->execute();

        $numRows = $getUser->rowCount();

		$return = array();

		if($numRows == 0) {
			$message = "Email ou senha invalidos";
            
			$return = array(
				'status' => 0,
				'message' => $message
			);

			echo json_encode($return);

		} else {

            while ($linha=$getUser->fetch(PDO::FETCH_ASSOC)) {

                $id = $linha['id'];
                $email = $linha['email'];
                $user = $linha['user'];

                $return = array(
                    'iduser'	=> $id,
                    'email'	=> $email,
                    'username'	=> $user
                );

            }

            echo json_encode($return);
        }
        
        break;

    case 'Get User Data To Edit':

        $iduser = $_GET['iduser'];

        $getUserDataToEdit=$pdo->prepare("SELECT * FROM users WHERE id=:id");
        $getUserDataToEdit->bindValue(":id", $iduser);
        $getUserDataToEdit->execute();

        while ($linha=$getUserDataToEdit->fetch(PDO::FETCH_ASSOC)) {

            $id = $linha['id'];
            $city = $linha['city'];
            $email = $linha['email'];
            $user = $linha['user'];
            $cpf = $linha['cpf'];
            $dateBirth = $linha['dateBirth'];

            $dateBirthP = explode("-", $dateBirth);
            $dateBirth = $dateBirthP[2] . "/" . $dateBirthP[1] . "/" . $dateBirthP[0];

            $return = array(
                'city' => $city,
                'email' => $email,
                'username' => $user,
                'cpf' => $cpf,
                'dateBirth' => $dateBirth
            );
        }

        echo json_encode($return);

        break;

    case 'Update User Data':

        // print_r($data);
        $iduser = $data->iduser;
        $city = $data->city;
        $email = $data->email;
        $username = $data->username;
        $cpf = $data->cpf;
        $dateBirth = $data->dateBirth;

        $dateBirthP = explode("/", $dateBirth);
        $dateBirth = $dateBirthP[2] . "-" . $dateBirthP[1] . "-" . $dateBirthP[0];

        $updateUser=$pdo->prepare("UPDATE users SET city=:city, email=:email, user=:user, cpf=:cpf, dateBirth=:dateBirth WHERE id=:id");
        $updateUser->bindValue(":city", $city);
        $updateUser->bindValue(":email", $email);
        $updateUser->bindValue(":user", $username);
        $updateUser->bindValue(":cpf", $cpf);
        $updateUser->bindValue(":dateBirth", $dateBirth);
        $updateUser->bindValue(":id", $iduser);
        $updateUser->execute();

        $status = 1;
        $msg = "Usuário atualizado com sucesso!";

        $return = array(
            'status' => $status,
            'msg' => $msg,
            'username' => $username
        );

        echo json_encode($return);

        break;

    default:
        # code...
        break;
}
?>