<h1>Se��o 01 - Pr�logo: regras, c�digo e manuten��o</h1>

<h2>Vis�o geral do projeto</h2>

Considera��es sobre curso
Sendo um curso avan�ado, voc� precisa ter conhecimento da linguagem, algo imprescind�vel. N�o � necess�rio ser um expert, inclusive tive um cuidado em avan�ar gradativamente em cada assunto para ajudar aqueles ainda t�midos no mundo desta fant�stica linguagem. Mas com certeza, ter um bom traquejo na linguagem tornar� sua experi�ncia ainda melhor neste curso.

Vis�o geral do projeto
O projeto desse curso ser� construir um cadastro de negocia��es de bolsa de valores. Cadastraremos novas negocia��es, inclusive, elas ser�o importadas de servi�os especializados, tudo aplicando o paradigma funcional e orientado a objetos ao, mesmo tempo, utilizando o melhor dos dois mundos.

Em um primeiro momento, o escopo da nossa aplica��o pode parecer bem reduzido, mas � o suficiente para aplicarmos novos recursos da linguagem JavaScript, ou ECMAScript 2015 (ES6), tecnicamente falando. Al�m disso, organizaremos nosso c�digo no modelo MVC (Model-View-Controller), aplicaremos padr�es de projeto, programaremos assincronamente com promises, renderizaremos templates e trabalharemos com proxies, entre outras coisas.

Projeto

Os servi�os que nossa aplica��o consumir� ser�o disponibilizados para voc� atrav�s de um servidor Node.js dispon�vel com o arquivo do projeto que usaremos at� o final. A ideia � que voc� otimize seu tempo aprendendo JavaScript sem perder horas e horas com infraestrutura, que muitas vezes � a vil� de todo treinamento.

Por fim, e n�o menos importante, fa�a o primeiro exerc�cio obrigat�rio deste treinamento. L� voc� ter� acesso ao projeto do curso, navegador que deve ser utilizado e a vers�o do Node.js a ser instalada, inclusive dicas de instala��o. � neste exerc�cio tamb�m que sugiro alguns treinamentos do Alura que podem ser feitos antes deste curso, para que seu aproveitamento seja ainda melhor.

<h2>(Obrigat�rio) Download do projeto e infraestrutura</h2>
O arquivo do projeto
Nosso projeto se chamar� aluraframe e deve ser baixado aqui. � um arquivo zip que deve ser descompactado em sua �rea de Trabalho ou qualquer outro diret�rio que voc� esteja confort�vel em trabalhar.

Existem duas subpastas dentro do projeto: server e client. A primeira pasta possui um servidor Node.js que ser� usado mais tarde, quando formos avan�ando com o treinamento, e pode ser ignorada por enquanto.

A segunda pasta � aquela que ser� carregada pelo nosso servidor, com a p�gina index.html e todos os scripts que criarmos durante o treinamento. � nesta pasta que voc� deve focar primariamente.

Por fim, dentro de aluraframe/client temos algumas subpastas j� criadas, n�o se preocupe com elas. Cada uma ser� esclarecida ao longo do curso.

Infraestrutura 1 - Chrome!
Neste treinamento � necess�rio usar o Google Chrome vers�o 50 ou superior. � importante essa escolha do navegador, porque estaremos usando muitos recursos do ES6, inclusive alguns que est�o sendo consolidados. Se voc� est� inseguro, n�o fique. Todos os browsers hoje possuem atualiza��o autom�tica e desde o IE 10 a atualiza��o do browser na plataforma Windows ficou independente do sistema operacional, isso significa que em pouqu�ssimas semanas todos os usu�rios de internet acabam recebendo o browser mais novo.

ATEN��O USU�RIOS MAC: nem sempre o Chrome � instalado na l�ngua portugu�s-brasil. Se o seu navegador exibe todas as op��es de menu em ingl�s, ele exibir� a data da tag <input type="date"> no formato m�s/dia/ano. N�o h� problema nenhum ir at� o final do curso neste formato, mas se voc� quiser que o input exiba a data no formato dia/m�s/ano, precisar� usar a vers�o em *portugu�s-brasil do Chrome. Voc� n�o precisa baixar novamente seu navegador, basta abrir seu terminal e executar o comando:

exec defaults write com.google.Chrome AppleLanguages '(pt-BR)'
Veja que essa solu��o s� � necess�ria se voc� deseja a data no formato bonitinho. Durante o treinamento, eu preferi pegar carona neste tipo de input ao inv�s de escrever um c�digo de formata��o. Existem zilh�es de solu��es a� fora para formata��o, mas a ideia � usarmos tudo o que o browser oferece.

DICA: Como saber se determinada funcionalidade do ES2015+ (ES6) � suportada por cada navegador?
Durante o treinamento, evitarei dizer que determinada funcionalidade s� funciona nesse ou naquele browser, porque pode ser que na semana seguinte o browser X passe a suport�-la. Contudo, para que o aluno tenha a informa��o mais recente dos recursos que utilizarei neste treinamento, ele pode consultar sempre que desejar: https://kangax.github.io/compat-table/es6/.

N�o ache que os recursos que lhe mostrarei s�o experimentais, muito pelo contr�rio, eles j� fazem parte da especifica��o ES6. Inclusive o conhecimento aqui adquirido pode ser aplicado na plataforma Node.js v6.0 ou superior, exceto a parte de manipula��o de DOM. Al�m disso, se voc� desenvolve usando algum tipo de transpiler, como Babel ou at� mesmo o famoso TypeScript, tamb�m ser� beneficiado. Com essas tecnologias, escrevemos um c�digo em ES6 e no final entregamos para o navegador o mesmo c�digo convertido para ES5, para garantir m�xima compatibilidade. Sendo assim, tudo o que voc� aprender aqui pode ser usado.

Infraestrutura 2 - Node.js
Em um certo ponto do nosso treinamento, precisaremos um servidor web que disponibilize URL's para serem consumidas pela nossa aplica��o. J� disponibilizamos um para voc� dentro do projeto. Para que ele funcione, voc� precisa ter no m�nimo o Node.js v4.0 instalado.

Voc� pode baixar o Node.js da sua plataforma preferida (Windows, MAC ou Linux) em https://nodejs.org. Depois de instal�-lo, para saber se ele est� funcionando, basta abrir seu terminal preferido da sua plataforma e executar o comando (logo a seguir, veja as dicas caso o comando n�o funcione):

node --version
Este comando deve exibir a vers�o do Node instalada no terminal. Se por acaso o comando node n�o for um comando v�lidos tente o seguinte:

1 - Windows: n�o mude o diret�rio padr�o da instala��o do Node.js. H� relatos que em algumas vers�es do Windows a pasta do Node n�o � colocada no PATH do Windows, sendo necess�rio adicion�-la manualmente. N�o sabe como? Temos um treinamento de prompt no Windows que pode ajud�-lo nesta tarefa.

2 - Linux: algumas distribui��es Linux j� possui um bin�rio chamado node, que n�o tem nenhuma rela��o com o Node.js. Nestas distribui��es, o bin�rio passa a se chamar nodejs. Sendo assim, em todo lugar que eu referenciar o comando node ele deve ser trocado para nodejs.

<h2>Pr�logo: regras, c�digo e manuten��o</h2>

Este v�deo � um pr�logo do que est� por vir. A trama que se desenrolar� ser� a implementa��o a funcionalidade de inclus�o de uma nova linha na tabela com base na entrada do usu�rio, usando a manipula��o de DOM e outras ferramentas que aprendemos em JavaScript. Se voc� j� sente bastante seguro sobre esta parte, pode avan�ar para o �ltimo v�deo da aula 1 e conferir os desdobramentos finais. Caso contr�rio, voc� pode recordar o conte�do agora, com explica��es detalhadas sobre o que est� sendo feito. Assim teremos a chance de caminharmos juntos.

Come�aremos abrindo o Visual Studio Code - mas voc� pode usar o seu editor favorito. Abriremos a pasta "client". Trabalharemos com a pasta "server" apenas no fim do curso.

client

Dentro de "client", encontraremos diversas subpastas que ainda est�o vazias, mas o arquivo mais importante ser� o index.html, no qual encontraremos osinputs. Sabemos que para capturarmos as informa��es na p�gina, teremos que identificar os elementos no DOM. Por isso, adicionamos um id em cada input, como no exemplo do seguinte trecho:

```html
<form class="form">

      <div class="form-group">
          <label for="data">Data</label>
          <input type="date" id="data" class="form-control" required autofocus/>
      </div>
  //...
```
Ent�o, conseguimos obter facilmente cada input desse formul�rio usando o id de cada um. Em seguida, vamos criar o arquivo aluraframe/client/js/index.js. E para n�o corrermos o risco de esquecermos de import�-lo, abaixo da tag <tfoot>, criaremos a tag script que importar� o arquivo index.js.

<script src="js/index.js"></script>
Uma das vantagens do Visual Studio Code � que ele j� possui o Emmet, assim n�o precisaremos instalar nada. O plugin transformar� a sintaxe automaticamente na importa��o.

Dentro do arquivo index.js, adicionaremos uma lista com todos os campos que temos na nossa p�gina. Desta forma, poderemos varrer cada um deles e perguntar "qual � o seu valor?". Assim poderemos montar as colunas da nossa tr. Vamos criar uma vari�vel que receber� o nome do campos, que ser� um array. Cada campo ser� o resultado de um document.querySelector(), uma API do DOM que nos permite buscar um elemento usando um setor CSS.

```html
var campos = [
    document.querySelector('#data'),
    document.querySelector('#valor'),
    document.querySelector('#quantidade')
];

console.log(campos);
```
No fim, adicionamos o console.log.

Vamos recarregar a p�gina no navegador e ver como est� o formul�rio agora.

formulario

A ordem do elementos no nosso array ser�: data, quantidade e valor. J� conseguimos imprimir os campos, agora, precisamos que ao clicarmos no bot�o "Incluir", o formul�rio seja submetido. Durante a submiss�o pegaremos o valor de cada input e montaremos dinamicamente a tr com cada coluna. Lembrando que como estamos usando HTML5, enquanto n�o preenchermos os campos, os dados do formul�rio n�o ser�o submetidos. Em seguida, no editor, pediremos para o document.querySelector() selecionar a classe .form, porque encontraremos a mesma no nosso formul�rio. Tamb�m adicionaremos um evento submit, usando o addEventListener. Quando o evento for disparado, executaremos uma fun��o de callback que ser� chamada quando algu�m clicar no formul�rio.
```html
document.querySelector('.form').addEventListener('submit', function(event) {

  alert('oi');
});
```
Observe que adicionamos o alert que exibir� a mensagem oi.

alert oi

Nosso formul�rio est� funcionando corretamente. Agora, sempre que formos submeter o nosso formul�rio, iremos submeter input do array e criar um tr com os valores dos mesmos. Em seguida, adicionaremos um vari�vel chamada tr. Tamb�m criaremos um novo elemento, usando o document.createElement.
```html
document.querySelector('.form').addEventListener('submit', function(event) {

  var tr = document.createElement('tr');
});
```
Estamos vendo como fazer isso com JavaScript. Agora, adicionaremos as tds da tr. Vamos usar o forEach() do JavaScript, uma maneira funcional de voc� iterar um array sem precisar do loop for:

