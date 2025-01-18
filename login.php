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
    $email=$_POST["Email"];
    $password=$_POST["password"];
    
$query="SELECT * FROM users WHERE emaail='$email'";
$result=mysqli_query($conn, $query);

if(mysqli_num_rows($result)>0){
    $user=mysqli_fetch_assoc($result);
    
    if(password_verify($password,$user["password"])){
       header("Location:dashboard.html");
       exit;
}else{
    echo "Invaild email or password";
}
}else{
    echo "Invalid email or password.";
}
}

