class Negociacao{

	constructor(data, quantidade, valor){
		//ATRIBUTOS QUE SÓ PODEM SER ALTERADOS PELA PRÓPRIA CLASSE É USADO O _
		//ISSO NÃO IMPEDE QUE MODIFIQUE O VALOR, MAS É UMA CONVENÇÃO DE PROJETO DESENVOLVER DESSA FORMA
		//PROGRAMAÇÃO DEFENSIVA PARA QUE NÃO SEJA CAPAZ DE FAZER UMA REFERÊNCIA COM OBJETO DATA
		this._data = new Date(data.getTime());
		this._quantidade = quantidade;
		this._valor = valor;

		//CONGELA O OBJETO PARA QUE NÃO SEJA CAPAZ DE ALTERAR ELE
		//ENTRETANTO AINDA É POSSÍVEL ACESSAR OS ATRIBUTOS SE ELES FOREM OBJETOS
		//COMO POR EXEMPLO A DATA, QUE EXISTE MÉTODOS PARA MANIPULA-LA
		//ESSE MÉTODOS NÃO SÃO CONGELADOS
		//O freeze() É UM MÉTODO DE SHALLOW(RASO) FREEZING QUE CONGELA APENAS A SUPERFÍCIE
		//, NÃO É DEEP FREEZING, CONGELANDO ATÉ OS MÉTODOS
		//ELE SÓ CONGELA OS ATRIBUTOS
		Object.freeze(this);

		//IMPRIME SE O OBJETO ESTÁ CONGELADO
		//console.log(Object.isFreeze(this));
	}

	//CONVENÇÃO PARA O PROGRAMADOR QUE AS PROPRIEDADES SÓ PODEM SER ACESSADAS PELO PRÓPRIO MÉTODO DA CLASSE
	/*
	getVolume(){
		return this._quantidade * this._valor;
	}
	
	getData() {
		return this._data;
	}

	getQuantidade(){
		return this._quantidade;
	}

	getValor() {
		return this._valor;
	}
	*/

	get volume(){
		return this._quantidade * this._valor;
	}
	
	get data() {
		//É UMA NOVA INSTANCIA DE DATE PEGANDO O VALOR DA DATA DA NEGOCIAÇÃO
		//COMO É OUTRO OBJETO VOCÊ SÓ ESTÁ ALTERANDO A CÓPIA E NÃO O ATRIBUTO INTERNO DA CLASSE
		//ISSO É CHAMADA DE PROGRAMAÇÃO DEFENSIVA
		//QUANDO PEDE A DATA SÓ ENVIA UMA CÓPIA		
		return new Date(this._data.getTime());
	}

	get quantidade(){
		return this._quantidade;
	}

	get valor() {
		return this._valor;
	}

	/*
	FORMA DE ACESSO
	console.log(negociacao.valor);
	console.log(negociacao.quantidade)
	*/

}