```html
document.querySelector('.form').addEventListener('submit', function(event) {

  var tr = document.createElement('tr');

  campos.forEach(function(campo) {

    })
});
```
A primeira vez que passarmos o forEach, teremos acesso ao primeiro elemento (#data), nas vezes seguintes acessaremos a #quantidade e o #valor. Depois, criaremos um td dinamicamente que n�o conter� nenhuma informa��o e informaremos que o conte�do do mesmo ser� campo.value. Com o appendChild, adicionaremos a td como filho.

```html
document.querySelector('.form').addEventListener('submit', function(event) {

  var tr = document.createElement('tr');

  campos.forEach(function(campo) {

      var td = document.createElement('td');
      td.textContent = campo.value;
      tr.appendChild(td);

    })
});
```
At� aqui, n�o fizemos nada muito avan�ado.

Ent�o, quando chegarmos no fim do forEach(), ele ter� criado uma td para cada campo. O que precisamos fazer � incluir uma tr na tabela.

Em seguida, abaixo do appendChild(),adicionaremos a vari�vel tdVolume:

var tdVolume = document.createElement('td');
tdVolume.textContent = campos[1].value * campos[2].value;

tr.appendChild(tdVolume);
Agora, teremos que incluir a trno arquivo index.html como filha da tag <tbody>. Come�aremos adicionando o <tbody> no arquivo JS, index.js.
```html
var tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', function(event) {

    var tr = document.createElement('tr');

    campos.forEach(function(campo) {
        var td = document.createElement('td');
        td.textContent = campo.value;
        tr.appendChild(td);
    });
```
O valor da td ser� o campo na posi��o 1, referente a #quantidade, multiplicado pelo campo na posi��o 2, referente ao #valor. Inclu�mos tamb�m a tr do appendChild. Por que n�o adicionamos o tbody dentro do querySelector()? Porque ter�amos que buscar o tbody a cada submiss�o. Da forma como escrevemos o c�digo, n�o teremos que refazer a busca no DOM.

Agora, no fim do arquivo adicionaremos o tbody seguido pelo appendChild():

tbody.appendChild(tr);
O c�digo ficou assim:

```html
var campos = [
    document.querySelector('#data'),
    document.querySelector('#valor'),    
    document.querySelector('#quantidade')

];

var tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', function(event) {

    var tr = document.createElement('tr');

    campos.forEach(function(campo) {
        var td = document.createElement('td');
        td.textContent = campo.value;
        tr.appendChild(td);
    });

    var tdVolume = document.createElement('td');
    tdVolume.textContent = campos[1].value * campos[2].value;

    tr.appendChild(tdVolume);

    tbody.appendChild(tr);

});
```
Vamos recarregar a p�gina e abrir o console. Ao preenchermos os campos com uma data aleat�ria, veremos que n�o aparecer� nada no console. Isso acontece, porque quando recarregamos a p�gina, perdemos a tr. Por isso, adicionaremos o event.preventDefault(), assim indicaremos para o JavaScript que ele n�o submeta o formul�rio e evite que a p�gina seja recarregada. Vemos que os valores aparecer�o na tabela abaixo:

```html
var campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor') 
];

var tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', function(event) {

    event.preventDefault();

    var tr = document.createElement('tr');

    campos.forEach(function(campo) {
        var td = document.createElement('td');
        td.textContent = campo.value;
        tr.appendChild(td);
    });

    var tdVolume = document.createElement('td');
    tdVolume.textContent = campos[1].value * campos[2].value;

    tr.appendChild(tdVolume);

    tbody.appendChild(tr);

});
```
pagina n�o recarregada

Por�m, assim que terminarmos de nos cadastrar, teremos que limpar os campos. E para melhorar a experi�ncia do usu�rio, faremos com que o campo "Data" ganhe foco. Adicionaremos o campos[], indicando cada posi��o e no primeiro, vamos colocar o focus:
```html
campos[0].value = '';
campos[1].value = 1;
campos[2].value = 0;

campos[0].focus();
At� agora nosso c�digo ficou assim:

var tdVolume = document.createElement('td');
tdVolume.textContent = campos[1].value * campos[2].value;

tr.appendChild(tdVolume);

tbody.appendChild(tr);

campos[0].value = '';
campos[1].value = 1;
campos[2].value = 0;

campos[0].focus();

});
```
Faremos um novo teste, usando um data aleat�ria. Vemos que os dados aparecer�o corretamente na tabela final e os campos do formul�rio est�o limpos novamente. Aparentemente, tudo est� funcionando corretamente, mas o c�digo ainda tem pontos que precisam ser analisados.

<h2>Enrolando-se com o DOM</h2>

J� conseguimos incluir linhas na tabela com base na entrada do usu�rio. Mas verificando a especifica��o do sistema que pede a visualiza��o da totalidade do volume no rodap� da tabela. Tamb�m precisamos que a data seja exibida no formato data/m�s/ano e que, ap�s a cria��o da negocia��o, esta n�o seja modificada. A lista de negocia��o exibida na tela n�o poder� ter os dados alterados ou removidos, ela s� poder� receber novos itens. Se quisermos uma nova lista, ela dever� ser criada do zero.

Observe que atualmente nosso c�digo n�o indica onde est� a negocia��o. E onde adicionaremos a totalidade do volume? Ou seja, o c�digo n�o evidencia o que � uma negocia��o, e ainda mistura os dados de negocia��o com a apresenta��o dos mesmos na tabela. Seria interessante separarmos os dados da apresenta��o visual, desta forma conseguir�amos adicionar ao primeiro as regras de neg�cio. Com os dados separados, poderemos tamb�m modificar a utiliza��o dos dados (tabela e lista). Por isso, iremos propor a utiliza��o do modelo MVC (Model-View-Controller), declarando classes que representam nossos modelos (dados) e classes que representam nossas views (tela). As a��es do usu�rio ser�o interceptadas por uma Controller, que ir� alterar os dados, o Model, enquanto a View ser� atualizada para exibir o estado mais atual. Desta forma, as regras de neg�cio n�o estar�o espalhadas pela View, elas estar�o no modelo. Mais adiante, iremos implementar o modelo utilizando o paradigma da Orienta��o de Objetos.

Com o modelo j� finalizado, e j� podendo identificar a negocia��o, poderemos partir para a implementa��o da View e da Controller.

Ent�o, mais adiante implementaremos a negocia��o usando o paradigma da Orienta��o de Objetos.


<h1>Se��o 02 - Especificando uma Negocia��o</h1>
<h2>O que � um modelo?</h2>
Anteriormente, n�o ficou claro onde se encontrava a negocia��o no c�digo. N�s vimos que havia ficado confuso onde estava o modelo e a apresenta��o. Definimos que seria interessante separar o modelo e a visualiza��o, aplicando o MVC (Model-View-Controller). Mas o que � um modelo? Trata-se de uma abstra��o do mundo real. Por exemplo, um analista de mercado que quer entender como o mercado funciona, criar� um modelo em que ele possa dar entradas e executar determinado procedimentos para tentar prever como � o seu funcionamento. No nosso caso, faremos a mesma coisa.

N�s queremos criar um modelo de negocia��o que programaticamente deve ser capaz de fazer tudo o que seria feito no mundo real. Para materializarmos o modelo de negocia��o, usaremos um recurso do paradigma da programa��o orientada de objetos: a cria��o de classes. Antes do ES6, j� era poss�vel aplicar o paradigma com o JavaScript, por�m, a sintaxe era mais complexa. Por isso, o ES6 trouxe novos recursos para que seja mais f�cil a aplica��o do paradigma.

Ent�o, primeiramente criaremos uma classe, ou seja, uma especifica��o da negocia��o com a abstra��o da mesma, dentro do c�digo.

<h2>A classe Negocia��o</h2>
A seguir, criaremos a classe negociacao. N�s n�o usaremos mais a classe index.js. N�s tamb�m seguiremos a seguinte conven��o: dentro da pasta js, encontramos a app, que cont�m todo o c�digo da aplica��o. Dentro dela, encontraremos a subpasta models, em que est�o armazenados todos os modelos. Tamb�m convencionaremos que queremos criar a classe Negociacao.js, o script que iremos criar, come�ar� em caixa alta (com letra mai�scula). Isto � um pouco incomum, mas isto deixar� claro que o JS � uma classe. No arquivo index.html, importaremos a Negociacao.js.

Para criarmos a classe com o ES6, usaremos a sintaxe class Negociacao. Ela ter� o mesmo nome do arquivo, propositalmente, para que haja uma paridade e maior organiza��o - mas n�o era obrigat�rio. E como definiremos os atributos de uma classe no ES6? Utilizando a fun��o constructor().
```html
class Negociacao {

    constructor() {

        this.data = new Date();
        this.quantidade = 1;
        this.valor = 0.0;
    }
}
```
Especificamos que a negocia��o ter�: data, quantidade e valor. Toda negocia��o ter� a data atual por padr�o, logo adicionamos o Date(). Para quantidade, come�aremos com o valor padr�o 1 e o valor, come�ar� de 0.0.

Em seguida, no arquivo index.html, vamos incluir uma nova tag <script>. Nosso objetivo ser� criar duas inst�ncia de negocia��o, ou seja, dois objetos criados a partir da classe Negociacao. Usaremos as vari�veis n1 e n2.
```html
<script>

    var n1 = new Negociacao();
    console.log(n1);

    var n2 = new Negociacao();
    console.log(n2);

</script>
```
Vamos recarregar o navegador e abrir o Console. Veja que j� aparecem duas Negociacoes:

duas negociacoes impressas

Ambas ganharam uma data, quantidade e o valor. Observe que nenhuma das Negociacoes tinham as propriedades especificadas no c�digo. Elas foram impressas desta forma porque seguem a mesma classe.

Observe que utilizamos a palavra new no nosso c�digo, dentro das vari�veis:
```html
var n2 = new Negociacao();
console.log(n2);
```
Vejamos o que aconteceria se ela n�o fosse utilizada na vari�vel n2:
```html
var n2 = Negociacao();
console.log(n2);
```
No navegador, uma mensagem de erro seria exibida no Console.

mensagem de erro

Somos informados que a classe constructor n�o pode ser invocada sem operador new. O operador new � o respons�vel pela inicializa��o do this de cada objeto criado. Cada objeto ter� seu this com suas propriedades. O JavaScript � muito bonzinho e nos avisa do nosso erro:
```html
class Negociacao {

    constructor() {

        this.data = new Date();
        this.quantidade = 1;
        this.valor = 0.0;
    }
}
```
Isto ocorre porque ser� o operador new que far� o this ser correspondente ao objeto criado no index.html. Ent�o, se especificamos que a quantidade da vari�vel n1 � igual a 10, saberemos que alteramos o valor unicamente da mesma. A vari�vel n2 continuar� com o mesmo valor.
```html
<script>

    var n1 = new Negociacao();
    n1.quantidade = 10;
    console.log(n1);

    var n2 = new Negociacao();
    n2.quantidade = 20;
    console.log(n2);

</script>
```
O operador new � bastante importante por ser o respons�vel em criar um novo this para cada inst�ncia da classe. O this � uma vari�vel impl�cita que sempre apontar� para a inst�ncia que est� executando a opera��o naquele momento.

Agora, se executarmos o c�digo, no Console do navegador, veremos que cada Negociacao ter� um valor diferente.

Negociacoes impressas 2

Caso o this n�o variasse para cada inst�ncia, quando alter�ssemos o valor da quantidade de n1, mudar�amos tamb�m a quantidade de n2. Por isso, o JavaScript n�o me deixa invocar uma inst�ncia sem adicionar termo new.

Ent�o, realizamos o primeiro teste com duas estruturas semelhantes, mas com propriedades de valores diferentes.

<h2>Construtor da classe e m�todos</h2>
Continuaremos com a constru��o do c�digo. A primeira a��o ser� apagarmos uma das Negociacoes, no arquivo index.html:

```html
<script src="js/app/models/Negociacao.js"></script>
<script>

    var n1 = new Negociacao();
    n1.quantidade = 10;
    console.log(n1);

</script>
```
Agora, definiremos tamb�m o valor da vari�vel, que ser� igual a 200.50.
```html
<script>

    var n1 = new Negociacao();
    n1.quantidade = 10;
    n1.valor = 200.50;
    console.log(n1);

</script>
```
O valor j� ser� impresso no Console.

valor no console

No entanto, existe uma outra forma para passarmos uma inst�ncia de Negociacao. Imagine que no momento em que criamos uma Negociacao e a inst�ncia est� nascendo, j� queremos que seja definida a quantidade, valor e data. Queremos que esses dados sejam passado imediatamente para o construtor.

Se o contructor() � uma esp�cie de fun��o, significa que ela aceitar� par�metros. Considerando isto, adicionaremos os valores para Negocicao() no n1:
```html
<script>

    var n1 = new Negociacao(new Date(), 5, 700);

</script>
```
Em Negociacao.js, adicionaremos os par�metros de constructor():
```html
class Negociacao {

    constructor(data, quantidade, valor) {

        this.data = data;
        this.quantidade = quantidade;
        this.valor = valor;

    }
}
```
Observe que jogamos os par�metros para as propriedades.

Aten��o: Fique atento sobre a ordem dos par�metros. Caso a ordem seja alterada, no HTML, os valores das inst�ncias ficar�o incorretos.

Faremos um teste no Console para ver se tudo funcionou corretamente:

teste no console

Os valores coincidem com os que especificamos no HTML. Por�m, ainda n�o adicionamos o volume - a quantidade multiplicada pelo valor. Faremos isto agora:
```html
<script>

    var n1 = new Negociacao(new Date(), 5, 700);
    var volume = n1.quantidade * n1.valor;
    console.log(volume);

</script>
```
Vamos imprimir o volume no Console:

volume

O valor 3500 � o resultado da opera��o de multiplica��o. Mas estamos fazendo uma programa��o procedural, e sempre que o programador precisar do volume, ele mesmo ter� que realizar este c�lculo. Mas ent�o, ele precisaria j� saber como calcular o volume? Aumentaria a chance de erro. O que podemos fazer � dotar a classe Negociacao com comportamento. A programa��o orientada a objeto tem uma forte conex�o entre o dado e o comportamento. Os dois caminharam juntos.

Caso voc� tenha alguma d�vida sobre o assunto, encontrar� uma explica��o mais detalhada na seguinte exemplifica��o.

Em seguida, no index.html, em vez de incluirmos o c�lculo do volume na vari�vel n1, faremos uma pergunta para a classe.
```html
<script>

    var n1 = new Negociacao(new Date(), 5, 700);
    var volume = n1.obtemVolume();
    console.log(volume);

</script>
```
Depois, teremos que adicionar um m�todo em Negociacao.js. Iremos combinar algo: quando criamos uma fun��o dentro de uma classe, n�s chamaremos a primeira de m�todo. Quando a fun��o estiver fora da classe, continuar� sendo chamada de fun��o. Ent�o, criaremos o m�todo obtemVolume dentro da classe Negociacao:
```html
class Negociacao {

    constructor(data, quantidade, valor) {

        this.data = data;
        this.quantidade = quantidade;
        this.valor = valor;

    }

    obtemVolume() {

        return this.quantidade * this.valor;
    }
}
```
Agora, ao executarmos o c�digo, o valor 3500 aparecer� novamente no Console:

volume 2

O valor foi calculado corretamente. O objeto sabe lidar com as propriedades trabalhadas. Logo, a regra de como obter o volume est� no pr�prio objeto. Voltamos a ter uma conex�o entre dado e comportamento.

<h2>Encapsulamento</h2>

J� conseguimos trabalhar com a classe Negociacao,precisamos implementar a seguinte regra de neg�cio: ap�s criada a negocia��o, esta n�o poder� ser alterada. Mas at�, agora, podemos fazer altera��es.

Vamos ver o que acontece se adicionamos um valor para quantidade diferente do que especificamos no par�metro.
```html
<script>

    var n1 = new Negociacao(new Date(), 5,700);
    n1.quantidade = 10;
    console.log(n1.quantidade);
</script>
```
Qual valor ser� impresso no Console, 5 ou 10?

regra alterada

Ele imprimiu o valor rec�m adicionado 10. Isto pode causar problemas... Imagine que acabamos de fazer uma negocia��o e combinamos um determinado valor, mas depois decidimos alter�-lo para benef�cio pr�prio. Nosso objetivo � que as propriedades de uma negocia��o sejam somente para leitura. No entanto, a linguagem JavaScript - at� a atual data - n�o nos permite usar modificadores de acesso. N�o podemos dizer que uma propriedade seja apenas leitura (ou grava��o). O que podemos � utilizar a conven��o de que nos atributos das propriedades de uma classe que n�o pode ser modificada, usaremos um underline (_).
```html
class Negociacao {

    constructor(data, quantidade, valor) {

        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;

    }

    obtemVolume {

        return this._quantidade * this._valor;
    }
}
```
Esta ser� uma conven��o que informar� ao programador que as propriedades que contenham _ s� poder�o ser acessadas pelos pr�prios m�todos da classe. Isto significa, que mesmo podendo imprimir a propriedade _quantidade com outro valor, n�o dever�amos mais poder acess�-la. O _ funciona como um aviso dizendo: "programador, voc� n�o pode alterar esta propriedade!". Ent�o, se usamos a conven��o de utilizar o prefixo, como faremos para imprimir a classe? Se n�o podemos acess�-la, como podemos fazer isso? Para isto, criou-se m�todos chamados acessadores, em que ser�o utilizados o prefixo get. No caso, em Negociacao.js, adicionaremos o m�todo getData(), que retornar� o _data. Usaremos tamb�m o getQuantidade() e o getValor que ter�o finalidades semelhantes.

```html
obtemVolume() {

    return this._quantidade * this._valor;

}

getData() {
    return this._data;
}

getQuantidade() {
    return this._quantidade;
}

getValor() {
    return this._valor;
}
```
Os m�todos da classe poder�o acessar os atributos que levam _. No entanto, de acordo com a nossa conven��o, algu�m fora da classe n�o poder� fazer o mesmo. Por isso, em index.html, j� que n�o poderemos chamar n1._quantidade, chamaremos n1.getQuantidade().
```html
<script>

    var n1 = new Negociacao(new Date(), 5, 700);
    console.log(n1.getQuantidade());
    console.log(n1.getData());
    console.log(n1.getValor());
</script>
```
Observe que estamos acessando os demais campos.

valores no console 

Os valores ser�o impressos corretamente no Console. Em seguida, modificaremos o obterVolume() para getVolume em Negocicacao.js:
```html
getVolume() {

    return this._quantidade * this._valor;

}

getData() {
    return this._data;
}

getQuantidade() {
    return this._quantidade;
}

getValor() {
    return this._valor;
}
E adicion�-lo no index.html:

<script>

    var n1 = new Negociacao(new Date(), 5, 700);
    console.log(n1.getQuantidade());
    console.log(n1.getData());
    console.log(n1.getValor());
    console.log(n1.getVolume());
</script>
```
No navegador, veremos que os valores quantidade, data, valor e volume ser�o impressos corretamente.

<h2>A sintaxe get</h2>
Vamos ver como podemos "enxugar" a nossa classe Negociacao. N�s criamos m�todos de leitura para poder acessar �s vari�veis que convencionamos que s�o privadas, ou seja, s� a pr�pria classe poder� acess�-las. Mas existe um atalho que poder� ser usado quando queremos acessar uma propriedade: usaremos o get.
```html
get volume() {

    return this._quantidade * this._valor;

}

get data() {
    return this._data;
}

get quantidade() {
    return this._quantidade;
}

get valor() {
    return this._valor;
}
```
Observe que fizemos pequenos ajustes no c�digo. O get foi seguido de um m�todo, que tem o nome das propriedades antes de adicionarmos o _. Essa altera��o ir� trazer mudan�as tamb�m no arquivo index.html. Agora, poderemos substituir o n1.getQuantidade por n1.quantidade.
```html
<script>

    var n1 = new Negociacao(new Date(), 5, 700);

    console.log(n1.quantidade);
    console.log(n1.data);
    console.log(n1.valor);
    console.log(n1.volume);
</script>
```
Estamos criando uma propriedade getter de acesso � leitura. E mesmo sendo um m�todo, poderemos acess�-lo como uma propriedade. Mas, debaixo dos panos, ele continuar� sendo executado como um m�todo.

console

Veja que os valores foram acessados corretamente, inclusive o valor de volume. Ent�o, por mais que os valores se apresentem como uma propriedade, por debaixo dos panos, est� sendo chamado um m�todo. Agora, mesmo que defin�ssemos o valor 1000 para quantidade, ele n�o seria aplicado.
```html
<script>

    var n1 = new Negociacao(new Date(), 5, 700);
    n1.quantidade = 1000;        
    console.log(n1.quantidade);
    console.log(n1.data);
    console.log(n1.valor);
    console.log(n1.volume);
</script>
```
O valor 1000 n�o ser� repassado para o _quantidade. O valor continuar� sendo 5:

valor de quantidade inalterado

Isto acontece quando a propriedade � um getter (ou seja, � de leitura), n�o podemos atribuir para a mesma um valor. Mas ainda podemos acess�-la usando o n1._quantidade.
```html
<script>

    var n1 = new Negociacao(new Date(), 5, 700);
    n1.quantidade = 1000;        
    n1._quantidade = 5000;
    console.log(n1.quantidade);
    console.log(n1.data);
    console.log(n1.valor);
    console.log(n1.volume);
</script>
```
quantidade alterada

No console, vemos que o valor da quantidade foi alterado para 5000. Mas a propriedade quantidade � somente de leitura, n�o aparece o _. Assim, se o programador tentar atribuir um valor, ele n�o ser� setado. Ser� que existe uma forma de garantirmos que uma negocia��o, depois de criada, n�o ser� alterada?

<h2>Objetos imut�veis</h2>
N�s usaremos um artif�cio existente h� algum tempo na linguagem JavaScript: "congelaremos" um objeto e com isso, qualquer altera��o nas suas propriedades ser� ignorada. Isso funcionar� no caso da classe Negociacao, porque nem mesmo os m�todos da classe podem alterar as propriedades de uma negocia��o criada.

Para isso, usaremos o m�todo Object.freeze() e vamos congelar o n1.
```html
<script>

    var n1 = new Negociacao(new Date(), 5, 700);

    Object.freeze(n1):
    n1._quantidade = 100000000000;

    console.log(n1.quantidade);
    console.log(n1.data);
    console.log(n1.valor);
    console.log(n1.volume);
</script>
```
Por conven��o, n�o podemos fazer isso. Mas ser� que conseguimos alterar um objeto congelado? Faremos um teste. No nosso caso, qual ser� o valor da quantidade: 5 ou 100000000000?

objeto congelado

No Console, veremos o valor 5, isto significa que n�o conseguimos alterar e o objeto foi congelado. Lembrando que quantidade, � uma propriedade que chamamos em Negociacao.js, que por "debaixo dos panos", rodar� como um m�todo e retornar� this._quantidade:
```html
 get quantidade() {
      return this._quantidade;
 }
```
Mesmo colocando n1._quantidade = 100000000000; no index.html, esse valor parece ter sido ignorado. Isso � bom, agora, o desenvolvedor j� n�o conseguir� alterar esta quantidade. Vamos fazer um pequeno teste que nos mostrar� o que est� congelado no Console:
```html
 <script>

     var n1 = new Negociacao(new Date(), 5, 700);

     console.log(Object.isFrozen(n1));
     Object.freeze(n1);
     console.log(Object.isFrozen(n1));
     n1._quantidade = 100000000000;

     console.log(n1.quantidade);
     console.log(n1.data);
     console.log(n1.valor);
     console.log(n1.volume);
 </script>
```
No Console, veremos o seguinte resultado:

Console com false e true

O objeto antes n�o era congelado e depois, foi. E por isso, n�o conseguimos alterar _quantidade, o atributo que por conven��o definimos ser privado. Por�m, essa solu��o � procedural, porque voc� ter� sempre que lembrar de congelar a inst�ncia. No entanto, queremos que ao utilizarmos o new Negociacao, ele j� devolva uma inst�ncia congelada. N�s podemos fazer isso, congelando a inst�ncia no construtor. Em Negociacao.js, adicionaremos Object.freeze() ap�s �ltimo this:
```html
class Negociacao {

    constructor(data, quantidade, valor) {

        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this);

    }

//...
```
No entanto, voc� se lembra que o this � uma vari�vel impl�cita? E quando algum m�todo � chamado, temos acesso � inst�ncia trabalhada? O this do Object.freeze() ser� o n1 no index.html.
```html
<script>

    var n1 = new Negociacao(new Date(), 5, 700);

    n1._quantidade = 100000000000;

    console.log(n1.quantidade);
    console.log(n1.data);
    console.log(n1.valor);
    console.log(n1.volume);
</script>
```
Ent�o, quando damos uma new Negociacao, ele j� devolver� uma inst�ncia congelada. Aparentemente, resolvemos o nosso problema. N�o � uma solu��o 100% de encapsulamento, porque ainda conseguimos enxergar o n1._quantidade - em linguagens como Java ou C#, n�o ir�amos enxerg�-lo. Em JS, enxergamos a _quantidade, mas n�o conseguimos alter�-la. Desta forma, garantimos que a negocia��o n�o ser� modificada.

Vamos verificar mais adiante se de fato a Negociacao n�o ser� alterada.


<h2>A inst�ncia � imut�vel mesmo?</h2>
Pela regra de neg�cio, uma negocia��o deve ser imut�vel e n�o pode ser alterada depois de criada. Mas faremos um novo teste e nele vamos alterar a data da negocia��o. J� fizemos isto com a quantidade. Agora, criaremos a vari�vel amanha que ser� referente a data de amanh�.

Usaremos o new Date() somado com 1. Sempre que trabalharmos com data, utilizaremos o setDate(). Como a data atual � 10, setaremos com o valor 11. Ent�o, diremos que n1.data ser� igual a vari�vel amanha.
```html
<script src="js/app/models/Negociacao.js"></script>
<script>

    var n1 = new Negociacao(new Date(), 5, 700);

    console.log(n1.data);

    var amanha = new Date();
    amanha.setDate(11);

    n1.data = amanha;

    console.log(n1.data);
  </script>
```
Para verificar se o c�digo funciona corretamente, adicionamos o console.log(). Se Negocia��o for realmente imut�vel, a data n�o poder� ser alterada.

negociacao imutavel

Vemos que ela continuou imut�vel.

Agora, quero fazer um teste diferente. N�o vamos mais trabalhar com a vari�vel amanha e vamos substitu�-la por n1.data.setDate(). Como n�o � um m�todo que existe na data, iremos defini-lo com 11:
```html
<script>

    var n1 = new Negociacao(new Date(), 5, 700);

    console.log(n1.data);

    n1.data.setDate(11);

    console.log(n1.data);
</script>
```
Ser� que a data ser� alterada?

data alterada

Veja que a data foi alterada, no segundo console a data exibida foi 11. Isto significa que a nossa Negociacao � mut�vel. Assim, algu�m pode acessar o sistema e alter�-lo, o que n�o pode acontecer.

Mas se n�s utilizamos o Object.freeze(), por que isso aconteceu? O Object.freeze � shallow, ou seja, ele ficar� na superf�cie. Quando congelamos um valor, n�o podemos alter�-lo. Por�m, como _data � um objeto, n�o entrar� como uma das propriedades do objeto. Ent�o, n�o � feito o que chamamos de deep freeze. Quando trabalhamos com um objeto e dentro dele temos outras propriedades, estas n�o ficar�o congeladas. Para resolver isso, aplicaremos uma aplica��o defensiva mais adiante.

<h2>Programa��o defensiva</h2>

Uma maneira de tornar a inst�ncia imut�vel � quando chamam a propriedade getter data e � retornado uma nova inst�ncia de Date com a mesma data da negocia��o. N�s devolveremos uma nova refer�ncia, um novo objetivo. Atualmente, o get do arquivo Negociacao.js est� assim:
```html
get volume() {

    return this._quantidade * this._valor;

}

get data() {
    return this._data;
}

get quantidade() {
    return this._quantidade;
}

get valor() {
    return this._valor;
}
```
Vamos modificar o retorno do get data():
```html
get data() {
    return new Date(this._data.getTime());
}
```
O getTime de uma data retornar� um n�mero long com uma representa��o da data. Se digitarmos no Console n1.data.getTime(), ele retornar� um n�mero que representar� a data:

retorno da data

No construtor de Date(), este n�mero ser� aceito para a constru��o de uma nova data. Ent�o, quando pedimos uma nova data, ela ser� criada baseada na data da negocia��o. Trata-se de um novo objeto. Se tentarmos alterar no data do index.html, apenas a c�pia ser� alterada - o novo objeto que retornei date, enquanto o interno seguir� inalterado. Isto � o que chamamos de programa��o defensiva. Vamos testar o nosso c�digo, ap�s as altera��es feitas no get data() do Negociacao.js. Depois de recarregarmos a p�gina no navegador, veremos a seguinte data no Console:

datas no console

Dessa vez n�o conseguimos alterar as datas no Console. Isto ocorreu porque apesar de termos usado o n1.data.setDate(11), ele n�o retornar� a data original do objeto que ele j� tem. Ele criar� um novo objeto, uma nova refer�ncia baseada naquela data. Se alteramos o objeto, como fizemos no set.Date(), n�o modificaremos a data da negocia��o. Devemos ter o mesmo cuidado com o construtor. Porque se passamos uma data no construtor do arquivo index.html, por exemplo, adicionando uma vari�vel hoje.
```html
<script>

    var hoje = new Date();

    var n1 = new Negociacao(hoje, 5, 700);

    console.log(n1.data);

    hoje.setDate(11);

    console.log(n1.data);
</script>
```
Observe que em vez de passarmos o new Date(), usamos o hoje. Quando a Negociacao receber o objeto hoje, ele guardar� uma refer�ncia para o mesmo objeto. Isto significa que se alteramos a vari�vel hoje, modificaremos a data que est� na Negociacao. Se executarmos o c�digo, a data ser� alterada para o dia 11.

data alterada 2

Por isso, usaremos o getTime() no construtor.
```html
class Negociacao {

    construtor(data, quantidade, valor) {

        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this);

    }
//...
```
Ao fazermos isto, j� n�o conseguiremos alterar a refer�ncia no index.html, porque o que estamos guardando no Negociacao n�o � mais uma refer�ncia para hoje, n�s usaremos um novo objeto. Ent�o, quando recarregarmos a p�gina no navegador, a data que aparecer� no Console ser� 10.

No momento da cria��o do design das classes, seja cuidadoso com a imutabilidade.

Agora, voc� pode estar pensando o seguinte: apesar de _quantidade e _valor serem n�meros, eles s�o objetos tamb�m. Mas isso n�o � um problema quando trabalhamos com o _quantidade, porque n�o temos nenhum m�todo que ir� alter�-lo. A �nica forma de fazermos isto � atribuindo um valor. Mas como _quantidade � imut�vel, n�o conseguiremos realizar esta a��o tamb�m.

Com isso, finalizamos a blindagem da nossa classe para garantir a sua imutabilidade. Existem outras solu��es mais avan�adas no JS para tentarmos emular o privacy - a privacidade - do seu c�digo. Mas, ao aplic�-las perdemos em legibilidade e performance. Ent�o, a solu��o utilizada � a mais vi�vel.

<h2>Substituindo var por let</h2>

Temos o estado do nosso modelo de negocia��o e podemos continuar com o nosso projeto. Mas antes de continuarmos, queremos implantar um novo h�bito. Agora, que estamos utilizando ES6, em vez de usarmos o var para fazer a declara��o de uma vari�vel, usaremos o let.
```html
<script>

    let hoje = new Date();

    let n1 = new Negociacao(hoje, 5, 700);

    console.log(n1.data);

    hoje.setDate(11);

    console.log(n1.data);
</script>
```
Se executarmos o c�digo, tudo continuar� funcionando normalmente.

data no console

Mas o que ganhamos com a mudan�a de var para let? Veremos um exemplo das vantagens de usarmos esta forma de declarar vari�vel. Se formos declarar um for que vamos exibir de 1 a 100 escrever�amos o la�o da seguinte forma:
```html
<script>

    for(var i = 1; i<= 100; i++) {
        console.log(i);
    }
</script>
```
Ao executarmos o c�digo, ele imprimir� corretamente os n�meros de 1 a 100 no Console.

Por�m, existe algo que programadores fora da linguagem JS acham estranho... Vamos adicionar um alert(i):
```html
<script>

    for(var i = 1; i<= 100; i++) {
        console.log(i);
    }

    alert(i);
</script>
```
O que vai ser exibido no navegador?

alert

O alert exibiu o valor 101. Por qu�? Quando se trabalha com linguagens como Java, C# e outras, as declara��o de vari�veis possuem escopo de bloco. Na pr�tica, ao utilizarmos estas outras linguagens, jamais poder�amos acessar a vari�vel i, como fizemos com o alert. Se adicion�ssemos uma vari�vel chamada nome e depois, acrescent�ssemos um novo alert, o c�digo ficaria assim:
```html
<script>

    for(var i = 1; i<= 100; 1++) {
        var nome = 'Fl�vio';
        console.log(i);
    }

    alert(i);
    alert(nome);
</script>
```
O segundo alert tamb�m seria exibido.

alert 2

Em JavaScript n�o existe escopo de bloco, ent�o o fato de declararmos uma vari�vel dentro de um bloco n�o garantir� que temos um escopo. No entanto, se declaramos as vari�veis usando o let, estas ganharam um escopo de bloco.
```html
<script>

    for(let i = 1; i<= 100; 1++) {
         let nome = 'Fl�vio';
         console.log(i);
    }

    alert(i);
    alert(nome);
</script>
```
Agora, elas s� existir�o no bloco em que foram declaradas. Se executarmos o c�digo, veremos a mensagem: i is not defined.

mensagem de erro

Isto ocorreu porque a vari�vel i n�o existe fora do bloco. Desta forma, evitamos que as vari�veis vazem fora do escopo que fazem parte.

<h2>Resumindo</h2>
Vamos revisar o que estudamos at� aqui: vimos a cria��o de uma classe, utilizando novos recursos JavaScript que favorecem a implementa��o do paradigma orientado a objeto. Vimos tamb�m que uma classe possui um constructor com os quais definimos atributos - que chamamos de propriedades - e que podemos materializar uma abstra��o do mundo real usando um modelo, por meio de uma classe. Outro assunto abordado � que podemos passar par�metros no construtor de uma classe e dessa forma, garantindo que no momento em que a inst�ncia de uma classe � criada, j� tenha todos os dados necess�rios.

Por conven��o, adotamos que os atributos privados devem usar o prefixo _ (underline), indicando para o desenvolvedor que ele s� pode acess�-lo. Vimos como adicionar m�todos nas classes, e estes, sim, podem acessar os atributos privados.

Apresentamos uma maneira de criar um atributo, que na pr�tica � um m�todo, e ao acess�-lo, podemos executar o c�digo. Moral da hist�ria: temos um m�todo que conseguimos acessar como uma propriedade, bastando ser antecedido pela palavra especial get, desta forma, estar�amos gerando um getter. Quem acessa a sua classe acredita que se trata de um propriedade, mas na verdade, trata-se por "debaixo dos panos" de um m�todo.

No entanto, isto n�o era suficiente para garantir a integridade da nossa negocia��o, que n�o pode ser alterada. Por isso, usamos o Object.freeze() para congelar um objeto depois de criado. Como Object.freeze() � shallow (raso), ele ser� aplicado nas propriedades do objeto, mas as propriedade que s�o objetos n�o ser�o todas congeladas. A a��o ficar� apenas na superf�cie. Para resolver esta quest�o, falamos um pouco sobre programa��o defensiva. Quando algu�m tentar acessar a data, n�s retornaremos uma nova data. Fizemos o mesmo com o construtor e com isso, evitamos que algu�m consiga de fora da classe alterar algum item do estado interno.

O que vimos foi relevante porque o modelo � uma das coisas mais importantes quando desenvolvemos o sistema. Agora que temos o modelo pronto, a aplica��o poder� crescer, tendo-o como base. No fim, deixamos a sugest�o da ado��o de um novo h�bito: substituir nas declara��es de vari�veis o uso de var por let, que permite um escopo de bloco e evita que as mesmas vazem para um escopo global. Antes do ES6, em JavaScript, era comum o uso de fun��es para a cria��o de um escopo para a vari�vel.

Vamos continuar com os nossos estudos e fa�am os exerc�cios para praticar os conceitos vistos.

<h2>Pequeno conto sobre orienta��o a objetos</h2>
Barney: Fl�vio, eu sou programador, mas at� hoje n�o consigo entender o que seria orienta��o a objetos. Pode me explicar?

Fl�vio: orienta��o a objetos prega uma forte conex�o entre dado e comportamento.

Barney: ...

Fl�vio: hehe, n�o captou ainda, certo?

Barney: n�o mesmo!

Fl�vio: bom, imagine que eu tenha aqui em minhas m�os uma garrafa de cerveja, aquelas tradicionais. Pense no l�quido da garrafa como um dado, uma informa��o. Ok?

Barney: Ok!

Fl�vio: eu dou essa garrafa em suas m�os e pe�o para que voc� a abra. Como voc� faz?

Barney: eu uso um abridor.

Fl�vio: boa tentativa, mas eu te passei o abridor?

Barney: n�o!

Fl�vio: viu que al�m de passar a garrafa eu preciso lembrar de te passar um abridor? Eu pedi para voc� pensar no l�quido da garrafa como dado, agora pe�o que voc� pense no abridor como comportamento. Ok?

Barney: perfeito!

Fl�vio: ent�o, se eu n�o te passei o abridor, como voc� conseguir� chegar at� o l�quido (dado) da garrafa?

Barney: hum, eu posso tentar abrir com o dente.

Fl�vio: � uma forma de voc� conseguir acessar o liquido (dado). Que mais? Tem outra forma de acessar o l�quido?

Barney: sei l�, talvez batendo na quina da mesa.

Fl�vio: Barney, eu tenho certeza que voc� criar� diversas maneiras de acessar l�quido da garrafa, inclusive se voc� der essa garrafa para outra pessoa ela pode tentar abrir a garrafa de outra forma.

Fl�vio: agora eu te dei um saca rolha.

Barney: pra qu�? Para abrir a garrafa?

Fl�vio: sim, voc� vai conseguir?

Barney: bom, at� posso conseguir, mas corro o risco de me machucar, assim como abrir a garrafa com dente.

Fl�vio: excelente, veja que nesse caso o dado (l�quido) � separado do comportamento que acessa o dado (forma de abrir). Quando isso acontece, cada um tenta bolar sua forma de acesso aos dados. Em programa��o, isso pode levar a repeti��o de c�digo, al�m disso, como o dado � separado do comportamento que opera sobre ele, temos que lembrar onde em nossos zilh�es de arquivos e bibliotecas est� aquele comportamento que deve operar o dado.

Barney: acho que estou entendendo. O cen�rio que voc� passou para mim � o da programa��o procedural. Certo?

Fl�vio: isso mesmo Barney! Na programa��o procedural o dado e o comportamento est�o separados.

Barney: e na orienta��o a objetos, como fica?

Fl�vio: nela, como disse, temos uma forte conex�o entre dado e comportamento. Onde o dado vai, os comportamentos que operam sobre aqueles dados v�o junto.

Barney: pode me dar um exemplo, ainda no contexto da garrafa de cerveja?

Fl�vio: claro. Imagine que agora eu dou para voc� uma garrafa long-neck e eu pe�o para que voc� a abra.

Barney: isso � f�cil, basta eu girar a tampa da garrafa.

Fl�vio: veja que nesse caso o dado (l�quido) caminha com o comportamento que operava sobre ele (abridor, que � a pr�pria tampa). Onde quer que voc� leve a garrafa, a forma de acessar seu l�quido ser� a mesma, seja aqui no Brasil ou no Jap�o. Veja que temos dado e comportamento caminhando juntos. Sequer voc� precisa lembrar de me pedir um abridor ou inventar outras formas de acesso ao l�quido, porque o dado � fortemente conectado com o comportamento que opera sobre ele.

Barney: finalmente entendi!

<h2>Declara��o de classes</h2>
No ES6 (ES2015+) podemos declarar classes. Qual das op��es abaixo declara corretamente a classe Pessoa:

R:class Pessoa{
}
Para criarmos uma classe, usamos a palavra reservada class seguida do nome da classe. Por conven��o, nomes de classe come�am em letra mai�scula. Curiosamente essa conven��o se chama pascal case.

<h2>Atributos de inst�ncia</h2>
N�o faz muito sentido criarmos uma classe que n�o possui atributos de inst�ncia ou m�todos (apesar de poss�vel). Sendo assim, qual das op��es abaixo declara corretamente os atributos nome e idade para a classe Pessoa? Obs: nome � string e idade um n�mero!

R: class Pessoa {

    constructor() {

        this.nome = '';
        this.idade = 0;
    }
}
 
Para definirmos atributos de inst�ncia de uma classe, precisamos adicionar em sua defini��o um constructor. � atrav�s do construtor que adicionamos na vari�vel impl�cita this as propriedades que desejamos que toda inst�ncia da classe tenha.
Propriedade ou atributo?
Apesar do termo atributo ser muito utilizando no mundo da orienta��o a objetos, no mundo JavaScript o termo propriedade � mais usado. Inclusive voc� ver� o instrutor ora dizendo atributo e ora dizendo propriedade. O motivo dele ficar intercambiando os termos � porque ele n�o desenvolve apenas em JavaScript, mas em outras linguagens, como Java. Da� vem a m�xima: h�bito � dif�cil de adquirir e dif�cil de perder. A boa not�cia � que se voc� usar um ou outro termo, os membros da sua equipe o entender�o.

<h2>Encapsulamento</h2>
Vejamos a seguinte defini��o da classe Conta:

```html
class Conta {

    constructor(titular, conta) {

        this.titular = titular;
        this.conta = conta;
        this.saldo = 0.0
    }

    deposita(valor) {
        console.log('Valor depositado: ' + valor);
        this.saldo+=valor; 
    }
}

var conta = new Conta('Mingau', 171);
conta.deposita(100);
```


Para depositarmos um valor, chamamos o m�todo deposita. � neste m�todo que logamos no console o valor depositado na conta. Logar essa informa��o � imprescind�vel para um sistema de auditoria.

Podemos dizer que:

R: or mais que seja importante atualizarmos o saldo da conta somente atrav�s do m�todo deposita, para que a opera��o de log seja realizada, ningu�m impede que o programador altere o saldo diretamente na propriedade da classe, conforme o exemplo abaixo:
```html
var conta = new Conta('Mingau', 171);
conta.saldo+= 100;
```
Com isso, a opera��o de log n�o � realizada.

avaScript n�o possui nativamente uma sintaxe para declarar atributos privados.

Uma solu��o barata � apelar para a conven��o do mundo javascript na qual atributos prefixados por _ n�o devem ser acessados diretamente pelos desenvolvedores. Eles devem utilizar as pr�prias classes para poder acess�-los. Sendo assim, a �nica maneira convencionada para acessar esses atributos � atrav�s de m�todos. No caso da nossa classe Conta, poder�amos fazer:
```html
class Conta {

    constructor(titular, conta) {

        this.titular = titular;
        this.conta = conta;
        this._saldo = 0.0
    }

    deposita(valor) {
        console.log('Valor depositado: ' + valor);
        this._saldo+=valor; 
    }

    getSaldo() {
        return this._saldo;
    }
}

var conta = new Conta('Mingau', 171);
conta.deposita(100); 
console.log(conta.getSaldo()); // se n�o pode acessar this._saldo, � preciso
```
CURIOSIDADE: a linguagem TypeScript da Microsoft permite definir atributos privados com o modificador private. TypeScript nada mais � do que um superset do ES2015+ com a adi��o de novos recursos, inclusive aquele que define atributos privados.

<h2>O resultado �...</h2>
Temos a seguinte defini��o de classe:
```html
class Conta {

    constructor(titular, conta) {

        this._titular = titular;
        this._conta = conta;
        this._saldo = 0.0
    }

    deposita(valor) {
        console.log('Valor depositado: ' + valor);
        this._saldo+=valor; 
    }

    get saldo() {
        return this._saldo;
    }

    get titular() {
        return this._titular;
    }

    get conta() {
        return this._conta;
    }
}
```

E temos a seguinte inst�ncia:

```html
var conta = new Conta('Mingau', 171);
conta.titular = 'Paco';
console.log(conta.titular);
```

O que ser� exibido na instru��o console.log(conta.titular)?

R: Mingau 
O titular continuar� a ser Mingau, porque conta.titular � uma propriedade getter, que n�o aceita receber valores.


<h2>Congelando um Objeto</h2>

Temos a seguinte classe:

```html
class Negociacao {

    constructor(data, quantidade, valor) {

        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    get volume() {
        return this._quantidade * this._valor;
    }

    get data() {
        return this._data;
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }
}
```

Sabemos que uma altera��o como essa n�o tem efeito porque � um getter:
```html
var negociacao = new Negociacao(new Date(), 1, 100);
negociacao.quantidade = 100 // n�o tem efeito
```
Contudo, nada impede do programador n�o seguir a conven��o de que propriedades com _ s� podem ser acessadas atrav�s de m�todos da classe:
```html
var negociacao = new Negociacao(new Date(), 1, 100);
negociacao._quantidade = 100;  // � poss�vel, apesar de ferir a conven��o
```
Aprendemos que podemos congelar objetos, tornando suas propriedades imut�veis. Qual das sintaxes abaixo realiza o "congelamento do objetonegociacao"?

R: Object.freeze(negociacao); 
Podemos solicitar � Object.freeze o congelamento de um objeto com todas as suas propriedades. Qualquer altera��o de suas propriedades ser�o ignoradas.
No exemplo anterior, podemos aplicar Object.freeze no construtor da classe, tendo como alvo this, mas claro, s� depois de termos atribu�do os valores recebidos no construtor �s propriedades.

<h2>Imut�vel aonde meu filho!</h2>

Vejamos novamente o exemplo da classe Negociacao:
```html
class Negociacao {

    constructor(data, quantidade, valor) {

        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;

        Object.freeze(this); // congela a inst�ncia do objeto
    }

    get volume() {
        return this._quantidade * this._valor;
    }

    get data() {
        return this._data;
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }
}
```

E agora, uma inst�ncia:
```html
var negociacao = new Negociacao(new Date(), 1, 100);
```
O que acontecer� se alterarmos a data de negociacao? Vejamos um exemplo:
```html
negociacao.data.setDate(negociacao.data.getDate() + 1);
```
Fa�a um teste no console, altere a data de uma inst�ncia de Negociacao.

Por mais que estejamos usando Object.freeze(this), sabemos que nossa classe n�o � totalmente imut�vel. Apesar de n�o podermos atribuir novamente um novo objeto � refer�ncia que j� temos, como negociacao._data = new Date(), n�s podemos chamar os m�todos do objeto data, que operam sobre seu estado interno, que n�o � congelado. E agora?

Podemos lan�ar m�o da programa��o defensiva. Quando chamarem a propriedade getter data, retornaremos uma nova inst�ncia de Date com a mesma data da nossa negocia��o. Como � outra inst�ncia, qualquer modifica��o n�o impactar� em nossa classe.

O mesmo cuidado precisamos tomar com o construtor da classe. Como data � um objeto e objetos s�o passados como refer�ncia em JavaScript, qualquer altera��o feita fora da classe pode alter�-la. A ideia � aplicarmos a programa��o defensiva. Sendo assim, nossa classe fica:
```html
class Negociacao {

    constructor(data, quantidade, valor) {

        this._data = new Date(data.getTime()); // criando uma nova inst�ncia a partir do tempo de uma data 
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this);
    }

    get volume() {
        return this._quantidade * this._valor;
    }

    get data() {
        return new Date(this._data.getTime());
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }
}
```

<h2>Varil�ndia ou Let�cia</h2>
Qual a diferen�a entre vari�veis declaradas como var e let?

R: Declara��es com var possuem escopo de fun��o ou global. Vari�veis declaradas com let tem escopo de bloco e o JavaScript lan�ar� um erro se a mesma for declarada mais de uma vez.


<h2>Date � uma classe?</h2>
Durante o treinamento eu digo que Date � uma classe, inclusive usamos operador new para cri�-la. Contudo, na verdade Date � uma fun��o construtora. O uso de fun��es construtoras no ES5 era uma das formas de criarmos inst�ncias a partir de um modelo, ou seja, era algo mais perto de uma defini��o de classe. Ali�s, toda sintaxe nova do ES2015 voltada para cria��o de classes, heran�a e outros recursos s�o a�ucares sint�ticos para muito c�digo que escrev�amos em ES5.

Que tal criarmos uma classe em ES2015 para em seguida vermos como � seu c�digo em ES5?
```html
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    obterNomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }
}
```
```html
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}
Pessoa.prototype.obterNomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
};
```
Apesar de terem uma sintaxe diferente, ambos tem o mesmo resultado. Ent�o, para unificar a linguagem, chamarei Date de classe e outras fun��es construtoras tamb�m, porque no final elas s�o usadas para implementar o paradigma da orienta��o a objetos.

-----------------------------------------------------------------------------------------
<h1>Se��o 03 - A liga��o entre as a��es do usu�rio e o modelo</h1>

<h2>A classe NegociacaoController</h2>

N�s j� temos a negocia��o criada, agora, precisamos capturar as a��es do usu�rio e interagir com o modelo por meio de uma controller no modelo MVC. N�s criaremos inst�ncias de negocia��o. Primeiramente, precisamos criar a controller.

Atualmente, no index.html, s� temos a importa��o do arquivo Negociacao.js:

```html
<script src="js/app/models/Negociacao.js"></script>
Lembrando que n�o temos mais a outra tag <script> usada nos testes. Caso voc� ainda a tenha, deve apag�-la.
```
Em seguida, criaremos a classe NegociacaoController.js. Usamos a conven��o usada anteriormente de come�ar o nome da classe em caixa alta. Quando clicarmos no bot�o "Incluir" do formul�rio, vamos submet�-lo e depois, chamaremos uma a��o do controller para adicionar uma negocia��o na tabela. Por enquanto, focaremos na cria��o da Negociacao com base nas informa��es dos formul�rios.

Usaremos o m�todo adiciona() na classe NegociacaoController. O m�todo receber� como par�metro um event.
```html
class NegociacaoController {

  adiciona(event) {
        event.preventDefault();
        alert('Chamei a��o no controller');
  }
}
```
Chamamos o event.preventDefault(). Quando submetemos o formul�rio, se n�o cancelamos o comportamento padr�o do mesmo, ele ser� recarregado. Com o alert, a controller cancelar� a submiss�o do formul�rio para poder capturar os dados da negocia��o e incluir na lista. Ainda n�o colocamos constructor, porque a negocia��o ainda n�o tem nenhum atributo de classe.

Como faremos a liga��o do m�todo adiciona() com a submiss�o do formul�rio? Precisaremos fazer a importa��o do NegociacaoController.js. Tamb�m teremos uma tag <script> com a qual iremos instanciar esta controller.
```html
<script src="js/app/models/Negociacao.js"></script>
<script src="js/app/controllers/NegociacaoController.js"></script>
<script>
    let negociacaoController = new NegociacaoController();
</script>
```
Observe que fizemos declara��o da vari�vel negociacaoController com o let, conforme convencionamos. Agora, nossa controller j� est� acess�vel na p�gina inteira.

Em seguida, dentro da tag <form>, adicionaremos onsubmit para submeter o formul�rio. E na inst�ncia de negociacaoController, chamaremos o m�todo adiciona(event):
```html
<body class="container">

    <h1 class="text-center">Negocia��es</h1>

        <form class="form" onsubmit="negociacaoController.adiciona(event)">
            <div class="form-group">
                <label for="data">Data</label>
                <input type="date" id="data" class="form-control" required autofocus/>
            </div>

  //...
```
A estrat�gia utilizada aqui � um pouco diferente do que vem sendo feita, geralmente, a associa��o entre tag e o evento � feita no parte JS do projeto. Mas inspirado por framework como o AngularJS, por exemplo, que faz a associa��o de uma a��o da controller utilizando um evento. Usaremos isso, para escrever menos c�digo na parte JavaScript. Como nossa p�gina � dependente de JS, podemos fazer isso facilmente.

Se atualizarmos a p�gina e preenchermos o formul�rio com dados aleat�rios, ap�s submetermos as informa��es, veremos a mensagem do alert.

a��o no controller

Ent�o, a a��o da controller foi chamada. Mas o nosso objetivo n�o � exibir a mensagem, n�s queremos criar um negocia��o. Teremos que gerar o c�digo que inst�ncia a negocia��o. Faremos isto mais adiante.

<h2>Associando m�todos do controller �s a��es do usu�rio</h2>

Ao clicarmos no bot�o "Incluir" do formul�rio, j� conseguimos executar as a��es da controller. Agora, precisamos capturar os dados preenchidos. Primeiramente, iremos exibi-los no Console. Para isto, criaremos a vari�vel inputQuantidade.
```html
class NegociacaoController {

  adiciona(event) {
        event.preventDefault();

        let inputData = document.querySelector('#data');
        let inputQuantidade =  document.querySelector('#quantidade');
        let inputValor = document.querySelector('#valor');

        console.log(inputData.value);
        console.log(inputQuantidade.value);
        console.log(inputValor.value);

  }
}
```
O document.querySelector() ser� o respons�vel por buscar no DOM os elementos com id #data, #quantidade e #valor - observe que conseguimos utilizar os seletores CSS. Os itens foram dispostos na ordem do formul�rio. Lembrando que cada input tem id no arquivo index.html.

Vamos executar o c�digo para ver se todos os dados aparecem no Console do navegador. Preencheremos o formul�rio com a data 11/12/2016, a quantidade 1 e o valor 100.

dados do console

Os dados apareceram corretamente no Console, n�s j� conseguimos captur�-los. Mas veja que repetimos bastante o c�digo, ficou uma sintaxe trabalhosa de ser digitada. Se em JavaScript temos as Higher-Order Functions, podemos declarar a vari�vel $ - como usado no jQuery - e dentro, jogaremos o document.querySelector. Poderemos fazer as seguintes substitui��es no c�digo:
```html
class NegociacaoController {

  adiciona(event) {
        event.preventDefault();

        let $ = document.querySelector;
        let inputData = $('#data');
        let inputQuantidade =  $('#quantidade');
        let inputValor = $('#valor');

        console.log(inputData.value);
        console.log(inputQuantidade.value);
        console.log(inputValor.value);

  }
}
```
Desta forma, ficou menos trabalhoso escrever o c�digo. Mas se o executarmos como est�, veremos uma mensagem de erro no navegador.

N�o funcionou colocarmos o querySelector na vari�vel $ para criarmos um alias. Por que n�o funcionou? O querySelector � uma fun��o que pertence ao objeto document - chamaremos tal fun��o de m�todo. Internamente, o querySelector tem uma chamada para o this, que � o contexto pelo qual o m�todo � chamado. Logo, o this � o document. No entanto, quando colocamos o querySelector dentro do $, ele passa a ser executado fora do contexto de document e isto n�o funciona. O que devemos fazer, ent�o? Queremos tratar o querySelector como uma fun��o separada. N�s queremos que ao colocarmos o querySelector para o $, ele mantenha a associa��o com o document. Para isto, usaremos o bind() :
```html
class NegociacaoController {

  adiciona(event) {
        event.preventDefault();

        let $ = document.querySelector.bind(document);
        let inputData = $('#data');
        let inputQuantidade =  $('#quantidade');
        let inputValor = $('#valor');

        console.log(inputData.value);
        console.log(inputQuantidade.value);
        console.log(inputValor.value);

  }
}
```
Agora, estamos informando que o querySelector ir� para a vari�vel $, mas ainda manter� uma associa��o com document. Desta vez, o c�digo funcionar� corretamente no navegador. Vimos um truque que copia um pouco o jQuery faz de melhor e cria um "mini-framework", ao associarmos a vari�vel $ com o querySelector - um seletor CSS - e mantendo a liga��o com o document.

At� aqui, vimos como manipular os dados do DOM, al�m do truque citado para otimizar nosso c�digo. Precisaremos ainda construir uma negocia��o com base nestes dados. Mas ser� que esta forma de organizar os dados � perform�tica? Veremos isto mais adiante.

<h2>Evitando percorrer o DOM muitas vezes</h2>
O c�digo funciona, mas se adicionarmos dez negocia��es e clicarmos dez vezes em "Incluir", o querySelector buscar� a #data, #quantidade e #valor dez vezes tamb�m. No entanto, devemos evitar ao m�ximo percorrer o DOM. Sempre que executamos o querySelector, ele ir� no DOM - que � uma �rvore de elementos. O querySelector ter� que buscar entre todos estes elementos. Por�m, a API de DOM � um tanto "pregui�osa" e n�o gosta de executar essa a��o.

Ent�o, se adicionamos 100 negocia��es, teremos que fazer esta busca 100 vezes. Apesar de s� estarmos trabalhando com tr�s elementos no caso, queremos melhorar a nossa performance. Atualmente, nosso c�digo est� assim:
```html
class NegociacaoController {

  adiciona(event) {
        event.preventDefault();

        let $ = document.querySelector.bind(document);
        let inputData = $('#data');
        let inputQuantidade =  $('#quantidade');
        let inputValor = $('#valor');

        console.log(inputData.value);
        console.log(inputQuantidade.value);
        console.log(inputValor.value);

  }
}
```
Para melhorar a performance, adicionaremos o constructor e moveremos os inputs para dentro dele. Mas em vez de criarmos uma vari�vel, criaremos atributos de inst�ncias com o this.

```html
class NegociacaoController {

  constructor() {

            let $ = document.querySelector.bind(document);

            this.inputData = $('#data');
            this.inputQuantidade =  $('#quantidade');
            this.inputValor = $('#valor');
  }

  adiciona(event) {
        event.preventDefault();


        console.log(this.inputData.value);
        console.log(this.inputQuantidade.value);
        console.log(this.inputValor.value);

  }
}
```
Quando a NegociacaoController for criado pela primeira vez, ele buscar� os elementos do DOM do document, que ser�o guardados nas propriedades da classe. Adicionamos o this no console tamb�m.

Agora, mesmo que fa�amos 300 negocia��es, ele s� far� uma busca no DOM pelos elementos. Com isto, conseguimos melhorar a performance. O impacto neste cen�rio � �nfimo, mas poderia ser maior em outro cen�rios. Se executarmos o c�digo, veremos que ele ser�o exibidos corretamente no console.

Usaremos esta estrat�gia como se fosse um caching at� o fim do curso.

<h2>Criando uma inst�ncia de Negociacao</h2>
N�s iremos seguir a conven��o de que os inputs s� poder�o ser acessados com NegociacaoController, n�o podendo ser acessados por fora da aplica��o. S� os m�todos de NegociacaoController poder�o acessar esses atributos. Para isto, usaremos o prefixo _, convencionado anteriormente, que indicar� para o programador .
```html
class NegociacaoController {

  constructor() {

            let $ = document.querySelector.bind(document);

            this._inputData = $('#data');
            this._inputQuantidade =  $('#quantidade');
            this._inputValor = $('#valor');
  }

  adiciona(event) {
        event.preventDefault();


        console.log(this._inputData.value);
        console.log(this._inputQuantidade.value);
        console.log(this._inputValor.value);

  }
}
```
Continuamos seguindo a conven��o. Agora, podemos criar a negocia��o com os dados do formul�rio, vamos ent�o criar a vari�vel negociacao e incluiremos os tr�s par�metros.
```html
adiciona(event) {

    event.preventDefault();

    let negociacao = new Negociacao(
        this._inputData.value,
        this._inputQuantidade.value,
        this._inputValor.value
      );

      console.log(negociacao);

}
```
Passamos os par�metros data, quantidade e valor para o construtor de Negociacao. Com os dados do formul�rio, n�s j� temos uma negocia��o. Queremos que a negocia��o seja adicionada em uma lista, mas n�o a iremos implementar ainda.

Vamos ver como ficou a p�gina recarregada.

mensagem de erro console

Recebemos uma mensagem de erro, mas n�o foi em NegociacaoController. O erro ocorreu na classe Negociacao.js. No Console, vemos ainda em qual linha foi o problema. A falha nos avisou que data.getTime n�o � uma fun��o. Como isso � poss�vel?
```html
class Negociacao {

    constructor(data, quantidade, valor) {

      this._data = new Date(data.getTime());
      this._quantidade = quantidade;
      this._valor = valor;
      Object.freeze(this);

    }
}
```
O que significa? A data que estamos passando para o construtor n�o � uma data? Para resolver isso, vamos descobrir qual � o tipo da data, usaremos a fun��o typeof().
```html
adiciona(event) {

    event.preventDefault();

    console.log(typeof(this._inputData.value));

    let negociacao = new Negociacao(
        this._inputData.value,
        this._inputQuantidade.value,
        this._inputValor.value
      );

      console.log(negociacao);

}
```
No Console, veremos que � uma string.

string

Isto significa que quando passamos a data para Negociacao, ela ainda � uma string e, obviamente, n�o teremos o getTime(). O que precisamos resolver antes? Precisamos encontrar uma maneira de converter a data - que est� em texto - para um objeto Data. Priorizaremos isso, e cancelaremos a cria��o da negocia��o.
```html
adiciona(event) {

    event.preventDefault();

    console.log(typeof(this._inputData.value));

    console.log(this._inputData.value);

}
```
Ao executarmos o c�digo, veremos o seguinte c�digo:

data string

Temos que ser capazes de transformar uma string em um objeto do tipo Date e depois pass�-lo para negocia��o.

Mais adiante, faremos este processo de convers�o.

<h2>Criando um objeto Date</h2>

Existem v�rias maneiras de construirmos uma data passando par�metros para o construtor. Uma das formas que j� vimos � que se j� temos uma data, podemos colocar o retorno de getTime e passar para o construtor de Date. Ser� que podemos fazer este processo de forma direta? Se for poss�vel, j� resolvemos o nosso problema.
```html
adiciona(event) {

  event.preventDefault();

  let data = new Date(this._inputData.value)
  console.log(data);
}
```
Se der certo o que fizemos, ser� retornada a string 2016-11-12. � o texto que o construtor est� recebendo. Vamos fazer um teste:

data errada no console

A data que apareceu no Console n�o foi a mesma, em vez disso, vemos que o dia � 11. Ent�o, n�o funcionou. Temos que encontrar outra maneira de trabalhar com essa data. Outra maneira de trabalhar com Date � utilizando um array, que ter� o ano, m�s, dia.

Se digitarmos no Console...

new Date(['2016', '11', '12']);
O retorno ser� a data correta:

new Date

Esta � uma forma de resolvermos. Precisamos ainda encontrar uma forma de transformar a data que � uma string, fique dentro do array. Como faremos com que a string saiba qual � o separador que ela deve considerar? Para isto, adicionaremos split('-'), e assim, a data ser� separa com hifens. Faremos um teste digitando no Console dataString.split('-'):

dataString.split('-')
["2015", "12", "11"]
Ele nos retornou a data correta. Ent�o, executaremos o seguinte c�digo:
```html
adiciona(event) {

  event.preventDefault();

  let data = new Date(this._inputData.value.split('-'));
  console.log(data);
}
```
Resolvemos o problema da data.

console com a data correta

Por que conseguimos solucionar passando um array? Quando geramos o array com ano, m�s e dia, ele transforma cada item em uma string e adiciona o separado. S� que quando passamos o array '2016', '11', '12', o que � o reagrupamento por debaixo dos panos de cada item usando o separador ,.

metodo join

Existe no array o m�todo join(), que une todos os itens e depois, forma uma string com separadores.

string recebida

Temos a string que esper�vamos receber. Mas, al�m de usar o split(), poder�amos utilizar o replace(). Adicionaremos uma express�o regular pedindo que seja trocado o h�fen de todas as ocorr�ncias da string (ou seja, global) por ,: replace(/-/g, ',').
```html
adiciona(event) {

    event.preventDefault();

    let data = new Date(this._inputData.value.replace(/-/g, ','));
    console.log(data);
}
```
outra forma de fazer a data

A data ficou correta. Vimos que existem v�rias formas de resolver a quest�o da data, e o array nem precisa ser de string. Pode ser um array de n�mero, que tamb�m ser� aceito.


<h2>Executando a��es de um controller</h2>

Vejamos a declara��o de uma controller:

// ContadorController.js
```html
class ContadorController {

    constructor() {
        this._contador = 0;
        alert(this._contador);
    }

    get contador() {
        return this._contador;
    }

    incrementar() {
        this._contador++;
        alert(this._contador);
    }
}
```
Veja que o �nico dado que a controller possui � o contador, que come�a a partir de 0. Quando o m�todo incrementar for chamado, o valor do contador ser� incrementado e o valor atual ser� exibido na tela.

Qual das op��es abaixo associa corretamente o bot�o <button> com o m�todo incrementar de ContadorController?
Resposta:
```html
<html>
  <head></head>
  <body>
    <button onclick="contadorController.incrementar()">Incrementar</button>
    <script src="ContadorController.js"></script>
    <script>
        let contadorController = new ContadorController();
    </script>
  </body>
</html>
```

<h2>O problema com datas</h2>

Vimos como lidar com a conven��o das datas para criar um objeto Date, mas veremos mais uma forma de realizar tal a��o. Escreveremos no Console a seguinte linha:
```html
let data = new Date(2016, 11, 12)
```
No entanto, se imprimirmos esta data, veremos o retorno abaixo:

Console

A data impressa � Mon Dec 12 2016. Por que ele imprimiu dezembro, se escrevemos m�s 11? Porque nesta forma de se passar o Date, o m�s deve ser passado de 0 a 11. Ent�o, se queremos que a data seja em novembro, precisaremos diminuir o valor do m�s. Vamos fazer um novo teste no Console, digitando:
```html
data = new Date(2016,10,12)
```
Agora, a data j� aparece correta.

Data correta

A novidade � que essa � a maneira que queremos usar para aplicar as datas na aplica��o. Apesar da outra forma ser mais f�cil, desejamos encontrar uma solu��o para construir um Date a partir da string vinda do formul�rio. Ao tentarmos resolver este problema, podemos ver muitos assuntos de programa��o funcional.

Ent�o, eu pe�o que voc� d� uma pausa no v�deo e pense como voc� vai conseguir converter uma data no formato 2016-11-12 e pass�-la para o construtor de Date da seguinte forma:
```html
new Date(2016, 10, 12)
```
Pense um pouco a respeito e veremos mais adiante como eu vou resolver o assunto.

<h2>Resolvendo um problema com o paradigma funcional</h2>
Talvez voc� tenha encontrado uma solu��o diferente da minha, mas darei a minha "vers�o dos fatos". Nosso objetivo � que o Date receba no construtor o ano, m�s e dia. Faremos alguns ajustes no c�digo:
```html
adiciona(event) {

    event.preventDefault();

    let data = new Date(
        this._inputData.value
    );
    console.log(data);
}
```
Lembrando que cada um dos itens ser� um par�metro do construtor. Mas o m�s tem que ser decrescido de 1. Em seguida, transformaremos a string em um array, utilizando o split('-'). Ao fazermos isto, a string 2016-11-12 se tornar� um array de tr�s elementos. Sabemos que se passarmos da forma como j� est�, conseguiremos o resultado desejado. Por�m, n�o quero que o Date receba um array, queremos que ele receba a primeira posi��o do array como a primeira posi��o do construtor e que o processo se repita com o segundo e terceiro elemento do array.

No ES6, temos o recurso spread operator. Observe o que faremos no c�digo:
```html
adiciona(event) {

    event.preventDefault();

    let data = new Date(...this._inputData.value.split('-'));
    console.log(data);
}
```
Adicionamos ... (retic�ncias) posicionado antes do this, com este spread operator, indicamos que o array ser� desmembrado - e o primeiro item do array, e cada par�metro do Date ser� posicionado na mesma ordem no construtor. Como j� constru�mos o c�digo, a data ser� passada, mas o m�s ficar� incorreto e n�o ser� subtra�do 1. Executaremos o c�digo como est� e a data aparecer� como o m�s de Dezembro.

data incorreta

Mas conseguimos demonstrar que o spread operator est� funcionando corretamente. Por�m, temos que encontrar uma forma de, antes de reposicionarmos cada par�metro para o constructor, decrementarmos 1 do valor do m�s. Para isto, trabalharemos com a fun��o map(), bem conhecida no mundo JavaScript e que nos permitira subtrair 1. Ent�o, iremos chamar a fun��o map no array criado e dependendo do elemento, iremos diminuir -1.
```html
adiciona(event) {

    event.preventDefault();

    let data = new Date(...
        this._inputData.value
        .split('-')
        .map(function(item) {
            return item;
        })
    );
    console.log(data);
}
```
Com o return item, varremos o array onde temos ano, m�s e dia, e recriaremos a mesma lista de elementos. Ou seja, n�o teremos nenhuma transforma��o. Se execut�ssemos o c�digo como ele est�, a data continuaria com o mesmo problema. N�s precisamos que o m�s 11 se torne 10.

Continuaremos tentando resolver o problema, adicionando um segundo par�metro na fun��o map(): indice. Incluiremos um if, no qual especificaremos que quando passarmos pelo elemento 1 (o segundo) do array, vamos subtrair 1.
```html
adiciona(event) {

    event.preventDefault();

    let data = new Date(...
        this._inputData.value
        .split('-')
        .map(function(item, indice) {
            if(indice == 1) {
                return item - 1;
            }
            return item;
        })
    );
    console.log(data);
}
```
Apesar de item ser uma string, quando usamos -1, o JS entende que dever� fazer um opera��o num�rica e faz a convers�o impl�cita da string. Caso n�o seja o segundo elemento, a posi��o do m�s, o retorno ser� equivalente ao valor do elemento do array.

Veremos se o c�digo vai funcionar. No formul�rio, preencheremos o campo da data com 12/11/2016. Desta vez, a data que aparecer� no Console estar� correta.

datas correspondentes

N�s conseguimos, encadeando uma s�rie de fun��es, converter s� o segundo item do array e depois, decrement�-lo. Mas � poss�vel eliminar o if. Em vez do la�o, faremos altera��es na fun��o maps():

return item - indice % 2
O trecho do c�digo ficar� da seguinte forma:

//...
```html
adiciona(event) {

    event.preventDefault();

    let data = new Date(...this._inputData
        .value.split('-')
        .map(function(item, indice) {
            return item - indice % 2;
        }));
```
Se estamos na primeira posi��o do array, o valor de indice � 0. Por isso, o resultado de indice % 2 ser� igual a 0 tamb�m. Se subtrairmos este valor de item, nada ir� mudar. Mas quando estivermos na segunda posi��o do array, o indice ser� igual a 1. Agora, quando calcularmos 1 m�dulo de 2, o resultado ser� 1. E quando estivermos na terceira posi��o do array, 2 m�dulo de 2, tamb�m ser� igual a 0. N�o diminuiremos nada do valor do item. Dessa forma conseguimos evitar a cria��o de um if.

Para entendermos melhor o que fizemos, calcularemos os m�dulos no Console:

0 % 2
modulo de 0

A �ltima linha retornou o valor do resultado: 0, ou seja, a primeira posi��o do array. Se calcularmos os m�dulos dos demais, teremos os seguintes valores.

valores dos modulos

Desta forma, conseguimos evitar o if e ajustar apenas o m�s. At� aqui, o nosso c�digo ficou assim:


```html
class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

    }

    adiciona(event) {

        event.preventDefault();

        let data = new Date(...this._inputData
            .value.split('-')
            .map(function(item, indice) {
                return item - indice % 2;
            }));

        let negociacao = new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value
        );

        console.log(negociacao);
    }
}
```
Se ele for executado, veremos que a data que surgir� no Console ser� 12 de novembro de 2016.


<h2>Array Functions: deixando o c�digo ainda menos verboso</h2>
Podemos ainda deixar o nosso c�digo menos "verboso", usando uma forma diferente de declarar fun��o - utilizada a partir da vers�o ES2015: falamos das arrow functions. O termo arrow traduzido para o portugu�s significa flecha. Com estas fun��es, podemos eliminar a palavra function do c�digo. Mas se simplesmente apagarmos a palavra e tentarmos executar o c�digo, teremos um erro de sintaxe que ser� apontado no navegador. Para emitirmos o termo, teremos que adicionar => (que representa uma flecha). Ela sinalizar� que temos uma arrow function que receber� dois par�metros.
```html
adiciona(event) {

    event.preventDefault();

    let data = new Date(...
        this._inputData.value
        .split('-')
        .map((item, indice) => {
            return item - indice % 2;
        })
    );
    console.log(data);
}
```
Quando usamos a sintaxe da flecha, j� sabemos que se trata de uma arrow function. Se testarmos atualizar a p�gina no navegador, veremos que tudo funciona.

data correta

A data preenchida no formul�rio corresponde com a data no Console.

Agora, uma pergunta: no bloco da arrow functions, quantas instru��es n�s temos? Apenas uma: return item - indice % 2. A linha est� dentro da fun��o map():
```html
.map((item, indice) => {
    return item - indice % 2;
});
```
Quando trabalhamos s� com uma instru��o, podemos omitir o bloco:
```html
let data = new Date(...
    this._inputData.value
    .split('-')
    .map((item, indice) => item - indice % 2)
);
```
Temos que colocar a fun��o com a instru��o inline e n�o precisamos colocar o ;. Como s� temos essa instru��o, a arrow function j� ir� fazer o retorno e podemos apagar o return. O c�digo fica muito mais simples!

Se rodarmos o c�digo no navegador, o formul�rio est� funcionando normalmente e a data aparecer� como desejamos no Console. N�s conseguimos reduzir a "verbosidade" do c�digo, usando uma arrow function. Em seguida, criaremos a vari�vel negociacao:
```html
let data = new Date(...
    this._inputData.value
    .split('-')
    .map((item, indice) => item - indice % 2)
);

let negociacao = new Negociacao(
    data,
    this._inputQuantidade.value,
    this._inputValor.value
  );

  console.log(negociacao);
```
Se testarmos no navegador veremos no console a Negociacao impressa.


<h2>Resumindo</h2>

Vamos revisar o que vimos at� aqui e entender o quanto evolu�mos. N�s criamos a primeira Controller da negocia��o: NegociacaoController. Vimos como associar uma a��o do usu�rio, como a submiss�o do formul�rio, e chamar o m�todo controller. Para criar um negocia��o do DOM, tivemos que criar os elementos do DOM, equivalente ao input da quantidade, da data e do valor para capturar os valores, sendo poss�vel depois, instanciar uma negocia��o. Comentamos tamb�m como n�o � recomend�vel fazer isto todas as vezes que chamarmos o m�todo adiciona(). Por isso, colocamos como propriedade da classe NegociacaoController o elemento do DOM.

Para evitarmos escrever repetidas vezes document.querySelector, n�s usamos o "truque" de coloc�-lo na vari�vel $. Mas vimos que neste processo, o querySelector perdia o contexto do document, e o this deixava de apontar para este. Para resolver o assunto, usamos a chamada para o m�todo bind() e o $ - equivalente ao querySelector - fizesse uma refer�ncia para o document. Fizemos um sintaxe parecida com jQuery.

Falamos tamb�m que n�o era suficiente capturarmos a data do formul�rio e pass�-la como par�metro para o construtor de Date, porque o input vinha no formato ano, m�s e dia. Depois, tivemos que fazer algumas transforma��es e vimos que o Date aceita trabalhar com alguns par�metros. Passaremos um array para o Date, tamb�m passamos uma string com ano, m�s e dia, cada item separado por uma v�rgula. Existem v�rias formas de trabalharmos com a data, mas precisamos ajustar a data que lemos no formul�rio e est� num formato string, para o formato compat�vel para o construtor do Date.

Eu deixei um desafio para voc�: eu queria que fosse usado um construtor que usasse ano, m�s e dia, cada um disposto como um par�metro diferente no construtor. Por�m, neste formato, o m�s n�o pode ser passado de 1 a 12, no caso, precisaria ser de 0 a 11. ent�o, foi necess�rio realizar alguns transforma��es e precisamos um pouco de programa��o funcional.

<h2>O modelo MVC</h2>
Sobre o modelo MVC, podemos afirmar que:

R:  C � o controller, aquele que disponibiliza um modelo para a view.
O controller � aquele que recebe as a��es do usu�rio e que sabe interagir com o modelo. Como o modelo � independente da view, esta precisa ser renderizada para que reflita as altera��es no modelo. Em suma, o controller � a ponte de liga��o entre a view e o modelo.

M � o modelo, uma abstra��o do mundo real, os dados da aplica��o e suas regras de neg�cio.
O padr�o MVC permite que altera��es de layout na view n�o acarretem altera��es no modelo.

A View � a representa��o do modelo em alguma tecnologia, por exemplo, HTML.
A view apresenta um modelo em uma tabela, em um formul�rio ou em par�grafos, e o padr�o MVC permite que qualquer altera��o na view n�o interfira com o modelo.

<h2>O que � m� pr�tica ontem pode ser boa pr�tica hoje e vice-versa</h2>
No mundo front-end, h� uma separa��o clara entre HTML, CSS, JS. Tanto isso � verdade que a boa pr�tica � que cada um fique no seu quadrado, ou seja, que cada um tenha seu arquivo dedicado. Essa separa��o visa facilitar a manuten��o.

Contudo, quando manipulamos o DOM, vira e mexe precisamos associar eventos a elementos. Uma maneira de se fazer isso � encontrar o elemento que queremos associar o evento, e realizar essa associa��o via JavaScript. Vejamos um exemplo:
```html
<p id="p1">Ol�</p>
```
Temos um par�grafo com um id definido. No mundo JavaScript, se quisermos associar um evento click ao par�grafo, precisamos busc�-lo primeiro e depois associar o evento:
```html
function mostra() {
    alert('Fui clicado');
}

document.querySelector('#p1').addEventListener('click', mostra);
```
O c�digo anterior funciona perfeitamente, inclusive deixou marcante a separa��o entre HTML e JS, pois em nenhum momento no HTML referenciamos nosso JS (apenas a tag <script> que o carrega, claro).

Contudo, essa solu��o nos obriga a manipular o DOM toda vez que quisermos associar um evento com o elemento. Sendo assim, quando criamos SPA (Single Page Applications), p�ginas que n�o se recarregam durante seu uso) � muito comum usar a abordagem cl�ssica, que � associar a fun��o do evento diretamente na tag <html> da nossa p�gina.

