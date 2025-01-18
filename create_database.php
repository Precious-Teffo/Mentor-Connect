
<?php
require_once 'db.php';

$query="CREATE TABLE users(id INT PRIMARY KEY AUTO_INCREMENT,"
        . "name VARCHAR(255),Paswword VARCHAR(255),email VARCHAR(255),role ENUM('Mentor','Mentee')";

if(!$conn->query($query)){
    echo "Error creating users table:".$conn->error;   
}

$query="CREATE TABLE mentors(id INT PRIMARY KEY AUTO_INCREMENT,"
        . "expertise VARCHAR(255),user_id INT,bio TEXT";

if(!$conn->query($query)){
    echo "Error creating users table:".$conn->error;    
}


$query="CREATE TABLE mentees(id INT PRIMARY KEY AUTO_INCREMENT,"
        . "expertise VARCHAR(255),user_id INT,bio TEXT";

if(!$conn->query($query)){
    echo "Error creating users table:".$conn->error;    
}
