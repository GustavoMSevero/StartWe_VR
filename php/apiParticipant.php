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
    case 'Register Participant':

        $iduser = $data->iduser;
        $profession = $data->profession;
        $about = $data->about;
        $cep = $data->cep;
        $address = $data->address;
        $city = $data->city;
        $uf = $data->uf;
        $linkedin = $data->linkedin;

        $insertParticipantData=$pdo->prepare("INSERT INTO participantProfile (id, iduser, profession, about, cep, address, city, uf, urlLinkedin) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)");
        $insertParticipantData->bindValue(1, NULL);
        $insertParticipantData->bindValue(2, $iduser);
        $insertParticipantData->bindValue(3, $profession);
        $insertParticipantData->bindValue(4, $about);
        $insertParticipantData->bindValue(5, $cep);
        $insertParticipantData->bindValue(6, $address);
        $insertParticipantData->bindValue(7, $city);
        $insertParticipantData->bindValue(8, $uf);
        $insertParticipantData->bindValue(9, $linkedin);
        $insertParticipantData->execute();

        break;

    case 'Get Id Participant':

        $iduser = $_GET['iduser'];

        $getIdParticipant=$pdo->prepare("SELECT id FROM participantProfile WHERE iduser=:iduser");
        $getIdParticipant->bindValue("iduser", $iduser);
        $getIdParticipant->execute();

        $rowCount = $getIdParticipant->rowCount();

        if($rowCount > 0) {

            while ($linha=$getIdParticipant->fetch(PDO::FETCH_ASSOC)) {

                $id = $linha['id'];
    
                $return = array(
                    'id'	=> $id
                );
    
            }
    
            echo json_encode($return);
        } else {
            $return = array(
                'id'	=> 0
            );
            echo json_encode($return);
        }

        break;
    
    default:
        # code...
        break;
}
?>