Qual das op��es abaixo associa diretamente na tag <p> o evento click para a fun��o mostra?

R:
```html
<p id='p1' onclick='mostra()'>Ol�</p>
```
Dependendo do seu vi�s te�rico, essa solu��o pode ser uma "heresia". Contudo, frameworks SPA, como Angular, adotam estrutura semelhante para associar a a��o de um controller a um componente da p�gina, dessa forma, removendo o desenvolvedor de ter que realizar essa associa��o manualmente.


<h2>As m�tiplas facetas do this</h2>

Vejamos o seguinte c�digo!
```html
class Pessoa {

    constructor(nome) {
        this.nome = nome;
    }
}

function exibeNome() {
    alert(this.nome);
}

let pessoa = new Pessoa('Salsifufu');

exibeNome('Lampreia'); // PRIMEIRA CHAMADA <=============

exibeNome = exibeNome.bind(pessoa);

exibeNome(); // SEGUNDA CHAMADA <=============
```
O que ser� exibido na PRIMEIRA e SEGUNDA chamada respectivamente?

R: undefined e Salsifufu
Na primeira chamada, o par�metro Lampreia � ignorado pela fun��o, pois a fun��o n�o recebe par�metros. N�o acontece nenhum erro, mesmo a fun��o n�o recebendo o par�metro, uma caracter�stica do JavaScript. Sendo assim, quando exibeNome('Lampreia') � chamado, o this na verdade � window, o escopo global, e nele n�o temos o valor nome.

