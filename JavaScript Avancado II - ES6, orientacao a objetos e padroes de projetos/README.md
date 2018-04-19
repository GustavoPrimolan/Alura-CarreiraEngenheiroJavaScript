<h1>Se��o 01 - Como saber quando o modelo mudou?</h1>

<h2>Voc� lembrou de atualizar a view? Nem eu!</h2>

Nossa aplica��o j� funciona e totaliza o volume no fim da tabela. Mas ainda falta implementar uma regra de neg�cio no modelo: vamos adicionar a funcionalidade que nos permite esvaziar uma lista.

Atualmente, o arquivo ListaNegociacoes.js est� assim:
```html
class ListaNegociacoes {

    constructor() {

        this._negociacoes = [];
    }

    adiciona(negociacoes) {

        this._negociacoes.push(negociacao);
    }

    get negociacoes() {

        return [].concat(this._negociacoes);
    }
}
```
Adicionaremos o m�todo esvazia() abaixo da linha do return():
```html
esvazia()   {

    this._negociacoes = [];
}
```
O array de negocia��es receber� uma nova lista e com isso, apagar� todos os itens da anterior. Ao clicarmos no bot�o "Apagar" do formul�rio, queremos que as informa��es sejam apagadas da lista de negocia��es. Para isto, sabemos que quem atua no modelo � a controller mediante �s a��es do usu�rio. Em seguida, no arquivo NegociacaoController.js, adicionaremos o m�todo apaga():
```html
apaga() {

    this._listaNegociacoes.esvazia();
    this._negociacoesView.update(this._listaNegociacoes);

    this._mensagem.texto = 'Negocia��es apagadas com sucesso';
    this._mensagemView.update(this._mensagem);
}
```
O m�todo solicitar� o modelo _listaNegociacoes.esvazia(). Observe que adicionamos o update(). Quando atualizarmos a View, esta ser� recarregada automaticamente e a tabela ficar� limpa.

Temos que associar a p�gina a partir do evento de clique, e chamar o apaga(). Para isto, no index.html, adicionaremos o onclick() dentro da tag <button> de "Apagar":
```html
<div class="text-center">
        <button class="btn btn-primary text-center" type="button">
            Importar Negocia��es
        </button>
        <button onclick="negociacaoController.apaga()" class="btn btn-primary text-center" type="button">
            Apagar
        </button>
    </div>
```
Se recarregarmos a p�gina no navegador, nenhum problema ser� apontado no console e conseguiremos cadastrar uma negocia��o normalmente. Quando clicarmos em "Apagar", a tabela ficar� vazia. A View foi atualizada com os dados do modelo da lista de negocia��es atualizada e a mensagem foi exibida.

lista apagada

Sempre que atualizarmos o modelo, � poss�vel esquecer de chamar o modelo da View? Sim. N�s temos duas Views: MensagemView e NegociacoesView. � preciso atualizar o modelo nas duas e, depois, chamar o update(). Mas um sistema maior pode conter um n�mero muito superior de Views e corremos o risco de esquecer de adicionar o m�todo. Esta � uma grande responsabilidade para o desenvolvedor.

Ser� que existe alguma maneira de automatizarmos a atualiza��o da View? Vamos alterar a lista de negocia��es nos m�todos adiciona() e apaga(), quando criarmos a inst�ncia de negocia��es no constructor(). Tentaremos encontrar um solu��o para que a View seja atualizada automaticamente assim que o modelo for alterado.

<h2>E se atualizarmos a view quando o modelo for alterado?</h2>
N�s queremos alterar o modelo e chamar a atualiza��o da view automaticamente quando ela for recarregada. Para resolver a quest�o, imagine que somos ca�adores. N�s vamos colocar uma armadilha que ser� disparada quando algu�m pisar no c�digo do ListaNegociacoes.js.

Em qual dos m�todos seria melhor colocarmos a armadilha, considerando que o nosso objetivo � disparar a atualiza��o da View? A melhor resposta � nos m�todos adiciona() e esvazia() porque s�o elas que modificam as propriedades da View. Ao invocarmos o m�todo adiciona() simultaneamente chamaremos uma armadilha que atualizar� a View.

Em seguida, adicionaremos a armadilha como par�metro de constructor(), tamb�m vamos incluir uma propriedade chamada _armadilha.
```html
class ListaNegociacoes {

    constructor(armadilha) {

        this._negociacoes = [];
        this._armadilha = armadilha;
    }
//...
```
A armadilha � uma fun��o, que guardaremos no constructor() para cham�-la posteriormente - ou seja, quando chamarmos o adiciona() e esvazia().

