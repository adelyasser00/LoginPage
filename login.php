<?php
session_start();
$conn=mysqli_connect("localhost","root","");

mysqli_select_db($conn,"registration");

$email = $_POST['email'];
$password = md5($_POST['password']);

$s = "select * from user where email = '$email'";
$result = mysqli_query($conn, $s);
$row = mysqli_fetch_assoc($result);
if($row){
    if ($row['password'] == $password) {
        $name = $row['name'];
        echo "welcome $name";
        exit();
    }
    else
    {
        echo "invalid password";
        exit();
        // echo "Email or password is incorrect";
        // exit();
    }
}
else{
    echo "Email does not exist";
    exit();
}
// $condition =   mysqli_num_rows($result);

?>