<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/dashboard-page.css">
    <link rel="stylesheet" href="css/navbar.css">
    <link rel="stylesheet" href="iframe/index.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <style>
        body {
            margin: 0;
            padding: 0;
        }

        iframe {
            width: 100%;
            height: 4rem;
            overflow: hidden;
        }

        main {
            margin: 2rem;
        }
    </style>
</head>

<body>

<?php
include '_partials/navbar.php';

?>
    <!-- topnav -->
    <div class="topnav">

        <!-- sidenav -->
        <div id="mySidenav" class="sidenav">
            <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
        </div>

        <span style="font-size:30px;cursor:pointer;margin-left:2rem;" onclick="openNav()">&#9776;</span>

        <button>hi</button>
        <hr>

    </div>

    <main>

        <div class="part1">

            <div class="box1">
                <br><br>
                <span>hi harsh</span>
            </div>

            <div class="box2">

            </div>

            <div class="box2">

            </div>
            
            <div class="box2">

            </div>

            <div class="box2">

            </div>

        </div>

    </main>

    <iframe src="iframe/footer.html" frameborder="0"></iframe>

    <button onclick="topFunction()" id="myBtn" title="Go to top">Top</button>

    <script src="iframe/index.js"></script>

    <script>
        function openNav() {
            document.getElementById("mySidenav").style.width = "250px";
        }

        function closeNav() {
            document.getElementById("mySidenav").style.width = "0";
        }
    </script>

</body>

</html>