Contudo, quando executamos a linha:

exibeNome = exibeNome.bind(pessoa);
Estamos recebendo uma refer�ncia para uma nova fun��o, que passa a ter o objeto pessoa como this. Ou seja, a fun��o bind, presente em todas as fun��es, permite indicar qual ser� o valor de this quando ela for executada, em nosso caso pessoa. Como pessoa possui a propriedade nome, ser� exibido no alerta o valor Salsifufu.

� por isso que fizemos ao longo deste cap�tulo:

let $  = document.querySelector.bind(document);
O retorno da fun��o bind � a fun��o querySelector, que tem como contexto o document, ou seja, seu this ser� document. Se tiv�ssemos feito apenas:

let $  = document.querySelector;
A vari�vel $ passa a ser querySelector, mas seu this deixar� de ser document, porque estar� sendo executada fora deste contexto.

<h2>"Prefiro evitar a fadiga!"</h2>

Temos o seguinte controller:

// ContadorController.js
```html
class ContadorController {

    constructor() {
        this._contador = 0;
        alert(this._contador);
    }

    get contador() {
        return this._contador;
    }

    incrementa() {
        this._contador++;
        document.querySelector('#p1').textContent = this._contador;
    }
}
```
E claro, uma p�gina que importa o script do controller, instanciando-o e associando um bot�o � a��o contadorController.incrementa():
```html
<html>
    <head></head>
    <body>
        <p id="p1">0</p>
        <button onclick="contadorController.incrementa()">Incrementar</button>
        <script src="ContadorController.js"></script>
        <script>
            let contadorController = new ContadorController();
        </script>
    </body>
</html>
```
Nosso c�digo funciona, contudo, a maneira como organizamos nosso c�digo pode causar problemas de performance em uma aplica��o com escopo maior.
Sob o ponto de vista funcional, n�o h� problema algum em nosso c�digo, pois ele funciona e atende o requisito, que � incrementar o total do contador e exibir o seu estado atual na view. Contudo, podemos melhorar esse c�digo. Veja que a cada clique do usu�rio, solicitamos ao document que busque o elemento que desejamos. Qual o problema? Uma analogia pode nos ajudar.

