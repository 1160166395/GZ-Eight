<?php
    // include 'connect.php';
    require('connect.php');
    
    $userId = isset($_POST['userid'])?$_POST['userid']:null;
    $password = isset($_POST['password'])?$_POST['password']:null;

    $select = "SELECT * FROM `user` WHERE username='$userId'";
    $res = $conn->query($select);
    $has = $res->fetch_all(MYSQLI_ASSOC);

    if($has){
        echo 0;
    }else{
        $int = "INSERT INTO `user`(`username`, `password`) VALUES ($userId,$password)";
        $conn->query($int);
        echo 1;
    }
    

    $conn -> close();

?>