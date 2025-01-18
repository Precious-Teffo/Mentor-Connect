<?php
require_once 'db.php';
//Connect to the database
$conn =mysqli_connect("localhost","root","Precious#40","VirtualMentor");

//Check connection
if(!$conn){
    die("connection failed:" .mysqli_connect_error());
}

//Check if the form has been submitted
if($_SERVER["REQUEST_METHOD"]=="POST"){
    
    //Getthe form data
    $user_id=$_POST["user_id"];
    $bio=$_POST["bio"];
    $expertise=$_POST["expertise"];
  
    
    //Vailidae the form data
    if(empty($user_id) || empty($bio) || empty($expertise)){
        echo "Please fill out all fields.";
        exit;
    }
    
   
    //Insert the user into the database
    $query="INSERT INTO mentees(user_id,bio,expertise) VALUE ('$user_id','$bio','$expertise')";
    $result=mysqli_query($conn,$query);
    
    //Check if the query was successful
    if($result){
       header("Location:Login.html");
       exit;
  }else{
      echo "Registration failed.Please try again.";
  }
}

