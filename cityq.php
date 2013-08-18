<?php

if(!isset($_GET['q'])){
	exit();
}

$q = $_GET['q'];

require './includes/mysql.php';
$query = 'SELECT `city_name` FROM `cities` WHERE `city_name` LIKE "%' . $q .'%"';
$result = mysqli_query($link,$query);
if($result->num_rows>0){
	$cities = [];
	while($row = mysqli_fetch_array($result, MYSQL_NUM)){
		array_push($cities, $row[0]);
	}
	$jsonRes = json_encode($cities);
	echo $jsonRes;
}


?>