Voc� tem 200 pap�is importantes e pega na sala ao lado uma caneta para assinar o primeiro deles, para logo em seguida devolver a caneta. Imagine repetir esse processo para os 199 pap�is restantes? Pois �, o DOM (document) tamb�m ficar� fatigado se voc� buscar o mesmo elemento 200 vezes!

Para evitar a "fadiga", uma boa estrat�gia � realizar uma esp�cie de cache do elemento do DOM que voc� deseja manipular, ou seja, guardar sua refer�ncia, para que voc� o busque apenas uma vez. Em nosso modelo MVC, com o uso de classes fica f�cil definir em que lugar guardaremos uma refer�ncia para o elemento que estamos buscando.

Podemos guardar a refer�ncia do elemento em uma propriedade na classe e toda vez que algu�m precisar desse elemento basta acessar a propriedade que o referencia, evitando assim, percorrer o DOM, fatigando-o! Como as propriedades na classe s�o inicializadas atrav�s do operador new, que chama por debaixo dos panos o constructor da classe, podemos buscar o elemento assim que o nosso controller for instanciado, apenas.

Aplicando os conceitos que vimos anteriormente, nossa classe ContadorController fica assim:
```html
class ContadorController {

    constructor() {
        this._contador = 0;
        this._elemento = document.querySelector('#p1'); // busca uma �nica vez
        alert(this._contador);
    }

    get contador() {
        return this._contador;
    }

    incrementa() {
        this._contador++;
        this._elemento.textContent = this._contador; // n�o precisa buscar o elemento, j� temos uma refer�ncia para ele
    }
}
```
Apesar do problema original n�o ser suficiente para fatigar o DOM, ter sempre em mente escrever um c�digo otimizado e sem comprometer sua legibilidade � um bom caminho a se trilhar.

<h2>"Isso" n�o encaixa em um "Date"? Se vira!</h2>

JavaScript possui um objeto especial para representar datas, o objeto Date. Sua cria��o � direta:

let hoje = new Date();
Quando instanciamos Date sem passar qualquer par�metro para o seu construtor, � criado um objeto com a data naquele momento. Contudo, podemos criar uma data seguindo o seguinte formato:

let outraData = new Date('2016/05/17'); // formato ano/m�s/dia
Internamente, o construtor de Date est� preparado para lidar com uma string neste formato e criar uma inst�ncia correspondente. Podemos at� obter o dia, o m�s e o ano de uma data usando seus m�todos correspondentes:

let outraData = new Date('2016/05/17'); 
console.log(outraData.getDate()); // imprime 17
console.log(outraData.getMonth()); // imprime 4
console.log(outraData.getFullYear()); // imprime 2016
N�o podemos esquecer que um Date guarda internamente os meses de 0 a 11, � por isso que outraData.getMonth() retorna 4 e n�o 5.

Podemos construir uma nova data tamb�m dessa maneira:

let outraDataOutraManeira = new Date(2016, 4, 17);
Veja que o construtor recebe o ano, m�s e dia, contudo esta forma precisa receber o m�s menos um e foi exatamente o que fizemos. Para o m�s 5, passamos o valor 4. Ali�s, estamos passando valores que s�o Numbers, mas poder�amos ter passado esses valores como string que tudo continuaria funcionando do mesmo jeito.

Parta do princ�pio que voc� tem a seguinte vari�vel:

let dataString = '17-05-2016';
E que usar� o construtor de Date, que est� preparado para receber uma data no formato ano/mes/dia.

Escreva um c�digo que altere dataString para que seu conte�do fique compat�vel com o formato ano/mes/dia. No final, instancie uma Date, exibindo no console seu valor.

VER OPINI�O DO INSTRUTOR
Opini�o do Instrutor

Uma solu��o poss�vel � a seguinte:

let dataString = '17-05-2016';

dataString = dataString.split('-').reverse().join('/');

let data = new Date(dataString);

console.log(data);
Ou podemos fazer de uma vez s�:

let dataString = '17-05-2016';

let data = new Date(dataString.split('-').reverse().join('/'));
console.log(data);
A ideia � transformarmos nossa string em uma array, onde teremos tr�s elementos com o dia, m�s e ano respectivamente. Da�, usamos o m�todo reverse do Array que inverte a sua ordem fazendo com que o ano seja o primeiro elemento e o dia o �ltimo. Nosso m�s continuar� na sua posi��o original. Por fim, criamos uma string a partir do array, usando o m�todo join, que usar� uma / para separar cada elemento.


-------------------------------------------------------------------------------------------
<h1>Se��o 04 - Lidar com data � trabalhoso? Chame um ajudante!</h1>

<h2>Exibindo o objeto Date no formato dia/m�s/ano</h2>

Conseguimos capturar as entradas dos usu�rios, e quando este clica no bot�o "Incluir" e submete o formul�rio, a controller instancia uma negocia��o j� com a data convertida. Ent�o, estamos preparados para incluir as negocia��es na tabela do navegador. Por�m, antes, vamos resolver um assunto: a exibi��o da data. Atualmente, temos a op��o de adicionar no negociacao.data dentro do console, na classe NegociacaoController:
```html
let negociacao = new Negociacao(
    data,
    this._inputQuantidade.value,
    this._inputValor.value
  );

  console.log(negociacao.data);
```
Na p�gina do navegador, preencheremos o campo data com 12/11/2016 e veremos a data exibida na Console da seguinte forma:

Sat Nov 12 2016 00:00:00 GMT-0200 (BRST)
Temos que encontrar uma maneira de formatarmos a data para: dia/m�s/ano. Para isto, criaremos a vari�vel diaMesAno.
```html
let diaMesAno = negociacao.data.getDate()
+ '/' + negociacao.data.getMonth()
+ '/' + negociacao.data.getFullYear();
console.log(diaMesAno);
```
Com o getDate() retornaremos o dia e depois, com o getMonth(), retornaremos o m�s e com getFullYear(), o ano. Todos foram concatenados com a data. Observe que utilizamos o Full no ano, para que apare�am todos os d�gitos do ano (n�s queremos evitar o bug do mil�nio).

No entanto, a data que aparecer� no Console ainda n�o ser� a correta.

data errada no console

No Console, vemos o m�s 10, isso acontece porque ele veio de um array que vai de 0 a 11. Ent�o, se a data gravada for no m�s 11, ele ser� impresso no m�s 10. No entanto, n�o solucionaremos somando +1 ao valor no array.
```html
let diaMesAno = negociacao.data.getDate()
    + '/' + negociacao.data.getMonth() + 1
    + '/' + negociacao.data.getFullYear();

console.log(diaMesAno);
```
data esquisita

N�o existe m�s 101! O JavaScript concatenou o dia com a / e resultado disso com o Month. No fim, isso virou uma string e ele ent�o, concatenou com +1. Esta opera��o deve ocorrer primeiro antes da concatena��o, por isso, adicionaremos os () (parent�ses).
```html
let diaMesAno = negociacao.data.getDate()
    + '/' + (negociacao.data.getMonth() + 1)
    + '/' + negociacao.data.getFullYear();

console.log(diaMesAno);
```
B�sico de JavaScript. Agora, vamos executar o c�digo e a data ser� impressa corretamente.


<h2>Isolando a responsabilidade de convers�o de datas</h2>

Ao observarmos o c�digo descobrimos que ele possui poucas linhas. Para criarmos uma data, o c�digo dever� ser executado sempre que adicionarmos e imprimirmos uma data.

```html
let data = new Date(...
    this._inputData.value
    .split('-')
    .map((item, indice) => item - indice % 2)
);

let negociacao = new Negociacao(
    data,
    this._inputQuantidade.value,
    this._inputValor.value
);

let diaMesAno = negociacao.data.getDate()
    + '/' + (negociacao.data.getMonth() + 1)
    + '/' + negociacao.data.getFullYear();

console.log(diaMesAno);
```
O nosso objetivo ser� isolar a responsabilidade de instanciar uma data e exibir a data num formato j� conhecido numa classe. Esta ser� uma classe ajudante que chamaremos de helper e ter� a responsabilidade isolada de lidar com a data.

Agora, dentro das pasta Helpers, criarei o arquivo DateHelper.js. Dentro da classe, teremos dois m�todos: o primeiro m�todo ser� textoParaData(), que receber� um texto e o converter� para data. O segundo ser� o dataParaTexto, que receber� uma data e a converter� em texto.
```html
class DateHelper {

    textoParaData(texto) {

    }

    dataParaTexto(data) {

    }
}
```
Aproveitaremos o c�digo que faz a convers�o no NegociacaoController e adicionaremos nos m�todos:
```html
class DateHelper {

    textoParaData(texto) {

        return new Date(...texto.split('-').map((item,indice) => item - indice % 2));

    }

    dataParaTexto(data) {

        return data.getDate()
            + '/' + (data.getMonth() + 1)
            + '/' + data.getFullYear();
    }
  }
```
Fizemos alguns pequenos ajustes, por �ltimo, inverteremos a ordem dos m�todos para que eles sigam a ordem usada anteriormente.
```html
class DateHelper {

    dataParaTexto(data) {

        return data.getDate()
            + '/' + (data.getMonth() + 1)
            + '/' + data.getFullYear();
      }

    textoParaData(texto) {

        return new Date(...texto.split('-').map((item,indice) => item - indice % 2));

    }
}
```
Em seguida, carregaremos este script no index.html.
```html
<!-- ... -->
 <script src="js/app/models/Negociacao.js"></script>
 <script src="js/app/controllers/NegociacaoController.js"></script>
 <script src="js/app/helpers/DateHelper.js"></script>
 <script>
     let negociacaoController = new NegociacaoController();
 </script>   
</body>
</html>
```
Faremos altera��es tamb�m no NegociacoesController.js, apagaremos as vari�veis data e diaMesAno geradas anteriormente e vamos criar uma nova data:
```html
adiciona(event) {

        event.preventDefault();

        let data = new DateHelper().textoParaData(this._inputData.value);

        let negociacao = new Negociacao(
                data,
                this._inputQuantidade.value,
                this._inputValor.value
            );


        console.log(negociacao);

        console.log(diaMesAno);
    }
}
```
Observe que adicionamos o DateHelper dentro do data. Agora, queremos que a data da negocia��o seja exibida no formato diaMesAno, separada com barras /. Em vez de usarmos o new no DateHelper, vamos adicionar a vari�vel helper. Em data, adicionaremos a helper que dar� o texto para data
```html
adiciona(event) {

        event.preventDefault();

        let helper = new DateHelper();
        let data = new DateHelper().textoParaData(this._inputData.value);

        let negociacao = new Negociacao(
                data,
                this._inputQuantidade.value,
                this._inputValor.value
            );


        console.log(negociacao);

        console.log(helper.dataParaTexto(negociacao.data));
    }
}
```
Agora, isolamos a responsabilidade das convers�es de data para classe Helper. Se executarmos o c�digo, ser� criada a data correta:

negociacao na controller

A data tamb�m � impressa corretamente no formato texto. A classe Helper cumpriu bem o seu trabalho.

Em seguida, faremos um novo ajuste. Em vez de utilizarmos a vari�vel data, moveremos a seguinte linha para a negociacao:

helper.textoParaData(this._inputData.value)
Com a altera��o, o c�digo ficar� assim:
```html
adiciona(event) {

    event.preventDefault();

    let helper = new DateHelper();

    let negociacao = new Negociacao(
        helper.textoParaData(this._inputData.value),
        this._inputQuantidade.value,
        this._inputValor.value
    );
}
```
N�o precisamos mais da vari�vel data, usaremos diretamente o seu retorno.

Vamos testar o c�digo no navegador, e veremos que a data 12/11/2019 aparecer� no Console.

data no console funcionando

N�s conseguimos isolar o c�digo dentro do Helper. Mas ser� que ainda podemos melhor�-lo ainda mais? Sempre que falo isso, voc�s sabem que � poss�vel. Veremos como, mais adiante.

<h2>M�todos est�ticos</h2>

Precisamos usar uma inst�ncia para invocar os m�todos, quando queremos usar o DateHelper. Mas ser� que este possui alguma propriedade? N�o. N�s configuramos um construtor diferente do padr�o para o DateHelper? N�o. Vale ressaltar que se n�o definimos um constructor, por padr�o, � como se existisse vazio.
```html
class DateHelper {

  constructor() {}

  dataParaTexto(data) {

      return data.getDate()
          + '/' + (data.getMonth() + 1)
          + '/' + data.getFullYear();

}

textoParaData(texto) {

  return new Date(...texto.split('-').map((item,indice) => item - indice % 2));

}
```
Como n�o definimos o constructor, n�o colocaremos propriedades na classe. Outra op��o seria adicionar a vari�vel helper2:
```html
adiciona(event) {

    event.preventDefault();

    let helper = new DateHelper();
    let helper2 = new DateHelper();

    let negociacao = new Negociacao(
        helper.textoParaData(this._inputData.value),
        this._inputQuantidade.value,
        this._inputValor.value
    );

    console.log(negociacao);
    console.log(helper.dataParaTexto(negociacao.data));

}
```
Ou seja, adicionar�amos uma inst�ncia em todos os lugares que precisasse do helper. Isto tem um impacto no uso da mem�ria, apesar de insignificante no nosso caso. Uma melhor decis�o � acessar diretamente o m�todo da classe.
```html
adiciona(event) {

    event.preventDefault();

    let helper = new DateHelper();
    let helper2 = new DateHelper();

//...
```
N�s substitu�mos o Date por DateHelper.
```html
adiciona(event) {

    event.preventDefault();

    let helper = new DateHelper();
    let helper2 = new DateHelper();

    let negociacao = new Negociacao(
        DateHelper.textoParaData(this._inputData.value),
        this._inputQuantidade.value,
        this._inputValor.value
    );

    console.log(negociacao);
    console.log(DateHelper.dataParaTexto(negociacao.data));
}
```
N�s n�o queremos que o m�todo seja uma inst�ncia do DateHelper, queremos poder invoc�-lo diretamente da defini��o da classe. Para isto, no arquivo DateHelper.js, adicionaremos o static aos m�todos:
```html
class DateHelper {

  static dataParaTexto(data) {

      return data.getDate()
          + '/' + (data.getMonth() + 1)
          + '/' + data.getFullYear();

}

  static textoParaData(texto) {

      return new Date(...texto.split('-').map(item,indice) => item - indice % 2));
    }
```
Agora, os m�todos ser�o invocamos diretamente da classe e o NegociacaoController ficou um pouco mais enxuto. Vamos testar submeter os dados no formul�rio:

!Negociacao no console

Vimos uma novidade em termos de orienta��o para objeto: a classe DateHelper tem m�todos est�ticos, o que torna desnecess�rio a cria��o de uma inst�ncia.

