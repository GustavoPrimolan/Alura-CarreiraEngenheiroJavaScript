<h1>Seção 01 - Como saber quando o modelo mudou?</h1>

<h2>Você lembrou de atualizar a view? Nem eu!</h2>

Nossa aplicação já funciona e totaliza o volume no fim da tabela. Mas ainda falta implementar uma regra de negócio no modelo: vamos adicionar a funcionalidade que nos permite esvaziar uma lista.

Atualmente, o arquivo ListaNegociacoes.js está assim:
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
Adicionaremos o método esvazia() abaixo da linha do return():
```html
esvazia()   {

    this._negociacoes = [];
}
```
O array de negociações receberá uma nova lista e com isso, apagará todos os itens da anterior. Ao clicarmos no botão "Apagar" do formulário, queremos que as informações sejam apagadas da lista de negociações. Para isto, sabemos que quem atua no modelo é a controller mediante às ações do usuário. Em seguida, no arquivo NegociacaoController.js, adicionaremos o método apaga():
```html
apaga() {

    this._listaNegociacoes.esvazia();
    this._negociacoesView.update(this._listaNegociacoes);

    this._mensagem.texto = 'Negociações apagadas com sucesso';
    this._mensagemView.update(this._mensagem);
}
```
O método solicitará o modelo _listaNegociacoes.esvazia(). Observe que adicionamos o update(). Quando atualizarmos a View, esta será recarregada automaticamente e a tabela ficará limpa.

Temos que associar a página a partir do evento de clique, e chamar o apaga(). Para isto, no index.html, adicionaremos o onclick() dentro da tag <button> de "Apagar":
```html
<div class="text-center">
        <button class="btn btn-primary text-center" type="button">
            Importar Negociações
        </button>
        <button onclick="negociacaoController.apaga()" class="btn btn-primary text-center" type="button">
            Apagar
        </button>
    </div>
```
Se recarregarmos a página no navegador, nenhum problema será apontado no console e conseguiremos cadastrar uma negociação normalmente. Quando clicarmos em "Apagar", a tabela ficará vazia. A View foi atualizada com os dados do modelo da lista de negociações atualizada e a mensagem foi exibida.

lista apagada

Sempre que atualizarmos o modelo, é possível esquecer de chamar o modelo da View? Sim. Nós temos duas Views: MensagemView e NegociacoesView. É preciso atualizar o modelo nas duas e, depois, chamar o update(). Mas um sistema maior pode conter um número muito superior de Views e corremos o risco de esquecer de adicionar o método. Esta é uma grande responsabilidade para o desenvolvedor.

Será que existe alguma maneira de automatizarmos a atualização da View? Vamos alterar a lista de negociações nos métodos adiciona() e apaga(), quando criarmos a instância de negociações no constructor(). Tentaremos encontrar um solução para que a View seja atualizada automaticamente assim que o modelo for alterado.

<h2>E se atualizarmos a view quando o modelo for alterado?</h2>
Nós queremos alterar o modelo e chamar a atualização da view automaticamente quando ela for recarregada. Para resolver a questão, imagine que somos caçadores. Nós vamos colocar uma armadilha que será disparada quando alguém pisar no código do ListaNegociacoes.js.

Em qual dos métodos seria melhor colocarmos a armadilha, considerando que o nosso objetivo é disparar a atualização da View? A melhor resposta é nos métodos adiciona() e esvazia() porque são elas que modificam as propriedades da View. Ao invocarmos o método adiciona() simultaneamente chamaremos uma armadilha que atualizará a View.

Em seguida, adicionaremos a armadilha como parâmetro de constructor(), também vamos incluir uma propriedade chamada _armadilha.
```html
class ListaNegociacoes {

    constructor(armadilha) {

        this._negociacoes = [];
        this._armadilha = armadilha;
    }
//...
```
A armadilha é uma função, que guardaremos no constructor() para chamá-la posteriormente - ou seja, quando chamarmos o adiciona() e esvazia().

