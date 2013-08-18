<?php

require './includes/mysql.php';
if(!isset($_POST['email']) ||!isset($_POST['pass']) || !isset($_POST['type'])){
	exit();
}

$user = $_POST['email'];
$pass = $_POST['pass'];

$query = "SELECT * FROM `cred_" . $_POST['type'] . "` WHERE `email` = '". $user ."' AND `pass` = '" . $pass . "'";
$result = mysqli_query($link,$query);
if($result->num_rows>0)
{
	$info = mysqli_fetch_array($result, MYSQLI_NUM);
	$jsonOP = json_encode($info);
	echo $jsonOP;
}
else
	echo 'wrong';

?>