Em NegociacaoController, vamos adicionar o function() dentro de new ListaNegociacao. Ap�s passarmos uma fun��o an�nima como par�metro, ela vai executar a seguinte linha de c�digo:

this._negociacoesView.update(this._listaNegociacoes);
O trecho do c�digo ficar� assim:
```html
class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes(function() {

            this._negociacoesView.update(this._listaNegociacoes);
        });
       //...
```
Fique tranquilo sobre o NegociacoesView ser declarado depois. O trecho acima s� ser� executado quando os m�todos adiciona() e esvazia() forem chamados.

Vamos manter o negociacoesView.update() mais abaixo, para que seja feita a primeira renderiza��o da lista. Por�m, vamos apagar a mesma linha do adiciona() e apaga().
```html
 adiciona(event) {

    event.preventDefault();

    this._listaNegociacoes.adiciona(this._criaNegociacao());
    this._mensagem.texto = 'Negocia��o adicionada com sucesso';
    this._mensagemView.update(this._mensagem);

    this._limpaFormulario();
}

// c�digo posterior omitido

apaga() {

    this._listaNegociacoes.esvazia();
    // Linha abaixo comentada, n�o precisamos mais dela
    // this._negociacoesView.update(this._listaNegociacoes);

    this._mensagem.texto = "Negocia��es removidas com sucesso";
    this._mensagemView.update(this._mensagem);
}
```
Depois, faremos altera��es no ListaNegociacoes.js:
```html
adiciona(negociacao) {

    this._negociacoes.push(negociacao);
    this.armadilha(this);

}
```
No this.armadilha() passamos o model como par�metro, que ser� acessado com o this. No NegociacaoController.js, adicionaremos o model em _listaNegociacoes e tamb�m no update().
```html
class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes(function(model) {

            this._negociacoesView.update(model);
        });
```
Criamos o _listaNegociacoes, passei a fun��o que ser� chamada quando usarmos o adiciona() e o esvazia(), os dois m�todos passaram o modelo como par�metro. Depois, voltaremos para o ListaNegociacoes.js, e adicionaremos o this.armadilha(this) no m�todo esvazia():
```html
esvazia() {

    this._negociacoes = [];
    this.armadilha(this);
}
```
Vamos recarregar a p�gina e testar se nossa armadilha funcionar�. Mas ela n�o vai... No Console, veremos uma mensagem de erro:

uncaught type error: this.armadilha is not a fucntion

Ele nos diz que o this.armadilha n�o � uma fun��o dentro de ListaNegociacoes.

Teremos que fazer alguns ajustes, primeiramente, adicionaremos o prefixo _ ao armadilha:
```html
class ListaNegociacoes {

    constructor(armadilha) {
        this._negociacoes = [];
        this._armadilha = armadilha;
    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
        this._armadilha(this);
    }

    get negociacoes() {
        return [].concat(this._negociacoes);
    }

    esvazia() {
        this._negociacoes = [];
        this._armadilha(this);
    }
}
```
Depois, temos que resolver um problema no constructor de NegociacaoController().
```html
this._listaNegociacoes = new ListaNegociacoes(function(model) {
           this._negociacoesView.update(model);
```
Quando o _armadilha � executado, o this._negociacoesView n�o existe. Isto ocorre, porque a fun��o � executada em um contexto din�mico de ListaNegociacoes(). O this dentro de uma fun��o, para ser avaliado, depende do contexto no qual ela foi executada - no caso, o contexto ser� de ListaNegociacoes. Ent�o, this � a _listaNegociacoes, por�m, esta n�o tem _negociacoesView. Para resolver, precisamos que o this seja NegociacaoController, porque toda fun��o JavaScript tem o escopo this din�mico, que varia de acordo com o contexto. Vamos fazer um teste, adicionando o console.log() em _listaNegociacoes:
```html
this._listaNegociacoes = new ListaNegociacoes(function(model) {
          console.log(this);
          this._negociacoesView.update(model);
```
Testaremos preencher o formul�rio, no Console, veremos outra mensagem de erro:

ListaNegociacoes, uncaught type error: cannot read property 'update' of undefined

Ele mostra que this � o ListaNegociacoes. � assim, porque a fun��o est� sendo executada no contexto de _listaNegociacoes. Tem como fazer com o contexto de this seja o NegociacaoController? � o que veremos mais adiante.