Em seguida, vamos definir um constructor(), depois, adicionaremos a fun��o throw new Error(). V�rias fun��es do JavaScript n�o foram migradas para classe e s�o construtoras.
```html
class DateHelper {

    constructor() {

        throw new Error('DateHelper n�o pode ser instanciada');

//...
```
No Console, digitaremos :

x = new DateHelper ()
Veremos o seguinte retorno.

mensagem de erro

Ao ver esta mensagem, o programador saber� que trabalhamos com m�todos est�ticos. Se clicarmos no erro, veremos qual � a classe e onde est� o problema. Faremos um pequeno ajuste na mensagem que aparecer�, deixando-a mais gen�rica:
```html
class DateHelper {

    constructor() {

        throw new Error('Esta classe n�o pode ser instanciada');
    }
//...
```
esta classe n�o pode ser instanciada

Mais adiante, vamos melhorar ainda mais a classe.

<h2>Template Strings</h2>

Vamos voltar ao arquivo DateHelper.js e analisar o m�todo dataParaTexto. Neste, faremos a concatena��o de strings:
```html
class DateHelper {

    dataParaTexto(data) {

        return data.getDate()
            + '/' + (data.getMonth() + 1)
            + '/' + data.getFullYear();
      }
...
```
Adicionamos os par�nteses para trabalharmos corretamente com o elemento m�s. N�s temos a op��o de utilizar um recurso das vers�es posteriores ao ES2015: template string. Vamos ver como ela funciona.

Primeiramente, digitaremos no Console:

let nome = 'Fl�vio'
undefined
let idade = 18
undefined
console.log('A idade de' + nome + ' � ' + idade + '.')
A idade de Fl�vio � 18.
undefined
Para usarmos o template string, adicionaremos a seguinte linha:

console.log(`A idade de nome � idade.`)
Observe que adicionamos o ` (backtick), mas se executarmos o c�digo desta forma, ser� exibida a frase: A idade de nome � idade.. Ele n�o entendeu que o nome deve ser substitu�do pelo valor da vari�vel. Mas se colocarmos nome dentro de uma express�o, conseguiremos o resultado esperado.

console.log(`A idade de ${nome} � ${idade}.`);
A idade de Fl�vio � 18.
Com o uso de ${} dentro da string, ele far� o mecanismo de interpola��o. A express�o ir� interpolar o conte�do das vari�veis nome e idade na string. Se entendemos corretamente esta estrutura, ela � menos sujeita a erro do que a anterior que continha v�rias concatena��es. Se transpormos isto no DateHelper, podemos melhorar o c�digo:

  return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
Observe que somamos o m�s com 1. O trecho do c�digo ficou assim:
```html
class DateHelper {

    dataParaTexto(data) {

        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
    }

    static textoParaData(texto) {

        return new Date(...texto.split('-').map((item,indice) => item - indice % 2));
      }
  }
```
Desta vez, n�o foi necess�rio adicionar par�nteses, porque cada express�o ser� avaliada individualmente para fazer a interpola��o com a string. Outra vantagem do template string � que podemos apagar os sinais + entre as express�es e apenas, separar cada uma em linhas diferentes:
```html
stactic dataParaTexto(data) {

    return `${data.getData()}
        /${data.getMonth()+1}
        /${data.getFullYear()}`;
}
```
Mas manteremos o c�digo como estava, apenas em uma linha. Feito isso, vamos testar o c�digo no navegador.

negociacao no console corretamente

A data aparecer� corretamente. Este foi o nosso primeiro contato com o template string, veremos que este � um recurso poderoso do JavaScript. Voc� ver� o que faremos com ele. Por enquanto, j� n�o precisamos ficar concatenando um monte de coisa, porque ele faz a interpola��o automaticamente.

Outro a��o que realizaremos: pediremos para o DateHelper converter o texto com /. No console, digitaremos:

DateHelper.textoParaData(`11/12/2017`)
Ele retornar� que a data � inv�lida, porque o texto para data deve receber o ano-m�s-dia. N�s j� vamos validar na vari�vel textoParaData se passamos uma string no padr�o estabelecido, exibindo uma mensagem caso o padr�o n�o seja exibido. Faremos algo denominado fail-fast, assim que passar algo errado pelo m�todo, falharemos r�pido.

Vamos adicionar um express�o regular, que ser� sinalizada por barras (//):
```html
static textoParaData(texto) {

    /\d{4}-\d{2}-\d{2}/.test(texto)
    return new Date(...texto.split('-').map((item, indice) => item - indice % 2));
}
```
Os valores 4, 2 e 2 sinalizam que os n�meros ter�o tais quantidade de d�gitos, respectivamente. Com test, pedimos que a express�o teste se o texto segue o padr�o.

Voc� pode se aprofundar no assunto com o curso de Express�o Regular da Alura.

Queremos lan�ar um erro caso o texto n�o siga o padr�o, por isso, adicionaremos um if. Caso siga, o retorno ser� verdadeiro. Em seguida, adicionaremos othrow new Error>
```html
if(!/\d{4}-\d{2}-\d{2}/.test(texto))
    throw new Error('Deve estar no formato aaaa-mm-dd');
```
A linha com o throw new s� ser� executada se o if for falso, por isso, usamos o sinal de !.. Se quisemos colocar mais uma instru��o abaixo, teremos que lembrar de coloc�-las em um bloco usando {} e assim, evitar problemas. Ser� que funcionar�? Vamos fazer um teste no Console:

DateHelper.textoParaData('2017-11-12')
Sun Nov 12 2017 00:00:00 GMT-0200 (BRST)
A data exibida est� correta. Depois, for�aremos o erro no Console para ver o que acontece.

DateHelper.textoParaData('2017/11/12')
Uncaught Error: Deve estar no formato aaaa-mm-dd(..)
Ele nos retornar� uma mensagem de erro. O mesmo ocorrer� se digitarmos no campo ano, por exemplo, um n�mero com a quantidade de d�gitos maior ou menor que 4. Vemos que a express�o regular � usada justamente para encontrar padr�es, podendo ser usadas no nosso c�digo JavaScript. � a oportunidade de utilizarmos diferentes conhecimentos que vimos nos cursos da Alura.

<h2>Criando nosso ListModel</h2>
A negocia��o est� pronta! Agora temos que adicionar as demais negocia��es cadastradas na lista - lembrando que uma vez adicionadas, estas n�o ser�o mais removidas e t�o pouco poderemos alter�-las.

Se optarmos por trabalhar com array de negociacoes n�o temos esse tipo de controle e podemos fazer v�rias opera��es sobre o array. A solu��o � criar um modelo (model) que vai encapsular a regra de uma lista de negocia��es. Dentro da pasta models, criaremos o arquivo ListaNegociacoes.js. A nova classe criada, ter� como atributos uma lista de negocia��es que come�ar� com 0:
```html
class ListaNegociacoes {

    constructor() {
        this._negociacoes = []
    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }
}
```
Observe que usamos o prefixo _ para indicar que a lista n�o deve ser alterada. Se ningu�m pode acessar as propriedade de negocia��o dentro da lista, adicionamos o m�todo adiciona que receber� uma negociacao. Precisamos de uma m�todo que nos permita ler a lista de negocia��es para ent�o, podermos exibi-la.

Em seguida, criaremos o getter de negociacoes. Ao instanciarmos uma lista de negocia��es, ela estar� vazia. Por meio do m�todo adiciona(), podemos adicionar negocia��es e com o m�todo get poderemos list�-las.
```html
adiciona(negociacao) {
    this._negociacoes.push(negociacao);
}

get negociacoes() {

    return this._negociacoes;
}
```
Depois, no index.html, temos que importar a nossa classe.
```html
<script src="js/app/models/Negociacao.js"></script>
<script src="js/app/controllers/NegociacaoController.js"></script>
<script src="js/app/helpers/DateHelper.js"></script>
<script src="js/app/models/ListaNegociacoes.js"></script>
```
De volta ao NegociacaoController, adicionaremos um atributo que chamarei ListaNegociacoes.
```html
class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes();

    }
    //...
```
Temos um atributo da Controller. Assim que cadastramos uma nova negocia��o � preciso tamb�m construir uma nova Negociacao com os dados do formul�rio. Para isto, adicionaremos um novo this ao m�todo adiciona().
```html
adiciona(event) {

        event.preventDefault();

        let negociacao =
            new Negociacao(
                DateHelper.textoParaData(this._inputData.value),
                this._inputQuantidade.value,
                this._inputValor.value
            );

        this._listaNegociacoes.adiciona(negociacao);
        console.log(this._listaNegociacoes.negociacoes);
```
Para testar se funciona usamos o console.log() para exibir a lista de negocia��es. No navegador vamos preencher o formul�rio adicionando 12/11/2016 no campo Data, 1 em Quantidade e 100 no Valor. Veremos que os dados ser�o exibidos corretamente.

negociacao no console

Queremos adicionar os dados de uma nova negocia��o, mas o formul�rio ainda t�m nos campos, as informa��es preenchidas anteriormente. Vamos encontrar um forma de limpar o formul�rio para que a a��o n�o seja realizada pelos usu�rios. Podemos adicionar tamb�m o foco no campo data. Faremos tudo isso, adicionando abaixo do m�todo adiciona(), o _limpaFormulario, que s� poder� ser chamado pela pr�pria classe NegociacaoController.
```html
_limpaFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0

        this._inputData.focus();

    }
```
Assim que acabarmos de fazer a negocia��o, chamaremos o this._limpaFormulario():
```html
adiciona(event) {

    event.preventDefault();

    let negociacao = new Negociacao{
        DateHelper.textoParaData(this._inputData.value),
        this._inputQuantidade.value,
        this._inputValor.value
    };

    this._listaNegociacoes.adiciona(negociacao);
    this._limpaFormulario();

    console.log(this._listaNegociacoes.negociacoes);
}
```
N�o podemos nos esquecer de importar o script em index.html. No lugar de import�-lo como �ltimo script, vamos agrup�-lo com a importa��o de Negociacao.js, sendo assim, tudo o que for model ser� importado um ap�s o outro. S� estamos imprimindo por enquanto, porque ainda n�o estamos exibindo a negocia��o na tela. Vamos testar novamente e preencher os dados do formul�rio.

Ap�s preenchermos uma primeira vez todos os campos e enviarmos os dados, o formul�rio ficar� vazio. Mas o dados da negocia��o foram salvos. O mesmo ocorrer� quando preenchermos pela segunda vez os dados do formul�rio.

exibi��es do array

Temos duas negocia��es dentro do array, cada uma com a sua devida configura��o. J� estamos conseguindo adicionar elementos � lista. Mas podemos melhorar ainda o c�digo. N�s criamos a negocia��es dentro do m�todo adiciona(). Logo abaixo, criaremos outro m�todo auxiliar que se chama _criaNegociacao. Neste, aproveitaremos o return do adiciona(). Agora o novo m�todo ser� respons�vel por criar Negociacao:
```html
_criaNegociacao() {

  return new Negociacao(
        DateHelper.textoParaData(this._inputData.value),
        this._inputQuantidade.value,
        this._inputValor.value
    );
//...
```
Removeremos a vari�vel negociacao do adiciona() e em vez de passarmos negociacao no this., passaremos o this._criaNegociacao:
```html
adiciona(event) {

    event.preventDefault();

    this._listaNegociacoes.adiciona(this._criaNegociacao());
    this._limpaFormulario();

    console.log(this._listaNegociacoes.negociacoes);
}
```
At� aqui, os tr�s m�todos est�o assim:
```html
adiciona(event) {

    event.preventDefault();

    this._listaNegociacoes.adiciona(this._criaNegociacao());
    this._limpaFormulario();

    console.log(this._listaNegociacoes.negociacoes);
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
    this._inputValor.value = 0.0

    this._inputData.focus();

```            }
Testaremos o formul�rio para conferir se n�o quebramos nada.

4.5_negociacao funciona

Tudo est� funcionando corretamente. Ent�o, criamos dois m�todos auxiliares da controller que n�o deve ser chamado por fora da classe. A conven��o � que apenas a classe pode chamar propriedade e os m�todos sinalizados com _.

Mas ser� que a classe, o modelo de negocia��es, � imut�vel? Ser� que podemos interagir com a lista de negocia��o? Ser� que podemos alterar sem passar pelo adiciona()? Vamos fazer um teste para descobrir.

<h2>Blindando as negocia��es dentro da lista</h2>
Colocamos em cheque a quest�o da imutabilidade da lista de negocia��es. A classe ListaNegociacoes ser� a �nica que poder� ter acesso a esta. A seguir, vamos incluir a seguinte linha no adiciona() do NegociacaoController, :

this._listaNegociacoes.negociacoes.length = 0;
Com isso, o trecho ficou assim:
```html
adiciona(event) {

    event.preventDefault();

    this._listaNegociacoes.adiciona(this._criaNegociacao());
    this._limpaFormulario();

    this._listaNegociacoes.negociacoes.length = 0;
    console.log(this._listaNegociacoes.negociacoes);
}
```
Ao definirmos que o length � igual a 0, estamos esvaziando o array. Quando imprimimos no Console, devemos ver quantas negociacoes s�o exibidas. Se conseguimos esvaziar o array, ou seja, se alteramos a lista, isto significa que as negocia��es n�o foram blindadas:

array vazio

Voc� pode perguntar "mas n�o colocamos em getter?". A resposta �: sim, mas negociacoes � um array. Trata-se de uma refer�ncia. Quando usamos o length, alteramos a propriedade do objeto... Da mesma forma, n�o temos uma �nica forma de adicionar uma negocia��o. N�o usamos apenas o m�todo adiciona(). Por exemplo, podemos usar o negociacoes.push():
```html
adiciona(event) {

    event.preventDefault();

    this._listaNegociacoes.adiciona(this._criaNegociacao());
    this._listaNegociacoes.negociacoes.push(this._criaNegociacao());
    this._limpaFormulario();
    console.log(this._listaNegociacoes.negociacoes);
}
```
O m�todo adiciona() deveria ser o �nico caminho para adicionarmos uma negocia��o, mas se executarmos o c�digo, veremos que conseguimos salvar duas negocia��es. Se preenchermos o formul�rio uma vez, veremos que temos duas Negociacao. Algu�m conseguiu adicionar fora do m�todo adiciona(). Resolveremos o problema com programa��o defensiva. Quando algu�m pedir uma lista de negocia��es, devolveremos uma nova lista - uma c�pia da que tenho dentro da ListaNegociacoes. Mesmo que adicionarmos o length = 0 ou inserir um elemento, como a lista est� separada, n�o ser� poss�vel adicionar outra negocia��o.

Em ListaNegociacoes.js, usaremos um truque: daremos um return com array vazio, seguido pelo m�todo concat():
```html
get negociacoes() {

    return [].concat(this._negociacoes);
  }
```
Ao passarmos o this._negociacoes dentro do concat(), o retorno ser� uma nova lista, um novo array. Agora se tentarmos usar o push() do NegociacaoController, s� conseguiremos fazer a altera��o na c�pia da lista, mas n�o na original. Se fizermos um teste no formul�rio e preenchermos os campos uma vez, s� dever� ter uma negocia��o.

array blindado

S� � exibida uma Negociacao. O push() s� funcionou na c�pia da lista. Podemos fazer pequenos ajustes no m�todo adiciona, que ficar� assim:
```html
adiciona(event) {

    event.preventDefault();
    this._listaNegociacoes.adiciona(this._criaNegociacao());
    this._limpaFormulario();
}
```
Conseguimos incluir negocia��es dentro da lista que s� pode ser alterada por interm�dio do m�todo adiciona().


<h2>Resumindo</h2>

Vamos revisar o que foi visto at� aqui. Vimos que quando trabalhamos com data, precisamos transformar o formato da string para um objeto Data, com dia-m�s-ano. � importante evitar a repeti��o do c�digo sempre que for preciso usar a data no sistema, para isto, isolamos o trecho referente �s convers�es numa classe: o DateHelper. Em vez de usarmos concatena��es nesta, optamos por usar uma template string que � criada com um ` (backtick, em ingl�s). Quando usamos a crase no in�cio e no fim, podemos colocar express�es dentro da template string, sem precisar das concatena��es. Mais adiante, nos aprofundaremos no assunto.

Como a Negociacao est� pronta, come�amos a preparar a listagem de negocia��es para a exibi��o. Por�m, nesta listagem n�o podemos incluir, remover ou alterar uma Negociacao - uma das regras de neg�cio. Ent�o, n�s criamos uma classe do modelo que recebeu o nome ListaNegociacoes. Depois, conseguimos adicionar e obter essas negocia��es, por meio do m�todo adiciona() e do getter Negociacoes. Por�m, vimos que essa lista de negocia��es dentro do model n�o estava blindada. Qualquer um que chamasse o getter conseguiria apagar ou incluir a lista, por isso, lan�amos m�o da programa��o defensiva.

Caso o getter de Negociacao fosse chamado, o retorno seria um array original e independente de qualquer interfer�ncia de fora. Fizemos isto utilizando um array vazio, seguido da fun��o concat(). Criamos tamb�m alguns m�todos auxiliares "privados" na Controller, al�m de brincarmos um pouco com as express�es regulares para validarmos o texto passado para convers�o de data.

<h2>Olhar agu�ado para o paradigma da orienta��o a objetos</h2>
Temos o seguinte c�digo que define uma fun��o que sabe validar um c�digo:

```html
let codigo = 'GWZ-JJ-12';

function validaCodigo(codigo) {

    if(/\D{3}-\D{2}-\d{2}/.test(codigo)) {
          alert('C�digo v�lido!');
      } else {
          alert('C�digo inv�lido');
      }

}

validaCodigo('GWZ-JJ-12'); // v�lido
validaCodigo('1X1-JJ-12'); // inv�lido
```
Muita coisa acontecendo? Se voc� n�o � ninja em express�o regular, vamos desmembrar o c�digo para facilitar sua leitura:

```html
function validaCodigo(codigo) {

    // cria a express�o regular. Poder�amos ter usado 
    // a sintaxe new RegExp(/\D{3}-\D{2}-\d{2}/)
    // \D � qualquer coisa n�o d�gito, \D{3} � qualquer coisa n�o d�gito que forme um grupo de 3 caracteres. E \d � qualquer d�gito.
    let expressao = /\D{3}-\D{2}-\d{2}/; 

    // toda express�o regular possui o m�todo test 
    // que recebe o alvo do teste, retornando true
    // se passou, e false se falhou
    if(expressao.test(codigo)) {
          alert('C�digo v�lido!');
      } else {
          alert('C�digo inv�lido');
      }

}

validaCodigo('GWZ-JJ-12'); // v�lido
validaCodigo('1X1-JJ-12'); // inv�lido
```
Essa solu��o � procedural. Veja que toda vez que criarmos um c�digo precisaremos buscar em algum lugar do nosso sistema algu�m que o valide. Temos uma separa��o entre dado e comportamento.

Refa�a o c�digo anterior adotando o paradigma da orienta��o a objetos. Uma dica: tudo come�a com a cria��o da classe Codigo. N�o se preocupe, a ideia aqui � instigar algumas percep��es em voc� sobre este paradigma.

VER OPINI�O DO INSTRUTOR
Opini�o do Instrutor

Vou criar uma classe que representa um c�digo e encapsular a regra de que o c�digo deve ter determinado formato. Realizarei a valida��o no construtor da classe. Se o c�digo for inv�lido, nenhum objeto ser� instanciado e o programador ainda receber� uma mensagem de erro o alertando do problema. Isto �, independente do lugar que eu tenha uma inst�ncia de Codigo todo c�digo criado ser� validado!
```html
class Codigo {

    constructor(texto) {

        if(!this._valida(texto)) throw new Error(`O texto ${texto} n�o � um c�digo v�lido`);
        this._texto = texto;        
    }

    _valida(texto) {

        return /\D{3}-\D{2}-\d{2}/.test(texto);
    }

    get texto() {

        return this._texto;
    }
}

let codigo1 = new Codigo('GWZ-JJ-12'); // v�lido
console.log(codigo1.texto);
let codigo2 = new Codigo('1X1-JJ-12'); // inv�lido
console.log(codigo2.texto);
```
Onde quer que tenhamos um c�digo, dado e comportamento caminham juntos, mesmo que esse comportamento/regra esteja no construtor. Ali�s, o _valida est� prefixado desta forma porque esse m�todo s� deve ser chamado pela pr�pria classe.

<h2>O par�metro n�o encaixa, e agora?</h2>

Um programador amigo do cora��o criou uma fun��o gen�rica para imprimir todos os itens de qualquer lista no console:
```html
function exibeNoConsole(lista) {
    lista.forEach(item => console.log(item));
}
```
Excelente, mas em nossa aplica��o dentro de um contexto espec�fico temos duas listas distintas que queremos imprimir no console. Sendo assim, precisamos chamar a fun��o duas vezes.
```html
let listaDeNomes1 = ['Fl�vio', 'Rogers', 'J�lia'];
exibeNoConsole(listaDeNomes1);
let listaDeNomes2 = ['Vieira', 'Fernanda', 'Gerson'];
exibeNoConsole(listaDeNomes2);
```
Para evitar de chamarmos a fun��o duas vezes, uma vez para cada lista, podemos juntar uma lista na outra. Implemente o c�digo que cria uma nova lista que � a jun��o dos elementos de listaDeNomes1 e listaDeNomes2.

VER OPINI�O DO INSTRUTOR
Opini�o do Instrutor

Em uma abordagem procedural far�amos:
```html
function exibeNoConsole(lista) {
    lista.forEach(item => console.log(item));
}
```
Excelente, mas em nossa aplica��o dentro de um contexto espec�fico temos das listas distintas que queremos imprimir no console. Sendo assim, precisamos chamar a fun��o duas vezes.
```html
let listaDeNomes1 = ['Fl�vio', 'Rogers', 'J�lia'];
let listaDeNomes2 = ['Vieira', 'Fernanda', 'Gerson'];
let lista = [];

listaDeNomes1.forEach(item => lista.push(item));
listaDeNomes2.forEach(item => lista.push(item));

exibeNoConsole(lista);
```
Contudo, todo array em JavaScript possui o m�todo concat. Alterando nosso c�digo:
```html
let listaDeNomes1 = ['Fl�vio', 'Rogers', 'J�lia'];
let listaDeNomes2 = ['Vieira', 'Fernanda', 'Gerson'];
let lista = listaDeNomes1.concat(listaDeNomes2);

exibeNoConsole(lista);
```
O resultado de concat � um novo array com todos os elementos de quem realizou o concat e quem foi passado para a fun��o.

Se quisermos, podemos enxugar ainda mais nosso c�digo:
```html
let listaDeNomes1 = ['Fl�vio', 'Rogers', 'J�lia'];
let listaDeNomes2 = ['Vieira', 'Fernanda', 'Gerson'];
exibeNoConsole([].concat(listaDeNomes1, listaDeNomes2));
```
Veja que n�o criamos mais a vari�vel tempor�ria lista. Estamos passando o resultado da concatena��o de um array vazio [] com outras duas listas. Ali�s, a fun��o concat aceita receber um n�mero infinito de par�metros, inclusive aqueles que n�o s�o um array. Vejamos um exemplo:
```html
let listaDeNomes1 = ['Fl�vio', 'Rogers', 'J�lia'];
let listaDeNomes2 = ['Vieira', 'Fernanda', 'Gerson'];
exibeNoConsole([].concat(listaDeNomes1, listaDeNomes2, 'R�mulo'));
```
Com isso, a lista criada ter� tamb�m um item de valor R�mulo.

<h2>Template String</h2>

Qual a maneira correta de se utilizar a Template String?
```html
let nome = 'Juca';
let sobrenome = 'Monteiro';

let frase = `${nome} ${sobrenome} tamb�m sabe JavaScript`;
```

<h2>E a lista de negocia��es?</h2>
O que podemos dizer sobre a propriedade negociacoes da classe ListaNegociacoes?
```html
class ListaNegociacoes {

    constructor() {
        this._negociacoes = [];
    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }

    get negociacoes() {
        return this._negociacoes;
    }
}
```

R: � poss�vel, atrav�s da propriedade negociacoes, pegar uma refer�ncia da lista interna, que guarda as negocia��es. Por conta disso, algu�m mal intencionado pode fazer o que quiser com ela.



<h2>Por que...</h2>

Temos a seguinte classe:
```html
class ConversorXML {

    static converte(objeto) {
        // converte um objeto em XML
    }
}
```
Agora, vamos criar uma inst�ncia desta classe e chamar o m�todo converte:
```html
let conversor = new ConversorXML();
conversor.converte({nome: 'Guaraci', idade: 40});
```
Teste este c�digo no console.

VER OPINI�O DO INSTRUTOR
Opini�o do Instrutor

Este c�digo n�o funciona porque o m�todo converte � est�tico e n�o ser� encontrado na inst�ncia de uma classe, mas diretamente na classe. Alterando o c�digo para ser v�lido:

ConversorXML.converte({nome: 'Guaraci', idade: 40});
M�todos est�ticos antes do ES6
Curiosidade: como cri�vamos m�todos est�ticos antes do ES6? Vejamos um exemplo, com a classe Pessoa:

Vejamos um exemplo do ES6 para declarar uma classe com m�todos de inst�ncia e m�todos est�ticos:
```html
class Pessoa {

    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobreNome = sobrenome;
    }

    obterNomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }

    static metodoStaticoQualquer() {
        console.log('M�todo est�tico chamado');
    }

}
```
E antes do ES6. Como implement�vamos algo semelhante a m�todos est�ticos? Vejamos um exemplo:
```html
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

// m�todo de inst�ncia
Pessoa.prototype.obterNomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
};

// declarando equivalente a m�todo est�tico

Pessoa.metodoStaticoQualquer = function() {

    console.log('M�todo est�tico chamado');

};
```


-------------------------------------------------------------------------------------------------
<h1>Se��o 05 - Temos o modelo, mas e a view?</h1>

<h2>Classes que representam nossas Views</h2>
Temos um modelo de Negocia��o, outro de ListaNegociacoes, e temos uma controller que orquestra o acesso aos modelos de acordo com as a��es do usu�rio. No entanto, ainda n�o conseguimos refletir o estado do modelo para a tela. A tabela ainda n�o exibe os dados cadastrados. Agora temos que atacar a View, do MVC, j� temos o model e a controller. Para que possamos aplicar v�rios conceitos e conhecer novos recursos da linguagem JavaScript, minha proposta � que em cada parte da View que sincronizarmos com o modelo, n�o ser� feita no arquivo HTML. Em vez disso, criaremos a classe NegociacoesView dentro da pasta View que ir� encapsular a apresenta��o que exibiremos para o usu�rio. � o arquivo NegociacoesView.js que ter� as defini��es de como ser� a tabela. Come�aremos com ela assim:
```html
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
```
Como retiramos o trecho do c�digo referente � tabela, no index.html, ela j� n�o ser� mais exibida abaixo do formul�rio.

formulario sem tabela

Ao incluirmos uma negocia��o na lista, queremos que ela seja inclu�da e exibida na tabela. Para isto, em NegociacoesView.js, adicionaremos a classe NegociacaoView, e dentro dela, criaremos a fun��o template() - que retornar� uma template string. Depois, jogaremos o conte�do da tabela dentro do return da fun��o.
```html
class NegociacoesView {

    template() {

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
     </table>
            `;
    }
}
```
Se o retorno n�o fosse uma template string, n�o poder�amos "identar" o c�digo desta forma. Se fosse uma string, n�o poder�amos quebrar o c�digo em linhas desta maneira. Ele n�o funcionaria. N�s ter�amos que concatenar todas as linhas.

Em seguida, no NegociacaoController, adicionaremos a propriedade this._negociacao View:

```html
class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes();
        this._negociacoesView = new NegociacoesView();
    }
