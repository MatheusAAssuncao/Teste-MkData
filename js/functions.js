
	function editarRegistro(key){
		$('.busca').hide();
		$('#edicao').show();
		// Variavel global para armazenar o indice no item que está sendo editado/excluido
		tempEditar = key;
		$('#cpf1').val(clientes[key][0]);
		$('#nome1').val(clientes[key][1]);
		$('#telefone1').val(clientes[key][2]);
		$('#celular1').val(clientes[key][3]);
		$('#telComercial1').val(clientes[key][4]);
	}
	
	function populaTabelaItens() {
		$('#cadastro').hide();
		$('#edicao').hide();
		$('.busca').show();
		$('#tabela > tbody tr').remove();
		for (var key in clientes) {
			if($('#busca').val() != ''){
				var chave = $('#busca').val();
				if(clientes[key][0].indexOf(chave) != -1 || clientes[key][1].indexOf(chave) != -1){
					$('#tabela > tbody:last-child').append("<tr><td style='width: 15%;'>"+clientes[key][0]+"</td>"+
					"<td style='width: 35%;'>"+clientes[key][1]+"</td>"+
					"<td style='width: 15%;'>"+clientes[key][2]+"</td>"+
					"<td style='width: 15%;'>"+clientes[key][3]+"</td>"+
					"<td style='width: 15%;'>"+clientes[key][4]+"</td>"+
					"<td style='width: 5%;'><button onclick=\"editarRegistro('"+key+"');\" class='btn btn-primary btn-xs'>Editar/Excluir</button></td></tr>");
				}
			}else{
				$('#tabela > tbody:last-child').append("<tr><td style='width: 15%;'>"+clientes[key][0]+"</td>"+
				"<td style='width: 35%;'>"+clientes[key][1]+"</td>"+
				"<td style='width: 15%;'>"+clientes[key][2]+"</td>"+
				"<td style='width: 15%;'>"+clientes[key][3]+"</td>"+
				"<td style='width: 15%;'>"+clientes[key][4]+"</td>"+
				"<td style='width: 5%;'><button onclick=\"editarRegistro('"+key+"');\" class='btn btn-primary btn-xs'>Editar/Excluir</button></td></tr>");
			}
		}
	}

	$(function(){
	clientes = new Array();
    $('#enviar').click(function(){
        var cpf = $('#cpf').val();
		var nome = $('#nome').val();
		var telefone = $('#telefone').val();
		var celular = $('#celular').val();
		var telComercial = $('#telComercial').val();
		if(cpf == '' || nome == ''){
			alert('Preencha o campo Nome e CPF');
			exit();
		}else{
			var cliente = [cpf, nome, telefone, celular, telComercial];
			clientes.push(cliente);
			alert('Cliente Cadastrado!');
			//for (var key in clientes) {
			//	alert(clientes[key][0]+' '+clientes[key][1]+' '+clientes[key][2]+' '+clientes[key][3]+' '+clientes[key][4]);
			//}
			limpar();
		}
	});   
	
	$('#salvar').click(function(){
		clientes[tempEditar] = [$('#cpf1').val(), $('#nome1').val(), $('#telefone1').val(), $('#celular1').val(), $('#telComercial1').val()];
		alert('Cliente salvo!');
		$('#edicao').hide();
		populaTabelaItens();

	});
	
	$('#excluir').click(function(){
		clientes.splice(tempEditar,1);
		alert('Cliente exclu\u00EDdo!');
		$('#edicao').hide();
		populaTabelaItens();

	});
	
	$('#voltar').click(function(){
		$('.busca').hide();
		$('#cadastro').show();
	});	
	});
	
	function limpar(){
		$('#cpf').val(""); $('#nome').val(""); $('#telefone').val(""); $('#celular').val(""); $('#telComercial').val("");
	
	}