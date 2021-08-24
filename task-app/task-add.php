<?php
	include('database.php');
	if(isset($_POST['name'])){
		$name=$_POST['name'];
		$descripcion=$_POST['description'];
		$query="INSERT INTO `tareas`( `nombre`, `descripcion`) VALUES ('$name','$descripcion')";
		$result=mysqli_query($connection,$query);
		if(!$result){
			die('error query');
		}
		echo "Se inserto Bien";

	}
?>