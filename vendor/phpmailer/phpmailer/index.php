<?php
$documentroot = $_SERVER['DOCUMENT_ROOT'];
require_once("{$documentroot}/_middlewares/RoutingMiddleware.php");
RoutingMiddleware::blockDirectoryListing();



?>