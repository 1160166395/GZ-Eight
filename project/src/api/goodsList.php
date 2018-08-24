<?php
    require("connect.php");
    // echo "55555";	
    $text = isset($_GET['text'])?$_GET['text']:'';
    $id = isset($_GET['id'])?$_GET['id']:'';
    //通过all判断是否是首页加载
    if($text){
        $sql="SELECT * FROM `product` WHERE 1";
        $result = $conn -> query($sql);
        $row = $result -> fetch_all(MYSQLI_ASSOC);
        echo json_encode($row);
    }
    if($id){
        $sql="SELECT `id`, `img` FROM `product` WHERE id LIKE '$id'";
        $result = $conn -> query($sql);
        $row = $result -> fetch_all(MYSQLI_ASSOC);
        echo json_encode($row);
    }
?>