<?php
session_start();
$conn=mysqli_connect("localhost","root","");

mysqli_select_db($conn,"registration");

$name = $_POST['name'];
$email = $_POST['email'];
$password = md5($_POST['password']);

$s = "select * from user where email = '$email'";
$result = mysqli_query($conn, $s);
$condition =   mysqli_num_rows($result);
if ($condition == 1)
{
    $alert = "Email already exists";
    echo $alert;
    exit();
}
else
{
    $reg = "insert into user(name, email, password) values ('$name', '$email', '$password')";
    mysqli_query($conn, $reg);
    echo "Signedup successfully, please login $name";
    exit();
}
?>