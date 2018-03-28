class NegociacoesView {
	
	constructor(elemento){
		this._elemento = elemento;
	}


	//RETORNA UMA TEMPLATE STRING
	_template(){
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
	        </tbody>
        
	        <tfoot>
	        </tfoot>
        </table>
		`;
	}

	//O innerHTML É UMA CARACTERÍSTICA DO JAVASCRIPT QUE EXISTE A MUITO TEMPO
	//SE O innerHTML RECEBER UMA STRING ELE CONVERTE A STRING EM ELEMENTOS HTML, ELEMENTOS DO DOM
	//E COMO O ATRIBUTO elemento É O ID #negociacoesView ELE IRÁ ADICIONAR AO ELEMENTO DO DOM O TEMPLATE
	update() {
		this._elemento.innerHTML = this._template();
	}

}