<h2>API Reflection e as facetas de this</h2>
Temos uma fun��o com o escopo din�mico:
```html
class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

        this._listaNegociacoes = new ListaNegociacoes(function(model) {
            this._negociacoesView.update(model);
        });
//...
```
O this ir� variar de acordo com o contexto da execu��o. Como a fun��o ser� chamada dentro da classe ListaNegociacoes, ele ser� usado como contexto do this da fun��o.
```html
this._listaNegociacoes = new ListaNegociacoes(function(model) {
    this._negociacoesView.update(model);
});
```
Mas para que o c�digo funcione, queremos que o this tenha como contexto o NegociacaoController. Da mesma maneira que o this � din�mico, n�s programaticamente podemos modific�-lo. Como faremos isso? Primeiramente, no construtor de _listaNegociacoes, adicionaremos o primeiro par�metro: this - referente ao NegociacaoController.
```html
class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

        this._listaNegociacoes = new ListaNegociacoes(this, function(model) {
            this._negociacoesView.update(model);
        });
```
Este que ser� recebido depois em ListaNegociacoes.js, como contexto:
```html
class ListaNegociacoes {

  constructor(contexto, armadilha) {

        this._negociacoes = [];
        this._armadilha = armadilha;
        this._contexto = contexto;
  }
//...
```
Observe que criamos o atributo _contexto.

Agora o construtor do model recebe o contexto, no qual queremos que ele execute uma fun��o. Mas para que o this seja realmente o NegociacaoController, teremos que mudar a maneira de chamar a fun��o utilizada. Pediremos uma ajuda para a API de Reflex�o do JavaScript, adicionando em ListaNegociacoes.js o Reflect.apply. Com isto, chamaremos o m�todo est�tico da classe:
```html
adiciona(negociacao) {
    this._negociacoes.push(negociacao);
    //this._armadilha(this);
    Reflect.apply(this._armadilha, this._contexto, [this]);
}

get negociacoes() {
    return [].concat(this._negociacoes);
}

esvazia() {
    this._negociacoes = [];
    //this._armadilha(this);
    Reflect.apply(this._armadilha, this._contexto, [this]);
}
```
Observe que fizemos algumas altera��es nos m�todos adiciona() e esvazia(). O Reflect.apply recebeu o this._armadilha como primeiro par�metro e o segundo � this._contexto. O terceiro par�metro � o [this], que ser� a pr�pria ListaNegociacoes. Depois, adicionamos o Reflect.apply() tamb�m no esvazia().

Se executarmos o c�digo, o formul�rio continua funcionando normalmente.

formulario funcionado

N�s conseguimos redefinir o contexto em que queremos executar a fun��o de _listaNegociacoes, utilizando o Reflect.apply(). O m�todo apply() recebeu a fun��o executada, depois o contexto e os par�metros que ser�o passados para a fun��o. Fizemos isto com o adiciona() e o esvazia().
```html
adiciona(negociacao) {
    this._negociacoes.push(negociacao);
    //this._armadilha(this);
    Reflect.apply(this._armadilha, this._contexto, [this]);
}
```
A fun��o espera receber um modelo no NegociacaoController, dentro do constructor:
```html
this._listaNegociacoes = new ListaNegociacoes(this, function(model) {
    this._negociacoesView.update(model);
});
```
No m�todo adiciona(), passaremos o [this] que ser� o ListaNegociacoes. O nosso c�digo est� funcionando corretamente, mas ser� que existe outra maneira de conseguirmos o mesmo efeito, sem ter que passar o contexto para o model? Veremos mais adiante.

<h2>Arrow function e seu escopo l�xico</h2>
N�s queremos que function() execute, mas que this seja o NegociacaoController sem precisarmos passar um contexto:
```html
class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

        this._listaNegociacoes = new ListaNegociacoes(this, function(model) {
            this._negociacoesView.update(model);
        });
//...
```
Come�aremos removendo o this da fun��o:
```html
this._listaNegociacoes = new ListaNegociacoes(function(model) {
    this._negociacoesView.update(model);
});
```
Vamos retirar tamb�m o contexto de ListaNegociacoes:
```html
class ListaNegociacoes {

  constructor(armadilha) {

        this._negociacoes = [];
        this._armadilha = armadilha;
  }
  adiciona(negociacao) {
      this._negociacoes.push(negociacao);
      this._armadilha(this);
  }

  get negociacoes() {
      return [].concat(this._negociacoes);
  }

  esvazia() {
      this._negociacoes = [];
      this._armadilha(this);
  }

//...
```
Retiramos o Reflect.apply() e deixamos o c�digo como estava anteriormente. Agora ser� preciso encontrar um forma para que quando o _armadilha(this) seja executado o contexto seja NegociacaoController.

