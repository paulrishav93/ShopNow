<?php

if(!isset($_POST['name']) || !isset($_POST['email']) || !isset($_POST['city']) || !isset($_POST['addl1']) || !isset($_POST['pass'])){
	exit();
}

require './includes/mysql.php';

$emailchk = "SELECT `email` FROM `cred_owner` WHERE `email` = '" . $_POST['email'] . "'";
$res1 = mysqli_query($link, $emailchk);
if($res1->num_rows>0){
	echo "exists";
	exit();
}else{
	$query = "INSERT INTO `cred_owner` (`email`,`pass`,`shop_name`,`addl1`,`city`) VALUES ('" . $_POST['email'] . "', '" . $_POST['pass'] . "', '" . $_POST['name'] . "' , '" . $_POST['addl1'] . "' , '" . $_POST['city'] . "')";
	//echo $query;
	mysqli_query($link, $query);

	$queryTab = "CREATE TABLE IF NOT EXISTS `" . $_POST['email'] . "` (
	  `item_name` varchar(500) NOT NULL,
	  `item_no` varchar(500) NOT NULL,
	  `price` float NOT NULL
	)";
	mysqli_query($link, $queryTab);	
	$query2 = "SELECT * FROM `cred_owner` WHERE `email` = '". $_POST['email'] . "'";
	$result = mysqli_query($link,$query2);
	if($result->num_rows>0)
	{
		$info = mysqli_fetch_array($result, MYSQLI_NUM);
		$jsonOP = json_encode($info);
		echo $jsonOP;
	}
}

?>