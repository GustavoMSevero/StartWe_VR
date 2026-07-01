<?php

function conectar(){
	
	try {
		$opcoes = array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION);
		$pdo = new PDO("mysql:host=localhost;dbname=startwe_vr;", "root", "root", $opcoes);
	} catch (Exception $e) {
		echo $e->getMessage();
	}

	return $pdo;

}

?>