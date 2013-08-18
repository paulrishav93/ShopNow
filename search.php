<?php

if(!isset($_GET['city'])){
	exit();
}

if($_GET['itemName'] == '1'){
	$itemName = '';
}else{
	$itemName = $_GET['itemName'];
}

if($_GET['shopName'] == '1'){
	$shopName = '';
}else{
	$shopName = $_GET['shopName'];
}
$city = $_GET['city'];


require './includes/mysql.php';

$query = "SELECT `email`, `shop_name` , `status` FROM `cred_owner` WHERE `city` LIKE '%" .$city. "%' AND `shop_name` LIKE '%" .$shopName. "%'";
$result = mysqli_query($link,$query);
$resarray = [];
if($result->num_rows>0){
	while($row = mysqli_fetch_array($result)){
	$array1 = array('email' => $row['email'] ,'shop_name' => $row['shop_name'], 'status' => $row['status'] );
	array_push($resarray, $array1);
	}
	$jsonres = json_encode($resarray);
	echo $jsonres;	
}else{
	echo "nores";
}

//echo $resarray[0]['shop_name'];


?>