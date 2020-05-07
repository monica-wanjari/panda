<?php 
database connection
	$db=mysqli_connect('localhost:3000','root','','registrations');
	if($db){
	echo "connected";
	}
	else{
	echo"connection fail";
	}
//if the register button is clicked
	if(isset($_POST['registrations'])){
		 $name=$_POST['name'];
		 $phone=$_POST['phone'];
		 $issue=$_POST['issue'];
		 $return=$_POST['return'];
//ensure that form field are filled properly
		
//if there are no error,save user the database
		
			$sql="INSERT INTO user(name,phone,issue,return)
					VALUES('$name','$phone','$issue','$return')";
			mysqli_query($db,$sql);
			header('location:Card.js');
		}