Em NegociacaoController, vamos adicionar o function() dentro de new ListaNegociacao. Após passarmos uma função anônima como parâmetro, ela vai executar a seguinte linha de código:

this._negociacoesView.update(this._listaNegociacoes);
O trecho do código ficará assim:
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
Fique tranquilo sobre o NegociacoesView ser declarado depois. O trecho acima só será executado quando os métodos adiciona() e esvazia() forem chamados.

Vamos manter o negociacoesView.update() mais abaixo, para que seja feita a primeira renderização da lista. Porém, vamos apagar a mesma linha do adiciona() e apaga().
```html
 adiciona(event) {

    event.preventDefault();

    this._listaNegociacoes.adiciona(this._criaNegociacao());
    this._mensagem.texto = 'Negociação adicionada com sucesso';
    this._mensagemView.update(this._mensagem);

    this._limpaFormulario();
}

// código posterior omitido

apaga() {

    this._listaNegociacoes.esvazia();
    // Linha abaixo comentada, não precisamos mais dela
    // this._negociacoesView.update(this._listaNegociacoes);

    this._mensagem.texto = "Negociações removidas com sucesso";
    this._mensagemView.update(this._mensagem);
}
```
Depois, faremos alterações no ListaNegociacoes.js:
```html
adiciona(negociacao) {

    this._negociacoes.push(negociacao);
    this.armadilha(this);

}
```
No this.armadilha() passamos o model como parâmetro, que será acessado com o this. No NegociacaoController.js, adicionaremos o model em _listaNegociacoes e também no update().
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
Criamos o _listaNegociacoes, passei a função que será chamada quando usarmos o adiciona() e o esvazia(), os dois métodos passaram o modelo como parâmetro. Depois, voltaremos para o ListaNegociacoes.js, e adicionaremos o this.armadilha(this) no método esvazia():
```html
esvazia() {

    this._negociacoes = [];
    this.armadilha(this);
}
```
Vamos recarregar a página e testar se nossa armadilha funcionará. Mas ela não vai... No Console, veremos uma mensagem de erro:

uncaught type error: this.armadilha is not a fucntion

Ele nos diz que o this.armadilha não é uma função dentro de ListaNegociacoes.

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
Quando o _armadilha é executado, o this._negociacoesView não existe. Isto ocorre, porque a função é executada em um contexto dinâmico de ListaNegociacoes(). O this dentro de uma função, para ser avaliado, depende do contexto no qual ela foi executada - no caso, o contexto será de ListaNegociacoes. Então, this é a _listaNegociacoes, porém, esta não tem _negociacoesView. Para resolver, precisamos que o this seja NegociacaoController, porque toda função JavaScript tem o escopo this dinâmico, que varia de acordo com o contexto. Vamos fazer um teste, adicionando o console.log() em _listaNegociacoes:
```html
this._listaNegociacoes = new ListaNegociacoes(function(model) {
          console.log(this);
          this._negociacoesView.update(model);
```
Testaremos preencher o formulário, no Console, veremos outra mensagem de erro:

ListaNegociacoes, uncaught type error: cannot read property 'update' of undefined

Ele mostra que this é o ListaNegociacoes. É assim, porque a função está sendo executada no contexto de _listaNegociacoes. Tem como fazer com o contexto de this seja o NegociacaoController? É o que veremos mais adiante.


<h2>API Reflection e as facetas de this</h2>
Temos uma função com o escopo dinâmico:
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
O this irá variar de acordo com o contexto da execução. Como a função será chamada dentro da classe ListaNegociacoes, ele será usado como contexto do this da função.
```html
this._listaNegociacoes = new ListaNegociacoes(function(model) {
    this._negociacoesView.update(model);
});
```
Mas para que o código funcione, queremos que o this tenha como contexto o NegociacaoController. Da mesma maneira que o this é dinâmico, nós programaticamente podemos modificá-lo. Como faremos isso? Primeiramente, no construtor de _listaNegociacoes, adicionaremos o primeiro parâmetro: this - referente ao NegociacaoController.
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
Este que será recebido depois em ListaNegociacoes.js, como contexto:
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