Primeiramente, faremos um pequeno ajuste no NegociacaoController, ao adicionarmos uma arrow function, usando =>:
```html
class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

        this._listaNegociacoes = new ListaNegociacoes(model =>
            this._negociacoesView.update(model));
    }
}
```
Por�m, se executarmos o c�digo, seremos surpreendidos com o formul�rio funcionando corretamente. Como isso � poss�vel? Isto ocorre porque a arrow function n�o � apenas uma maneira sucinta de escrever uma fun��o, ela tamb�m tem um caracter�stica peculiar: o escopo de this � l�xico, em vez de ser din�mico como a outra fun��o. Isto significa que o this n�o mudar� de acordo com o contexto. Da maneira como estruturamos o c�digo, o this ser� NegociacaoController - esta condi��o ser� mantida independente do local em que chamemos a arrow function, porque ela est� amarrada a um escopo imut�vel.

Ent�o, o this de uma arrow function � l�xico, enquanto o this de uma fun��o padr�o � din�mico. Com esse ajuste, conseguimos deixar o nosso c�digo mais sucinto.

<h2>Resumindo</h2>

Toda vez que um modelo for atualizado, tanto por n�s quanto pela aplica��o, voc� se lembrar� de chamar o update() na View? � improv�vel.

Vimos como tirar a responsabilidade do desenvolvedor e colocar a chamada da atualiza��o da View no c�digo, quando o modelo for alterado.

Seguindo o exemplo do listaNegociacoes, em que os m�todos adiciona() e esvazia() eram chamados, ser� esse o momento no qual vamos disparar a atualiza��o da View. Optamos por colocar "armadilhas", fun��es passadas para o construtor da classe que s�o chamadas sempre que os m�todos adiciona() ou esvazia() forem usados. Estas fun��es recebem um c�digo que acessa a View da controller e executar� o m�todo update().

Mas a solu��o fracassou, porque a function() era enviada para o construtor do modelo que � a armadilha. Quando isso acontecia, o this era din�mico, ou seja, n�o pertencia a controller, e sim, ao model. Ent�o, tentamos acessar no this a nossa View. Vimos como fazer isto por meio da API de reflex�o do JavaScript, Reflection API, usando reflect.apply(). Ela recebe o nome do m�todo, o contexto em que queremos executar o m�todo, al�m dos par�metros que ser�o passados para o m�todo para corrigir o this no momento da execu��o da fun��o. Mas vimos que este processo n�o era necess�rio. Em vez disso, usamos uma arrow function.

As arrow functions possuem um escopo l�xico, enquanto as fun��es padr�es t�m um escopo din�mico. Isto significa que, se temos uma fun��o em JavaScript que varia de acordo com o contexto no qual � chamada, o this l�xico de uma arrow function manter� o mesmo this em todas as chamadas da fun��o. Isso torna o c�digo mais enxuto, porque n�o precisarmos passar o contexto do construtor do modelo.

Nos exerc�cios, voc� ter� a chance de praticar o conte�do trabalhado, mas vale ressaltar que poluir o modelo com esse c�digo de infraestrutura n�o � uma boa ideia. Atacaremos tal quest�o na pr�xima se��o do curso, e descobriremos como disparar atualiza��es na View sem colocar "armadilhas". No entanto, os conceitos abordados aqui j� devem estar bem consolidados. Vamos praticar!

<h2>Contexto das arrows functions</h2>

Um programador de Javascript decidiu criar uma abstra��o de um rel�gio em seu c�digo, atrav�s da classe Relogio. A ideia � a seguinte: assim que ele instanciar essa classe, deve ser exibida no console a quantidade de segundos a partir da sua cria��o. Aprendemos que o constructor � chamado toda vez que instanciamos objetos de uma classe:
```html
class Relogio {

    constructor() {
        this._segundos = 0;

        setInterval(function () {
            console.log(++this._segundos);
          }, 1000);
    }
}

var relogio = new Relogio();
```
O problema � que a mensagem exibida no console � NaN (Not a Number) e n�o os segundos desde que o rel�gio foi instanciado.

Encontre o erro deste c�digo e pense em uma solu��o, utilizando o que aprendemos neste cap�tulo, para que o rel�gio se comporte como o esperado.

O principal erro deste c�digo est� na fun��o passada para setInterval, aonde fazemos o ++this._segundos. Como setInterval � global e acess�vel em qualquer canto do nosso c�digo, ele pertence ao objeto global window, logo seu this aponta para window e n�o para nossa classe Relogio. Como window n�o possui a propriedade _segundos, o incremento resultar� em NaN, pois n�o podemos incrementar uma vari�vel que � undefined.

