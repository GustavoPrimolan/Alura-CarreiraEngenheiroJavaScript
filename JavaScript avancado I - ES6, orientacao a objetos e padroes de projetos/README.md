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

