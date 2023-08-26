<?php
if ($_SERVER['REQUEST_METHOD'] == 'GET' && realpath(__FILE__) == realpath($_SERVER['SCRIPT_FILENAME'])) {
    header('Location: ../index.php');
    exit; 
}

?>
<?php

$host = "localhost";
$user = "root";
$pass = "root123";
$database = "ncertdudes";

$connection = mysqli_connect($host, $user, $pass, $database);
if($connection -> connect_error){
    header("Location: ../index.php");
}

?>