Uma maneira de resolver esse problema � guardando o this do constructor em uma vari�vel, por exemplo, self e acess�-la quando necess�rio. Vejamos:
```html
class Relogio {

    constructor() {

        let self = this; // guardando o this que � a inst�ncia da classe `Relogio`
        this._segundos = 0;

        setInterval(function () {
            console.log(++self._segundos); // acessando a vari�vel self, que � a inst�ncia de `Relogio` 
          }, 1000);

    }
}
```
Contudo, aprendemos a usar arrow functions nesse cap�tulo, que al�m de nos fornecer uma sintaxe bastante enxuta, ainda possui escopo l�xico, isto �, seu this � est�tico e n�o muda.
```html
class Relogio {

    constructor() {
        this._segundos = 0;
        setInterval(() => console.log(++this._segundos), 1000); // usando arrow function. O this � o this de `Relogio`, e n�o `window`. 
    }
}

var relogio = new Relogio();
```
Assim, ao alterar o valor de this._segundos, estamos ainda no contexto de Relogio e o valor � acrescido corretamente. E deste modo o c�digo ficou ainda mais sucinto!

<h2>Mais um pouco de arrow function!</h2>

Temos o seguinte objeto criado literalmente usando {}:
```html
<script>
    let carro = {
        velocidade: 100,
        acelera :function() {
            console.log(this);
            console.log(`Carro a ${this.velocidade} km por hora!`);
        }
    };
    carro.acelera();
</script>
```
Perfeito, quando chamamos carro.acelera(), � exibida a mensagem "Carro a 100 km por hora!".

Ser� que podemos atribuir uma arrow function para a propriedade acelera? Vamos tentar:
```html
<script>
    let carro = {
        velocidade: 100,
        acelera : () =>  {
            console.log(this);
            console.log(`Carro a ${this.velocidade} km por hora!`);
        }
    };
    carro.acelera();
</script>
```
Levando em considera��o este �ltimo c�digo, qual ser� o resultado exibido no console do seu Chrome?


R: 
Window {external: Object, chrome: Object, document: document, speechSynthesis: SpeechSynthesis, caches: CacheStorage�}

Carro a undefined km por hora!

Como escrevemos nosso c�digo dentro da tag script, n�o estamos dentro de um m�todo ou de outra fun��o, estamos no escopo de window, ou seja, o escopo global. Lembre-se que o this de uma arrow function � l�xico, isto �, est�tico e pega emprestado seu valor do ambiente no qual foi declarado. Como o this naquele ponto em que a arrow function foi declarada � window, seu valor ser� window. � claro que o escopo global n�o possui a propriedade velocidade. Veja que este � um exemplo no qual a arrow function atrapalha e que o uso de uma function tradicional � o mais indicado. O this de uma function � din�mico e muda de acordo com o contexto de evoca��o da fun��o. Como nossa fun��o est� sendo chamada a partir de um objeto, por padr�o, o this dessa fun��o ser� o objeto.

<h2>E tem espa�o para self?</h2>

Neste cap�tulo voc� aprendeu gradativamente como resolver o problema do contexto de invoca��o da nossa armadilha passada para nosso modelo. A primeira solu��o foi passar o contexto de invoca��o como par�metro e usar a m�gica de Reflect.apply para alterar o contexto de invoca��o:
```html
class NegociacaoController {

    constructor() {

        // c�digo anterior omitido

        this._listaNegociacoes = new ListaNegociacoes(this, function(model) { 

            this._negociacoesView.update(model);
        });
    }

    // c�digo posterior omitido
}
```
Depois, aprendemos que o uso de uma arrow function resolvia essa quest�o, porque o valor de seu this � definido no local onde ela � declarada em nosso c�digo e seu valor n�o muda (diferente do this de uma function que � din�mico). Sendo assim, o this da nossa armadilha ser� a inst�ncia de NegociacaoController:
```html
class NegociacaoController {

    constructor() {

        // c�digo anterior omitido

        this._listaNegociacoes = new ListaNegociacoes(model => 
            this._negociacoesView.update(model));
    }

    // c�digo posterior omitido
}
```
Essa solu��o evitou passarmos mais um par�metro em nosso modelo, o contexto de invoca��o e ficou mais compacta e elegante.

Contudo, h� ainda uma terceira solu��o, mas envolve a declara��o de uma vari�vel extra. Podemos guardar uma refer�ncia para a inst�ncia de NegociacaoController em uma vari�vel. Geralmente essa vari�vel � chamada de self:
```html
class NegociacaoController {

    constructor() {

        // a vari�vel self guarda uma refer�ncia para this, inst�ncia de NegociacaoController

        let self = this;

        // aqui usei uma function tradicional, mas poderia ser uma arrow function tamb�m

        this._listaNegociacoes = new ListaNegociacoes(function(model) { 
            self._negociacoesView.update(model);
        });
    }

    // c�digo posterior omitido
}
```
Quando nossa armadilha for executada, o self ser� nosso NegociacaoController.

