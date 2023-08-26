<?php
require_once('../_middlewares/RoutingMiddleware.php');
RoutingMiddleware::blockFileAccess($blockedPaths);



?>

<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require '../vendor/autoload.php';

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);


if ($_SERVER['REQUEST_METHOD'] == "POST" &&
isset($_POST['name']) &&
isset($_POST['email']) &&
isset($_POST['contact_no']) &&
isset($_POST['contactmsg'])) {

// Collect the POST variables
$name = $_POST['name'];
$email = $_POST['email'];
$contactmsg = $_POST['contactmsg'];

// Hash the contact_no (you can use a secure hash function, like bcrypt)
$contact_no = password_hash($_POST['contact_no'], PASSWORD_DEFAULT);

// Generate a UUID for contactmsg_id
$contactmsg_id = uniqid();

// Assuming you have a database connection established earlier
$mysqli = new mysqli("localhost", "root", "root123", "ncertdudes");

// Check for a successful database connection
if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
}

// Insert the data into the database with the generated UUID for contactmsg_id
$stmt = $mysqli->prepare("INSERT INTO contact_messages (name, email, contactmsg_id, contact_no, message) VALUES (?, ?, ?, ?, ?)");

if ($stmt) {
    $stmt->bind_param("sssss", $name, $email, $contactmsg_id, $contact_no, $contactmsg);
    
    if ($stmt->execute()) {
        header("Location: ../contact-us.html?case=message_sent");
    } else {
        header("location: ../contact-us.html");
    }
    
    $stmt->close();
} else {
    header("location: ../contact-us.html");
}



try {
    //Server settings
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = '';                     //SMTP username
    $mail->Password   = '';                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom('', 'Mailer');
    $mail->addAddress('', 'Joe User');     //Add a recipient
    $mail->addReplyTo('', 'Information');
 

    

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'Here is the subject';
    $mail->Body    = 'This is the HTML message body <b>in bold!</b>';
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
    header('Location: ../contact-us.html?case=Message has been sent');
} catch (Exception $e) {
    header('Location: ../contact-us.html?case=Message could not be sent. Mailer Error '.$mail.'->ErrorInfo');
   
}




// Close the database connection
$mysqli->close();
} else {
header("location: ../contact-us.html");
}


?>

