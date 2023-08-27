<?php
// require_once('../_middlewares/RoutingMiddleware.php');
// RoutingMiddleware::blockFileAccess($blockedPaths);

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
        echo '<script>
        setTimeout(function() {
            window.location.href = "../contact-us.php?contact_status=' . $contact_status . '";
        }, 1200); // 2000 milliseconds (2 seconds) timeout
    </script>';
            die;
    }

    $stmt = $mysqli->prepare("INSERT INTO contact_messages (name, email, contactmsg_id, contact_no, message) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("sssss", $name, $email, $contactmsg_id, $contact_no, $contactmsg);
    echo '<html>
    <body>
        <div style="    background-color: black;
        z-index: 1000;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
    }">

        <img src="../images/loader.svg" width="50%">
    
    </div>
    </body>
    </html>';
    // Create a PHPMailer instance

    try {
        
        
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
        $mail->Body = '
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            /* Add your CSS styles here */
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                margin: 0;
                padding: 0;
            }
            .email-container {
                max-width: 600px;
                margin: 0 auto;
                background-color: #ffffff;
                border-radius: 5px;
                box-shadow: 0px 0px 5px #888888;
            }
            .header {
                background-color: #007BFF;
                color: #ffffff;
                padding: 20px;
                text-align: center;
            }
            .content {
                padding: 20px;
            }
            .message {
                font-size: 16px;
                line-height: 1.5;
            }
            .contact-info {
                font-size: 14px;
                margin-top: 20px;
            }
            .contact-info p {
                margin: 5px 0;
            }
        </style>
    </head>
    <body>
        <div class="email-container">
            <div class="header">
                <h1>Thank You for contacting us!</h1>
                <h4>Please wait for our reply!</h4>
            </div>
            <div class="content">
                <p class="message">Message: ' . $contactmsg . '</p>
                <p class="message">Name: ' . $name . '</p>
                <p class="message">Contact: ' . $_POST['contact_no'] . '</p>
                <p class="message">Email: ' . $email . '</p>
                <img src="cid:logo" alt="Company Logo">
                <div class="contact-info">
                    <p>Contact Information:</p>
                    <p>Phone: +1 (123) 456-7890</p>
                    <p>Email: info@example.com</p>
                </div>
            </div>
            <center><i>powered by <b>@craftii</b></i></center>
        </div>
    </body>
    </html>
';
    
        $mail->AddEmbeddedImage("../images/logo.jpg", 'logo');

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
        echo '<script>
        setTimeout(function() {
            window.location.href = "../contact-us.php?contact_status=' . $contact_status . '";
        }, 1200); // 2000 milliseconds (2 seconds) timeout
    </script>';
            die;
    } catch (Exception $e) {
        $contact_status = "Message could not be sent!";
        echo '<script>
        setTimeout(function() {
            window.location.href = "../contact-us.php?contact_status=' . $contact_status . '";
        }, 1200); // 2000 milliseconds (2 seconds) timeout
    </script>';
            die;
    }
} else {
    header("location: ../contact-us.php");
}
?>
