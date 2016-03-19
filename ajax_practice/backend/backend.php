<?php
	$servername = "localhost";
	$username = "root";
	$password = "";

	try 
	{
	    $conn = new PDO("mysql:host=$servername;dbname=dudesBeers", $username, $password);
	    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	}
	catch(PDOException $e)
	{
		 echo "Connection failed: " . $e->getMessage();
	}
	
	if($_SERVER['REQUEST_METHOD'] == "POST"){
		$id = $_POST["id"];
		$quantity = $_POST["quantity"];
		$sql = "INSERT INTO dudesBeers values(".$id.", ".$quantity.")";
		$result = $conn->query($sql);
	}else if($_SERVER['REQUEST_METHOD'] == "GET"){

 		$query = $conn->prepare("SELECT * from dudesBeers");
     	$query->execute();
     	$data = $query->fetchAll(PDO::FETCH_ASSOC);

	}

?>