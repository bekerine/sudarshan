<?php
if ($_SERVER['REQUEST_METHOD'] == 'GET' && realpath(__FILE__) == realpath("RoutingMiddleware.php")) {
    header('Location: ../index.php');
    exit; 
}
$documentRoot = $_SERVER['DOCUMENT_ROOT'];
$blockedPaths = array(
    '_controllers/processLogin.php',
    '_controllers/processSignup.php',    
    '_controllers/processContactmsg.php',
);

class RoutingMiddleware {
    public static function blockDirectoryListing() {
        $currentDir = realpath(dirname(__FILE__));

        if (is_dir($currentDir)) {
            header("Location: ../index.php");
            exit; 
        }
    }

    public static function blockFileAccess($blockedPaths) {
        $scriptFilename = $_SERVER['SCRIPT_FILENAME'];

        foreach ($blockedPaths as $blockedPath) {
            $fullBlockedPath = $GLOBALS['documentRoot'] . '/' . $blockedPath;
            if ($_SERVER['REQUEST_METHOD'] == 'GET' && realpath($fullBlockedPath) === realpath($scriptFilename)) {
                header("Location: ../index.php");    
            }
        }
    
        return false;
    }
}


?>