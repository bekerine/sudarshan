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
        die("Connection failed: " . $mysqli->connect_error);
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
        $mail->Body = "<img src='cid:logo'><br>{$contactmsg}";

        // Add an embedded image
        $mail->addEmbeddedImage("../images/logo.jpg", "logo");

        // Send the email
        if ($mail->send()) {
            $case = "Message has been sent!";
        } else {
            $case = "Message could not be sent!";
        }

        // Execute the database insert
        if ($stmt->execute()) {
            $case = "Message has been sent!";
        } else {
            $case = "Message could not be sent!";
        }

        // Close the database connection
        $stmt->close();
        $mysqli->close();
        
        // Redirect with a success or error message
        header("Location: ../contact-us.php?case={$case}");
    } catch (Exception $e) {
        $case = "Message could not be sent: " . $mail->ErrorInfo;
        header("Location: ../contact-us.php?case={$case}");
    }
} else {
    header("location: ../contact-us.html");
}
?>
