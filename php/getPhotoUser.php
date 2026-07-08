<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type");

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
    case 'Get Photo':

        $iduser = $_GET['iduser'];

        $getPhoto = $pdo->prepare("SELECT * FROM userPhoto WHERE iduser=:iduser");
        $getPhoto->bindValue(":iduser", $iduser);
        $getPhoto->execute();

        while ($linha=$getPhoto->fetch(PDO::FETCH_ASSOC)) {

            $filename = $linha['filename'];

            $filename = "http://localhost:8888/web/react/StartWe_VR/php/uploads/users/". $filename;

            $return = array(
                'filename'	=> $filename
            );

        }

        echo json_encode($return);

        break;

        default:

        break;
    }