Agora o construtor do model recebe o contexto, no qual queremos que ele execute uma função. Mas para que o this seja realmente o NegociacaoController, teremos que mudar a maneira de chamar a função utilizada. Pediremos uma ajuda para a API de Reflexão do JavaScript, adicionando em ListaNegociacoes.js o Reflect.apply. Com isto, chamaremos o método estático da classe:
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
Observe que fizemos algumas alterações nos métodos adiciona() e esvazia(). O Reflect.apply recebeu o this._armadilha como primeiro parâmetro e o segundo é this._contexto. O terceiro parâmetro é o [this], que será a própria ListaNegociacoes. Depois, adicionamos o Reflect.apply() também no esvazia().

Se executarmos o código, o formulário continua funcionando normalmente.

formulario funcionado

Nós conseguimos redefinir o contexto em que queremos executar a função de _listaNegociacoes, utilizando o Reflect.apply(). O método apply() recebeu a função executada, depois o contexto e os parâmetros que serão passados para a função. Fizemos isto com o adiciona() e o esvazia().
```html
adiciona(negociacao) {
    this._negociacoes.push(negociacao);
    //this._armadilha(this);
    Reflect.apply(this._armadilha, this._contexto, [this]);
}
```
A função espera receber um modelo no NegociacaoController, dentro do constructor:
```html
this._listaNegociacoes = new ListaNegociacoes(this, function(model) {
    this._negociacoesView.update(model);
});
```
No método adiciona(), passaremos o [this] que será o ListaNegociacoes. O nosso código está funcionando corretamente, mas será que existe outra maneira de conseguirmos o mesmo efeito, sem ter que passar o contexto para o model? Veremos mais adiante.

<h2>Arrow function e seu escopo léxico</h2>
Nós queremos que function() execute, mas que this seja o NegociacaoController sem precisarmos passar um contexto:
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
Começaremos removendo o this da função:
```html
this._listaNegociacoes = new ListaNegociacoes(function(model) {
    this._negociacoesView.update(model);
});
```
Vamos retirar também o contexto de ListaNegociacoes:
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
Retiramos o Reflect.apply() e deixamos o código como estava anteriormente. Agora será preciso encontrar um forma para que quando o _armadilha(this) seja executado o contexto seja NegociacaoController.

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
Porém, se executarmos o código, seremos surpreendidos com o formulário funcionando corretamente. Como isso é possível? Isto ocorre porque a arrow function não é apenas uma maneira sucinta de escrever uma função, ela também tem um característica peculiar: o escopo de this é léxico, em vez de ser dinâmico como a outra função. Isto significa que o this não mudará de acordo com o contexto. Da maneira como estruturamos o código, o this será NegociacaoController - esta condição será mantida independente do local em que chamemos a arrow function, porque ela está amarrada a um escopo imutável.

Então, o this de uma arrow function é léxico, enquanto o this de uma função padrão é dinâmico. Com esse ajuste, conseguimos deixar o nosso código mais sucinto.

<h2>Resumindo</h2>

Toda vez que um modelo for atualizado, tanto por nós quanto pela aplicação, você se lembrará de chamar o update() na View? É improvável.

Vimos como tirar a responsabilidade do desenvolvedor e colocar a chamada da atualização da View no código, quando o modelo for alterado.

Seguindo o exemplo do listaNegociacoes, em que os métodos adiciona() e esvazia() eram chamados, será esse o momento no qual vamos disparar a atualização da View. Optamos por colocar "armadilhas", funções passadas para o construtor da classe que são chamadas sempre que os métodos adiciona() ou esvazia() forem usados. Estas funções recebem um código que acessa a View da controller e executará o método update().