//...
```
Precisaremos importar o arquivo tamb�m no index.html:
```html
    <script src="js/app/models/Negociacao.js"></script>
    <script src="js/app/controllers/NegociacaoController.js"></script>
    <script src="js/app/helpers/DateHelper.js"></script>
    <script src="js/app/models/ListaNegociacoes.js"></script>
    <script src="js/app/views/NegociacoesView.js"></script>
    <script>
        let negociacaoController = new NegociacaoController();
</script>
```
Ap�s recarregarmos a p�gina vamos digitar a seguinte linha no Console:

let NegociacoesView = new NegociacoesView()
Teremos uma inst�ncia de NegociacoesView. Se chamamos NegociacoesView.template(), recebemos uma mensagem de erro:

string no console

No Console, ser� exibida a string da tabela. Ent�o, qual ser� nosso pr�ximo objetivo? O template que est� no NegociacoesView.js tem que aparecer no index.html, onde estava a marca��o do HTML da tabela. Para isto, sinalizaremos o local em que o template ser� renderizado, adicionando a tag <div> e dentro, o id.

<div id="negociacoesView"></div>
Mas o NegociacoesView precisa saber que construiremos a tabela nesta <div>. Precisamos de alguma forma associar o elemento do DOM com a NegociacoesView. Por isso, vamos gerar um constructor() que recebe um elemento, respons�vel por receber o template:
```html
class NegociacoesView {

    constructor(elemento) {

        this._elemento = elemento;
    }

    template() {

        return `<table class="table table-hover table-bordered">
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
             </table>
            `;
    }
}
```
Em NegociacaoController, teremos que buscar o #negociacaoView:

```html
class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes();
        this._negociacoesView = new NegociacoesView($('#negociacoesView'));

        this._negociacoesView.update();
    }
