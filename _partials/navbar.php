<?php
if ($_SERVER['REQUEST_METHOD'] == 'GET' && realpath(__FILE__) == realpath($_SERVER['SCRIPT_FILENAME'])) {
    header('Location: ../index.php');
    exit; 
}

?>

<div class="topnav">
  <a class="active" href="#home">Home</a>
  <div class="info">
  <a href="#home">Home</a>
  <a href="#about">About</a>
  <a href="#contact">Contact</a>
  <a href="#subject">Subject</a>
  </div>
  <div class="search-container">
    <form action="/action_page.php">
      <input type="text" placeholder="Search.." name="search">
      <button type="submit"><i class="fa fa-search"></i></button>
    </form>
  </div>

  <!-- <div class="dropdown">
      <button class="dropbtn"><section></section><section></section><section></section></button>
      <div class="dropdown-content">
      <a href="#">log in</a>
      <a href="#">Sign in</a>
      </div>
    </div> -->

<div class="profile">
    <a href="../register.php"><button>Login/Register</button></a>
  
    </div>
  
</div>