Mas a solução fracassou, porque a function() era enviada para o construtor do modelo que é a armadilha. Quando isso acontecia, o this era dinâmico, ou seja, não pertencia a controller, e sim, ao model. Então, tentamos acessar no this a nossa View. Vimos como fazer isto por meio da API de reflexão do JavaScript, Reflection API, usando reflect.apply(). Ela recebe o nome do método, o contexto em que queremos executar o método, além dos parâmetros que serão passados para o método para corrigir o this no momento da execução da função. Mas vimos que este processo não era necessário. Em vez disso, usamos uma arrow function.

As arrow functions possuem um escopo léxico, enquanto as funções padrões têm um escopo dinâmico. Isto significa que, se temos uma função em JavaScript que varia de acordo com o contexto no qual é chamada, o this léxico de uma arrow function manterá o mesmo this em todas as chamadas da função. Isso torna o código mais enxuto, porque não precisarmos passar o contexto do construtor do modelo.

Nos exercícios, você terá a chance de praticar o conteúdo trabalhado, mas vale ressaltar que poluir o modelo com esse código de infraestrutura não é uma boa ideia. Atacaremos tal questão na próxima seção do curso, e descobriremos como disparar atualizações na View sem colocar "armadilhas". No entanto, os conceitos abordados aqui já devem estar bem consolidados. Vamos praticar!

<h2>Contexto das arrows functions</h2>

Um programador de Javascript decidiu criar uma abstração de um relógio em seu código, através da classe Relogio. A ideia é a seguinte: assim que ele instanciar essa classe, deve ser exibida no console a quantidade de segundos a partir da sua criação. Aprendemos que o constructor é chamado toda vez que instanciamos objetos de uma classe:
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
O problema é que a mensagem exibida no console é NaN (Not a Number) e não os segundos desde que o relógio foi instanciado.

Encontre o erro deste código e pense em uma solução, utilizando o que aprendemos neste capítulo, para que o relógio se comporte como o esperado.

O principal erro deste código está na função passada para setInterval, aonde fazemos o ++this._segundos. Como setInterval é global e acessível em qualquer canto do nosso código, ele pertence ao objeto global window, logo seu this aponta para window e não para nossa classe Relogio. Como window não possui a propriedade _segundos, o incremento resultará em NaN, pois não podemos incrementar uma variável que é undefined.

Uma maneira de resolver esse problema é guardando o this do constructor em uma variável, por exemplo, self e acessá-la quando necessário. Vejamos:
```html
class Relogio {

    constructor() {

        let self = this; // guardando o this que é a instância da classe `Relogio`
        this._segundos = 0;

        setInterval(function () {
            console.log(++self._segundos); // acessando a variável self, que é a instância de `Relogio` 
          }, 1000);

    }
}
```
Contudo, aprendemos a usar arrow functions nesse capítulo, que além de nos fornecer uma sintaxe bastante enxuta, ainda possui escopo léxico, isto é, seu this é estático e não muda.
```html
class Relogio {

    constructor() {
        this._segundos = 0;
        setInterval(() => console.log(++this._segundos), 1000); // usando arrow function. O this é o this de `Relogio`, e não `window`. 
    }
}

var relogio = new Relogio();
```
Assim, ao alterar o valor de this._segundos, estamos ainda no contexto de Relogio e o valor é acrescido corretamente. E deste modo o código ficou ainda mais sucinto!

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
Perfeito, quando chamamos carro.acelera(), é exibida a mensagem "Carro a 100 km por hora!".

Será que podemos atribuir uma arrow function para a propriedade acelera? Vamos tentar:
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
Levando em consideração este último código, qual será o resultado exibido no console do seu Chrome?


R: 
Window {external: Object, chrome: Object, document: document, speechSynthesis: SpeechSynthesis, caches: CacheStorage…}

Carro a undefined km por hora!

Como escrevemos nosso código dentro da tag script, não estamos dentro de um método ou de outra função, estamos no escopo de window, ou seja, o escopo global. Lembre-se que o this de uma arrow function é léxico, isto é, estático e pega emprestado seu valor do ambiente no qual foi declarado. Como o this naquele ponto em que a arrow function foi declarada é window, seu valor será window. É claro que o escopo global não possui a propriedade velocidade. Veja que este é um exemplo no qual a arrow function atrapalha e que o uso de uma function tradicional é o mais indicado. O this de uma function é dinâmico e muda de acordo com o contexto de evocação da função. Como nossa função está sendo chamada a partir de um objeto, por padrão, o this dessa função será o objeto.

