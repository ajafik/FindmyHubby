<?php
header('Content-Type: application/json');

$data= $_GET['name'];

$servername = "localhost";
$username = "username";
$password = "Password";
$dbname = "db_name";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "INSERT INTO response (data)
VALUES (".$data .")";

echo ($sql);

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

?>