var campos = [
	document.querySelector('#data'),
	document.querySelector('#quantidade'),
	document.querySelector('#valor')
];

console.log(campos);

//BUSCA APENAS UMA VEZ
var tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', function(event){
	//ANULA OS EVENTOS PADRÕES DO NAVEGADOR
	//COMO POR EXEMPLO DE QUANDO FOR ENVIADO UM SUBMIT NÃO RECARREGAR A PÁGINA
	event.preventDefault();
	var tr = document.createElement('tr');

	campos.forEach(function(campo){
		var td = document.createElement('td');
		//CONTEÚDO DA td E JOGA O VALOR DO CAMPO
		td.textContent = campo.value;
		//ACRESCENTA UM FILHO A TR
		tr.appendChild(td);
	});

	var tdVolume = document.createElement('td');
	tdVolume.textContent = campos[1].value * campos[2].value;

	tr.appendChild(tdVolume);

	tbody.appendChild(tr);

	campos[0].value = '';
	campos[1].value = 1;
	campos[2].value = 0;

	campos[0].focus();

});