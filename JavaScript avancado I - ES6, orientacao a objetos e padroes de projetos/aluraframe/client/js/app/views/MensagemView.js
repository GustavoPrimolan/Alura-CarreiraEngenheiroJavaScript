class MensagemView extends View{
	
	constructor(elemento){
		//PASSA O ELEMENTO PARA CLASSE PAI
		super(elemento);
	}

	template(model){
		//EM JAVASCRIPT UMA STRING EM BRANCO SERÁ FALSA
		//POR ISSO FOI UTILIZADO UM OPERADOR TERNÁRIO PARA QUE O SEJA CARREGADO ALGO VAZIO
		//SEM A CLASSE DO BOOTSTRAP
		return model.texto?`<p class="alert alert-info">${model.texto}</p>`:`<p></p>`;
	}

	
}