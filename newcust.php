<?php

if(!isset($_POST['name']) || !isset($_POST['email']) || !isset($_POST['city']) || !isset($_POST['pass'])){
	exit();
}

require './includes/mysql.php';

$emailchk = "SELECT `email` FROM `cred_customer` WHERE `email` = '" . $_POST['email'] . "'";
$res1 = mysqli_query($link, $emailchk);
if($res1->num_rows>0){
	echo "exists";
	exit();
}else{
	$query = "INSERT INTO `cred_customer` (`email`,`pass`,`name`,`location`) VALUES ('" . $_POST['email'] . "', '" . $_POST['pass'] . "', '" . $_POST['name'] . "' , '" . $_POST['city'] . "')";
	//echo $query;
	mysqli_query($link, $query);
	$query2 = "SELECT * FROM `cred_customer` WHERE `email` = '". $_POST['email'] . "'";
	$result = mysqli_query($link,$query2);
	if($result->num_rows>0)
	{
		$info = mysqli_fetch_array($result, MYSQLI_NUM);
		$jsonOP = json_encode($info);
		echo $jsonOP;
	}
}

?>