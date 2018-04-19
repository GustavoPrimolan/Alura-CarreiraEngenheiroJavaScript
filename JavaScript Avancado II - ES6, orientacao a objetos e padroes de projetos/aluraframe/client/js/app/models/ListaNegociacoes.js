class ListaNegociacoes {
    
    //ARMADILHA É UMA FUNÇÃO QUE SERÁ PASSADA
    //PRIMEIRO PARÂMETRO É O this DO NegociacaoController
    //SOLUÇÃO PASSANDO O CONTEXTO NO CONTROLLER
    //constructor(contexto, armadilha) {
    
    //SOLUÇÃO SEM PASSAR O CONTEXTO
    //APENAS NECESSÁRIO UTILIZAR A ARROW FUNCTION NA HORA DA CHAMADA
    constructor(armadilha) {
        this._negociacoes = [];
        //this._armadilha = armadilha;
        //this._contexto = contexto;
    }
    
    adiciona(negociacao) {
        
        this._negociacoes.push(negociacao);
        //QUANDO É ADICIONADO É ENVIADO A PRÓPRIA LISTA PARA QUE SEJA ATUALIZADO ATRAVÉS
        //DA FUNÇÃO
        //this._armadilha(this);
    	//CHAMANDO O MÉTODO ESTÁTICO DA CLASSE Reflect
    	//PRIMEIRO PARÂMETRO É A FUNÇÃO QUE DEVERA SER EXECUTADA, LOGO EM SEGUIDA COM O SEGUNDO PARÂMETRO
    	//QUE É O CONTEXTO DO QUE A VARIÁVEL SERÁ EXECUTADA E O TERCEIRO É QUAL VARÍAVEL SERÁ ATUALIZADA
    	//FUNÇÃO QUE QUER EXECUTAR, O CONTEXTO E OS PARÂMETROS QUE SERÃO PASSADOS PARA A FUNÇÃO
    	//TEM QUE SER PASSADO DENTRO DE UM ARRAY
    	//Reflect.apply(this._armadilha, this._contexto, [this]);

    	//this._armadilha(this);
    }
    
    get negociacoes() {
        
        return [].concat(this._negociacoes);
    }

    esvazia() {
    	this._negociacoes = [];
    	
    	//this._armadilha(this);
    }
}