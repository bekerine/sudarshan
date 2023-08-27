<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="css/register.css">
<link rel="stylesheet" href="css/navbar.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">


</head>
<body>

<?php
include '_partials/navbar.php';

?>
	<div class="main">  	
		<input type="checkbox" id="chk" aria-hidden="true">

			<div class="signup" method="post" action="../_controllers/processSignup.php">
				<form class="signup" method="post" action="_controllers/processSignup.php">
					<label for="chk" aria-hidden="true">Sign up</label>
					<input type="text" name="username" placeholder="User name" required="">
					<input type="text" name="name" placeholder="name" required="">
					<input type="email" name="email" placeholder="Email" required="">
					<input type="password" name="pswd" placeholder="Password" required="">
					<input type="password" name="cpswd" placeholder="Confirm Password" required="">
					<input type="checkbox" name="agree" class="checkbox" value="yes" required> <p>by pressing this box you agree to all <a href="">privacy-policies</a></p>
					<button>Sign up</button>
				</form>
			</div>
<br><br><br>
			<div class="login">
				<form>
					<label for="chk" aria-hidden="true">Login</label>
					<input type="email" name="email" placeholder="Email" required="">
					<input type="password" name="pswd" placeholder="Password" required="">
					<button>Login</button>
				</form>
			</div>
	</div>
	
</body>
</html>
