<h1>Seção 01 - Prólogo: regras, código e manutenção</h1>

<h2>Visão geral do projeto</h2>

Considerações sobre curso
Sendo um curso avançado, você precisa ter conhecimento da linguagem, algo imprescindível. Não é necessário ser um expert, inclusive tive um cuidado em avançar gradativamente em cada assunto para ajudar aqueles ainda tímidos no mundo desta fantástica linguagem. Mas com certeza, ter um bom traquejo na linguagem tornará sua experiência ainda melhor neste curso.

Visão geral do projeto
O projeto desse curso será construir um cadastro de negociações de bolsa de valores. Cadastraremos novas negociações, inclusive, elas serão importadas de serviços especializados, tudo aplicando o paradigma funcional e orientado a objetos ao, mesmo tempo, utilizando o melhor dos dois mundos.

Em um primeiro momento, o escopo da nossa aplicação pode parecer bem reduzido, mas é o suficiente para aplicarmos novos recursos da linguagem JavaScript, ou ECMAScript 2015 (ES6), tecnicamente falando. Além disso, organizaremos nosso código no modelo MVC (Model-View-Controller), aplicaremos padrões de projeto, programaremos assincronamente com promises, renderizaremos templates e trabalharemos com proxies, entre outras coisas.

Projeto

Os serviços que nossa aplicação consumirá serão disponibilizados para você através de um servidor Node.js disponível com o arquivo do projeto que usaremos até o final. A ideia é que você otimize seu tempo aprendendo JavaScript sem perder horas e horas com infraestrutura, que muitas vezes é a vilã de todo treinamento.

Por fim, e não menos importante, faça o primeiro exercício obrigatório deste treinamento. Lá você terá acesso ao projeto do curso, navegador que deve ser utilizado e a versão do Node.js a ser instalada, inclusive dicas de instalação. É neste exercício também que sugiro alguns treinamentos do Alura que podem ser feitos antes deste curso, para que seu aproveitamento seja ainda melhor.

<h2>(Obrigatório) Download do projeto e infraestrutura</h2>
O arquivo do projeto
Nosso projeto se chamará aluraframe e deve ser baixado aqui. É um arquivo zip que deve ser descompactado em sua Área de Trabalho ou qualquer outro diretório que você esteja confortável em trabalhar.

Existem duas subpastas dentro do projeto: server e client. A primeira pasta possui um servidor Node.js que será usado mais tarde, quando formos avançando com o treinamento, e pode ser ignorada por enquanto.

A segunda pasta é aquela que será carregada pelo nosso servidor, com a página index.html e todos os scripts que criarmos durante o treinamento. É nesta pasta que você deve focar primariamente.

Por fim, dentro de aluraframe/client temos algumas subpastas já criadas, não se preocupe com elas. Cada uma será esclarecida ao longo do curso.

Infraestrutura 1 - Chrome!
Neste treinamento é necessário usar o Google Chrome versão 50 ou superior. É importante essa escolha do navegador, porque estaremos usando muitos recursos do ES6, inclusive alguns que estão sendo consolidados. Se você está inseguro, não fique. Todos os browsers hoje possuem atualização automática e desde o IE 10 a atualização do browser na plataforma Windows ficou independente do sistema operacional, isso significa que em pouquíssimas semanas todos os usuários de internet acabam recebendo o browser mais novo.

ATENÇÃO USUÁRIOS MAC: nem sempre o Chrome é instalado na língua português-brasil. Se o seu navegador exibe todas as opções de menu em inglês, ele exibirá a data da tag <input type="date"> no formato mês/dia/ano. Não há problema nenhum ir até o final do curso neste formato, mas se você quiser que o input exiba a data no formato dia/mês/ano, precisará usar a versão em *português-brasil do Chrome. Você não precisa baixar novamente seu navegador, basta abrir seu terminal e executar o comando:

