<?php
$name=$_POST['name'];
//database connection
$conn = new mysqli('localhost','root','','test');
if($conn->connect_error){
    die('connection failed :',$conn->connect_error);
}else{
    $stmt = $conn->prepare("insert into raj(name) values(?)");
    $stmt->bind_param("s",$name);
    $stmt->execute();
    echo "registration successful...";
    $stmt->close();
    $conn->close();
}
?>