<h2>E tem espaço para self?</h2>

Neste capítulo você aprendeu gradativamente como resolver o problema do contexto de invocação da nossa armadilha passada para nosso modelo. A primeira solução foi passar o contexto de invocação como parâmetro e usar a mágica de Reflect.apply para alterar o contexto de invocação:
```html
class NegociacaoController {

    constructor() {

        // código anterior omitido

        this._listaNegociacoes = new ListaNegociacoes(this, function(model) { 

            this._negociacoesView.update(model);
        });
    }

    // código posterior omitido
}
```
Depois, aprendemos que o uso de uma arrow function resolvia essa questão, porque o valor de seu this é definido no local onde ela é declarada em nosso código e seu valor não muda (diferente do this de uma function que é dinâmico). Sendo assim, o this da nossa armadilha será a instância de NegociacaoController:
```html
class NegociacaoController {

    constructor() {

        // código anterior omitido

        this._listaNegociacoes = new ListaNegociacoes(model => 
            this._negociacoesView.update(model));
    }

    // código posterior omitido
}
```
Essa solução evitou passarmos mais um parâmetro em nosso modelo, o contexto de invocação e ficou mais compacta e elegante.

Contudo, há ainda uma terceira solução, mas envolve a declaração de uma variável extra. Podemos guardar uma referência para a instância de NegociacaoController em uma variável. Geralmente essa variável é chamada de self:
```html
class NegociacaoController {

    constructor() {

        // a variável self guarda uma referência para this, instância de NegociacaoController

        let self = this;

        // aqui usei uma function tradicional, mas poderia ser uma arrow function também

        this._listaNegociacoes = new ListaNegociacoes(function(model) { 
            self._negociacoesView.update(model);
        });
    }

    // código posterior omitido
}
```
Quando nossa armadilha for executada, o self será nosso NegociacaoController.

<h2>Reutilização de código com Composição e Mixin</h2>
Esse exercício é de apenas reflexão. Você pode executar seu código se assim desejar.

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
                alert(`${this._nome} está voando`);
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
                // hum..precisamos implementar esse método também!
            }
        }

    </script>
</body>
</html>
```
Veja que o método voa de Passarinho não esta completo. Podemos até usar herança e herdar de Aviao, mas com certeza um passarinho não ligaMotor nem fechaPortas. Não podemos usar herança porque Passarinho não é um Aviao.

Reutilização de código através de composição
Uma maneira de solucionar esse problema é usar composição no lugar de herança. Na composição, a classe que deseja usar o método de outra possui uma instância dessa classe. Por mais que a instância tenha vários métodos, só chamamos aqueles que nos interessa:

Alterando nosso código para usar composição:
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
                alert(`${this._nome} está voando`);
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
                // guarda uma instância de avião
                this._aviao = new Aviao(nome);
            }

            voa() {
                // usa o método voa de Aviao
                this._aviao.voa();
            }
        }

    </script>
</body>
</html>
```
Nessa solução, quem usa a instância da classe Passarinho nem sabe que o método voa usa por debaixo dos panos uma instância de Aviao para funcionar. Veja que a composição tem a vantagem de podermos escolher quais métodos queremos reaproveitar, diferente da herança que é tudo ou nada. Contudo, veja que com composição precisamos escrever um pouco mais, pois temos que delegar as chamadas dos métodos voa de Passarinho para o voa de avião.

Ainda há outra forma de resolver este problema sem usar herança nem composição, mas usando mixin!

Reutilização de código através de mixin!
Com mixin podemos "pegar emprestado" o método de outra classe sem termos que ter uma instância dessa classe como é o caso de composição.

