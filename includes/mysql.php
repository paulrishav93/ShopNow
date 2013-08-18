<?php

$link = mysqli_connect('localhost', 'root', 'advanced', 'ourapp');
if($link->connect_error)
{
	die('Connection error: '. $link->connect_errno);
	exit();
}
?>