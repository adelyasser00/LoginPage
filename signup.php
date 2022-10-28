<?php
$servername = "localhost";
$database = "registration";
$table = "user";
$username = "root";
$password = "";

$connection = mysqli_connect($servername, $username, $password, $database);
if (!$connection) {
    die("Connection failed: " . mysqli_connect_error());
}
else {
    $check = "SELECT * FROM $table WHERE email = '$_POST[email]'";
    if ($check == 0) {
        $sql = "INSERT INTO $table (email, name, password) VALUES ('$_POST[email]', '$_POST[name]', '$_POST[password]')";
        if (mysqli_query($connection, $sql)) {
            echo "New record created successfully";
        } else {
            echo "Error: " . $sql . "<br>" . mysqli_error($connection);
        }
    }
    else {
        echo "Email already exists. Please try again";
        header("Location: index.html");
        die();
    }
}