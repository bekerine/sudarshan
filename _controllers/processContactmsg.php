<?php
require_once('../_middlewares/RoutingMiddleware.php');
RoutingMiddleware::blockFileAccess($blockedPaths);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require '../vendor/autoload.php';

$mail = new PHPMailer(true);


if ($_SERVER['REQUEST_METHOD'] == "POST" &&
    isset($_POST['name']) &&
    isset($_POST['email']) &&
    isset($_POST['contact_no']) &&
    isset($_POST['contactmsg'])) {

    $name = $_POST['name'];
    $email = $_POST['email'];
    $contactmsg = $_POST['contactmsg'];

    $contact_no = password_hash($_POST['contact_no'], PASSWORD_DEFAULT);

    $contactmsg_id = uniqid() . bin2hex(random_bytes(8));

    $mysqli = new mysqli("localhost", "root", "root123", "ncertdudes");

    if ($mysqli->connect_error) {
        $contact_status = "could not connect with server!";
        header("Location: ../contact-us.php?contact_status={$contact_status}");
        die;
    }

    $stmt = $mysqli->prepare("INSERT INTO contact_messages (name, email, contactmsg_id, contact_no, message) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("sssss", $name, $email, $contactmsg_id, $contact_no, $contactmsg);

    // Create a PHPMailer instance

    try {
        // Enable debugging (remove in production)
        $mail->SMTPDebug = SMTP::DEBUG_SERVER;
        
        // SMTP settings
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'help.ncertdudes@gmail.com';
        $mail->Password   = 'zohcyismacfnrpbu';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mail->Port       = 465;

        // Set sender and recipient
        $mail->setFrom('help.ncertdudes@gmail.com', 'ncertdudes');
        $mail->addAddress('help.ncertdudes@gmail.com');
        $mail->addReplyTo('help.ncertdudes@gmail.com');
        $mail->addCC($email);

        // Email content
        $mail->isHTML(true);
        $mail->Subject = "Message - ncertdudes by {$name}";
        $mail->Body = "Message: {$contactmsg}\r\n | name: {$name}\r\n | Contact: {$_POST['contact_no']}\r\n | Email: {$email}";

        $emailSent = $mail->send();
        $databaseInsert = $stmt->execute();
        if ($emailSent && $databaseInsert) {
            // Both email sent and stored in the database
            $contact_status = "Message has been sent and stored!";
        } elseif ($emailSent) {
            // Email sent but not stored in the database
            $contact_status = "Message sent but could not be stored in the server!";
        } elseif ($databaseInsert) {
            // Email not sent but stored in the database
            $contact_status = "Message could not be sent, but it has been stored!";
        } else {
            // Neither email sent nor stored in the database
            $contact_status = "Message could not be sent or stored in the database!";
        }

        // Close the database connection
        $stmt->close();
        $mysqli->close();
        
        // Redirect with a success or error message
        header("Location: ../contact-us.php?contact_status={$contact_status}");
        die;
    } catch (Exception $e) {
        $contact_status = "Message could not be sent!";
        header("Location: ../contact-us.php?contact_status={$contact_status}");
        die;
    }
} else {
    header("location: ../contact-us.php");
}
?>
