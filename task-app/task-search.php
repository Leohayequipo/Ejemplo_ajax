<?php
	include('database.php');
	$buscar=$_POST['search'];
	if(!empty($buscar)){
		$query="SELECT * FROM `tareas` WHERE nombre LIKE '%$buscar%'";
		$result=mysqli_query($connection,$query);
		if(!$result){
			die('Query error'.mysqli_error($connection));
		}
	}
	$json=array();
	while ($row = mysqli_fetch_array($result)) {
		$json[]=array(
			'name'=>$row['nombre'],	
			'descripcion'=>$row['descripcion'],
			'id'=>$row['id']

		);
	};
	
	$json_string=json_encode($json);
	echo $json_string;
?>