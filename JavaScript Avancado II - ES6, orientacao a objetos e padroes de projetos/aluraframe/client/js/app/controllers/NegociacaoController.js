class NegociacaoController {
    
    constructor() {
        
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        //PASSANDO UMA FUNÇÃO ANÔNIMA COMO PARâMETRO
        //this É O NEGOCIAÇÃO DO CONTROLLER
        //ESSA SERIA UMA SOLUÇÃO COM O CONTEXTO
        //this._listaNegociacoes = new ListaNegociacoes(this, function(model){
        //COMO A FUNÇÃO ESTÁ SENDO EXECUTADA NO CONTEXTO DE listaNegociacoes
        //NÃO IRÁ EXISTIR o negociacoesView
        //POR ISSO IRÁ GERAR UM ERRO DE UNDEFINED E TEM QUE SER O this DO NegociacoesController
        //COM A ARROW FUNCTION IRÁ FUNCIONAR SEM PRECISAR PASSAR O PARâMETRO DO CONTEXTO
        //POIS O ESCOPO DA ARROW FUNCTION É DINÂMICO, FAZENDO COM QUE O THIS SEJA EXECUTADO DA
        //CLASSE CHAMADORA
        
        //COMENTADO POIS A ARMADILHA FOI RETIRADA DA CLASSE
        //this._listaNegociacoes = new ListaNegociacoes(model => this._negociacoesView.update(model));
        
        this._negociacoesView = new NegociacoesView($('#negociacoesView'));
        this._negociacoesView.update(this._listaNegociacoes);
        
        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#mensagemView'));
        this._mensagemView.update(this._mensagem);
        
    }
    
    adiciona(event) {
        
        event.preventDefault();
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        //this._negociacoesView.update(this._listaNegociacoes);
        
        this._mensagem.texto = 'Negociação adicionada com sucesso';
        this._mensagemView.update(this._mensagem);
        
        this._limpaFormulario();   
    }
    
    apaga() {
        //TODO HORA QUE O MODELO É ALTERADO É NECESSÁRIO ATUALIZAR A MENSAGEM E A NEGOCIAÇÃO
        //O PROGRAMADOR IRÁ LEMBRAR TODO MUNDO DE FAZER ISSO?
        //POR CONTA DISSO, UMA BOA PRÁTICA É TODA VEZ QUE O PROGRAMADOR MUDAR O MODELO
        //A VIEW SER AUTOMATICAMENTE ATUALIZADO
        this._listaNegociacoes.esvazia();
        //this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem.texto = 'Negociações apagadas com sucesso';
        this._mensagemView.update(this._mensagem);
    }

    _criaNegociacao() {
        
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value);    
    }
    
    _limpaFormulario() {
     
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;
        this._inputData.focus();   
    }


}