//...
```
Assim que a negocia��o for criada, pediremos para o negociacoesView fazer um update, ent�o, a tabela aparecer� dentro da View. Depois, adicionaremos a fun��o update dentro de NegociacoesView. Tamb�m vamos inserir o _ ao template, sinalizando que ser� uma fun��o privada.
```html
_template() {

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
         </table>
        `;
      }
```
O m�todo update() que ser� criado, pegar� o elemento do DOM e acessar� a propriedade innerHTML. Ela ser� o retorno da fun��o _template():
```html
update() {

      this._elemento.innerHTML = this._template();
}
```
O innerHTML ser� respons�vel por converter as strings em elementos do DOM. Isto ser� inserido com filho da <div>.

Ap�s as �ltimas altera��es, quando recarregarmos a p�gina no navegador, a tabela j� ser� visualizada.

tabela na pagina

O problema � que ao chamarmos a fun��o update(), a View que estamos renderizando no HTML, deveria refletir a lista de negocia��es. Se tivermos cinco negocia��es, todas dever�o ser exibidas. Veremos mais adiante como atualizar a View com os dados do modelo.

Nosso objetivo era chamar na View a fun��o update(), quando o modelo fosse atualizado, passando como par�metro o model - que ser� enviado para o template da View. Depois, este ser� processado e usar� como base os dados do model. A string final ser� colocada no atributo do elemento que a View associada no DOM. Toda string colocada na propriedade innerHTML ser� convertida em elementos do DOM.

Desta forma, conseguimos cadastrar as negocia��es, sendo atualizada no modelo e este notificar� a View que dever� ser renderizada.

<h2>Construindo um template din�mico com a fun��o map</h2>
A fun��o update() para atualiza��o da View est� funcionando e a tabela j� pode ser visualizada abaixo do formul�rio. Por�m, os dados do modelo ainda n�o s�o levados em considera��o na constru��o din�mica da tabela. Primeiramente, passaremos a ListaNegociacoes como par�metro do m�todo update(). Ou seja, quando o modelo for alterado, a lista dever� ser atualizada da tabela.
```html
class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

        this._listaNegociacoes = new ListaNegociacoes();
        this._negociacoesView = new NegociacoesView($('#negociacoesView'));


    }
```
A a��o n�o ser� realizada apenas quando a controller for carregada, mas tamb�m quando o adiciona() for chamado. Porque atualizamos a lista, assim que acabamos de adicionar uma nova negocia��o, temos que solicitar para View que esta se renderize com o novo modelo. Em NegociacoesView.js, faremos com que o m�todo update() recebe o model.
```html
update(model) {

    this._elemento.innerHTML = this._template(model);
}
```
Passamos o model como par�metro do _template().
```html
_template(model)

    return `
    table class="table table-hover table-bordered">
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
         </table>
        `;
      }
```
Dentro da tag <tbody>, adicionaremos tags <tr> com base em cada negocia��o do ListaNegociacoes. Para isto, usaremos uma express�o que conter� o map() - podemos usar, inclusive, uma arrow function.
```html
<tbody>
    ${model.negociacoes.map(n => {

      })}
</tbody>
```
Se adicionarmos um console.log(n) e executarmos o c�digo, a negocia��o ser� impressa no Console. Com o return n, ser� gerada uma nova lista, com base na modifica��o. O c�digo ficaria assim:
```html
<tbody>
    ${model.negociacoes.map(n => {
        console.log(n);
        return n;
      })}
</tbody>
```
Por�m, se selecionarmos esta op��o, teremos um problema: a express�o precisa nos devolver uma string, que seja enxertada no template. Seguiremos outro caminho: varreremos cada negocia��o e usaremos o return de outra template string.
```html
<tbody>
    ${model.negociacoes.map(n => {

      return `
        <tr>
            <td>${DateHelper.dataParaTexto(n.data)}</td>
            <td>${n.quantidade}</td>
            <td>${n.valor}</td>
            <td>${n.volume}</td>
        </tr>
      `
      })}
</tbody>
```
Dentro da template string, adicionamos as tags <tr> e <td>, e usamos v�rias express�es para definirmos a exibi��o de data, quantidade, valor e volume. Quando o _template() for retornar a string, ter� que processar o trecho do return primeiramente, e depois retornar a template string. Para cada negocia��o ser� criada uma lista - cada uma com as tags <tr> e os dados cadastrados. Estamos varrendo a lista e para um objeto Negociacao, estamos criando um array, mas o novo elemento ser� uma string com os dados. No entanto, por enquanto, o retorno ser� um array. Por isso, adicionaremos o join().
```html
<tbody>
    ${model.negociacoes.map(n => {

      return `
        <tr>
            <td>${DateHelper.dataParaTexto(n.data)}</td>
            <td>${n.quantidade}</td>
            <td>${n.valor}</td>
            <td>${n.volume}</td>
        </tr>
      `
      }).join('')}
</tbody>
```
Ao utilizarmos o join(), usamos como crit�rio de jun��o uma string em branco. Agora, teremos uma string com todos os dados do array concatenados. Vamos ver o que ser� exibido no navegador, ap�s o preenchimento do formul�rio:

tabela com valores

Em seguida, adicionaremos uma nova negocia��o e os dados tamb�m ser�o exibidos na tabela.

tabela com duas negocia��es

Se completarmos os dados do formul�rio novamente, a tabela ter� dados das tr�s negocia��es. Observe que n�o manipulamos o DOM de maneira imperativa, em vez disso, fizemos de maneira declarativa. N�s declaramos o template, ele recebeu um modelo e com base nos dados do modelo, usamos a template string.

Conseguimos de maneira elegante, utilizando apenas recursos do JavaScript, fazer um template render. Por�m, faltam algumas a��es para que nossa tabela fique completa.

<h2>Enxugando o c�digo</h2>

Faremos um pequeno ajuste que passou despercebido no v�deo anterior, antes de completarmos o c�digo. Deixamos incompleto o fechamento da tag <tr>. Corrigiremos a falha dentro da <tbody>:
```html
<tbody>
    ${model.negociacoes.map(n => {

      return `
        <tr>
            <td>${DateHelper.dataParaTexto(n.data)}</td>
            <td>${n.quantidade}</td>
            <td>${n.valor}</td>
            <td>${n.volume}</td>
        </tr>
      `
      })}
</tbody>
```
Felizmente, o navegador entendeu que tratava-se de um tag <tr>. Outro ajuste ser� na arrow function. Quando trabalhamos com um �nico retorno, n�o precisamos usar as chaves ({}). Tamb�m podemos remover o return. Veja como nosso c�digo ficar� mais enxuto:
```html
<tbody>
    ${model.negociacoes.map(n => `

          <tr>
            <td>${DateHelper.dataParaTexto(n.data)}</td>
            <td>${n.quantidade}</td>
            <td>${n.valor}</td>
            <td>${n.volume}</td>
          </tr>

      `)join('')}
</tbody>
```
Facilitamos a leitura do c�digo. Fizemos a declara��o do template.

A seguir, trabalharemos com a tag <tfoot>, com a qual criaremos o rodap�.

<h2>Totalizando o volume em nosso Template</h2>
Vamos trabalhar com o rodap�... Atualmente, o m�todo _template() est� assim:
```html
_template(model)

    return `
    table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>

                <tbody>
                    ${model.negociacoes.map(n => `

                          <tr>
                            <td>${DateHelper.dataParaTexto(n.data)}</td>
                            <td>${n.quantidade}</td>
                            <td>${n.valor}</td>
                            <td>${n.volume}</td>
                          </tr>

                      `)join('')
                    }
                </tbody>

                <tfoot>
                </tfoot>

         </table>
        `;
      }
```
Para totalizarmos o volume, adicionaremos a tag <td> dentro da <tfoot>:
```html
<tfoot>
    <td colspan="3"></td>
    <td>0</td>
</tfoot>
```
Observe que utilizamos a colspan com o valor 3, assim teremos tr�s colunas. Usamos tamb�m uma <td> que tem o valor igual a 0. Mas se executarmos o c�digo agora, ainda n�o ser� totalizado o volume.

volume 0

Para totalizar, poder�amos usar o forEach() e somar cada volume da negocia��o com uma vari�vel.
```html
<tfoot>
    <td colspan="3"></td>
    <td>${
        (function() {

            let total = 0;
            model.negociacoes.forEach(n => total+= n.volume);
            return total;
       })()
      }
    </td>
</tfoot>
```
Por�m, dentro da express�o, precisamos retornar um valor. S� que quando usamos uma instru��o, n�o podemos adicionar uma sequ�ncia de instru��es. Seremos espertos e adicionaremos uma fun��o dentro do $. Utilizaremos uma Immediately-invoked function expression (IIFE) ou a fun��o imediata. Trata-se de um recurso usado na cria��o de escopo em JavaScript, que nos ajudar� a colocar um bloco na express�o, sendo executado imediatamente. No caso, o $ receber� o total.

tabela com o volume total

Se testarmos no navegador, j� ser� exibido o total do volume. Mas depois dessa "gambiarra", o c�digo n�o ficou bonito. � poss�vel fazer a a��o de totaliza��o de outra maneira funcional. Veremos mais adiante.

<h2>Totalizando o volume em nosso Template com a fun��o reduce</h2>
Podemos fazer o c�digo de maneira funcional, sem precisar usar a "gambiarra" feita na tag <tfoot> para exibirmos o total do volume:
```html
<tfoot>
    <td colspan="3"></td>
    <td>
      ${
        (function() {

            let total = 0;
            model.negociacoes.forEach(n => total+= n.volume);
            return total;
      })()
     }
   </td>
</tfoot>
```
Vamos mostrar como conseguir o mesmo resultado usando o paradigma funcional e como o JavaScript array � bastante poderoso.
```html
<tfoot>
    <td colspan="3"></td>
    <td>
        ${model.negociacoes.reduce(function(total, n) {
               return total + n.volume;
         }, 0.0)
        }
     </td>
</tfoot>
```
Observe que utilizamos a fun��o reduce(), que ir� processar o array e no fim, disponibiliza um �nico resultado. Primeiramente, n�o utilizaremos arrow functions. Optamos por passar uma fun��o com as vari�veis total e n(elementos da lista) - ambas receberam esses nomes, mas poder�amos ter definido outros. O return que criamos ainda n�o ser� suficiente. Qual ser� o valor inicial de total? Ele deve iniciar de 0 para conseguirmos som�-lo com volume. Por isso, o segundo par�metro da fun��o reduce() ser� a inicializa��o da vari�vel total.

Basicamente, n�s pedimos que negociacoes reduzisse. Em seguida, executamos a fun��o para cada item da lista. A vari�vel total come�ou com o valor igual a 0 e foi somado com o volume. Quando passamos para o segundo item da lista, este pega o valor anterior e o soma com o volume atual. No fim, a fun��o retorna um valor �nico, que ser� o resultado de total.

Ao executarmos o c�digo, veremos que ele funciona perfeitamente:

tabela com total 

Temos o valor correto do total. Agora vamos melhorar o c�digo, utilizando a arrow function. No caso, como estamos trabalhando com dois par�metros, n�o podemos remover os par�nteses, mas podemos eliminar o function. Depois de adicionarmos a flecha, podemos remover as chaves {}. Poderemos tamb�m remover o return(). Com as altera��es, a tag <tfoot> ficar� assim:
```html
<tfoot>
    <td colspan="3"></td>
    <td>
        ${ model.negociacoes.reduce((total, n) => total + n.volume, 0.0)}
    </td>
<tfoot>
```
A fun��o reduce() executar� uma arrow function, que recebe como par�metro as vari�veis total e n. Cada vez que varrermos os elementos do array, o total ser� o que t�nhamos (inicializando pelo 0) somado ao volume. No fim, o reduce() retornar� o resultado de total. � uma maneira funcional de lidarmos com problema para totalizar o volume. Como a fun��o retornar� um �nico valor, n�o foi necess�rio utilizar a IIFE para incluirmos v�rias instru��es dentro do forEach().

Vamos executar o c�digo. Ap�s preenchermos duas vezes o formul�rio, teremos o valor correto do total de volume.

total volume final

Terminamos o template da tabela. A cada negocia��o inclu�da, a informa��o ser� exibida para o usu�rio com base nas informa��es da lista.

<h2>Resumindo</h2>
Vamos revisar o que vimos at� aqui: implementamos um mecanismo de View dentro da aplica��o. Ou seja, n�s temos um tabela na qual exibimos os dados da negocia��o. Mas em vez das marca��es estarem no arquivo HTML, estas foram colocadas em uma classe nova chamada NegociacaoView.js.

Como o c�digo da tabela ficou no JavaScript, a View precisou encontrar alguma forma de se renderizar e aparecer no HTML. Por isso, n�s criamos uma <div> que leva o id e indicou o ponto no qual o arquivo da tabela ser� inserido. Para realizar tal a��o, a View recebeu um modelo - com qual �tampamos� as lacunas do template.

N�s ainda criamos o m�todo _template(), utilizando a template string. Vimos que podemos gerar express�es mais "rebuscadas" para montar tags <tr> dinamicamente. Usamos novamente a fun��o map() para transformar o conte�do de um array. Al�m disso, utilizamos a fun��o join() para poder concatenar todos os itens do array que equivalem �s tags <tr> da tabela.

<h2>Dominando o reduce</h2>
Voc� j� deve ter ouvido falar em somat�rios. O somat�rio de uma lista de n�meros � a soma de todos os n�meros daquela lista, como por exemplo:

let numeros = [1, 2, 3, 4]; // Somat�rio = 1 + 2 + 3 + 4 = 10
Um exemplo de fun��o que nos retorne o somat�rio de um array de n�meros poderia ser assim:
```html
function somatorio(array) {

    var resultado = 0;
    for(let i = 0; i < array.length; i++){
        resultado = array[i] + resultado;
    }

    return resultado;
}
```
A mesma coisa usando forEach:
```html
function somatorio(array) {
    let resultado = 0;
    array.forEach(item => resultado+= item);
    return resultado;
}
```
Existe um outro conceito matem�tico conhecido como produt�rio, que � an�logo ao somat�rio, s� que ao inv�s de somarmos os n�meros , n�s os multiplicamos. Por exemplo:

var numeros = [1, 2, 3, 4]; // Produt�rio = 1 * 2 * 3 * 4 = 24
Juntando este seu novo conhecimento matem�tico com o conhecimento de JavaScript adquirido neste cap�tulo, qual das fun��es abaixo nos retorna o produt�rio de um array de n�meros corretamente, usando a fun��o reduce?

R: 
```html
let numeros = [1, 2, 3, 4];
let resultado = numeros.reduce(function(total, num) {
    return total * num;
}, 1);
```

A fun��o reduce recebe dois par�metros: uma fun��o e um valor inicial. Na fun��o interna ao reduce, o primeiro par�metro � o valor da �ltima itera��o, que neste caso � o total. O segundo par�metro � o valor da itera��o atual, neste caso o novo n�mero que queremos multiplicar.

O reduce executa sua fun��o interna a cada itera��o, ent�o no nosso caso ele multiplica o valor anterior (total) pelo valor da itera��o atual (num). Como o produt�rio � a multiplica��o de uma sequ�ncia de n�meros, no nosso caso o que est� acontecendo � o seguinte:

Supondo o array:

var numeros = [1, 2, 3, 4];
O total se inicia com o valor 1, definido pelo segundo par�metro da fun��o reduce.

� feita a primeira itera��o, pegando o primeiro valor do array (1) :

return total * num; // Leia-se: return 1 * 1 e coloque este valor em total.
Na segunda itera��o, com o segundo valor do array (2):

return total * num; // Leia-se return 1 * 2 e coloque este valor em total, que agora vale 2;
Na terceira itera��o, com o segundo valor do array (3):

return total * num; // Leia-se return 2 * 3 e coloque este valor em total, que agora vale 6;
Na segunda itera��o, com o segundo valor do array (4):

return total * num; // Leia-se return 6 * 4 e coloque este valor em total, que agora vale 24;
E no final ele devolve para n�s o valor 24 , que � o valor esperado do produt�rio!


<h2>Um pouco mais sobre o reduce</h2>

Vejamos um exemplo com reduce que soma todos os n�meros de um array:
```html
let numeros = [1,2,3,4];

let resultado = numeros.reduce((anterior, atual) => anterior + atual);
alert(resultado);
```
O resultado � 10. Contudo, muitas vezes queremos come�ar a opera��o considerando um valor de inicializa��o. Por exemplo, queremos realizar a mesma opera��o, s� que dessa vez, queremos come�ar com o valor 5.
```html
let resultado2 = numeros.reduce((anterior, atual) => anterior + atual, 5);
alert(resultado2);
```
Desta vez, o resultado final � 15!

Sendo assim, nada nos impede de fazer o primeiro reduce passando 0:
```html
let numeros = [1,2,3,4];

let resultado = numeros.reduce((anterior, atual) => anterior + atual, 0);
alert(resultado);
```
O resultado ser� 10 tamb�m. Mas ser� que vale a pena passar o segundo par�metro da fun��o reduce j� que neste caso ele n�o faz diferen�a? Tudo vai depender do seu gosto.


<h2>Dominando o map</h2>
Qual das fun��es abaixo aproveita-se dos recursos da fun��o map para obter arrays com os valores dobrados, com valores pela metade e com raiz quadrada de todos os n�meros abaixo, mantendo a ordem apresentada:

```html
let numeros = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121];
```

R: 
```html
let dobro = numeros.map(function(num) {
    return num * 2;
});
let metade = numeros.map(function(num) {
    return num/2;
});
let raiz = numeros.map(function(num) {
    return Math.sqrt(num);
});
```
 
Cada map recebe uma fun��o como par�metro, e em cada uma dessas fun��es, utilizamos um par�metro que � o elemento de cada �ndice da array que dever� ser retornado em cada itera��o.


<h2>View declarada no JS ou no HTML?</h2>

Aprendemos a declarar nossas views no mundo JavaScript. Um framework que segue este caminho � o React do Facebook. Contudo, h� uma outra abordagem que � declarar as views em arquivos HTML, inclusive o famoso Angularjs faz dessa maneira.

Neste treinamento optei por declarar a view no mundo JS, pois essa solu��o me permitiu implementar o modelo MVC sem grandes voltas e ainda manter o foco em boas pr�ticas e ES6, tornando o treinamento mais acess�vel para diversos perfis de "ninjas" em JavaScript.

Um fato curioso � que no React declaramos nossos componentes de view usando o JSX que permite escrever HTML mais facilmente no mundo JS. Apesar de n�o termos esses recursos, as templates strings do ES6 nos ajudam bastante com nossas declara��es e tudo sem precisar de um framework ou biblioteca!

<h1>Generalizando a solu��o da nossa View</h1>

<h2>Classe Mensagem</h2>
Nossa aplica��o j� est� funcionando, mas vamos melhorar a experi�ncia do usu�rio. Quando adicionamos uma negocia��o, os dados s�o inseridos na tabela. Nosso objetivo ser� exibir uma mensagem para o usu�rio, na qual informaremos que a negocia��o foi inclu�da com sucesso. Para fazer isto, vamos criar um novo modelo que chamaremos de Mensagem.js. Nele, adicionaremos um texto e sempre que quisermos exibir uma mensagem, ser� instanciado um objeto da minha classe Mensagem. O texto que ser� exibido, ficar� guardado nesta classe.
```html
class Mensagem {

    constructor() {

      this._texto;
    }

    get texto() {

        return this._texto;

    }
}
```
N�s usamos a conven��o do prefixo _ para manter o _texto privado. Usamos um get que ter� um return this._texto.

N�s queremos tamb�m ser capazes de alterar o texto, faremos isto, adicionando o set texto(). Assim como temos a op��o de usar o get, usaremos o set:
```html
set texto(texto) {

    this._texto = texto;
}
```
Mas seria poss�vel aceitar um interven��o como a vari�vel let, como nas linhas abaixo:
```html
let mensagem = new Mensagem();
mensagem.texto = 'x';
```
O valor dentro do mensagem.texto ser� enviado por debaixo dos panos para o m�todo texto() e depois, ser� atribu�do a mensagem. Por�m, quando criamos uma mensagem nova, o valor deve estar com uma string em branco. Mas ainda � poss�vel alterar o texto da mensagem em branco:

let mensagem = new Mensagem('xxxx');
mensagem.texto = 'nova mensagem';
Temos ainda a op��o de j� passar a mensagem no constructor():
```html
class Mensagem {

    constructor(texto) {

        this._texto = texto;
    }

    get texto() {

        return this._texto;
    }

    set texto(texto) {

        this._texto = texto;
    }
}
```
Agora podemos usar a vari�vel let e passaremos o texto dentro da Mensagem().

let mensagem = new Mensagem('Fl�vio Almeida');
console.log(mensagem.texto)
A mensagem Fl�vio Almeida poder� ser visualizada no Console, quando executarmos o c�digo. Mas e nos casos em que n�o sabemos qual ser� a mensagem do objeto Mensagem()? Qual ser� o valor padr�o do texto? Teremos que passar como par�metro uma string vazia.

```html
class Mensagem {

    constructor(texto) {

        this._texto = texto;
    }

    get texto() {

        return this._texto;
    }

    set texto(texto) {

        this._texto = texto;
    }
}
```
let mensagem = new Mensagem('');
Para resolver a quest�o, o ES6 permite atribuir um valor padr�o para par�metros do constructor() ou de fun��es do JS. Se n�o passarmos no construtor da Mensagem() um texto, ele adotar� como padr�o uma string em branco.
```html
class Mensagem {

    constructor(texto='') {

        this._texto = texto;
    }
//...
```
Mas se abaixo, adicionamos um texto e Mensagem, ele entende que n�o poder� usar o valor padr�o. Vamos testar o c�digo.

Antes, importaremos o arquivo Mensagem.js em index.html.
```html
<script src="js/app/models/Negociacao.js"></script>
<script src="js/app/controllers/NegociacaoController.js"></script>
<script src="js/app/helpers/DateHelper.js"></script>
<script src="js/app/models/ListaNegociacoes.js"></script>
<script src="js/app/views/NegociacoesView.js"></script>
<script src="js/app/models/Mensagem.js"></script>
<script>
    let negociacaoController = new NegociacaoCOntroller();
</script>
```
Em seguida, digitaremos as seguintes linhas no Console do navegador:

let mensagem = new Mensagem();
undefined
mensagem.texto
""
Ao imprimirmos o mensagem.texto, o retorno � uma string em branco. Se colocarmos como valor padr�o do constructor() o texto Ol�, o c�digo fica assim:
```html
class Mensagem {

    Constructor(texto='Ol�') {

        this._texto = texto;
    }
//...
```
Ao recarregarmos o Console, o retorno ser�:

let mensagem = new Mensagem();
undefined
mensagem.texto
"Ol�"
Ele imprimiu o valor padr�o. Mas se adotarmos como padr�o outro texto,Tchau!, por exemplo, o retorno ser� diferente.

let mensagem = new Mensagem();
undefined
mensagem.texto
"Tchau!"
Este � um recurso interessante, porque podemos definir um par�metro default, tanto no construtor quanro no m�todo.

<h2>Criando a classe MensagemView</h2>
Criamos o modelo de negocia��o, agora, criaremos o this._mensagem no NegociacaoController.js:
```html
class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes();

        this._negociacoesView = new NegociacoesView($('#negociacoesView'));
        this._negociacoesView.update(this._listaNegociacoes);
        this._mensagem = new Mensagem();

    }

//...
```
Sabemos que quando for feita uma adi��o, queremos dizer que o this._mensagem.texto:
```html
adiciona(event) {

    event.preventDefault();
    this._listaNegociacoes.adiciona(this._criaNegociacao());
    this._mensagem.texto = 'Negociacao adicionada com sucesso';
    this._negociacoesView.update(this._listaNegociacoes);  
    this._limpaFormulario();
}
```
Se preenchermos o formul�rio, os dados ser�o inseridos na tabela, mas a mensagem n�o, porque ainda n�o foi criada a View da mesma. Faremos isto a seguir.

Na pasta views, criaremos o arquivo MensagemView.js:
```html
class MensagemView {

  constructor(elemento) {
        this._elemento = elemento;
  }

  _template(model) {

    return `<p class="alert alert-info">${model.texto}</p>`;
  }
}
```
Usaremos o alert alert-info do bootstrap, seguido pela express�o ${model.texto}.

Logo abaixo, adicionaremos o m�todo update() que receber� o model.
```html
update(model) {

    this._elemento.innerHTML = this._template(model);
}
```
Vamos agora, importar a View no index.html:
```html
<script src="js/app/models/Negociacao.js"></script>
<script src="js/app/controllers/NegociacaoController.js"></script>
<script src="js/app/helpers/DateHelper.js"></script>
<script src="js/app/models/ListaNegociacoes.js"></script>
<script src="js/app/views/NegociacoesView.js"></script>
<script src="js/app/models/Mensagem.js"></script>
<script src="js/app/views/MensagemView.js"></script>
<script>
    let negociacaoController = new NegociacaoController();
</script>
```
No NegociacoesController.js, colocaremos a View assim que a p�gina for recarregada:
```html
class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes();

        this._negociacoesView = new NegociacoesView($('#negociacoesView'));
        this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView();

    }

//...
```
O MensagemView recebeu onde queremos incluir a mensagem no HTML. De volta ao index.html, vamos colocar a mensagem antes da tag <form>:
```html
<body class="container">

    <h1 class="text-center">Negocia��es</h1>

    <div id="mensagemView"></div>

    <form class="form" onsubmit="negociacaoController.adiciona(event)">

<!-- ... -->
```
Depois, precisaremos pegar o elemento do DOM no NegociacaoController.js, adicionando o $.
```html
this._mensagem = new Mensagem();
this._mensagemView = new MensagemView($('#mensagemView'));
this._mensagemView.update(this._mensagem);
```
Usamos o update e dentro passamos o this._mensagem. Vamos incluir o this._negociacoesView tamb�m no m�todo adiciona():
```html
adiciona(event) {

    event.preventDefault();
    this._listaNegociacoes.adiciona(this._criaNegociacao());
    this._negociacoesView.update(this._listaNegociacoes);

    this._mensagem.texto = 'Negociacao adicionada com sucesso';
    this._mensagemView.update(this._mensagem);  

    this._limpaFormulario();
}
```
Vamos ver se algo j� � exibido no navegador.

barra azul

Agora aparece um barra com um fundo azul, isto � uma mensagem do bootstrap vazia. A mensagem n�o deveria estar sendo exibida, considerando que a nossa string est� em branco. Vamos testar cadastrar uma nova negocia��o no formul�rio.

cadastro com sucesso

Conseguimos adicionar os dados a tabela e a mensagem de sucesso apareceu corretamente. Veja que conseguimos usar o mesmo mecanismo de cria��o da View para lidar com as mensagens do sistema. As a��es de importar e apagar negocia��es podem ser associadas com a atualiza��o de mensagem. Quando chamarmos o updatena View, passando o model, este atualizar� a tela. Mas queremos retirar o par�grafo com o fundo azul que aparece acima do formul�rio. Resolveremos isso em MensagemView.js.

Na classe _template, faremos um if tern�rio:
```html
_template(model) {

    return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : '<p></p>';
}
```
N�s vamos retornar um par�grafo sem a classe. Em JavaScript, uma string sem conte�do � avaliada como falso. Podemos testar se o modelo.texto � uma string em branco, 0 ou null, nesses casos, a resposta � falso. Mas se tiver texto, vai dar verdadeiro e o retorno ser� o template. Caso contr�rio, o retorno ser� um par�grafo sem a classe alert-info e, consequentemente, sem a tarja azul. Se inspecionamos o elemento do DOM no Console, vemos que o paragrafo est� vazio:
```html
<div id="mensagemView">
    <p></p>
</div>
```
N�o aparece a classe do bootstrap. Mas se cadastramos a negocia��o no formul�rio, a mensagem aparecer� corretamente. Conseguimos resolver a parte das mensagens para o usu�rio. Mas ser� que conseguimos melhorar ainda mais o c�digo?


<h2>Heran�a e reutiliza��o de c�digo</h2>
Temos duas Views criadas: MensagemView e NegociacoesView. Se observarmos, ambas posuem um construtor que recebe um elemento, al�m de possuir a propriedade elemento. As duas t�m os m�todos _template e update, que s�o bem semelhantes. A diferen�a est� na forma em que o m�todo _template foi implementado e o seu retorno. E se aumentarmos o n�mero de Views, teremos que ter mais updates. Atualmente, o m�todo update do NegociacoesView est� assim:
```html
update(model) {

    this._elemento.innerHTML = this._template(model);
}
```
Se nos enganamos e escrevermos innerHtml, com as letras de HTMLem caixa baixa, teremos problemas na execu��o do c�digo. Para evitarmos a repeti��o, vamos colocar o que as classes t�m em comum, apenas em uma, a nova classe receber� o nome de View.
```html
class View {

    constructor(elemento) {

          this._elemento = elemento;
    }

    update(model) {

        this._elemento.innerHTML = this._template(model);
    }
}
```
A classe View recebeu tudo o que as Views tinham em comum: um constructor(elemento) - que guardar� internamente um elemento - e update(). Lembrando que o m�todo _template possui algumas diferen�as nas classe. Depois, removeremos os m�todos constructor() e update().

Em seguida, para evitarmos duplicar o c�digo, faremos com que MensagemView herde todas as caracter�sticas de View. Como em JavaScript trabalhamos com o conceito da orienta��o a objetos que � heran�a? Podemos dizer que a MensagemView � uma View:
```html
class MensagemView extends View {

  _template(model) {

      return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : '<p></p>';
  }
}
```
Faremos o mesmo com NegociacoesView:
```html
class NegociacaoView extends View {

    _template(model) {

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
//...
```
Vamos carregar a View no index.html.
```html
<script src="js/app/models/Negociacao.js"></script>
<script src="js/app/controllers/NegociacaoController.js"></script>
<script src="js/app/helpers/DateHelper.js"></script>
<script src="js/app/models/ListaNegociacoes.js"></script>
<script src="js/app/views/View.js"></script>
<script src="js/app/views/NegociacoesView.js"></script>
<script src="js/app/models/Mensagem.js"></script>
<script src="js/app/views/MensagemView.js"></script>
<script>
    let negociacaoController = new NegociacaoController();
</script>
```
Observe que ao carregarmos os scripts, devemos posicionar a View antes das outras Views dependentes. Se a View for carregada por �ltima, no navegador veremos uma mensagem de erro que nos dir�: View is not defined, porque na defini��o da classe estamos usando heran�a nas duas Views.

Se digitarmos a seguinte linha no Console...

let v = new NegociacoesView()
Tudo funcionar� corretamente e o arquivo NegociacoesView herdar� de View o m�todo update(). Apesar de termos removido o m�todo, ele est� sendo invocado. Mas quando carregamos NegociacoesView e MensagemView, precisamos ter um constructor() que recebe o elemento. O construtor chamar� o super() - fazendo refer�ncia ao super class, a classe pai. Com as altera��es, o NegociacoesView ficar� assim:
```html
class NegociacoesView extends View {

    constructor(elemento) {
        super(elemento);
    }
//...
```
E o MensagemView ficar� da seguinte maneira:
```html
class MensagemView extends View {

    constructor(elemento) {
        super(elemento);
    }
//...
```
Se cadastrarmos uma nova negocia��o, veremos que est� tudo funcionando.

formulario funcionando corretamente

Mas, s� encontraremos o m�todo update na View. Para que as duas Views pudessem herdar da classe View, seria necess�rio adicionarmos no NegociacaoView o MensagemView e o extends.

Evitamos a duplica��o do c�digo, mas ser� que existe alguma outra falha? Veremos mais adiante.

<h2>Construtor vs super</h2>

Se definimos que "para a cria��o de uma View, esta dever� herdar de View", pode ocorrer que o desenvolvedor esque�a de implementar o m�todo _template. O arquivo MensagemView ficaria assim:
```html
class MensagemView extends View {

    constructor(elemento) {
        super(elemento);
    }
}
```
Se executarmos o c�digo no navegador, teremos um erro.

erro no Console

O erro ocorrer� porque o m�todo update depende do _template() para funcionar. E na classe View, n�o podemos definir a implementa��o do m�todo, considerando que este sofre varia��es nas classes filhas, logo, estas ser�o as respons�veis por definir o _template(). Por isso, vamos encontrar uma forma de lembrar ao desenvolvedor que ele deve usar o m�todo _template().

No arquivo View.js, vamos adicionar o _template(), que lan�ar� um new Error.
```html
_template() {
    throw new Error('O m�todo template deve ser implementado');
}
```
A mensagem informar� que o m�todo template deve ser implementado. Mas se NegociacoesView possui um m�todo definido com o nome _template() - tamb�m utilizado na classe pai - a classe filha ir� sobrescrev�-lo. Isto significa que o m�todo v�lido � o _template() de NegociacoesView. O mesmo ocorrer� com MensagemView. Desta forma, a mensagem de erro s� ser� adicionada caso o desenvolvedor se esque�a de implementar o m�todo nas Views.

mensagem template deve ser implementado

Como n�o adicionamos o _template() no MensagemView.js, fomos avisados no Console.

Na linguagem JavaScript, n�o existem classes abstratas e, por isso, n�o podemos obrigar as classes filhas a implementarem o _template(). Explicado isto, vamos adicionar novamente o m�todo _template() no MensagemView.js:
```html
class MensagemView extends View {

    constructor(elemento) {
        super(elemento);
    }

    _template(model) {

        return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : '<p></p>';
    }
}
```
A mensagem de erro n�o ser� exibida quando recarregarmos a p�gina no navegador. Para finalizar, faremos um pequeno ajuste. Como foi convencionado, ao usarmos o prefixo _ no nome do m�todo _template(), mesmo as classes filhas n�o poderiam chamar o m�todo. Apenas a classe pai deveria ter este acesso. Por isso, vamos remover o _ de todas as refer�ncias ao m�todo _template.

O trecho referente em View.js ficar� assim:
```html
template(model) {

    return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : '<p></p>';
}

update(model) {
    this._elemento.innerHTML = this.template(model);
}
```
Em NegociacoesView, o m�todo template() ficar� assim:
```html
template(model) {

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
//...
```
E por �ltimo, em MensagemView:
```html
template(model) {

    return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : '<p></p>';
}
```
Se tiv�ssemos mantido o prefixo _, o c�digo funcionaria corretamente. Mas como se trata de uma indica��o de private, por conven��o, as classes filhas n�o poderiam sobescrever o m�todo. Com isto, organizamos o nosso c�digo baseados em heran�a.

<h2>Resumindo</h2>
Vimos que o c�digo das Views NegociacoesView e MensagemView tinham trechos em comum. N�s isolamos tais partes dentro de uma classe, juntamente com o construtor que recebeu o elemento e o m�todo update(). Depois, fizemos com que as duas Views herdassem da classe View, assim, n�o repetimos o c�digo em comum. Mas coube �s classes filhas implementarem o m�todo template().

Criamos ainda uma "armadilha" para evitar a possibilidade de que o desenvolvedor se esquecesse de incluir o m�todo, incluindo uma mensagem de erro no Console. Lembrando que um m�todo da classe filha sobrescreve m�todos da classe pai.

Depois, adicionamos o constructor() nas classes filhas com o super, que passava o par�metro para a classe pai. Fizemos tamb�m um pequeno ajuste, retirando o prefixo _ do m�todo template(), que anteriormente era privado. A altera��o foi necess�ria porque os m�todos template() de NegociacoesView eMensagemView precisavam sobrescrever o m�todo em View.

Aguardamos voc� na segunda parte do curso.

