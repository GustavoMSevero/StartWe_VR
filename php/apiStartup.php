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
    case 'Register Startup':

        $iduser = $data->iduser;
        $nameStartup = $data->nameStartup;
        $nameResponsable = $data->nameResponsable;
        $city = $data->city;
        $state = $data->state;
        $description = $data->description;
        $needInvestment = $data->needInvestment;

        $businessPartners = $data->businessPartners;

        $bpComercial = $businessPartners->Comercial;
        $bpAccounting = $businessPartners->Contábil;
        $bpDeveloper = $businessPartners->Desenvolvedor;
        $bpDesigner = $businessPartners->Designer;
        $bpFinancial = $businessPartners->Financeiro;
        $bpManagement = $businessPartners->Gestão;
        $bpLegal = $businessPartners->Jurídico;
        $bpMarketing = $businessPartners->Marketing;
        
        $businessPartnerOtherChecked = $data->businessPartnerOtherChecked;
        $businessPartnerOther = $data->businessPartnerOther;

        $serviceProvision = $data->serviceProvision;
        
        $spComercial = $serviceProvision->Comercial;
        $spAccounting = $serviceProvision->Contábil;
        $spDeveloper = $serviceProvision->Desenvolvedor;
        $spDesigner = $serviceProvision->Designer;
        $spFinancial = $serviceProvision->Financeiro;
        $spManagement = $serviceProvision->Gestão;
        $spLegal = $serviceProvision->Jurídico;
        $spMarketing = $serviceProvision->Marketing;
        
        $serviceOtherChecked = $data->serviceOtherChecked;
        $serviceOther = $data->serviceOther;
        $stage = $data->stage;
        $problem = $data->problem;
        $solution = $data->solution;
        $differential = $data->differential;

        $insertStartup=$pdo->prepare("INSERT INTO startup (id, iduser, nameStartup, nameResponsable, description, city, state, needInvestment, 
        bpComercial, bpAccounting, bpDeveloper, bpDesigner, bpFinancial, bpManagement, bpLegal, bpMarketing, bpOtherChecked, bpOther, 
        spComercial, spAccounting, spDeveloper, spDesigner, spFinancial, spManagement, spLegal, spMarketing, spOtherChecked, spOther, 
        stage, problem, solution, differential) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
        $insertStartup->bindValue(1, NULL);
        $insertStartup->bindValue(2, $iduser);
        $insertStartup->bindValue(3, $nameStartup);
        $insertStartup->bindValue(4, $nameResponsable);
        $insertStartup->bindValue(5, $description);
        $insertStartup->bindValue(6, $city);
        $insertStartup->bindValue(7, $state);
        $insertStartup->bindValue(8, $needInvestment);
        $insertStartup->bindValue(9, $bpComercial);
        $insertStartup->bindValue(10, $bpAccounting);
        $insertStartup->bindValue(11, $bpDeveloper);
        $insertStartup->bindValue(12, $bpDesigner);
        $insertStartup->bindValue(13, $bpFinancial);
        $insertStartup->bindValue(14, $bpManagement);
        $insertStartup->bindValue(15, $bpLegal);
        $insertStartup->bindValue(16, $bpMarketing);
        $insertStartup->bindValue(17, $businessPartnerOtherChecked);
        $insertStartup->bindValue(18, $businessPartnerOther);
        $insertStartup->bindValue(19, $spComercial);
        $insertStartup->bindValue(20, $spAccounting);
        $insertStartup->bindValue(21, $spDeveloper);
        $insertStartup->bindValue(22, $spDesigner);
        $insertStartup->bindValue(23, $spFinancial);
        $insertStartup->bindValue(24, $spManagement);
        $insertStartup->bindValue(25, $spLegal);
        $insertStartup->bindValue(26, $spMarketing);
        $insertStartup->bindValue(27, $serviceOtherChecked);
        $insertStartup->bindValue(28, $serviceOther);
        $insertStartup->bindValue(29, $stage);
        $insertStartup->bindValue(30, $problem);
        $insertStartup->bindValue(31, $solution);
        $insertStartup->bindValue(32, $differential);
        $insertStartup->execute();

        break;
    
    case 'Get Startup':

        $getStartup=$pdo->prepare("SELECT * FROM startup");
        $getStartup->execute();

        while ($linha=$getStartup->fetch(PDO::FETCH_ASSOC)) {

            $idStartup = $linha['id'];
            $iduser = $linha['iduser'];
            $nameStartup = $linha['nameStartup'];
            $nameResponsable = $linha['nameResponsable'];
            $description = $linha['description'];
            $investment = $linha['needInvestment'];

            if($investment == 1) {
                $investment = "Sim";
            } else {
                $investment = "Não";
            }
            
            $bpComercial = $linha['bpComercial'];
            if($bpComercial == 1) {
                $bpComercial = "Sim";
            } else {
                $bpComercial = "Não";
            }
            $bpAccounting = $linha['bpAccounting'];
            if($bpAccounting == 1) {
                $bpAccounting = "Sim";
            } else {
                $bpAccounting = "Não";
            }
            $bpDeveloper = $linha['bpDeveloper'];
            if($bpDeveloper == 1) {
                $bpDeveloper = "Sim";
            } else {
                $bpDeveloper = "Não";
            }
            $bpDesigner = $linha['bpDesigner'];
            if($bpDesigner == 1) {
                $bpDesigner = "Sim";
            } else {
                $bpDesigner = "Não";
            }
            $bpFinancial = $linha['bpFinancial'];
            if($bpFinancial == 1) {
                $bpFinancial = "Sim";
            } else {
                $bpFinancial = "Não";
            }
            $bpManagement = $linha['bpManagement'];
            if($bpManagement == 1) {
                $bpManagement = "Sim";
            } else {
                $bpManagement = "Não";
            }
            $bpLegal = $linha['bpLegal'];
            if($bpLegal == 1) {
                $bpLegal = "Sim";
            } else {
                $bpLegal = "Não";
            }
            $bpMarketing = $linha['bpMarketing'];
            if($bpMarketing == 1) {
                $bpMarketing = "Sim";
            } else {
                $bpMarketing = "Não";
            }
            $bpOtherChecked = $linha['bpOtherChecked'];
            if($bpOtherChecked == 1) {
                $bpOtherChecked = "Sim";
            } else {
                $bpOtherChecked = "Não";
            }

            $bpOther = $linha['bpOther'];

            $spComercial = $linha['spComercial'];
            if($spComercial == 1) {
                $spComercial = "Sim";
            } else {
                $spComercial = "Não";
            }
            $spAccounting = $linha['spAccounting'];
            if($spAccounting == 1) {
                $spAccounting = "Sim";
            } else {
                $spAccounting = "Não";
            }
            $spDeveloper = $linha['spDeveloper'];
            if($spDeveloper == 1) {
                $spDeveloper = "Sim";
            } else {
                $spDeveloper = "Não";
            }
            $spDesigner = $linha['spDesigner'];
            if($spDesigner == 1) {
                $spDesigner = "Sim";
            } else {
                $spDesigner = "Não";
            }
            $spFinancial = $linha['spFinancial'];
            if($spFinancial == 1) {
                $spFinancial = "Sim";
            } else {
                $spFinancial = "Não";
            }
            $spManagement = $linha['spManagement'];
            if($spManagement == 1) {
                $spManagement = "Sim";
            } else {
                $spManagement = "Não";
            }
            $spLegal = $linha['spLegal'];
            if($spLegal == 1) {
                $spLegal = "Sim";
            } else {
                $spLegal = "Não";
            }
            $spMarketing = $linha['spMarketing'];
            if($spMarketing == 1) {
                $spMarketing = "Sim";
            } else {
                $spMarketing = "Não";
            }
            $spOtherChecked = $linha['spOtherChecked'];
            if($spOtherChecked == 1) {
                $spOtherChecked = "Sim";
            } else {
                $spOtherChecked = "Não";
            }

            $spOther = $linha['spOther'];
            
            $stage = $linha['stage'];
            $problem = $linha['problem'];
            $solution = $linha['solution'];
            $differential = $linha['differential'];

            $getEmailUser=$pdo->prepare("SELECT email FROM users WHERE id=:id");
            $getEmailUser->bindValue(":id", $iduser);
            $getEmailUser->execute();

            while ($linha=$getEmailUser->fetch(PDO::FETCH_ASSOC)) {
                $emailUser = $linha['email'];
            }

            $return[] = array(
                'idStartup' => $idStartup,
                'emailUser' => $emailUser,
                'nameStartup' => $nameStartup,
                'nameResponsable' => $nameResponsable,
                'description' => $description,
                'investment' => $investment,
                'bpComercial' => $bpComercial,
                'bpAccounting' => $bpAccounting,
                'bpDeveloper' => $bpDeveloper,
                'bpDesigner' => $bpDesigner,
                'bpFinancial' => $bpFinancial,
                'bpLegal' => $bpLegal,
                'bpMarketing' => $bpMarketing,
                'bpManagement' => $bpManagement,
                'bpOtherChecked' => $bpOtherChecked,
                'bpOther' => $bpOther,

                'spComercial' => $spComercial,
                'spAccounting' => $spAccounting,
                'spDeveloper' => $spDeveloper,
                'spDesigner' => $spDesigner,
                'spFinancial' => $spFinancial,
                'spLegal' => $spLegal,
                'spMarketing' => $spMarketing,
                'spManagement' => $spManagement,
                'spOtherChecked' => $spOtherChecked,
                'spOther' => $spOther,
                'stage' => $stage,
                'problem' => $problem,
                'solution' => $solution,
                'differential' => $differential
            );
        }

            echo json_encode($return);
        break;
    
    default:
        # code...
        break;
}
?>