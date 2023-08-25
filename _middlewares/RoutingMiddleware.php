<?php
if ($_SERVER['REQUEST_METHOD'] == 'GET' && realpath(__FILE__) == realpath("RoutingMiddleware.php")) {
    header('Location: ../index.html');
    exit; 
}
class RoutingMiddleware {
    public static function blockDirectoryListing() {
        $currentDir = realpath(dirname(__FILE__));

        if (is_dir($currentDir)) {
            header("Location: ../index.html");
            exit; 
        }
    }

    public static function blockFileAccess() {
        if ($_SERVER['REQUEST_METHOD'] == 'GET' && realpath(__FILE__) == realpath($_SERVER['SCRIPT_FILENAME'])) {
            header('Location: ../index.html');
            exit;
        }
    }
}


?>