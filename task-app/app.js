$(function(){
	function fetch_task(){
		$.ajax({
		url:"task-list.php",
		type:"GET",
		success:function(response){
			///console.log(response);
			let tarea= JSON.parse(response);
			//alert(tarea[0]['name']);
			let html_lista="";  
			tarea.forEach(dato=>{
				html_lista+=`<tr data-id=${dato.id}>
								<td>
									${dato.id}
								</td>
								<td>
								<a href="#"  class="btn_mod">${dato.name}</a>
									
								</td>
								<td>
									${dato.descripcion}
								</td>
								<td>
									<button type="button" class="btn btn-danger taskDelet">Borrar</button>
								</td>
							  </tr>`;
			});	
			$('#tasks').html(html_lista);	

			}
		});	
	}
	
	


	$('#task-form').submit(function(e){
		e.preventDefault();
		const postdata={
			name:$('#name').val(),
			description:$('#descripcion').val()
		};
		$.post('task-add.php',postdata,function(response){
			console.log(response);
			$('#task-form').trigger('reset');
			fetch_task();
		})
		

	});
	console.log('hola jq ok');
	$('#search').keyup(function(){
		let search=$(this).val();
		//alert(search);
		//console.log(search);
		//es un objeto 
		$.ajax({
			//donde
			url:'task-search.php',
			//tipo peticion envia o recibe
			type:'POST',
			data:{search:search},
			//si pasa lago bueno
			success:function(response){
				let tarea = JSON.parse(response);
				let template="";
				console.log(tarea);
				tarea.forEach(dato=>{
					template+=
					`<li>
					${dato.name}
					</li> `;
					console.log(dato);
				});	
				$('#container').html(template);
				//console.log(tarea);
			}

		});
	});
	fetch_task();
	$(document).on('click','.taskDelet',function(){
		if(confirm("vamos a borrar?")){
			//console.log($(this));
			let elemento=$(this)[0].parentElement.parentElement;
			let id=$(elemento).attr('data-id');
		    console.log(id);

		    $.post('task-delet.php',{id},function(response){
		    	fetch_task();
		    });
		}
		

	});
	$(document).on('click','.btn_mod',function(){
		let id = $(this)[0].parentElement.parentElement;
		let element= id;
		id=$(element).attr('data-id');
		console.log(id);
		
		$.post('task-single.php',{id},function(response){
			console.log(response);
			const dato = JSON.parse(response);
			console.log(dato);
			$('#name').val(dato.name);
			$('#descripcion').val(dato.descripcion);
		});


	});

});