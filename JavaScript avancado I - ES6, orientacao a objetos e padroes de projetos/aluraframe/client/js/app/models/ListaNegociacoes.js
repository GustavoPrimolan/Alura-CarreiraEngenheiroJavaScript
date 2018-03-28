class ListaNegociacoes {

	constructor (){
		
		this._negociacoes = [];

	}

	adiciona(negociacao){
		this._negociacoes.push(negociacao);
	}


	//É NECESSÁRIO FAZER UMA PROGRAMAÇÃO DEFENSIVA PARA QUE O INDIVÍDUO NÃO CONSIGA ADICIONAR
	//UMA NOVA NEGOCIAÇÃO A NÃO SER PELO MÉTODO ADICIONA
	get negociacoes(){
		//FAZ UMA "CÓPIA" DE NEGOCIAÇÕES QUE É A LISTA ORIGINAL
		//CRIA UM ARRAY E CONCATENA COM A LISTA ORIGINAL
		return [].concat(this._negociacoes);
	}


}