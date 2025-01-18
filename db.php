<?php

$servername="localhost";
$username="root";
$password="Precious#40";
$dbname="VirtualMentor";

//Create connection
$conn=new mysqli($servername,$username,$password,$dbname);

//Check connectionm
if($conn->connect_error){
    die("Connection failed:" . $conn->connect_error);
}