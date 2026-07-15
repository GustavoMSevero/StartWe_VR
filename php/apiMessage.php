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
    case 'Get Startup Data':

        $idStartup = $_GET['idStartup'];

        $getStartupData=$pdo->prepare("SELECT iduser FROM startup WHERE id=:id");
        $getStartupData->bindValue(":id", $idStartup);
        $getStartupData->execute();

        while ($linha=$getStartupData->fetch(PDO::FETCH_ASSOC)) {

            $iduser = $linha['iduser'];

        }

        $getUserData=$pdo->prepare("SELECT email, user FROM users WHERE id=:id");
        $getUserData->bindValue(":id", $iduser);
        $getUserData->execute();

        while ($linha=$getUserData->fetch(PDO::FETCH_ASSOC)) {

            $email = $linha['email'];
            $user = $linha['user'];

        }

        $return = array(
            'iduser' => $iduser,
            'email' => $email,
            'user' => $user
        );

        echo json_encode($return);

        break;

    case 'Send Message':

        // print_r($data);
        $idTo = $data->iduserRecipient;
        $emailTo = $data->emailRecipient;
        $userTo = $data->userRecipient;

        $idFrom = $data->iduserSender;
        $emailFrom = $data->emailSender;
        $userFrom = $data->userSender;
        $message = $data->message;
        $messageRead = 1;

        $insertMessage=$pdo->prepare("INSERT INTO message (id, idFrom, idTo, userFrom, userTo, emailFrom, emailTo, message, messageRead) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");
        $insertMessage->bindValue(1, NULL);
        $insertMessage->bindValue(2, $idFrom);
        $insertMessage->bindValue(3, $idTo);
        $insertMessage->bindValue(4, $userFrom);
        $insertMessage->bindValue(5, $userTo);
        $insertMessage->bindValue(6, $emailFrom);
        $insertMessage->bindValue(7, $emailTo);
        $insertMessage->bindValue(8, $message);
        $insertMessage->bindValue(9, $messageRead);
        $insertMessage->execute();

        $return = array(
            'message' => 'Mensagem enviada com sucesso'
        );

        echo json_encode($return);

        break;

    case 'Get Messages':

        $username = $_GET['username'];
        $iduser = $_GET['iduser'];

        $getMessages=$pdo->prepare("SELECT * FROM message WHERE userTo =:username AND idTo =:iduser AND messageRead = 1");
        $getMessages->bindValue(":username", $username);
        $getMessages->bindValue(":iduser", $iduser);
        $getMessages->execute();

        $countMessages = $getMessages->rowCount();

        $return = array(
            'countMessages' => $countMessages
        );

        echo json_encode($return);

    default:
        # code...
        break;
}
?>