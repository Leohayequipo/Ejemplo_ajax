<?php
	include('database.php');
	$id=$_POST['id'];
	if (isset($id)) {
		$query="DELETE FROM `tareas` WHERE `id`=$id";
		$result=mysqli_query($connection,$query);
		if(!$result){
			die('error en consulta'.mysqli_error($connection));

		}
		echo "se borro de 10";	
	}
	
	
?>