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
    $name=$_POST["name"];
    $email=$_POST["Email"];
    $password=$_POST["password"];
    $role=$_POST["role"];
    
    //Vailidae the form data
    if(empty($name) || empty($email) || empty($password) || empty($role)){
        echo "Please fill out all fields.";
        exit;
    }
    
    //Hash the password
    $password_hash=password_hash($password,PASSWORD_DEFAULT);
    
    //Insert the user into the database
    $query="INSERT INTO users(name,email,password,role) VALUE ('$name','$email','$password_hash','$role')";
    $result=mysqli_query($conn,$query);
    
    //Check if the query was successful
    if($result){
       if($role=='Mentor'){
           header("Location:mentor-signup.html");
           exit;
       }else{
           header("Location:mentee-signup.html");
           exit;
       }
  }else{
      echo "Registration failed.Please try again.";
  }
}


