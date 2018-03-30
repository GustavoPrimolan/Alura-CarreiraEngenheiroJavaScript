class Mensagem {


	//VALOR PADRÃO, SERVE PARA CASO NÃO SEJA PASSADO UM PARÂMETRO 
	//NO CONSTRUTOR
	constructor(texto=''){

		this._texto = texto;
	}

	get texto(){

		return this._texto;
	}

	set texto(texto){
		this._texto = texto;
	}
}

/*
	let mensagem = new Mensagem('Texto passando por parâmetro');
	//ASSIM SE UTILIZA O set
	mensage.texto = 'Olá';

*/