<?php

if(!isset($_POST['email']) || !isset($_POST['stat'])  ){
	exit();
}

require './includes/mysql.php';

$query = "UPDATE `cred_owner` SET `status`= " . intval($_POST['stat']) . " WHERE `email` = '" . $_POST['email'] . "'";

//echo $query;
mysqli_query($link, $query);
echo $_POST['stat'];

?>