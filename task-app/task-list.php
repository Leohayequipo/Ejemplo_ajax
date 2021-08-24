<?php
    include('database.php');
	$query="SELECT * FROM `tareas` WHERE 1";
	$result=mysqli_query($connection,$query);

	
	if(!$result){
		die('error'.mysqli_error($connection));
	};
	$json=array();
	while($row= mysqli_fetch_array($result)){
		$json[]=array(
			'id'=>$row['id'],
			'name'=>$row['nombre'],
			'descripcion'=>$row['descripcion']
		);

	};
	$json_string=json_encode($json);
	echo $json_string;
?>