Vamos alterar a classe Passarinho removendo a instância de Aviao:
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
                alert(`${this._nome} está voando`);
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
                // executa o método `voa` de `Avião` usando como contexto a instância de `Passarinho`
                Reflect.apply(Aviao.prototype.voa, this, []);
            }
        }

    </script>
</body>
</html>
```
Olha ai o Reflect.apply novamente! Nesta linha de código estamos querendo executar o método voa da classe Aviao, mas usando como contexto o this da instância de Passarinho. O último parâmetro é um array que contém os parâmetros do método. Como voa não recebe parâmetro algum, passamos um array vazio.

Um detalhe: foi necessário fazer Aviao.prototype.voa porque métodos criados usando ES6 são adicionados no prototype. Qualquer método adicionando em prototype estará disponível para todas as instâncias.


<h2>Function.apply vs Reflect.apply</h2>
Aprendemos a alterar o contexto de execução de uma função/método através de Reflect.apply. Vejamos um trecho de código que faz isso:
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
O artefato Reflect é algo novo do ES6, contudo poderíamos conseguir com ES5 o mesmo resultado, assim:
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
Veja que estamos chamando o método apply, mas diretamente na função atribuída à propriedade this._armadilha. O resultado é o mesmo quando usamos Reflect.apply.

Apesar de um pouco menos verbosa, a ideia é que operações como essa sejam feitas através de Reflect, pois é uma primeira tentativa da linguagem JavaScript de centralizar funcionalidades como vimos em um único lugar.

Achei interessante mostrar como esse procedimento é feito no ES5 para que o aluno entenda que o ES6, além de trazer muitas novidades, procura padronizar bastante coisa da própria linguagem.

O ES6 não veio criar apenas novas funcionalidades, ele veio também padronizar o que já existia.

<h2>O padrão de projeto Observer</h2>

No final deste capítulo implementamos uma solução para automatizar o processo de atualização da view toda vez que o modelo mudar. O que fizemos na verdade foi implementar o padrão de projeto Observer.

O padrão de projeto Observer
Usamos o padrão de projeto Observer sempre que queremos notificar partes do sistema interessadas quando um evento importante for disparado em nosso sistema.

No contexto da nossa aplicação, entendemos um evento como o ato de adicionar ou esvaziar nossa lista de negociações. É a view que está interessada em observar esse evento e tomar uma ação, no caso, se atualizar com base no estado mais atual do modelo.

<h1>Seção 02 - Existe modelo mentiroso? O padrão de projeto Proxy</h1>

<h2>Modelo e retutilização em projetos</h2>

Para liberarmos o desenvolvedor da responsabilidade de atualizar programaticamente a View sempre que o modelo fosse atualizado, nós colocamos "armadilhas": funções que eram chamadas quando métodos específicos eram executados. Desta forma, chamávamos automaticamente a atualização da View. Nós declaramos o modelo no inicio, definimos as ações que deveriam acontecer quando ocorria a modificação, e assim liberamos o desenvolvedor da responsabilidade.

No entanto, esta solução deixa a desejar porque coloca código de infraestrutura - ou seja, de atualização da View - no modelo. Geralmente, a parte mais reutilizada de um sistema é o modelo. Então, ao acessarmos um modelo de negociação e encontrarmos um atributo chamado _armadilha, por exemplo:
```html
class ListaNegociacoes {

