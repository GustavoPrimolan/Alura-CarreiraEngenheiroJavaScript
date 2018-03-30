class NegociacoesView extends View{
	
	
	constructor(elemento){
		//PASSA ELEMENTO PARA A CLASSE PAI
		super(elemento);
	}
	

	//RETORNA UMA TEMPLATE STRING
	//UTILIZA UM MAP COM AS NEGOCIACOES FEITAS
	//FAZ UM FOR EACH UTILIZANDO O MÉTODO map E PASSANDO n
	//COMO PARâMETRO, QUE INDICA QUE É CADA OBJETO DENTRO DA LISTA DE OBJETOS
	//COM ISSO, SE CRIA MAIS UM TEMPLATE STRING COM OS ATRIBUTOS
	//FEIOT COM ARROW FUNCTION
	//COM O join('') IRÁ CONCATENAR TODAS AS STRINGS COM ''
	//FAZENDO COM QUE O MÉTODO MAP RETORNE UMA STRING COMPLETA
	//QUANDO UMA ARROW FUNCTION TEM APENAS UM PARÂMETRO NÃO É NECESSÁRIO OS PARÊNTESIS
	//E QUANDO A ARROW FUNCTION SÓ TEM APENAS UMA LINHA, NÃO É NECESSÁRIO O return E AS chaves
	template(model){
		return `
		<table class="table table-hover table-bordered">
	        <thead>
	            <tr>
	                <th>DATA</th>
	                <th>QUANTIDADE</th>
	                <th>VALOR</th>
	                <th>VOLUME</th>
	            </tr>
	        </thead>
	        
	        <tbody>
	        	${model.negociacoes.map(n => `

	    			<tr>
	    				<td>${DateHelper.dataParaTexto(n.data)}</td>
	    				<td>${n.quantidade}</td>
	    				<td>${n.valor}</td>
	    				<td>${n.volume}</td>
	    			</tr>

	        	`).join('')}
	        </tbody>
        
	        <tfoot>
	        	<td colspan="3"></td>
	        	<td>
	        		${model.negociacoes.reduce((total, n) => total + n.volume, 0.0)}
	        	</td>
	        </tfoot>
        </table>
		`;
		//NO CÓDIGO ACIMA A FUNÇÃO REDUCE PROCESSA UM ARRAY E TRÁS APENAS UM RESULTADO
		//O PRIMEIRO PARÂMETRO SERÁ UMA VARÍAVEL QUE TERA UM VALOR E O n SERÁ CADA VALOR DO ARRAY
		//O SEGUNDO PARÂMETRO DE reduce SERÁ A INICIALIZAÇÃO DO total

		//O CÓDIGO COMENTADO ABAIXO UMA FORMA DE TRAZER A SOMA DO VOLUME, FOI POR MEIO DE UMA INVOCAÇÃO DE FUNÇÃO IMEDIATA 
		//OU IMMEDIATELY-INVOKED FUNCTION EXPRESSION (IIFE)
		/*
		<td>
	        		${
	        			(function(){
		        			let total = 0;
		        			model.negociacoes.forEach(n => total += n.volume);
		        			return total;
	        			})()
	        		}
	        	</td>
		*/
	}

	//O innerHTML É UMA CARACTERÍSTICA DO JAVASCRIPT QUE EXISTE A MUITO TEMPO
	//SE O innerHTML RECEBER UMA STRING ELE CONVERTE A STRING EM ELEMENTOS HTML, ELEMENTOS DO DOM
	//E COMO O ATRIBUTO elemento É O ID #negociacoesView ELE IRÁ ADICIONAR AO ELEMENTO DO DOM O TEMPLATE
	/*REMOVIDO POIS SERÁ HERDADO DA CLASSE View
	update(model) {
		this._elemento.innerHTML = this._template(model);
	}
	*/
}