<h2>Reutiliza��o de c�digo com Composi��o e Mixin</h2>
Esse exerc�cio � de apenas reflex�o. Voc� pode executar seu c�digo se assim desejar.

Temos as seguintes classes:
```html
<!-- troca-troca.html -->
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
    <p class="info">Era uma vez...</p>
    <script>

        class Aviao {

            constructor(nome) {
                this._nome = nome;
            }

            voa() {
                alert(`${this._nome} est� voando`);
            }

            ligaMotor() {
                console.log('liga o motor');
            }

            fechaPortas() {
                console.log('Portas sendo fechadas');
            }
        }

        class Passarinho {

            constructor(nome) {
                this._nome = nome;
            }

            voa() {
                // hum..precisamos implementar esse m�todo tamb�m!
            }
        }

    </script>
</body>
</html>
```
Veja que o m�todo voa de Passarinho n�o esta completo. Podemos at� usar heran�a e herdar de Aviao, mas com certeza um passarinho n�o ligaMotor nem fechaPortas. N�o podemos usar heran�a porque Passarinho n�o � um Aviao.

Reutiliza��o de c�digo atrav�s de composi��o
Uma maneira de solucionar esse problema � usar composi��o no lugar de heran�a. Na composi��o, a classe que deseja usar o m�todo de outra possui uma inst�ncia dessa classe. Por mais que a inst�ncia tenha v�rios m�todos, s� chamamos aqueles que nos interessa:

Alterando nosso c�digo para usar composi��o:
```html
<!-- troca-troca.html -->
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
    <p class="info">Era uma vez...</p>
    <script>

        class Aviao {

            constructor(nome) {
                this._nome = nome;
            }

            voa() {
                alert(`${this._nome} est� voando`);
            }

            ligaMotor() {
                console.log('liga o motor');
            }

            fechaPortas() {
                console.log('Portas sendo fechadas');
            }
        }

        class Passarinho {

            constructor(nome) {
                this._nome = nome;
                // guarda uma inst�ncia de avi�o
                this._aviao = new Aviao(nome);
            }

            voa() {
                // usa o m�todo voa de Aviao
                this._aviao.voa();
            }
        }

    </script>
</body>
</html>
```
Nessa solu��o, quem usa a inst�ncia da classe Passarinho nem sabe que o m�todo voa usa por debaixo dos panos uma inst�ncia de Aviao para funcionar. Veja que a composi��o tem a vantagem de podermos escolher quais m�todos queremos reaproveitar, diferente da heran�a que � tudo ou nada. Contudo, veja que com composi��o precisamos escrever um pouco mais, pois temos que delegar as chamadas dos m�todos voa de Passarinho para o voa de avi�o.

Ainda h� outra forma de resolver este problema sem usar heran�a nem composi��o, mas usando mixin!

Reutiliza��o de c�digo atrav�s de mixin!
Com mixin podemos "pegar emprestado" o m�todo de outra classe sem termos que ter uma inst�ncia dessa classe como � o caso de composi��o.

Vamos alterar a classe Passarinho removendo a inst�ncia de Aviao:
```html
<!-- troca-troca.html -->
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
    <p class="info">Era uma vez...</p>
    <script>

        class Aviao {

            constructor(nome) {
                this._nome = nome;
            }

            voa() {
                alert(`${this._nome} est� voando`);
            }

            ligaMotor() {
                console.log('liga o motor');
            }

            fechaPortas() {
                console.log('Portas sendo fechadas');
            }
        }

        class Passarinho {

            constructor(nome) {
                this._nome = nome;
            }

            voa() {
                // executa o m�todo `voa` de `Avi�o` usando como contexto a inst�ncia de `Passarinho`
                Reflect.apply(Aviao.prototype.voa, this, []);
            }
        }

    </script>
</body>
</html>
```
Olha ai o Reflect.apply novamente! Nesta linha de c�digo estamos querendo executar o m�todo voa da classe Aviao, mas usando como contexto o this da inst�ncia de Passarinho. O �ltimo par�metro � um array que cont�m os par�metros do m�todo. Como voa n�o recebe par�metro algum, passamos um array vazio.

Um detalhe: foi necess�rio fazer Aviao.prototype.voa porque m�todos criados usando ES6 s�o adicionados no prototype. Qualquer m�todo adicionando em prototype estar� dispon�vel para todas as inst�ncias.


