<?php
	include('database.php');
	
	$id=$_POST['id'];
	//if(isset($id)){
	if(isset($id)){
		$query="SELECT * FROM `tareas` WHERE `id` =$id";
		$result_1=mysqli_query($connection,$query);
		if(!$result_1){
			die('error'.mysqli_error($connection));
		}
		$json=array();
		while($row = mysqli_fetch_array($result_1)){
			$json[]=array(
				'id'=>$row['id'],
				'name'=>$row['nombre'],
				'descripcion'=>$row['descripcion']
				);

		}	
		$string_json=json_encode($json[0]);
		echo $string_json;
	}
	
?>