exec defaults write com.google.Chrome AppleLanguages '(pt-BR)'
Veja que essa solução só é necessária se você deseja a data no formato bonitinho. Durante o treinamento, eu preferi pegar carona neste tipo de input ao invés de escrever um código de formatação. Existem zilhões de soluções aí fora para formatação, mas a ideia é usarmos tudo o que o browser oferece.

DICA: Como saber se determinada funcionalidade do ES2015+ (ES6) é suportada por cada navegador?
Durante o treinamento, evitarei dizer que determinada funcionalidade só funciona nesse ou naquele browser, porque pode ser que na semana seguinte o browser X passe a suportá-la. Contudo, para que o aluno tenha a informação mais recente dos recursos que utilizarei neste treinamento, ele pode consultar sempre que desejar: https://kangax.github.io/compat-table/es6/.

Não ache que os recursos que lhe mostrarei são experimentais, muito pelo contrário, eles já fazem parte da especificação ES6. Inclusive o conhecimento aqui adquirido pode ser aplicado na plataforma Node.js v6.0 ou superior, exceto a parte de manipulação de DOM. Além disso, se você desenvolve usando algum tipo de transpiler, como Babel ou até mesmo o famoso TypeScript, também será beneficiado. Com essas tecnologias, escrevemos um código em ES6 e no final entregamos para o navegador o mesmo código convertido para ES5, para garantir máxima compatibilidade. Sendo assim, tudo o que você aprender aqui pode ser usado.

Infraestrutura 2 - Node.js
Em um certo ponto do nosso treinamento, precisaremos um servidor web que disponibilize URL's para serem consumidas pela nossa aplicação. Já disponibilizamos um para você dentro do projeto. Para que ele funcione, você precisa ter no mínimo o Node.js v4.0 instalado.

Você pode baixar o Node.js da sua plataforma preferida (Windows, MAC ou Linux) em https://nodejs.org. Depois de instalá-lo, para saber se ele está funcionando, basta abrir seu terminal preferido da sua plataforma e executar o comando (logo a seguir, veja as dicas caso o comando não funcione):

node --version
Este comando deve exibir a versão do Node instalada no terminal. Se por acaso o comando node não for um comando válidos tente o seguinte:

1 - Windows: não mude o diretório padrão da instalação do Node.js. Há relatos que em algumas versões do Windows a pasta do Node não é colocada no PATH do Windows, sendo necessário adicioná-la manualmente. Não sabe como? Temos um treinamento de prompt no Windows que pode ajudá-lo nesta tarefa.

2 - Linux: algumas distribuições Linux já possui um binário chamado node, que não tem nenhuma relação com o Node.js. Nestas distribuições, o binário passa a se chamar nodejs. Sendo assim, em todo lugar que eu referenciar o comando node ele deve ser trocado para nodejs.

<h2>Prólogo: regras, código e manutenção</h2>

Este vídeo é um prólogo do que está por vir. A trama que se desenrolará será a implementação a funcionalidade de inclusão de uma nova linha na tabela com base na entrada do usuário, usando a manipulação de DOM e outras ferramentas que aprendemos em JavaScript. Se você já sente bastante seguro sobre esta parte, pode avançar para o último vídeo da aula 1 e conferir os desdobramentos finais. Caso contrário, você pode recordar o conteúdo agora, com explicações detalhadas sobre o que está sendo feito. Assim teremos a chance de caminharmos juntos.

Começaremos abrindo o Visual Studio Code - mas você pode usar o seu editor favorito. Abriremos a pasta "client". Trabalharemos com a pasta "server" apenas no fim do curso.

client

Dentro de "client", encontraremos diversas subpastas que ainda estão vazias, mas o arquivo mais importante será o index.html, no qual encontraremos osinputs. Sabemos que para capturarmos as informações na página, teremos que identificar os elementos no DOM. Por isso, adicionamos um id em cada input, como no exemplo do seguinte trecho:

```html
<form class="form">

      <div class="form-group">
          <label for="data">Data</label>
          <input type="date" id="data" class="form-control" required autofocus/>
      </div>
  //...
```
Então, conseguimos obter facilmente cada input desse formulário usando o id de cada um. Em seguida, vamos criar o arquivo aluraframe/client/js/index.js. E para não corrermos o risco de esquecermos de importá-lo, abaixo da tag <tfoot>, criaremos a tag script que importará o arquivo index.js.

<script src="js/index.js"></script>
Uma das vantagens do Visual Studio Code é que ele já possui o Emmet, assim não precisaremos instalar nada. O plugin transformará a sintaxe automaticamente na importação.

Dentro do arquivo index.js, adicionaremos uma lista com todos os campos que temos na nossa página. Desta forma, poderemos varrer cada um deles e perguntar "qual é o seu valor?". Assim poderemos montar as colunas da nossa tr. Vamos criar uma variável que receberá o nome do campos, que será um array. Cada campo será o resultado de um document.querySelector(), uma API do DOM que nos permite buscar um elemento usando um setor CSS.

```html
var campos = [
    document.querySelector('#data'),
    document.querySelector('#valor'),
    document.querySelector('#quantidade')
];

console.log(campos);
```
No fim, adicionamos o console.log.

Vamos recarregar a página no navegador e ver como está o formulário agora.

formulario

A ordem do elementos no nosso array será: data, quantidade e valor. Já conseguimos imprimir os campos, agora, precisamos que ao clicarmos no botão "Incluir", o formulário seja submetido. Durante a submissão pegaremos o valor de cada input e montaremos dinamicamente a tr com cada coluna. Lembrando que como estamos usando HTML5, enquanto não preenchermos os campos, os dados do formulário não serão submetidos. Em seguida, no editor, pediremos para o document.querySelector() selecionar a classe .form, porque encontraremos a mesma no nosso formulário. Também adicionaremos um evento submit, usando o addEventListener. Quando o evento for disparado, executaremos uma função de callback que será chamada quando alguém clicar no formulário.
```html
document.querySelector('.form').addEventListener('submit', function(event) {

  alert('oi');
});
```
Observe que adicionamos o alert que exibirá a mensagem oi.

alert oi

Nosso formulário está funcionando corretamente. Agora, sempre que formos submeter o nosso formulário, iremos submeter input do array e criar um tr com os valores dos mesmos. Em seguida, adicionaremos um variável chamada tr. Também criaremos um novo elemento, usando o document.createElement.
```html
document.querySelector('.form').addEventListener('submit', function(event) {

  var tr = document.createElement('tr');
});
```
Estamos vendo como fazer isso com JavaScript. Agora, adicionaremos as tds da tr. Vamos usar o forEach() do JavaScript, uma maneira funcional de você iterar um array sem precisar do loop for:

