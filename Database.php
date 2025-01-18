<?php

$database =array("users");
foreach($database as $db){
    $query="CREATE DATABASE $db";
    if($conn->query($query)){
        echo "Database $db created successfully\n";
        
    }else{
        echo "Error creating database $db:".$conn->error;
    }
}

$database =array("mentors");
foreach($database as $db){
    $query="CREATE DATABASE $db";
    if($conn->query($query)){
        echo "Database $db created successfully\n";
        
    }else{
        echo "Error creating database $db:".$conn->error;
    }
}

$database =array("mentees");
foreach($database as $db){
    $query="CREATE DATABASE $db";
    if($conn->query($query)){
        echo "Database $db created successfully\n";
        
    }else{
        echo "Error creating database $db:".$conn->error;
    }
}