<h2>Function.apply vs Reflect.apply</h2>
Aprendemos a alterar o contexto de execu��o de uma fun��o/m�todo atrav�s de Reflect.apply. Vejamos um trecho de c�digo que faz isso:
```html
class ListaNegociacoes {

    constructor(contexto, armadilha) {
        this._negociacoes = [];
        this._armadilha = armadilha;
        this._contexto = contexto;
    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
        Reflect.apply(this._armadilha, this._contexto, [this]);
    }

    get negociacoes() {
        return [].concat(this._negociacoes);
    }

    esvazia() {
        this._negociacoes = [];
        Reflect.apply(this._armadilha, this._contexto, [this]);
    }
}
```
O artefato Reflect � algo novo do ES6, contudo poder�amos conseguir com ES5 o mesmo resultado, assim:
```html
class ListaNegociacoes {

    constructor(contexto, armadilha) {
        this._negociacoes = [];
        this._armadilha = armadilha;
        this._contexto = contexto;
    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
        this._armadilha.apply(this._contexto, [this]);
    }

    get negociacoes() {
        return [].concat(this._negociacoes);
    }

    esvazia() {
        this._negociacoes = [];
        this._armadilha.apply(this._contexto, [this]);
    }
}
```
Veja que estamos chamando o m�todo apply, mas diretamente na fun��o atribu�da � propriedade this._armadilha. O resultado � o mesmo quando usamos Reflect.apply.

Apesar de um pouco menos verbosa, a ideia � que opera��es como essa sejam feitas atrav�s de Reflect, pois � uma primeira tentativa da linguagem JavaScript de centralizar funcionalidades como vimos em um �nico lugar.

Achei interessante mostrar como esse procedimento � feito no ES5 para que o aluno entenda que o ES6, al�m de trazer muitas novidades, procura padronizar bastante coisa da pr�pria linguagem.

O ES6 n�o veio criar apenas novas funcionalidades, ele veio tamb�m padronizar o que j� existia.

<h2>O padr�o de projeto Observer</h2>

No final deste cap�tulo implementamos uma solu��o para automatizar o processo de atualiza��o da view toda vez que o modelo mudar. O que fizemos na verdade foi implementar o padr�o de projeto Observer.

O padr�o de projeto Observer
Usamos o padr�o de projeto Observer sempre que queremos notificar partes do sistema interessadas quando um evento importante for disparado em nosso sistema.

No contexto da nossa aplica��o, entendemos um evento como o ato de adicionar ou esvaziar nossa lista de negocia��es. � a view que est� interessada em observar esse evento e tomar uma a��o, no caso, se atualizar com base no estado mais atual do modelo.

<h1>Se��o 02 - Existe modelo mentiroso? O padr�o de projeto Proxy</h1>

<h2>Modelo e retutiliza��o em projetos</h2>

Para liberarmos o desenvolvedor da responsabilidade de atualizar programaticamente a View sempre que o modelo fosse atualizado, n�s colocamos "armadilhas": fun��es que eram chamadas quando m�todos espec�ficos eram executados. Desta forma, cham�vamos automaticamente a atualiza��o da View. N�s declaramos o modelo no inicio, definimos as a��es que deveriam acontecer quando ocorria a modifica��o, e assim liberamos o desenvolvedor da responsabilidade.

No entanto, esta solu��o deixa a desejar porque coloca c�digo de infraestrutura - ou seja, de atualiza��o da View - no modelo. Geralmente, a parte mais reutilizada de um sistema � o modelo. Ent�o, ao acessarmos um modelo de negocia��o e encontrarmos um atributo chamado _armadilha, por exemplo:
```html
class ListaNegociacoes {

    constructor(armadilha) {

        this._negociacoes = [];
        this._armadilha = armadilha;
    }
//...

```
O que _armadilha tem a ver com a lista de negocia��o? Ela foi usada apenas para aplicar o artif�cio que chama a View automaticamente. E se tiv�ssemos outros m�todos que quis�ssemos monitorar e executar uma armadilha? Ter�amos que alterar a classe do modelo. Ent�o, o modelo � a parte mais reutiliz�vel. Se agora n�o quisermos mais utilizar um sistema baseado em MVC, podemos optar em usar o AngularJS ou outro framework.

Mas se come�amos a incluir diversos itens de infraestrutura, de recursos para que ela gere benef�cios - como a atualiza��o de View - come�amos a n�o reutilizar continuamente o modelo. Encontraremos uma forma de manter o modelo intacto, sem utilizarmos armadilhas e ainda assim, conseguir executar um c�digo arbitr�rio quando algum m�todo for chamado. A seguir, encontraremos uma solu��o para a quest�o.

<h2>O padr�o de projeto Proxy</h2>