```html
document.querySelector('.form').addEventListener('submit', function(event) {

  var tr = document.createElement('tr');

  campos.forEach(function(campo) {

    })
});
```
A primeira vez que passarmos o forEach, teremos acesso ao primeiro elemento (#data), nas vezes seguintes acessaremos a #quantidade e o #valor. Depois, criaremos um td dinamicamente que não conterá nenhuma informação e informaremos que o conteúdo do mesmo será campo.value. Com o appendChild, adicionaremos a td como filho.

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
Até aqui, não fizemos nada muito avançado.

Então, quando chegarmos no fim do forEach(), ele terá criado uma td para cada campo. O que precisamos fazer é incluir uma tr na tabela.

Em seguida, abaixo do appendChild(),adicionaremos a variável tdVolume:

var tdVolume = document.createElement('td');
tdVolume.textContent = campos[1].value * campos[2].value;

tr.appendChild(tdVolume);
Agora, teremos que incluir a trno arquivo index.html como filha da tag <tbody>. Começaremos adicionando o <tbody> no arquivo JS, index.js.
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
O valor da td será o campo na posição 1, referente a #quantidade, multiplicado pelo campo na posição 2, referente ao #valor. Incluímos também a tr do appendChild. Por que não adicionamos o tbody dentro do querySelector()? Porque teríamos que buscar o tbody a cada submissão. Da forma como escrevemos o código, não teremos que refazer a busca no DOM.

Agora, no fim do arquivo adicionaremos o tbody seguido pelo appendChild():

tbody.appendChild(tr);
O código ficou assim:

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
Vamos recarregar a página e abrir o console. Ao preenchermos os campos com uma data aleatória, veremos que não aparecerá nada no console. Isso acontece, porque quando recarregamos a página, perdemos a tr. Por isso, adicionaremos o event.preventDefault(), assim indicaremos para o JavaScript que ele não submeta o formulário e evite que a página seja recarregada. Vemos que os valores aparecerão na tabela abaixo:

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
pagina não recarregada

Porém, assim que terminarmos de nos cadastrar, teremos que limpar os campos. E para melhorar a experiência do usuário, faremos com que o campo "Data" ganhe foco. Adicionaremos o campos[], indicando cada posição e no primeiro, vamos colocar o focus:
```html
campos[0].value = '';
campos[1].value = 1;
campos[2].value = 0;

campos[0].focus();
Até agora nosso código ficou assim:

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
Faremos um novo teste, usando um data aleatória. Vemos que os dados aparecerão corretamente na tabela final e os campos do formulário estão limpos novamente. Aparentemente, tudo está funcionando corretamente, mas o código ainda tem pontos que precisam ser analisados.

<h2>Enrolando-se com o DOM</h2>

Já conseguimos incluir linhas na tabela com base na entrada do usuário. Mas verificando a especificação do sistema que pede a visualização da totalidade do volume no rodapé da tabela. Também precisamos que a data seja exibida no formato data/mês/ano e que, após a criação da negociação, esta não seja modificada. A lista de negociação exibida na tela não poderá ter os dados alterados ou removidos, ela só poderá receber novos itens. Se quisermos uma nova lista, ela deverá ser criada do zero.

Observe que atualmente nosso código não indica onde está a negociação. E onde adicionaremos a totalidade do volume? Ou seja, o código não evidencia o que é uma negociação, e ainda mistura os dados de negociação com a apresentação dos mesmos na tabela. Seria interessante separarmos os dados da apresentação visual, desta forma conseguiríamos adicionar ao primeiro as regras de negócio. Com os dados separados, poderemos também modificar a utilização dos dados (tabela e lista). Por isso, iremos propor a utilização do modelo MVC (Model-View-Controller), declarando classes que representam nossos modelos (dados) e classes que representam nossas views (tela). As ações do usuário serão interceptadas por uma Controller, que irá alterar os dados, o Model, enquanto a View será atualizada para exibir o estado mais atual. Desta forma, as regras de negócio não estarão espalhadas pela View, elas estarão no modelo. Mais adiante, iremos implementar o modelo utilizando o paradigma da Orientação de Objetos.

Com o modelo já finalizado, e já podendo identificar a negociação, poderemos partir para a implementação da View e da Controller.

Então, mais adiante implementaremos a negociação usando o paradigma da Orientação de Objetos.


<h1>Seção 02 - Especificando uma Negociação</h1>
<h2>O que é um modelo?</h2>
Anteriormente, não ficou claro onde se encontrava a negociação no código. Nós vimos que havia ficado confuso onde estava o modelo e a apresentação. Definimos que seria interessante separar o modelo e a visualização, aplicando o MVC (Model-View-Controller). Mas o que é um modelo? Trata-se de uma abstração do mundo real. Por exemplo, um analista de mercado que quer entender como o mercado funciona, criará um modelo em que ele possa dar entradas e executar determinado procedimentos para tentar prever como é o seu funcionamento. No nosso caso, faremos a mesma coisa.

Nós queremos criar um modelo de negociação que programaticamente deve ser capaz de fazer tudo o que seria feito no mundo real. Para materializarmos o modelo de negociação, usaremos um recurso do paradigma da programação orientada de objetos: a criação de classes. Antes do ES6, já era possível aplicar o paradigma com o JavaScript, porém, a sintaxe era mais complexa. Por isso, o ES6 trouxe novos recursos para que seja mais fácil a aplicação do paradigma.

Então, primeiramente criaremos uma classe, ou seja, uma especificação da negociação com a abstração da mesma, dentro do código.

<h2>A classe Negociação</h2>
A seguir, criaremos a classe negociacao. Nós não usaremos mais a classe index.js. Nós também seguiremos a seguinte convenção: dentro da pasta js, encontramos a app, que contêm todo o código da aplicação. Dentro dela, encontraremos a subpasta models, em que estão armazenados todos os modelos. Também convencionaremos que queremos criar a classe Negociacao.js, o script que iremos criar, começará em caixa alta (com letra maiúscula). Isto é um pouco incomum, mas isto deixará claro que o JS é uma classe. No arquivo index.html, importaremos a Negociacao.js.

Para criarmos a classe com o ES6, usaremos a sintaxe class Negociacao. Ela terá o mesmo nome do arquivo, propositalmente, para que haja uma paridade e maior organização - mas não era obrigatório. E como definiremos os atributos de uma classe no ES6? Utilizando a função constructor().
```html
class Negociacao {

    constructor() {

        this.data = new Date();
        this.quantidade = 1;
        this.valor = 0.0;
    }
}
```
Especificamos que a negociação terá: data, quantidade e valor. Toda negociação terá a data atual por padrão, logo adicionamos o Date(). Para quantidade, começaremos com o valor padrão 1 e o valor, começará de 0.0.

Em seguida, no arquivo index.html, vamos incluir uma nova tag <script>. Nosso objetivo será criar duas instância de negociação, ou seja, dois objetos criados a partir da classe Negociacao. Usaremos as variáveis n1 e n2.
```html
<script>

    var n1 = new Negociacao();
    console.log(n1);

    var n2 = new Negociacao();
    console.log(n2);

</script>
```
Vamos recarregar o navegador e abrir o Console. Veja que já aparecem duas Negociacoes:

duas negociacoes impressas

Ambas ganharam uma data, quantidade e o valor. Observe que nenhuma das Negociacoes tinham as propriedades especificadas no código. Elas foram impressas desta forma porque seguem a mesma classe.

Observe que utilizamos a palavra new no nosso código, dentro das variáveis:
```html
var n2 = new Negociacao();
console.log(n2);
```
Vejamos o que aconteceria se ela não fosse utilizada na variável n2:
```html
var n2 = Negociacao();
console.log(n2);
```
No navegador, uma mensagem de erro seria exibida no Console.

mensagem de erro

Somos informados que a classe constructor não pode ser invocada sem operador new. O operador new é o responsável pela inicialização do this de cada objeto criado. Cada objeto terá seu this com suas propriedades. O JavaScript é muito bonzinho e nos avisa do nosso erro:
```html
class Negociacao {

    constructor() {

        this.data = new Date();
        this.quantidade = 1;
        this.valor = 0.0;
    }
}
```
Isto ocorre porque será o operador new que fará o this ser correspondente ao objeto criado no index.html. Então, se especificamos que a quantidade da variável n1 é igual a 10, saberemos que alteramos o valor unicamente da mesma. A variável n2 continuará com o mesmo valor.
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
O operador new é bastante importante por ser o responsável em criar um novo this para cada instância da classe. O this é uma variável implícita que sempre apontará para a instância que está executando a operação naquele momento.

Agora, se executarmos o código, no Console do navegador, veremos que cada Negociacao terá um valor diferente.

Negociacoes impressas 2

Caso o this não variasse para cada instância, quando alterássemos o valor da quantidade de n1, mudaríamos também a quantidade de n2. Por isso, o JavaScript não me deixa invocar uma instância sem adicionar termo new.

Então, realizamos o primeiro teste com duas estruturas semelhantes, mas com propriedades de valores diferentes.

