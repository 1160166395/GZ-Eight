<?php
    require('connect.php');
   
    $id = isset($_GET['id'])?$_GET['id']:'';
    $sql = "SELECT * FROM `product` WHERE id='$id'";
    
    
    $result = $conn -> query($sql);
    $arr = $result -> fetch_all(MYSQLI_ASSOC);
    

    echo json_encode($arr,350);

    $result -> close();
    $conn -> close();




?>