    constructor(armadilha) {

        this._negociacoes = [];
        this._armadilha = armadilha;
    }
//...

```
O que _armadilha tem a ver com a lista de negociação? Ela foi usada apenas para aplicar o artifício que chama a View automaticamente. E se tivéssemos outros métodos que quiséssemos monitorar e executar uma armadilha? Teríamos que alterar a classe do modelo. Então, o modelo é a parte mais reutilizável. Se agora não quisermos mais utilizar um sistema baseado em MVC, podemos optar em usar o AngularJS ou outro framework.

Mas se começamos a incluir diversos itens de infraestrutura, de recursos para que ela gere benefícios - como a atualização de View - começamos a não reutilizar continuamente o modelo. Encontraremos uma forma de manter o modelo intacto, sem utilizarmos armadilhas e ainda assim, conseguir executar um código arbitrário quando algum método for chamado. A seguir, encontraremos uma solução para a questão.

<h2>O padrão de projeto Proxy</h2>

Veremos qual é a solução que nos permite manter o modelo... Começaremos retirando o _armadilha de ListaNegociacoes:
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
Como removemos o _armadilha, o construtor de NegociacaoController deixará de funcionar e descobriremos uma forma de resolver problema da View. Temos ainda outro problema com a solução que usa o _armadilha: se quisermos monitorar os models Mensagem e Negociacoes, teremos que abrir a classe para alterar e colocar a armadilha - mas, não faremos isto.

Existe um famoso padrão de projeto chamado Proxy, que de forma resumida, é "um cara mentiroso". Vimos que não é bom inserirmos armadilhas na classe, porque estaremos perdendo a reutilização do modelo e teremos que repetir em todos os modelos do sistema. No entanto, o Proxy é idêntico ao objeto que queremos trabalhar, e teremos bastante dificuldade de diferenciá-los. Nós acessamos o Proxy como se ele fosse o objeto real, este último ficará escondido dentro do outro. Nós substituímos o objeto real, que só poderá ser acessado por meio do Proxy - que pode ou não ser executado em um código arbitrário se assim definirmos.

Observe que ListaNegociacoes tem o métodos adiciona() e negociacoes(), que também estarão presentes no Proxy.

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
A diferença está em que quando chamarmos o adiciona(), o Proxy delegará a chamada do método para o objeto encapsulado por ele. Mas ainda não temos benefícios com esta mudança. A vantagem está que colocaremos as armadilhas entre a chamada do Proxy e o objeto real. Toda vez que acessamos o Proxy, executaremos um código antes de chamarmos um método ou propriedade correspondente ao objeto real.

A boa notícia é que não precisamos implementar esse padrão de projeto.

A partir da versão 2015 do ECMAScript, a própria linguagem já possui um recurso de Proxy. Então, implementaremos o padrão de projeto Proxy usando o ES6.



<h2>Aprendendo a trabalhar com o Proxy</h2>

Vamos aprender a trabalhar com o Proxy. Começaremos comentando o código de NegociacaoController, porque ele não está válido devido a remoção da armadilha passada para o construtor.
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
Depois, abriremos o Console no navegador. Veremos uma mensagem de erro, porque a negociação está com problema. Começaremos criando um negociacao:
```html
let negociacao = new Negociacao(new Date(), 1, 100);
undefined
let negociacaoProxy = new Proxy(negociacao, {});
```

Criaremos um Proxy de negociacao. O segundo parâmetro é um objeto no formato literal {}, em que iremos configurar nossas armadilhas. Em seguida, digitaremos a seguinte linha:

negocicacaoProxy.valor
100
Ao acessarmos valor, o retorno será 100. Conseguimos ter acesso a quantidade e volume:

negocicacaoProxy.valor
100
negociacaoProxy.quantidade
1
negocicacaoProxy.volume
100
O Proxy terá exatamente o mesmo comportamento do objeto.

Proxy no console

No entanto, não queremos que o ninguém tenha acesso ao objeto real (negociacao), caso contrário, ninguém cairá nas armadilhas. Para isto, executaremos a seguinte linha no Console:

let negociacao = new Proxy(new Negociacao(new Date(), 1, 100), {});
Neste caso, negociacao é o Proxy:

negociacao é o Proxy

Agora, a única maneira de lidar com a instância de negociação criada é por intermédio do Proxy. Precisamos aprender como passamos o handlers ({}) para colocarmos nossas armadilhas. Adicionaremos outra tag <script> no index.html e depois, colocaremos o código que executamos no Console.
```html

<script>

    let negociacao = new Proxy(new Negociacao(new Date(), 2, 100), {

      });

</script>
```

Mais adiante, definiremos o handler.

<h2>Construindo armadilhas de leitura</h2>