Veremos qual � a solu��o que nos permite manter o modelo... Come�aremos retirando o _armadilha de ListaNegociacoes:
```html

class ListaNegociacoes {

  constructor() {

        this._negociacoes = [];
  }
  adiciona(negociacao) {
      this._negociacoes.push(negociacao);
  }

  get negociacoes() {
      return [].concat(this._negociacoes);
  }

  esvazia() {
      this._negociacoes = [];
  }
}

```
Como removemos o _armadilha, o construtor de NegociacaoController deixar� de funcionar e descobriremos uma forma de resolver problema da View. Temos ainda outro problema com a solu��o que usa o _armadilha: se quisermos monitorar os models Mensagem e Negociacoes, teremos que abrir a classe para alterar e colocar a armadilha - mas, n�o faremos isto.

Existe um famoso padr�o de projeto chamado Proxy, que de forma resumida, � "um cara mentiroso". Vimos que n�o � bom inserirmos armadilhas na classe, porque estaremos perdendo a reutiliza��o do modelo e teremos que repetir em todos os modelos do sistema. No entanto, o Proxy � id�ntico ao objeto que queremos trabalhar, e teremos bastante dificuldade de diferenci�-los. N�s acessamos o Proxy como se ele fosse o objeto real, este �ltimo ficar� escondido dentro do outro. N�s substitu�mos o objeto real, que s� poder� ser acessado por meio do Proxy - que pode ou n�o ser executado em um c�digo arbitr�rio se assim definirmos.

Observe que ListaNegociacoes tem o m�todos adiciona() e negociacoes(), que tamb�m estar�o presentes no Proxy.

```html
class ListaNegociacoes {

  constructor(armadilha) {

        this._negociacoes = [];
        this._armadilha = armadilha;
  }
  adiciona(negociacao) {
      this._negociacoes.push(negociacao);
      this._armadilha(this);
  }

  get negociacoes() {
      return [].concat(this._negociacoes);
  }

  esvazia() {
      this._negociacoes = [];
      this._armadilha(this);
  }

```
A diferen�a est� em que quando chamarmos o adiciona(), o Proxy delegar� a chamada do m�todo para o objeto encapsulado por ele. Mas ainda n�o temos benef�cios com esta mudan�a. A vantagem est� que colocaremos as armadilhas entre a chamada do Proxy e o objeto real. Toda vez que acessamos o Proxy, executaremos um c�digo antes de chamarmos um m�todo ou propriedade correspondente ao objeto real.

A boa not�cia � que n�o precisamos implementar esse padr�o de projeto.

A partir da vers�o 2015 do ECMAScript, a pr�pria linguagem j� possui um recurso de Proxy. Ent�o, implementaremos o padr�o de projeto Proxy usando o ES6.



<h2>Aprendendo a trabalhar com o Proxy</h2>

Vamos aprender a trabalhar com o Proxy. Come�aremos comentando o c�digo de NegociacaoController, porque ele n�o est� v�lido devido a remo��o da armadilha passada para o construtor.
```html

class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

        /*
        this._listaNegociacoes = 
            new ListaNegociacoes(model => this._negociacoesView.update(model));
            */
//...

```
Depois, abriremos o Console no navegador. Veremos uma mensagem de erro, porque a negocia��o est� com problema. Come�aremos criando um negociacao:
```html
let negociacao = new Negociacao(new Date(), 1, 100);
undefined
let negociacaoProxy = new Proxy(negociacao, {});
```

Criaremos um Proxy de negociacao. O segundo par�metro � um objeto no formato literal {}, em que iremos configurar nossas armadilhas. Em seguida, digitaremos a seguinte linha:

negocicacaoProxy.valor
100
Ao acessarmos valor, o retorno ser� 100. Conseguimos ter acesso a quantidade e volume:

negocicacaoProxy.valor
100
negociacaoProxy.quantidade
1
negocicacaoProxy.volume
100
O Proxy ter� exatamente o mesmo comportamento do objeto.

Proxy no console

No entanto, n�o queremos que o ningu�m tenha acesso ao objeto real (negociacao), caso contr�rio, ningu�m cair� nas armadilhas. Para isto, executaremos a seguinte linha no Console:

let negociacao = new Proxy(new Negociacao(new Date(), 1, 100), {});
Neste caso, negociacao � o Proxy:

negociacao � o Proxy

Agora, a �nica maneira de lidar com a inst�ncia de negocia��o criada � por interm�dio do Proxy. Precisamos aprender como passamos o handlers ({}) para colocarmos nossas armadilhas. Adicionaremos outra tag <script> no index.html e depois, colocaremos o c�digo que executamos no Console.
```html

<script>

    let negociacao = new Proxy(new Negociacao(new Date(), 2, 100), {

      });

</script>
```

Mais adiante, definiremos o handler.

<h2>Construindo armadilhas de leitura</h2>

