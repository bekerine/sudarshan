<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact us - ncertdudes</title>
    <link rel="stylesheet" href="css/contact-us.css">
    <link rel="stylesheet" href="css/navbar.css">
    <style>
        iframe {
            width: 100%;
            height: 4rem;
            overflow: hidden;
        }
    </style>
</head>
<body>
  
  
<?php
include '_partials/navbar.php';


$errors = array("could not connect with server!", "Message has been sent and stored!", "Message sent but could not be stored in the server!", "Message could not be sent, but it has been stored!", "Message could not be sent or stored in the database!", "Message could not be sent!");

if (isset($_GET['contact_status'])) {
    $case = $_GET['contact_status'];
    if (in_array($case, $errors)) {
        echo '<div class="alert" style="padding: 15px; background-color: #e7b0ac; color: white; font-size: 18px; text-align: center;">
            <span style="margin-left: 15px; color: white; font-weight: bold; float: right; font-size: 22px; line-height: 20px; cursor: pointer; transition: 0.3s;" onclick="closeAlert()">&times;</span> 
            ' . $case . '</div>';
    } else {
        header("location: contact-us.php"); 
        exit(); 
    }
}
?>


    <div class="background">
        <div class="container">
          <div class="screen">
            <div class="screen-header">
              <div class="screen-header-left">
                <div class="screen-header-button close"></div>
                <div class="screen-header-button maximize"></div>
                <div class="screen-header-button minimize"></div>
              </div>
              <div class="screen-header-right">
                <div class="screen-header-ellipsis"></div>
                <div class="screen-header-ellipsis"></div>
                <div class="screen-header-ellipsis"></div>
              </div>
            </div>
            <div class="screen-body">
              <div class="screen-body-item left">
                <div class="app-title">
                  <span>CONTACT</span>
                  <span>US</span>
                </div>
                <div class="app-contact">CONTACT INFO : +91 </div>
              </div>
              <div class="screen-body-item">
                <form method="post" action="_controllers/processContactmsg.php">
                <div class="app-form">
                  <div class="app-form-group">
                    <input class="app-form-control" placeholder="NAME" name="name">
                  </div>
                  <div class="app-form-group">
                    <input class="app-form-control" placeholder="EMAIL" name="email">
                  </div>
                  <div class="app-form-group">
                    <input class="app-form-control" placeholder="CONTACT NO" name="contact_no">
                  </div>
                  <div class="app-form-group message">
                    <input class="app-form-control" placeholder="MESSAGE" name="contactmsg">
                  </div>
                  <div class="app-form-group buttons">
                    <!-- <button class="app-form-button">CANCEL</button> -->
                    <button class="app-form-button" type="submit">SEND</button>
                  </div>
                </div>
              </form>
              </div>
            </div>
          </div>
          <div class="credits">
            <!-- <a class="credits-link" href="https://dribbble.com/shots/2666271-Contact" target="_blank">
        <svg class="dribbble" viewBox="0 0 200 200">
          <g stroke="#ffffff" fill="none">
            <circle cx="100" cy="100" r="90" stroke-width="20"></circle>
            <path d="M62.737004,13.7923523 C105.08055,51.0454853 135.018754,126.906957 141.768278,182.963345" stroke-width="20"></path>
            <path d="M10.3787186,87.7261455 C41.7092324,90.9577894 125.850356,86.5317271 163.474536,38.7920951" stroke-width="20"></path>
            <path d="M41.3611549,163.928627 C62.9207607,117.659048 137.020642,86.7137169 189.041451,107.858103" stroke-width="20"></path>
          </g>
        </svg> -->
            <!-- </a> -->
          </div>
        </div>
      </div>

<iframe src="iframe/footer.html" frameborder="0"></iframe>
<script>
  function closeAlert() {
    var alert = document.querySelector(".alert");
    alert.style.opacity = "0"; 
    setTimeout(function() {
      alert.style.display = "none"; 
    }, 1000); 
  }
  
  
  setTimeout(function() {
    closeAlert();
  }, 3000);
  </script>

</body>
</html>