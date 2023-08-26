<?php
require_once('../_middlewares/RoutingMiddleware.php');
RoutingMiddleware::blockFileAccess($blockedPaths);



?>

<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Collect form data
    $name = $_POST['name'];
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['pswd'];
    $confirmPassword = $_POST['cpswd'];
    $user_id = uniqid();
    include "../_partials/connection.php";

   
    
} else {
    header("Location: ../index.php");
}
?>

