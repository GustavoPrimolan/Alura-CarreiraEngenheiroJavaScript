class NegociacaoController{

	//QUANTO O OBJETO FOR INSTANCIA VAI GUARDAR OS ELEMENTO DA CLASSE
	//ESTRATÉGIA COMO SE FOSSE UM CASH, E SERÁ UTILIZADA ATÉ O FINAL DO TREINAMENTO
	constructor() {

		//JOGA A VARIÁVEL DO QUERY SELECTOR NO $ (PARECIDO COM O QUE O JQUERY FAZ)
		//ENTRETANTO NÃO FUNCIONA PQ ELE PEGA O ESCOPO DO DOCUMENT
		//PARA MANTER A ASSOCIAÇÃO COM O DOCUMENT EXISTE O MÉTODO bind
		//ELE FAZ UM bind (associação) COM O document E O $
		let $ = document.querySelector.bind(document);
		this._inputData = $('#data');
		this._inputQuantidade = $('#quantidade');
		this._inputValor = $('#valor');
		this._listaNegociacoes = new ListaNegociacoes();
		this._negociacoesView = new NegociacoesView($('#negociacoesView'));
		this._negociacoesView.update();
	}

	adiciona(event){
		//CANCELA A SUBMISSAO DO FORMULÁRIO
		event.preventDefault();
		
		this._listaNegociacoes.adiciona(this._criaNegociacao());
		this._limpaFormulario();

		console.log(this._listaNegociacoes.negociacoes);
	}


	_criaNegociacao(){
		return new Negociacao(
			DateHelper.textoParaData(this._inputData.value),
			this._inputQuantidade.value,
			this._inputValor.value
		);
	}

	_limpaFormulario(){

		this._inputData.value = '';
		this._inputQuantidade.value = 1;
		this._inputValor.value = 0.0;

		//COLOCA FOCO NO ELEMENTO DO DOM DO INPUT DA DATA
		this._inputData.focus();

	}

}