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

<h2>Construtor da classe e métodos</h2>
Continuaremos com a construção do código. A primeira ação será apagarmos uma das Negociacoes, no arquivo index.html:

```html
<script src="js/app/models/Negociacao.js"></script>
<script>

    var n1 = new Negociacao();
    n1.quantidade = 10;
    console.log(n1);

</script>
```
Agora, definiremos também o valor da variável, que será igual a 200.50.
```html
<script>

    var n1 = new Negociacao();
    n1.quantidade = 10;
    n1.valor = 200.50;
    console.log(n1);

</script>
```
O valor já será impresso no Console.

valor no console

No entanto, existe uma outra forma para passarmos uma instância de Negociacao. Imagine que no momento em que criamos uma Negociacao e a instância está nascendo, já queremos que seja definida a quantidade, valor e data. Queremos que esses dados sejam passado imediatamente para o construtor.

Se o contructor() é uma espécie de função, significa que ela aceitará parâmetros. Considerando isto, adicionaremos os valores para Negocicao() no n1:
```html
<script>

    var n1 = new Negociacao(new Date(), 5, 700);

</script>
```
Em Negociacao.js, adicionaremos os parâmetros de constructor():
```html
class Negociacao {

    constructor(data, quantidade, valor) {

        this.data = data;
        this.quantidade = quantidade;
        this.valor = valor;

    }
}
```
Observe que jogamos os parâmetros para as propriedades.

Atenção: Fique atento sobre a ordem dos parâmetros. Caso a ordem seja alterada, no HTML, os valores das instâncias ficarão incorretos.

Faremos um teste no Console para ver se tudo funcionou corretamente:

teste no console

Os valores coincidem com os que especificamos no HTML. Porém, ainda não adicionamos o volume - a quantidade multiplicada pelo valor. Faremos isto agora:
```html
<script>

    var n1 = new Negociacao(new Date(), 5, 700);
    var volume = n1.quantidade * n1.valor;
    console.log(volume);

</script>
```
Vamos imprimir o volume no Console:

volume

O valor 3500 é o resultado da operação de multiplicação. Mas estamos fazendo uma programação procedural, e sempre que o programador precisar do volume, ele mesmo terá que realizar este cálculo. Mas então, ele precisaria já saber como calcular o volume? Aumentaria a chance de erro. O que podemos fazer é dotar a classe Negociacao com comportamento. A programação orientada a objeto tem uma forte conexão entre o dado e o comportamento. Os dois caminharam juntos.

Caso você tenha alguma dúvida sobre o assunto, encontrará uma explicação mais detalhada na seguinte exemplificação.

Em seguida, no index.html, em vez de incluirmos o cálculo do volume na variável n1, faremos uma pergunta para a classe.
```html
<script>

    var n1 = new Negociacao(new Date(), 5, 700);
    var volume = n1.obtemVolume();
    console.log(volume);

</script>
```
Depois, teremos que adicionar um método em Negociacao.js. Iremos combinar algo: quando criamos uma função dentro de uma classe, nós chamaremos a primeira de método. Quando a função estiver fora da classe, continuará sendo chamada de função. Então, criaremos o método obtemVolume dentro da classe Negociacao:
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
Agora, ao executarmos o código, o valor 3500 aparecerá novamente no Console:

volume 2

O valor foi calculado corretamente. O objeto sabe lidar com as propriedades trabalhadas. Logo, a regra de como obter o volume está no próprio objeto. Voltamos a ter uma conexão entre dado e comportamento.

<h2>Encapsulamento</h2>

Já conseguimos trabalhar com a classe Negociacao,precisamos implementar a seguinte regra de negócio: após criada a negociação, esta não poderá ser alterada. Mas até, agora, podemos fazer alterações.

Vamos ver o que acontece se adicionamos um valor para quantidade diferente do que especificamos no parâmetro.
```html
<script>

    var n1 = new Negociacao(new Date(), 5,700);
    n1.quantidade = 10;
    console.log(n1.quantidade);
</script>
```
Qual valor será impresso no Console, 5 ou 10?

regra alterada

Ele imprimiu o valor recém adicionado 10. Isto pode causar problemas... Imagine que acabamos de fazer uma negociação e combinamos um determinado valor, mas depois decidimos alterá-lo para benefício próprio. Nosso objetivo é que as propriedades de uma negociação sejam somente para leitura. No entanto, a linguagem JavaScript - até a atual data - não nos permite usar modificadores de acesso. Não podemos dizer que uma propriedade seja apenas leitura (ou gravação). O que podemos é utilizar a convenção de que nos atributos das propriedades de uma classe que não pode ser modificada, usaremos um underline (_).
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
Esta será uma convenção que informará ao programador que as propriedades que contenham _ só poderão ser acessadas pelos próprios métodos da classe. Isto significa, que mesmo podendo imprimir a propriedade _quantidade com outro valor, não deveríamos mais poder acessá-la. O _ funciona como um aviso dizendo: "programador, você não pode alterar esta propriedade!". Então, se usamos a convenção de utilizar o prefixo, como faremos para imprimir a classe? Se não podemos acessá-la, como podemos fazer isso? Para isto, criou-se métodos chamados acessadores, em que serão utilizados o prefixo get. No caso, em Negociacao.js, adicionaremos o método getData(), que retornará o _data. Usaremos também o getQuantidade() e o getValor que terão finalidades semelhantes.

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
Os métodos da classe poderão acessar os atributos que levam _. No entanto, de acordo com a nossa convenção, alguém fora da classe não poderá fazer o mesmo. Por isso, em index.html, já que não poderemos chamar n1._quantidade, chamaremos n1.getQuantidade().
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

Os valores serão impressos corretamente no Console. Em seguida, modificaremos o obterVolume() para getVolume em Negocicacao.js:
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
E adicioná-lo no index.html:

<script>

    var n1 = new Negociacao(new Date(), 5, 700);
    console.log(n1.getQuantidade());
    console.log(n1.getData());
    console.log(n1.getValor());
    console.log(n1.getVolume());
</script>
```
No navegador, veremos que os valores quantidade, data, valor e volume serão impressos corretamente.

<h2>A sintaxe get</h2>
Vamos ver como podemos "enxugar" a nossa classe Negociacao. Nós criamos métodos de leitura para poder acessar às variáveis que convencionamos que são privadas, ou seja, só a própria classe poderá acessá-las. Mas existe um atalho que poderá ser usado quando queremos acessar uma propriedade: usaremos o get.
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
Observe que fizemos pequenos ajustes no código. O get foi seguido de um método, que tem o nome das propriedades antes de adicionarmos o _. Essa alteração irá trazer mudanças também no arquivo index.html. Agora, poderemos substituir o n1.getQuantidade por n1.quantidade.
```html
<script>

    var n1 = new Negociacao(new Date(), 5, 700);

    console.log(n1.quantidade);
    console.log(n1.data);
    console.log(n1.valor);
    console.log(n1.volume);
</script>
```
Estamos criando uma propriedade getter de acesso à leitura. E mesmo sendo um método, poderemos acessá-lo como uma propriedade. Mas, debaixo dos panos, ele continuará sendo executado como um método.

console

Veja que os valores foram acessados corretamente, inclusive o valor de volume. Então, por mais que os valores se apresentem como uma propriedade, por debaixo dos panos, está sendo chamado um método. Agora, mesmo que definíssemos o valor 1000 para quantidade, ele não seria aplicado.
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
O valor 1000 não será repassado para o _quantidade. O valor continuará sendo 5:

valor de quantidade inalterado

Isto acontece quando a propriedade é um getter (ou seja, é de leitura), não podemos atribuir para a mesma um valor. Mas ainda podemos acessá-la usando o n1._quantidade.
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

No console, vemos que o valor da quantidade foi alterado para 5000. Mas a propriedade quantidade é somente de leitura, não aparece o _. Assim, se o programador tentar atribuir um valor, ele não será setado. Será que existe uma forma de garantirmos que uma negociação, depois de criada, não será alterada?

<h2>Objetos imutáveis</h2>
Nós usaremos um artifício existente há algum tempo na linguagem JavaScript: "congelaremos" um objeto e com isso, qualquer alteração nas suas propriedades será ignorada. Isso funcionará no caso da classe Negociacao, porque nem mesmo os métodos da classe podem alterar as propriedades de uma negociação criada.

Para isso, usaremos o método Object.freeze() e vamos congelar o n1.
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
Por convenção, não podemos fazer isso. Mas será que conseguimos alterar um objeto congelado? Faremos um teste. No nosso caso, qual será o valor da quantidade: 5 ou 100000000000?

objeto congelado

No Console, veremos o valor 5, isto significa que não conseguimos alterar e o objeto foi congelado. Lembrando que quantidade, é uma propriedade que chamamos em Negociacao.js, que por "debaixo dos panos", rodará como um método e retornará this._quantidade:
```html
 get quantidade() {
      return this._quantidade;
 }
```
Mesmo colocando n1._quantidade = 100000000000; no index.html, esse valor parece ter sido ignorado. Isso é bom, agora, o desenvolvedor já não conseguirá alterar esta quantidade. Vamos fazer um pequeno teste que nos mostrará o que está congelado no Console:
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

O objeto antes não era congelado e depois, foi. E por isso, não conseguimos alterar _quantidade, o atributo que por convenção definimos ser privado. Porém, essa solução é procedural, porque você terá sempre que lembrar de congelar a instância. No entanto, queremos que ao utilizarmos o new Negociacao, ele já devolva uma instância congelada. Nós podemos fazer isso, congelando a instância no construtor. Em Negociacao.js, adicionaremos Object.freeze() após último this:
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
No entanto, você se lembra que o this é uma variável implícita? E quando algum método é chamado, temos acesso à instância trabalhada? O this do Object.freeze() será o n1 no index.html.
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
Então, quando damos uma new Negociacao, ele já devolverá uma instância congelada. Aparentemente, resolvemos o nosso problema. Não é uma solução 100% de encapsulamento, porque ainda conseguimos enxergar o n1._quantidade - em linguagens como Java ou C#, não iríamos enxergá-lo. Em JS, enxergamos a _quantidade, mas não conseguimos alterá-la. Desta forma, garantimos que a negociação não será modificada.

Vamos verificar mais adiante se de fato a Negociacao não será alterada.


<h2>A instância é imutável mesmo?</h2>
Pela regra de negócio, uma negociação deve ser imutável e não pode ser alterada depois de criada. Mas faremos um novo teste e nele vamos alterar a data da negociação. Já fizemos isto com a quantidade. Agora, criaremos a variável amanha que será referente a data de amanhã.

Usaremos o new Date() somado com 1. Sempre que trabalharmos com data, utilizaremos o setDate(). Como a data atual é 10, setaremos com o valor 11. Então, diremos que n1.data será igual a variável amanha.
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
Para verificar se o código funciona corretamente, adicionamos o console.log(). Se Negociação for realmente imutável, a data não poderá ser alterada.

negociacao imutavel

Vemos que ela continuou imutável.

Agora, quero fazer um teste diferente. Não vamos mais trabalhar com a variável amanha e vamos substituí-la por n1.data.setDate(). Como não é um método que existe na data, iremos defini-lo com 11:
```html
<script>

    var n1 = new Negociacao(new Date(), 5, 700);

    console.log(n1.data);

    n1.data.setDate(11);

    console.log(n1.data);
</script>
```
Será que a data será alterada?

data alterada

Veja que a data foi alterada, no segundo console a data exibida foi 11. Isto significa que a nossa Negociacao é mutável. Assim, alguém pode acessar o sistema e alterá-lo, o que não pode acontecer.

Mas se nós utilizamos o Object.freeze(), por que isso aconteceu? O Object.freeze é shallow, ou seja, ele ficará na superfície. Quando congelamos um valor, não podemos alterá-lo. Porém, como _data é um objeto, não entrará como uma das propriedades do objeto. Então, não é feito o que chamamos de deep freeze. Quando trabalhamos com um objeto e dentro dele temos outras propriedades, estas não ficarão congeladas. Para resolver isso, aplicaremos uma aplicação defensiva mais adiante.

<h2>Programação defensiva</h2>

Uma maneira de tornar a instância imutável é quando chamam a propriedade getter data e é retornado uma nova instância de Date com a mesma data da negociação. Nós devolveremos uma nova referência, um novo objetivo. Atualmente, o get do arquivo Negociacao.js está assim:
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
O getTime de uma data retornará um número long com uma representação da data. Se digitarmos no Console n1.data.getTime(), ele retornará um número que representará a data:

retorno da data

No construtor de Date(), este número será aceito para a construção de uma nova data. Então, quando pedimos uma nova data, ela será criada baseada na data da negociação. Trata-se de um novo objeto. Se tentarmos alterar no data do index.html, apenas a cópia será alterada - o novo objeto que retornei date, enquanto o interno seguirá inalterado. Isto é o que chamamos de programação defensiva. Vamos testar o nosso código, após as alterações feitas no get data() do Negociacao.js. Depois de recarregarmos a página no navegador, veremos a seguinte data no Console:

datas no console

Dessa vez não conseguimos alterar as datas no Console. Isto ocorreu porque apesar de termos usado o n1.data.setDate(11), ele não retornará a data original do objeto que ele já tem. Ele criará um novo objeto, uma nova referência baseada naquela data. Se alteramos o objeto, como fizemos no set.Date(), não modificaremos a data da negociação. Devemos ter o mesmo cuidado com o construtor. Porque se passamos uma data no construtor do arquivo index.html, por exemplo, adicionando uma variável hoje.
```html
<script>

    var hoje = new Date();

    var n1 = new Negociacao(hoje, 5, 700);

    console.log(n1.data);

    hoje.setDate(11);

    console.log(n1.data);
</script>
```
Observe que em vez de passarmos o new Date(), usamos o hoje. Quando a Negociacao receber o objeto hoje, ele guardará uma referência para o mesmo objeto. Isto significa que se alteramos a variável hoje, modificaremos a data que está na Negociacao. Se executarmos o código, a data será alterada para o dia 11.

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
Ao fazermos isto, já não conseguiremos alterar a referência no index.html, porque o que estamos guardando no Negociacao não é mais uma referência para hoje, nós usaremos um novo objeto. Então, quando recarregarmos a página no navegador, a data que aparecerá no Console será 10.

No momento da criação do design das classes, seja cuidadoso com a imutabilidade.

Agora, você pode estar pensando o seguinte: apesar de _quantidade e _valor serem números, eles são objetos também. Mas isso não é um problema quando trabalhamos com o _quantidade, porque não temos nenhum método que irá alterá-lo. A única forma de fazermos isto é atribuindo um valor. Mas como _quantidade é imutável, não conseguiremos realizar esta ação também.

Com isso, finalizamos a blindagem da nossa classe para garantir a sua imutabilidade. Existem outras soluções mais avançadas no JS para tentarmos emular o privacy - a privacidade - do seu código. Mas, ao aplicá-las perdemos em legibilidade e performance. Então, a solução utilizada é a mais viável.

<h2>Substituindo var por let</h2>

Temos o estado do nosso modelo de negociação e podemos continuar com o nosso projeto. Mas antes de continuarmos, queremos implantar um novo hábito. Agora, que estamos utilizando ES6, em vez de usarmos o var para fazer a declaração de uma variável, usaremos o let.
```html
<script>

    let hoje = new Date();

    let n1 = new Negociacao(hoje, 5, 700);

    console.log(n1.data);

    hoje.setDate(11);

    console.log(n1.data);
</script>
```
Se executarmos o código, tudo continuará funcionando normalmente.

data no console

Mas o que ganhamos com a mudança de var para let? Veremos um exemplo das vantagens de usarmos esta forma de declarar variável. Se formos declarar um for que vamos exibir de 1 a 100 escreveríamos o laço da seguinte forma:
```html
<script>

    for(var i = 1; i<= 100; i++) {
        console.log(i);
    }
</script>
```
Ao executarmos o código, ele imprimirá corretamente os números de 1 a 100 no Console.

Porém, existe algo que programadores fora da linguagem JS acham estranho... Vamos adicionar um alert(i):
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

O alert exibiu o valor 101. Por quê? Quando se trabalha com linguagens como Java, C# e outras, as declaração de variáveis possuem escopo de bloco. Na prática, ao utilizarmos estas outras linguagens, jamais poderíamos acessar a variável i, como fizemos com o alert. Se adicionássemos uma variável chamada nome e depois, acrescentássemos um novo alert, o código ficaria assim:
```html
<script>

    for(var i = 1; i<= 100; 1++) {
        var nome = 'Flávio';
        console.log(i);
    }

    alert(i);
    alert(nome);
</script>
```
O segundo alert também seria exibido.

alert 2

Em JavaScript não existe escopo de bloco, então o fato de declararmos uma variável dentro de um bloco não garantirá que temos um escopo. No entanto, se declaramos as variáveis usando o let, estas ganharam um escopo de bloco.
```html
<script>

    for(let i = 1; i<= 100; 1++) {
         let nome = 'Flávio';
         console.log(i);
    }

    alert(i);
    alert(nome);
</script>
```
Agora, elas só existirão no bloco em que foram declaradas. Se executarmos o código, veremos a mensagem: i is not defined.

mensagem de erro

Isto ocorreu porque a variável i não existe fora do bloco. Desta forma, evitamos que as variáveis vazem fora do escopo que fazem parte.

<h2>Resumindo</h2>
Vamos revisar o que estudamos até aqui: vimos a criação de uma classe, utilizando novos recursos JavaScript que favorecem a implementação do paradigma orientado a objeto. Vimos também que uma classe possui um constructor com os quais definimos atributos - que chamamos de propriedades - e que podemos materializar uma abstração do mundo real usando um modelo, por meio de uma classe. Outro assunto abordado é que podemos passar parâmetros no construtor de uma classe e dessa forma, garantindo que no momento em que a instância de uma classe é criada, já tenha todos os dados necessários.

Por convenção, adotamos que os atributos privados devem usar o prefixo _ (underline), indicando para o desenvolvedor que ele só pode acessá-lo. Vimos como adicionar métodos nas classes, e estes, sim, podem acessar os atributos privados.

Apresentamos uma maneira de criar um atributo, que na prática é um método, e ao acessá-lo, podemos executar o código. Moral da história: temos um método que conseguimos acessar como uma propriedade, bastando ser antecedido pela palavra especial get, desta forma, estaríamos gerando um getter. Quem acessa a sua classe acredita que se trata de um propriedade, mas na verdade, trata-se por "debaixo dos panos" de um método.

No entanto, isto não era suficiente para garantir a integridade da nossa negociação, que não pode ser alterada. Por isso, usamos o Object.freeze() para congelar um objeto depois de criado. Como Object.freeze() é shallow (raso), ele será aplicado nas propriedades do objeto, mas as propriedade que são objetos não serão todas congeladas. A ação ficará apenas na superfície. Para resolver esta questão, falamos um pouco sobre programação defensiva. Quando alguém tentar acessar a data, nós retornaremos uma nova data. Fizemos o mesmo com o construtor e com isso, evitamos que alguém consiga de fora da classe alterar algum item do estado interno.

O que vimos foi relevante porque o modelo é uma das coisas mais importantes quando desenvolvemos o sistema. Agora que temos o modelo pronto, a aplicação poderá crescer, tendo-o como base. No fim, deixamos a sugestão da adoção de um novo hábito: substituir nas declarações de variáveis o uso de var por let, que permite um escopo de bloco e evita que as mesmas vazem para um escopo global. Antes do ES6, em JavaScript, era comum o uso de funções para a criação de um escopo para a variável.

Vamos continuar com os nossos estudos e façam os exercícios para praticar os conceitos vistos.

<h2>Pequeno conto sobre orientação a objetos</h2>
Barney: Flávio, eu sou programador, mas até hoje não consigo entender o que seria orientação a objetos. Pode me explicar?

Flávio: orientação a objetos prega uma forte conexão entre dado e comportamento.

Barney: ...

Flávio: hehe, não captou ainda, certo?

Barney: não mesmo!

Flávio: bom, imagine que eu tenha aqui em minhas mãos uma garrafa de cerveja, aquelas tradicionais. Pense no líquido da garrafa como um dado, uma informação. Ok?

Barney: Ok!

Flávio: eu dou essa garrafa em suas mãos e peço para que você a abra. Como você faz?

Barney: eu uso um abridor.

Flávio: boa tentativa, mas eu te passei o abridor?

Barney: não!

Flávio: viu que além de passar a garrafa eu preciso lembrar de te passar um abridor? Eu pedi para você pensar no líquido da garrafa como dado, agora peço que você pense no abridor como comportamento. Ok?

Barney: perfeito!

Flávio: então, se eu não te passei o abridor, como você conseguirá chegar até o líquido (dado) da garrafa?

Barney: hum, eu posso tentar abrir com o dente.

Flávio: é uma forma de você conseguir acessar o liquido (dado). Que mais? Tem outra forma de acessar o líquido?

Barney: sei lá, talvez batendo na quina da mesa.

Flávio: Barney, eu tenho certeza que você criará diversas maneiras de acessar líquido da garrafa, inclusive se você der essa garrafa para outra pessoa ela pode tentar abrir a garrafa de outra forma.

Flávio: agora eu te dei um saca rolha.

Barney: pra quê? Para abrir a garrafa?

Flávio: sim, você vai conseguir?

Barney: bom, até posso conseguir, mas corro o risco de me machucar, assim como abrir a garrafa com dente.

Flávio: excelente, veja que nesse caso o dado (líquido) é separado do comportamento que acessa o dado (forma de abrir). Quando isso acontece, cada um tenta bolar sua forma de acesso aos dados. Em programação, isso pode levar a repetição de código, além disso, como o dado é separado do comportamento que opera sobre ele, temos que lembrar onde em nossos zilhões de arquivos e bibliotecas está aquele comportamento que deve operar o dado.

Barney: acho que estou entendendo. O cenário que você passou para mim é o da programação procedural. Certo?

Flávio: isso mesmo Barney! Na programação procedural o dado e o comportamento estão separados.

Barney: e na orientação a objetos, como fica?

Flávio: nela, como disse, temos uma forte conexão entre dado e comportamento. Onde o dado vai, os comportamentos que operam sobre aqueles dados vão junto.

Barney: pode me dar um exemplo, ainda no contexto da garrafa de cerveja?

Flávio: claro. Imagine que agora eu dou para você uma garrafa long-neck e eu peço para que você a abra.

Barney: isso é fácil, basta eu girar a tampa da garrafa.

Flávio: veja que nesse caso o dado (líquido) caminha com o comportamento que operava sobre ele (abridor, que é a própria tampa). Onde quer que você leve a garrafa, a forma de acessar seu líquido será a mesma, seja aqui no Brasil ou no Japão. Veja que temos dado e comportamento caminhando juntos. Sequer você precisa lembrar de me pedir um abridor ou inventar outras formas de acesso ao líquido, porque o dado é fortemente conectado com o comportamento que opera sobre ele.

Barney: finalmente entendi!

<h2>Declaração de classes</h2>
No ES6 (ES2015+) podemos declarar classes. Qual das opções abaixo declara corretamente a classe Pessoa:

R:class Pessoa{
}
Para criarmos uma classe, usamos a palavra reservada class seguida do nome da classe. Por convenção, nomes de classe começam em letra maiúscula. Curiosamente essa convenção se chama pascal case.

<h2>Atributos de instância</h2>
Não faz muito sentido criarmos uma classe que não possui atributos de instância ou métodos (apesar de possível). Sendo assim, qual das opções abaixo declara corretamente os atributos nome e idade para a classe Pessoa? Obs: nome é string e idade um número!

R: class Pessoa {

    constructor() {

        this.nome = '';
        this.idade = 0;
    }
}
 
Para definirmos atributos de instância de uma classe, precisamos adicionar em sua definição um constructor. É através do construtor que adicionamos na variável implícita this as propriedades que desejamos que toda instância da classe tenha.
Propriedade ou atributo?
Apesar do termo atributo ser muito utilizando no mundo da orientação a objetos, no mundo JavaScript o termo propriedade é mais usado. Inclusive você verá o instrutor ora dizendo atributo e ora dizendo propriedade. O motivo dele ficar intercambiando os termos é porque ele não desenvolve apenas em JavaScript, mas em outras linguagens, como Java. Daí vem a máxima: hábito é difícil de adquirir e difícil de perder. A boa notícia é que se você usar um ou outro termo, os membros da sua equipe o entenderão.

<h2>Encapsulamento</h2>
Vejamos a seguinte definição da classe Conta:

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


Para depositarmos um valor, chamamos o método deposita. É neste método que logamos no console o valor depositado na conta. Logar essa informação é imprescindível para um sistema de auditoria.

Podemos dizer que:

R: or mais que seja importante atualizarmos o saldo da conta somente através do método deposita, para que a operação de log seja realizada, ninguém impede que o programador altere o saldo diretamente na propriedade da classe, conforme o exemplo abaixo:
```html
var conta = new Conta('Mingau', 171);
conta.saldo+= 100;
```
Com isso, a operação de log não é realizada.

avaScript não possui nativamente uma sintaxe para declarar atributos privados.

Uma solução barata é apelar para a convenção do mundo javascript na qual atributos prefixados por _ não devem ser acessados diretamente pelos desenvolvedores. Eles devem utilizar as próprias classes para poder acessá-los. Sendo assim, a única maneira convencionada para acessar esses atributos é através de métodos. No caso da nossa classe Conta, poderíamos fazer:
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
console.log(conta.getSaldo()); // se não pode acessar this._saldo, é preciso
```
CURIOSIDADE: a linguagem TypeScript da Microsoft permite definir atributos privados com o modificador private. TypeScript nada mais é do que um superset do ES2015+ com a adição de novos recursos, inclusive aquele que define atributos privados.

<h2>O resultado é...</h2>
Temos a seguinte definição de classe:
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

E temos a seguinte instância:

```html
var conta = new Conta('Mingau', 171);
conta.titular = 'Paco';
console.log(conta.titular);
```

O que será exibido na instrução console.log(conta.titular)?

R: Mingau 
O titular continuará a ser Mingau, porque conta.titular é uma propriedade getter, que não aceita receber valores.


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

Sabemos que uma alteração como essa não tem efeito porque é um getter:
```html
var negociacao = new Negociacao(new Date(), 1, 100);
negociacao.quantidade = 100 // não tem efeito
```
Contudo, nada impede do programador não seguir a convenção de que propriedades com _ só podem ser acessadas através de métodos da classe:
```html
var negociacao = new Negociacao(new Date(), 1, 100);
negociacao._quantidade = 100;  // é possível, apesar de ferir a convenção
```
Aprendemos que podemos congelar objetos, tornando suas propriedades imutáveis. Qual das sintaxes abaixo realiza o "congelamento do objetonegociacao"?

R: Object.freeze(negociacao); 
Podemos solicitar à Object.freeze o congelamento de um objeto com todas as suas propriedades. Qualquer alteração de suas propriedades serão ignoradas.
No exemplo anterior, podemos aplicar Object.freeze no construtor da classe, tendo como alvo this, mas claro, só depois de termos atribuído os valores recebidos no construtor às propriedades.

<h2>Imutável aonde meu filho!</h2>

Vejamos novamente o exemplo da classe Negociacao:
```html
class Negociacao {

    constructor(data, quantidade, valor) {

        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;

        Object.freeze(this); // congela a instância do objeto
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

E agora, uma instância:
```html
var negociacao = new Negociacao(new Date(), 1, 100);
```
O que acontecerá se alterarmos a data de negociacao? Vejamos um exemplo:
```html
negociacao.data.setDate(negociacao.data.getDate() + 1);
```
Faça um teste no console, altere a data de uma instância de Negociacao.

Por mais que estejamos usando Object.freeze(this), sabemos que nossa classe não é totalmente imutável. Apesar de não podermos atribuir novamente um novo objeto à referência que já temos, como negociacao._data = new Date(), nós podemos chamar os métodos do objeto data, que operam sobre seu estado interno, que não é congelado. E agora?

Podemos lançar mão da programação defensiva. Quando chamarem a propriedade getter data, retornaremos uma nova instância de Date com a mesma data da nossa negociação. Como é outra instância, qualquer modificação não impactará em nossa classe.

O mesmo cuidado precisamos tomar com o construtor da classe. Como data é um objeto e objetos são passados como referência em JavaScript, qualquer alteração feita fora da classe pode alterá-la. A ideia é aplicarmos a programação defensiva. Sendo assim, nossa classe fica:
```html
class Negociacao {

    constructor(data, quantidade, valor) {

        this._data = new Date(data.getTime()); // criando uma nova instância a partir do tempo de uma data 
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

<h2>Varilândia ou Letícia</h2>
Qual a diferença entre variáveis declaradas como var e let?

R: Declarações com var possuem escopo de função ou global. Variáveis declaradas com let tem escopo de bloco e o JavaScript lançará um erro se a mesma for declarada mais de uma vez.


<h2>Date é uma classe?</h2>
Durante o treinamento eu digo que Date é uma classe, inclusive usamos operador new para criá-la. Contudo, na verdade Date é uma função construtora. O uso de funções construtoras no ES5 era uma das formas de criarmos instâncias a partir de um modelo, ou seja, era algo mais perto de uma definição de classe. Aliás, toda sintaxe nova do ES2015 voltada para criação de classes, herança e outros recursos são açucares sintáticos para muito código que escrevíamos em ES5.

Que tal criarmos uma classe em ES2015 para em seguida vermos como é seu código em ES5?
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
Apesar de terem uma sintaxe diferente, ambos tem o mesmo resultado. Então, para unificar a linguagem, chamarei Date de classe e outras funções construtoras também, porque no final elas são usadas para implementar o paradigma da orientação a objetos.

-----------------------------------------------------------------------------------------
<h1>Seção 03 - A ligação entre as ações do usuário e o modelo</h1>

<h2>A classe NegociacaoController</h2>

Nós já temos a negociação criada, agora, precisamos capturar as ações do usuário e interagir com o modelo por meio de uma controller no modelo MVC. Nós criaremos instâncias de negociação. Primeiramente, precisamos criar a controller.

Atualmente, no index.html, só temos a importação do arquivo Negociacao.js:

```html
<script src="js/app/models/Negociacao.js"></script>
Lembrando que não temos mais a outra tag <script> usada nos testes. Caso você ainda a tenha, deve apagá-la.
```
Em seguida, criaremos a classe NegociacaoController.js. Usamos a convenção usada anteriormente de começar o nome da classe em caixa alta. Quando clicarmos no botão "Incluir" do formulário, vamos submetê-lo e depois, chamaremos uma ação do controller para adicionar uma negociação na tabela. Por enquanto, focaremos na criação da Negociacao com base nas informações dos formulários.

Usaremos o método adiciona() na classe NegociacaoController. O método receberá como parâmetro um event.
```html
class NegociacaoController {

  adiciona(event) {
        event.preventDefault();
        alert('Chamei ação no controller');
  }
}
```
Chamamos o event.preventDefault(). Quando submetemos o formulário, se não cancelamos o comportamento padrão do mesmo, ele será recarregado. Com o alert, a controller cancelará a submissão do formulário para poder capturar os dados da negociação e incluir na lista. Ainda não colocamos constructor, porque a negociação ainda não tem nenhum atributo de classe.

Como faremos a ligação do método adiciona() com a submissão do formulário? Precisaremos fazer a importação do NegociacaoController.js. Também teremos uma tag <script> com a qual iremos instanciar esta controller.
```html
<script src="js/app/models/Negociacao.js"></script>
<script src="js/app/controllers/NegociacaoController.js"></script>
<script>
    let negociacaoController = new NegociacaoController();
</script>
```
Observe que fizemos declaração da variável negociacaoController com o let, conforme convencionamos. Agora, nossa controller já está acessível na página inteira.

Em seguida, dentro da tag <form>, adicionaremos onsubmit para submeter o formulário. E na instância de negociacaoController, chamaremos o método adiciona(event):
```html
<body class="container">

    <h1 class="text-center">Negociações</h1>

        <form class="form" onsubmit="negociacaoController.adiciona(event)">
            <div class="form-group">
                <label for="data">Data</label>
                <input type="date" id="data" class="form-control" required autofocus/>
            </div>

  //...
```
A estratégia utilizada aqui é um pouco diferente do que vem sendo feita, geralmente, a associação entre tag e o evento é feita no parte JS do projeto. Mas inspirado por framework como o AngularJS, por exemplo, que faz a associação de uma ação da controller utilizando um evento. Usaremos isso, para escrever menos código na parte JavaScript. Como nossa página é dependente de JS, podemos fazer isso facilmente.

Se atualizarmos a página e preenchermos o formulário com dados aleatórios, após submetermos as informações, veremos a mensagem do alert.

ação no controller

Então, a ação da controller foi chamada. Mas o nosso objetivo não é exibir a mensagem, nós queremos criar um negociação. Teremos que gerar o código que instância a negociação. Faremos isto mais adiante.

<h2>Associando métodos do controller às ações do usuário</h2>

Ao clicarmos no botão "Incluir" do formulário, já conseguimos executar as ações da controller. Agora, precisamos capturar os dados preenchidos. Primeiramente, iremos exibi-los no Console. Para isto, criaremos a variável inputQuantidade.
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
O document.querySelector() será o responsável por buscar no DOM os elementos com id #data, #quantidade e #valor - observe que conseguimos utilizar os seletores CSS. Os itens foram dispostos na ordem do formulário. Lembrando que cada input tem id no arquivo index.html.

Vamos executar o código para ver se todos os dados aparecem no Console do navegador. Preencheremos o formulário com a data 11/12/2016, a quantidade 1 e o valor 100.

dados do console

Os dados apareceram corretamente no Console, nós já conseguimos capturá-los. Mas veja que repetimos bastante o código, ficou uma sintaxe trabalhosa de ser digitada. Se em JavaScript temos as Higher-Order Functions, podemos declarar a variável $ - como usado no jQuery - e dentro, jogaremos o document.querySelector. Poderemos fazer as seguintes substituições no código:
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
Desta forma, ficou menos trabalhoso escrever o código. Mas se o executarmos como está, veremos uma mensagem de erro no navegador.

Não funcionou colocarmos o querySelector na variável $ para criarmos um alias. Por que não funcionou? O querySelector é uma função que pertence ao objeto document - chamaremos tal função de método. Internamente, o querySelector tem uma chamada para o this, que é o contexto pelo qual o método é chamado. Logo, o this é o document. No entanto, quando colocamos o querySelector dentro do $, ele passa a ser executado fora do contexto de document e isto não funciona. O que devemos fazer, então? Queremos tratar o querySelector como uma função separada. Nós queremos que ao colocarmos o querySelector para o $, ele mantenha a associação com o document. Para isto, usaremos o bind() :
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
Agora, estamos informando que o querySelector irá para a variável $, mas ainda manterá uma associação com document. Desta vez, o código funcionará corretamente no navegador. Vimos um truque que copia um pouco o jQuery faz de melhor e cria um "mini-framework", ao associarmos a variável $ com o querySelector - um seletor CSS - e mantendo a ligação com o document.

Até aqui, vimos como manipular os dados do DOM, além do truque citado para otimizar nosso código. Precisaremos ainda construir uma negociação com base nestes dados. Mas será que esta forma de organizar os dados é performática? Veremos isto mais adiante.

<h2>Evitando percorrer o DOM muitas vezes</h2>
O código funciona, mas se adicionarmos dez negociações e clicarmos dez vezes em "Incluir", o querySelector buscará a #data, #quantidade e #valor dez vezes também. No entanto, devemos evitar ao máximo percorrer o DOM. Sempre que executamos o querySelector, ele irá no DOM - que é uma árvore de elementos. O querySelector terá que buscar entre todos estes elementos. Porém, a API de DOM é um tanto "preguiçosa" e não gosta de executar essa ação.

Então, se adicionamos 100 negociações, teremos que fazer esta busca 100 vezes. Apesar de só estarmos trabalhando com três elementos no caso, queremos melhorar a nossa performance. Atualmente, nosso código está assim:
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
Para melhorar a performance, adicionaremos o constructor e moveremos os inputs para dentro dele. Mas em vez de criarmos uma variável, criaremos atributos de instâncias com o this.

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
Quando a NegociacaoController for criado pela primeira vez, ele buscará os elementos do DOM do document, que serão guardados nas propriedades da classe. Adicionamos o this no console também.

Agora, mesmo que façamos 300 negociações, ele só fará uma busca no DOM pelos elementos. Com isto, conseguimos melhorar a performance. O impacto neste cenário é ínfimo, mas poderia ser maior em outro cenários. Se executarmos o código, veremos que ele serão exibidos corretamente no console.

Usaremos esta estratégia como se fosse um caching até o fim do curso.

<h2>Criando uma instância de Negociacao</h2>
Nós iremos seguir a convenção de que os inputs só poderão ser acessados com NegociacaoController, não podendo ser acessados por fora da aplicação. Só os métodos de NegociacaoController poderão acessar esses atributos. Para isto, usaremos o prefixo _, convencionado anteriormente, que indicará para o programador .
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
Continuamos seguindo a convenção. Agora, podemos criar a negociação com os dados do formulário, vamos então criar a variável negociacao e incluiremos os três parâmetros.
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
Passamos os parâmetros data, quantidade e valor para o construtor de Negociacao. Com os dados do formulário, nós já temos uma negociação. Queremos que a negociação seja adicionada em uma lista, mas não a iremos implementar ainda.

Vamos ver como ficou a página recarregada.

mensagem de erro console

Recebemos uma mensagem de erro, mas não foi em NegociacaoController. O erro ocorreu na classe Negociacao.js. No Console, vemos ainda em qual linha foi o problema. A falha nos avisou que data.getTime não é uma função. Como isso é possível?
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
O que significa? A data que estamos passando para o construtor não é uma data? Para resolver isso, vamos descobrir qual é o tipo da data, usaremos a função typeof().
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
No Console, veremos que é uma string.

string

Isto significa que quando passamos a data para Negociacao, ela ainda é uma string e, obviamente, não teremos o getTime(). O que precisamos resolver antes? Precisamos encontrar uma maneira de converter a data - que está em texto - para um objeto Data. Priorizaremos isso, e cancelaremos a criação da negociação.
```html
adiciona(event) {

    event.preventDefault();

    console.log(typeof(this._inputData.value));

    console.log(this._inputData.value);

}
```
Ao executarmos o código, veremos o seguinte código:

data string

Temos que ser capazes de transformar uma string em um objeto do tipo Date e depois passá-lo para negociação.

Mais adiante, faremos este processo de conversão.

<h2>Criando um objeto Date</h2>

Existem várias maneiras de construirmos uma data passando parâmetros para o construtor. Uma das formas que já vimos é que se já temos uma data, podemos colocar o retorno de getTime e passar para o construtor de Date. Será que podemos fazer este processo de forma direta? Se for possível, já resolvemos o nosso problema.
```html
adiciona(event) {

  event.preventDefault();

  let data = new Date(this._inputData.value)
  console.log(data);
}
```
Se der certo o que fizemos, será retornada a string 2016-11-12. É o texto que o construtor está recebendo. Vamos fazer um teste:

data errada no console

A data que apareceu no Console não foi a mesma, em vez disso, vemos que o dia é 11. Então, não funcionou. Temos que encontrar outra maneira de trabalhar com essa data. Outra maneira de trabalhar com Date é utilizando um array, que terá o ano, mês, dia.

Se digitarmos no Console...

new Date(['2016', '11', '12']);
O retorno será a data correta:

new Date

Esta é uma forma de resolvermos. Precisamos ainda encontrar uma forma de transformar a data que é uma string, fique dentro do array. Como faremos com que a string saiba qual é o separador que ela deve considerar? Para isto, adicionaremos split('-'), e assim, a data será separa com hifens. Faremos um teste digitando no Console dataString.split('-'):

dataString.split('-')
["2015", "12", "11"]
Ele nos retornou a data correta. Então, executaremos o seguinte código:
```html
adiciona(event) {

  event.preventDefault();

  let data = new Date(this._inputData.value.split('-'));
  console.log(data);
}
```
Resolvemos o problema da data.

console com a data correta

Por que conseguimos solucionar passando um array? Quando geramos o array com ano, mês e dia, ele transforma cada item em uma string e adiciona o separado. Só que quando passamos o array '2016', '11', '12', o que é o reagrupamento por debaixo dos panos de cada item usando o separador ,.

metodo join

Existe no array o método join(), que une todos os itens e depois, forma uma string com separadores.

string recebida

Temos a string que esperávamos receber. Mas, além de usar o split(), poderíamos utilizar o replace(). Adicionaremos uma expressão regular pedindo que seja trocado o hífen de todas as ocorrências da string (ou seja, global) por ,: replace(/-/g, ',').
```html
adiciona(event) {

    event.preventDefault();

    let data = new Date(this._inputData.value.replace(/-/g, ','));
    console.log(data);
}
```
outra forma de fazer a data

A data ficou correta. Vimos que existem várias formas de resolver a questão da data, e o array nem precisa ser de string. Pode ser um array de número, que também será aceito.


<h2>Executando ações de um controller</h2>

Vejamos a declaração de uma controller:

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
Veja que o único dado que a controller possui é o contador, que começa a partir de 0. Quando o método incrementar for chamado, o valor do contador será incrementado e o valor atual será exibido na tela.

Qual das opções abaixo associa corretamente o botão <button> com o método incrementar de ContadorController?
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

Vimos como lidar com a convenção das datas para criar um objeto Date, mas veremos mais uma forma de realizar tal ação. Escreveremos no Console a seguinte linha:
```html
let data = new Date(2016, 11, 12)
```
No entanto, se imprimirmos esta data, veremos o retorno abaixo:

Console

A data impressa é Mon Dec 12 2016. Por que ele imprimiu dezembro, se escrevemos mês 11? Porque nesta forma de se passar o Date, o mês deve ser passado de 0 a 11. Então, se queremos que a data seja em novembro, precisaremos diminuir o valor do mês. Vamos fazer um novo teste no Console, digitando:
```html
data = new Date(2016,10,12)
```
Agora, a data já aparece correta.

Data correta

A novidade é que essa é a maneira que queremos usar para aplicar as datas na aplicação. Apesar da outra forma ser mais fácil, desejamos encontrar uma solução para construir um Date a partir da string vinda do formulário. Ao tentarmos resolver este problema, podemos ver muitos assuntos de programação funcional.

Então, eu peço que você dê uma pausa no vídeo e pense como você vai conseguir converter uma data no formato 2016-11-12 e passá-la para o construtor de Date da seguinte forma:
```html
new Date(2016, 10, 12)
```
Pense um pouco a respeito e veremos mais adiante como eu vou resolver o assunto.

<h2>Resolvendo um problema com o paradigma funcional</h2>
Talvez você tenha encontrado uma solução diferente da minha, mas darei a minha "versão dos fatos". Nosso objetivo é que o Date receba no construtor o ano, mês e dia. Faremos alguns ajustes no código:
```html
adiciona(event) {

    event.preventDefault();

    let data = new Date(
        this._inputData.value
    );
    console.log(data);
}
```
Lembrando que cada um dos itens será um parâmetro do construtor. Mas o mês tem que ser decrescido de 1. Em seguida, transformaremos a string em um array, utilizando o split('-'). Ao fazermos isto, a string 2016-11-12 se tornará um array de três elementos. Sabemos que se passarmos da forma como já está, conseguiremos o resultado desejado. Porém, não quero que o Date receba um array, queremos que ele receba a primeira posição do array como a primeira posição do construtor e que o processo se repita com o segundo e terceiro elemento do array.

No ES6, temos o recurso spread operator. Observe o que faremos no código:
```html
adiciona(event) {

    event.preventDefault();

    let data = new Date(...this._inputData.value.split('-'));
    console.log(data);
}
```
Adicionamos ... (reticências) posicionado antes do this, com este spread operator, indicamos que o array será desmembrado - e o primeiro item do array, e cada parâmetro do Date será posicionado na mesma ordem no construtor. Como já construímos o código, a data será passada, mas o mês ficará incorreto e não será subtraído 1. Executaremos o código como está e a data aparecerá como o mês de Dezembro.

data incorreta

Mas conseguimos demonstrar que o spread operator está funcionando corretamente. Porém, temos que encontrar uma forma de, antes de reposicionarmos cada parâmetro para o constructor, decrementarmos 1 do valor do mês. Para isto, trabalharemos com a função map(), bem conhecida no mundo JavaScript e que nos permitira subtrair 1. Então, iremos chamar a função map no array criado e dependendo do elemento, iremos diminuir -1.
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
Com o return item, varremos o array onde temos ano, mês e dia, e recriaremos a mesma lista de elementos. Ou seja, não teremos nenhuma transformação. Se executássemos o código como ele está, a data continuaria com o mesmo problema. Nós precisamos que o mês 11 se torne 10.

Continuaremos tentando resolver o problema, adicionando um segundo parâmetro na função map(): indice. Incluiremos um if, no qual especificaremos que quando passarmos pelo elemento 1 (o segundo) do array, vamos subtrair 1.
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
Apesar de item ser uma string, quando usamos -1, o JS entende que deverá fazer um operação numérica e faz a conversão implícita da string. Caso não seja o segundo elemento, a posição do mês, o retorno será equivalente ao valor do elemento do array.

Veremos se o código vai funcionar. No formulário, preencheremos o campo da data com 12/11/2016. Desta vez, a data que aparecerá no Console estará correta.

datas correspondentes

Nós conseguimos, encadeando uma série de funções, converter só o segundo item do array e depois, decrementá-lo. Mas é possível eliminar o if. Em vez do laço, faremos alterações na função maps():

return item - indice % 2
O trecho do código ficará da seguinte forma:

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
Se estamos na primeira posição do array, o valor de indice é 0. Por isso, o resultado de indice % 2 será igual a 0 também. Se subtrairmos este valor de item, nada irá mudar. Mas quando estivermos na segunda posição do array, o indice será igual a 1. Agora, quando calcularmos 1 módulo de 2, o resultado será 1. E quando estivermos na terceira posição do array, 2 módulo de 2, também será igual a 0. Não diminuiremos nada do valor do item. Dessa forma conseguimos evitar a criação de um if.

Para entendermos melhor o que fizemos, calcularemos os módulos no Console:

0 % 2
modulo de 0

A última linha retornou o valor do resultado: 0, ou seja, a primeira posição do array. Se calcularmos os módulos dos demais, teremos os seguintes valores.

valores dos modulos

Desta forma, conseguimos evitar o if e ajustar apenas o mês. Até aqui, o nosso código ficou assim:


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
Se ele for executado, veremos que a data que surgirá no Console será 12 de novembro de 2016.


<h2>Array Functions: deixando o código ainda menos verboso</h2>
Podemos ainda deixar o nosso código menos "verboso", usando uma forma diferente de declarar função - utilizada a partir da versão ES2015: falamos das arrow functions. O termo arrow traduzido para o português significa flecha. Com estas funções, podemos eliminar a palavra function do código. Mas se simplesmente apagarmos a palavra e tentarmos executar o código, teremos um erro de sintaxe que será apontado no navegador. Para emitirmos o termo, teremos que adicionar => (que representa uma flecha). Ela sinalizará que temos uma arrow function que receberá dois parâmetros.
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
Quando usamos a sintaxe da flecha, já sabemos que se trata de uma arrow function. Se testarmos atualizar a página no navegador, veremos que tudo funciona.

data correta

A data preenchida no formulário corresponde com a data no Console.

Agora, uma pergunta: no bloco da arrow functions, quantas instruções nós temos? Apenas uma: return item - indice % 2. A linha está dentro da função map():
```html
.map((item, indice) => {
    return item - indice % 2;
});
```
Quando trabalhamos só com uma instrução, podemos omitir o bloco:
```html
let data = new Date(...
    this._inputData.value
    .split('-')
    .map((item, indice) => item - indice % 2)
);
```
Temos que colocar a função com a instrução inline e não precisamos colocar o ;. Como só temos essa instrução, a arrow function já irá fazer o retorno e podemos apagar o return. O código fica muito mais simples!

Se rodarmos o código no navegador, o formulário está funcionando normalmente e a data aparecerá como desejamos no Console. Nós conseguimos reduzir a "verbosidade" do código, usando uma arrow function. Em seguida, criaremos a variável negociacao:
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

Vamos revisar o que vimos até aqui e entender o quanto evoluímos. Nós criamos a primeira Controller da negociação: NegociacaoController. Vimos como associar uma ação do usuário, como a submissão do formulário, e chamar o método controller. Para criar um negociação do DOM, tivemos que criar os elementos do DOM, equivalente ao input da quantidade, da data e do valor para capturar os valores, sendo possível depois, instanciar uma negociação. Comentamos também como não é recomendável fazer isto todas as vezes que chamarmos o método adiciona(). Por isso, colocamos como propriedade da classe NegociacaoController o elemento do DOM.

Para evitarmos escrever repetidas vezes document.querySelector, nós usamos o "truque" de colocá-lo na variável $. Mas vimos que neste processo, o querySelector perdia o contexto do document, e o this deixava de apontar para este. Para resolver o assunto, usamos a chamada para o método bind() e o $ - equivalente ao querySelector - fizesse uma referência para o document. Fizemos um sintaxe parecida com jQuery.

Falamos também que não era suficiente capturarmos a data do formulário e passá-la como parâmetro para o construtor de Date, porque o input vinha no formato ano, mês e dia. Depois, tivemos que fazer algumas transformações e vimos que o Date aceita trabalhar com alguns parâmetros. Passaremos um array para o Date, também passamos uma string com ano, mês e dia, cada item separado por uma vírgula. Existem várias formas de trabalharmos com a data, mas precisamos ajustar a data que lemos no formulário e está num formato string, para o formato compatível para o construtor do Date.

Eu deixei um desafio para você: eu queria que fosse usado um construtor que usasse ano, mês e dia, cada um disposto como um parâmetro diferente no construtor. Porém, neste formato, o mês não pode ser passado de 1 a 12, no caso, precisaria ser de 0 a 11. então, foi necessário realizar alguns transformações e precisamos um pouco de programação funcional.

<h2>O modelo MVC</h2>
Sobre o modelo MVC, podemos afirmar que:

R:  C é o controller, aquele que disponibiliza um modelo para a view.
O controller é aquele que recebe as ações do usuário e que sabe interagir com o modelo. Como o modelo é independente da view, esta precisa ser renderizada para que reflita as alterações no modelo. Em suma, o controller é a ponte de ligação entre a view e o modelo.

M é o modelo, uma abstração do mundo real, os dados da aplicação e suas regras de negócio.
O padrão MVC permite que alterações de layout na view não acarretem alterações no modelo.

A View é a representação do modelo em alguma tecnologia, por exemplo, HTML.
A view apresenta um modelo em uma tabela, em um formulário ou em parágrafos, e o padrão MVC permite que qualquer alteração na view não interfira com o modelo.

<h2>O que é má prática ontem pode ser boa prática hoje e vice-versa</h2>
No mundo front-end, há uma separação clara entre HTML, CSS, JS. Tanto isso é verdade que a boa prática é que cada um fique no seu quadrado, ou seja, que cada um tenha seu arquivo dedicado. Essa separação visa facilitar a manutenção.

Contudo, quando manipulamos o DOM, vira e mexe precisamos associar eventos a elementos. Uma maneira de se fazer isso é encontrar o elemento que queremos associar o evento, e realizar essa associação via JavaScript. Vejamos um exemplo:
```html
<p id="p1">Olá</p>
```
Temos um parágrafo com um id definido. No mundo JavaScript, se quisermos associar um evento click ao parágrafo, precisamos buscá-lo primeiro e depois associar o evento:
```html
function mostra() {
    alert('Fui clicado');
}

document.querySelector('#p1').addEventListener('click', mostra);
```
O código anterior funciona perfeitamente, inclusive deixou marcante a separação entre HTML e JS, pois em nenhum momento no HTML referenciamos nosso JS (apenas a tag <script> que o carrega, claro).

Contudo, essa solução nos obriga a manipular o DOM toda vez que quisermos associar um evento com o elemento. Sendo assim, quando criamos SPA (Single Page Applications), páginas que não se recarregam durante seu uso) é muito comum usar a abordagem clássica, que é associar a função do evento diretamente na tag <html> da nossa página.

Qual das opções abaixo associa diretamente na tag <p> o evento click para a função mostra?

R:
```html
<p id='p1' onclick='mostra()'>Olá</p>
```
Dependendo do seu viés teórico, essa solução pode ser uma "heresia". Contudo, frameworks SPA, como Angular, adotam estrutura semelhante para associar a ação de um controller a um componente da página, dessa forma, removendo o desenvolvedor de ter que realizar essa associação manualmente.


<h2>As mútiplas facetas do this</h2>

Vejamos o seguinte código!
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
O que será exibido na PRIMEIRA e SEGUNDA chamada respectivamente?

R: undefined e Salsifufu
Na primeira chamada, o parâmetro Lampreia é ignorado pela função, pois a função não recebe parâmetros. Não acontece nenhum erro, mesmo a função não recebendo o parâmetro, uma característica do JavaScript. Sendo assim, quando exibeNome('Lampreia') é chamado, o this na verdade é window, o escopo global, e nele não temos o valor nome.

Contudo, quando executamos a linha:

exibeNome = exibeNome.bind(pessoa);
Estamos recebendo uma referência para uma nova função, que passa a ter o objeto pessoa como this. Ou seja, a função bind, presente em todas as funções, permite indicar qual será o valor de this quando ela for executada, em nosso caso pessoa. Como pessoa possui a propriedade nome, será exibido no alerta o valor Salsifufu.

É por isso que fizemos ao longo deste capítulo:

let $  = document.querySelector.bind(document);
O retorno da função bind é a função querySelector, que tem como contexto o document, ou seja, seu this será document. Se tivéssemos feito apenas:

let $  = document.querySelector;
A variável $ passa a ser querySelector, mas seu this deixará de ser document, porque estará sendo executada fora deste contexto.

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
E claro, uma página que importa o script do controller, instanciando-o e associando um botão à ação contadorController.incrementa():
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
Nosso código funciona, contudo, a maneira como organizamos nosso código pode causar problemas de performance em uma aplicação com escopo maior.
Sob o ponto de vista funcional, não há problema algum em nosso código, pois ele funciona e atende o requisito, que é incrementar o total do contador e exibir o seu estado atual na view. Contudo, podemos melhorar esse código. Veja que a cada clique do usuário, solicitamos ao document que busque o elemento que desejamos. Qual o problema? Uma analogia pode nos ajudar.

Você tem 200 papéis importantes e pega na sala ao lado uma caneta para assinar o primeiro deles, para logo em seguida devolver a caneta. Imagine repetir esse processo para os 199 papéis restantes? Pois é, o DOM (document) também ficará fatigado se você buscar o mesmo elemento 200 vezes!

Para evitar a "fadiga", uma boa estratégia é realizar uma espécie de cache do elemento do DOM que você deseja manipular, ou seja, guardar sua referência, para que você o busque apenas uma vez. Em nosso modelo MVC, com o uso de classes fica fácil definir em que lugar guardaremos uma referência para o elemento que estamos buscando.

Podemos guardar a referência do elemento em uma propriedade na classe e toda vez que alguém precisar desse elemento basta acessar a propriedade que o referencia, evitando assim, percorrer o DOM, fatigando-o! Como as propriedades na classe são inicializadas através do operador new, que chama por debaixo dos panos o constructor da classe, podemos buscar o elemento assim que o nosso controller for instanciado, apenas.

Aplicando os conceitos que vimos anteriormente, nossa classe ContadorController fica assim:
```html
class ContadorController {

    constructor() {
        this._contador = 0;
        this._elemento = document.querySelector('#p1'); // busca uma única vez
        alert(this._contador);
    }

    get contador() {
        return this._contador;
    }

    incrementa() {
        this._contador++;
        this._elemento.textContent = this._contador; // não precisa buscar o elemento, já temos uma referência para ele
    }
}
```
Apesar do problema original não ser suficiente para fatigar o DOM, ter sempre em mente escrever um código otimizado e sem comprometer sua legibilidade é um bom caminho a se trilhar.

<h2>"Isso" não encaixa em um "Date"? Se vira!</h2>

JavaScript possui um objeto especial para representar datas, o objeto Date. Sua criação é direta:

let hoje = new Date();
Quando instanciamos Date sem passar qualquer parâmetro para o seu construtor, é criado um objeto com a data naquele momento. Contudo, podemos criar uma data seguindo o seguinte formato:

let outraData = new Date('2016/05/17'); // formato ano/mês/dia
Internamente, o construtor de Date está preparado para lidar com uma string neste formato e criar uma instância correspondente. Podemos até obter o dia, o mês e o ano de uma data usando seus métodos correspondentes:

let outraData = new Date('2016/05/17'); 
console.log(outraData.getDate()); // imprime 17
console.log(outraData.getMonth()); // imprime 4
console.log(outraData.getFullYear()); // imprime 2016
Não podemos esquecer que um Date guarda internamente os meses de 0 a 11, é por isso que outraData.getMonth() retorna 4 e não 5.

Podemos construir uma nova data também dessa maneira:

let outraDataOutraManeira = new Date(2016, 4, 17);
Veja que o construtor recebe o ano, mês e dia, contudo esta forma precisa receber o mês menos um e foi exatamente o que fizemos. Para o mês 5, passamos o valor 4. Aliás, estamos passando valores que são Numbers, mas poderíamos ter passado esses valores como string que tudo continuaria funcionando do mesmo jeito.

Parta do princípio que você tem a seguinte variável:

let dataString = '17-05-2016';
E que usará o construtor de Date, que está preparado para receber uma data no formato ano/mes/dia.

Escreva um código que altere dataString para que seu conteúdo fique compatível com o formato ano/mes/dia. No final, instancie uma Date, exibindo no console seu valor.

VER OPINIÃO DO INSTRUTOR
Opinião do Instrutor

Uma solução possível é a seguinte:

let dataString = '17-05-2016';

dataString = dataString.split('-').reverse().join('/');

let data = new Date(dataString);

console.log(data);
Ou podemos fazer de uma vez só:

let dataString = '17-05-2016';

let data = new Date(dataString.split('-').reverse().join('/'));
console.log(data);
A ideia é transformarmos nossa string em uma array, onde teremos três elementos com o dia, mês e ano respectivamente. Daí, usamos o método reverse do Array que inverte a sua ordem fazendo com que o ano seja o primeiro elemento e o dia o último. Nosso mês continuará na sua posição original. Por fim, criamos uma string a partir do array, usando o método join, que usará uma / para separar cada elemento.


-------------------------------------------------------------------------------------------
<h1>Seção 04 - Lidar com data é trabalhoso? Chame um ajudante!</h1>

<h2>Exibindo o objeto Date no formato dia/mês/ano</h2>

Conseguimos capturar as entradas dos usuários, e quando este clica no botão "Incluir" e submete o formulário, a controller instancia uma negociação já com a data convertida. Então, estamos preparados para incluir as negociações na tabela do navegador. Porém, antes, vamos resolver um assunto: a exibição da data. Atualmente, temos a opção de adicionar no negociacao.data dentro do console, na classe NegociacaoController:
```html
let negociacao = new Negociacao(
    data,
    this._inputQuantidade.value,
    this._inputValor.value
  );

  console.log(negociacao.data);
```
Na página do navegador, preencheremos o campo data com 12/11/2016 e veremos a data exibida na Console da seguinte forma:

Sat Nov 12 2016 00:00:00 GMT-0200 (BRST)
Temos que encontrar uma maneira de formatarmos a data para: dia/mês/ano. Para isto, criaremos a variável diaMesAno.
```html
let diaMesAno = negociacao.data.getDate()
+ '/' + negociacao.data.getMonth()
+ '/' + negociacao.data.getFullYear();
console.log(diaMesAno);
```
Com o getDate() retornaremos o dia e depois, com o getMonth(), retornaremos o mês e com getFullYear(), o ano. Todos foram concatenados com a data. Observe que utilizamos o Full no ano, para que apareçam todos os dígitos do ano (nós queremos evitar o bug do milênio).

No entanto, a data que aparecerá no Console ainda não será a correta.

data errada no console

No Console, vemos o mês 10, isso acontece porque ele veio de um array que vai de 0 a 11. Então, se a data gravada for no mês 11, ele será impresso no mês 10. No entanto, não solucionaremos somando +1 ao valor no array.
```html
let diaMesAno = negociacao.data.getDate()
    + '/' + negociacao.data.getMonth() + 1
    + '/' + negociacao.data.getFullYear();

console.log(diaMesAno);
```
data esquisita

Não existe mês 101! O JavaScript concatenou o dia com a / e resultado disso com o Month. No fim, isso virou uma string e ele então, concatenou com +1. Esta operação deve ocorrer primeiro antes da concatenação, por isso, adicionaremos os () (parentêses).
```html
let diaMesAno = negociacao.data.getDate()
    + '/' + (negociacao.data.getMonth() + 1)
    + '/' + negociacao.data.getFullYear();

console.log(diaMesAno);
```
Básico de JavaScript. Agora, vamos executar o código e a data será impressa corretamente.


<h2>Isolando a responsabilidade de conversão de datas</h2>

Ao observarmos o código descobrimos que ele possui poucas linhas. Para criarmos uma data, o código deverá ser executado sempre que adicionarmos e imprimirmos uma data.

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
O nosso objetivo será isolar a responsabilidade de instanciar uma data e exibir a data num formato já conhecido numa classe. Esta será uma classe ajudante que chamaremos de helper e terá a responsabilidade isolada de lidar com a data.

Agora, dentro das pasta Helpers, criarei o arquivo DateHelper.js. Dentro da classe, teremos dois métodos: o primeiro método será textoParaData(), que receberá um texto e o converterá para data. O segundo será o dataParaTexto, que receberá uma data e a converterá em texto.
```html
class DateHelper {

    textoParaData(texto) {

    }

    dataParaTexto(data) {

    }
}
```
Aproveitaremos o código que faz a conversão no NegociacaoController e adicionaremos nos métodos:
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
Fizemos alguns pequenos ajustes, por último, inverteremos a ordem dos métodos para que eles sigam a ordem usada anteriormente.
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
Faremos alterações também no NegociacoesController.js, apagaremos as variáveis data e diaMesAno geradas anteriormente e vamos criar uma nova data:
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
Observe que adicionamos o DateHelper dentro do data. Agora, queremos que a data da negociação seja exibida no formato diaMesAno, separada com barras /. Em vez de usarmos o new no DateHelper, vamos adicionar a variável helper. Em data, adicionaremos a helper que dará o texto para data
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
Agora, isolamos a responsabilidade das conversões de data para classe Helper. Se executarmos o código, será criada a data correta:

negociacao na controller

A data também é impressa corretamente no formato texto. A classe Helper cumpriu bem o seu trabalho.

Em seguida, faremos um novo ajuste. Em vez de utilizarmos a variável data, moveremos a seguinte linha para a negociacao:

helper.textoParaData(this._inputData.value)
Com a alteração, o código ficará assim:
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
Não precisamos mais da variável data, usaremos diretamente o seu retorno.

Vamos testar o código no navegador, e veremos que a data 12/11/2019 aparecerá no Console.

data no console funcionando

Nós conseguimos isolar o código dentro do Helper. Mas será que ainda podemos melhorá-lo ainda mais? Sempre que falo isso, vocês sabem que é possível. Veremos como, mais adiante.

<h2>Métodos estáticos</h2>

Precisamos usar uma instância para invocar os métodos, quando queremos usar o DateHelper. Mas será que este possui alguma propriedade? Não. Nós configuramos um construtor diferente do padrão para o DateHelper? Não. Vale ressaltar que se não definimos um constructor, por padrão, é como se existisse vazio.
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
Como não definimos o constructor, não colocaremos propriedades na classe. Outra opção seria adicionar a variável helper2:
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
Ou seja, adicionaríamos uma instância em todos os lugares que precisasse do helper. Isto tem um impacto no uso da memória, apesar de insignificante no nosso caso. Uma melhor decisão é acessar diretamente o método da classe.
```html
adiciona(event) {

    event.preventDefault();

    let helper = new DateHelper();
    let helper2 = new DateHelper();

//...
```
Nós substituímos o Date por DateHelper.
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
Nós não queremos que o método seja uma instância do DateHelper, queremos poder invocá-lo diretamente da definição da classe. Para isto, no arquivo DateHelper.js, adicionaremos o static aos métodos:
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
Agora, os métodos serão invocamos diretamente da classe e o NegociacaoController ficou um pouco mais enxuto. Vamos testar submeter os dados no formulário:

!Negociacao no console

Vimos uma novidade em termos de orientação para objeto: a classe DateHelper tem métodos estáticos, o que torna desnecessário a criação de uma instância.

Em seguida, vamos definir um constructor(), depois, adicionaremos a função throw new Error(). Várias funções do JavaScript não foram migradas para classe e são construtoras.
```html
class DateHelper {

    constructor() {

        throw new Error('DateHelper não pode ser instanciada');

//...
```
No Console, digitaremos :

x = new DateHelper ()
Veremos o seguinte retorno.

mensagem de erro

Ao ver esta mensagem, o programador saberá que trabalhamos com métodos estáticos. Se clicarmos no erro, veremos qual é a classe e onde está o problema. Faremos um pequeno ajuste na mensagem que aparecerá, deixando-a mais genérica:
```html
class DateHelper {

    constructor() {

        throw new Error('Esta classe não pode ser instanciada');
    }
//...
```
esta classe não pode ser instanciada

Mais adiante, vamos melhorar ainda mais a classe.

<h2>Template Strings</h2>

Vamos voltar ao arquivo DateHelper.js e analisar o método dataParaTexto. Neste, faremos a concatenação de strings:
```html
class DateHelper {

    dataParaTexto(data) {

        return data.getDate()
            + '/' + (data.getMonth() + 1)
            + '/' + data.getFullYear();
      }
...
```
Adicionamos os parênteses para trabalharmos corretamente com o elemento mês. Nós temos a opção de utilizar um recurso das versões posteriores ao ES2015: template string. Vamos ver como ela funciona.

Primeiramente, digitaremos no Console:

let nome = 'Flávio'
undefined
let idade = 18
undefined
console.log('A idade de' + nome + ' é ' + idade + '.')
A idade de Flávio é 18.
undefined
Para usarmos o template string, adicionaremos a seguinte linha:

console.log(`A idade de nome é idade.`)
Observe que adicionamos o ` (backtick), mas se executarmos o código desta forma, será exibida a frase: A idade de nome é idade.. Ele não entendeu que o nome deve ser substituído pelo valor da variável. Mas se colocarmos nome dentro de uma expressão, conseguiremos o resultado esperado.

console.log(`A idade de ${nome} é ${idade}.`);
A idade de Flávio é 18.
Com o uso de ${} dentro da string, ele fará o mecanismo de interpolação. A expressão irá interpolar o conteúdo das variáveis nome e idade na string. Se entendemos corretamente esta estrutura, ela é menos sujeita a erro do que a anterior que continha várias concatenações. Se transpormos isto no DateHelper, podemos melhorar o código:

  return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
Observe que somamos o mês com 1. O trecho do código ficou assim:
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
Desta vez, não foi necessário adicionar parênteses, porque cada expressão será avaliada individualmente para fazer a interpolação com a string. Outra vantagem do template string é que podemos apagar os sinais + entre as expressões e apenas, separar cada uma em linhas diferentes:
```html
stactic dataParaTexto(data) {

    return `${data.getData()}
        /${data.getMonth()+1}
        /${data.getFullYear()}`;
}
```
Mas manteremos o código como estava, apenas em uma linha. Feito isso, vamos testar o código no navegador.

negociacao no console corretamente

A data aparecerá corretamente. Este foi o nosso primeiro contato com o template string, veremos que este é um recurso poderoso do JavaScript. Você verá o que faremos com ele. Por enquanto, já não precisamos ficar concatenando um monte de coisa, porque ele faz a interpolação automaticamente.

Outro ação que realizaremos: pediremos para o DateHelper converter o texto com /. No console, digitaremos:

DateHelper.textoParaData(`11/12/2017`)
Ele retornará que a data é inválida, porque o texto para data deve receber o ano-mês-dia. Nós já vamos validar na variável textoParaData se passamos uma string no padrão estabelecido, exibindo uma mensagem caso o padrão não seja exibido. Faremos algo denominado fail-fast, assim que passar algo errado pelo método, falharemos rápido.

Vamos adicionar um expressão regular, que será sinalizada por barras (//):
```html
static textoParaData(texto) {

    /\d{4}-\d{2}-\d{2}/.test(texto)
    return new Date(...texto.split('-').map((item, indice) => item - indice % 2));
}
```
Os valores 4, 2 e 2 sinalizam que os números terão tais quantidade de dígitos, respectivamente. Com test, pedimos que a expressão teste se o texto segue o padrão.

Você pode se aprofundar no assunto com o curso de Expressão Regular da Alura.

Queremos lançar um erro caso o texto não siga o padrão, por isso, adicionaremos um if. Caso siga, o retorno será verdadeiro. Em seguida, adicionaremos othrow new Error>
```html
if(!/\d{4}-\d{2}-\d{2}/.test(texto))
    throw new Error('Deve estar no formato aaaa-mm-dd');
```
A linha com o throw new só será executada se o if for falso, por isso, usamos o sinal de !.. Se quisemos colocar mais uma instrução abaixo, teremos que lembrar de colocá-las em um bloco usando {} e assim, evitar problemas. Será que funcionará? Vamos fazer um teste no Console:

DateHelper.textoParaData('2017-11-12')
Sun Nov 12 2017 00:00:00 GMT-0200 (BRST)
A data exibida está correta. Depois, forçaremos o erro no Console para ver o que acontece.

DateHelper.textoParaData('2017/11/12')
Uncaught Error: Deve estar no formato aaaa-mm-dd(..)
Ele nos retornará uma mensagem de erro. O mesmo ocorrerá se digitarmos no campo ano, por exemplo, um número com a quantidade de dígitos maior ou menor que 4. Vemos que a expressão regular é usada justamente para encontrar padrões, podendo ser usadas no nosso código JavaScript. É a oportunidade de utilizarmos diferentes conhecimentos que vimos nos cursos da Alura.

<h2>Criando nosso ListModel</h2>
A negociação está pronta! Agora temos que adicionar as demais negociações cadastradas na lista - lembrando que uma vez adicionadas, estas não serão mais removidas e tão pouco poderemos alterá-las.

Se optarmos por trabalhar com array de negociacoes não temos esse tipo de controle e podemos fazer várias operações sobre o array. A solução é criar um modelo (model) que vai encapsular a regra de uma lista de negociações. Dentro da pasta models, criaremos o arquivo ListaNegociacoes.js. A nova classe criada, terá como atributos uma lista de negociações que começará com 0:
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
Observe que usamos o prefixo _ para indicar que a lista não deve ser alterada. Se ninguém pode acessar as propriedade de negociação dentro da lista, adicionamos o método adiciona que receberá uma negociacao. Precisamos de uma método que nos permita ler a lista de negociações para então, podermos exibi-la.

Em seguida, criaremos o getter de negociacoes. Ao instanciarmos uma lista de negociações, ela estará vazia. Por meio do método adiciona(), podemos adicionar negociações e com o método get poderemos listá-las.
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
Temos um atributo da Controller. Assim que cadastramos uma nova negociação é preciso também construir uma nova Negociacao com os dados do formulário. Para isto, adicionaremos um novo this ao método adiciona().
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
Para testar se funciona usamos o console.log() para exibir a lista de negociações. No navegador vamos preencher o formulário adicionando 12/11/2016 no campo Data, 1 em Quantidade e 100 no Valor. Veremos que os dados serão exibidos corretamente.

negociacao no console

Queremos adicionar os dados de uma nova negociação, mas o formulário ainda têm nos campos, as informações preenchidas anteriormente. Vamos encontrar um forma de limpar o formulário para que a ação não seja realizada pelos usuários. Podemos adicionar também o foco no campo data. Faremos tudo isso, adicionando abaixo do método adiciona(), o _limpaFormulario, que só poderá ser chamado pela própria classe NegociacaoController.
```html
_limpaFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0

        this._inputData.focus();

    }
```
Assim que acabarmos de fazer a negociação, chamaremos o this._limpaFormulario():
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
Não podemos nos esquecer de importar o script em index.html. No lugar de importá-lo como último script, vamos agrupá-lo com a importação de Negociacao.js, sendo assim, tudo o que for model será importado um após o outro. Só estamos imprimindo por enquanto, porque ainda não estamos exibindo a negociação na tela. Vamos testar novamente e preencher os dados do formulário.

Após preenchermos uma primeira vez todos os campos e enviarmos os dados, o formulário ficará vazio. Mas o dados da negociação foram salvos. O mesmo ocorrerá quando preenchermos pela segunda vez os dados do formulário.

exibições do array

Temos duas negociações dentro do array, cada uma com a sua devida configuração. Já estamos conseguindo adicionar elementos à lista. Mas podemos melhorar ainda o código. Nós criamos a negociações dentro do método adiciona(). Logo abaixo, criaremos outro método auxiliar que se chama _criaNegociacao. Neste, aproveitaremos o return do adiciona(). Agora o novo método será responsável por criar Negociacao:
```html
_criaNegociacao() {

  return new Negociacao(
        DateHelper.textoParaData(this._inputData.value),
        this._inputQuantidade.value,
        this._inputValor.value
    );
//...
```
Removeremos a variável negociacao do adiciona() e em vez de passarmos negociacao no this., passaremos o this._criaNegociacao:
```html
adiciona(event) {

    event.preventDefault();

    this._listaNegociacoes.adiciona(this._criaNegociacao());
    this._limpaFormulario();

    console.log(this._listaNegociacoes.negociacoes);
}
```
Até aqui, os três métodos estão assim:
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
Testaremos o formulário para conferir se não quebramos nada.

4.5_negociacao funciona

Tudo está funcionando corretamente. Então, criamos dois métodos auxiliares da controller que não deve ser chamado por fora da classe. A convenção é que apenas a classe pode chamar propriedade e os métodos sinalizados com _.

Mas será que a classe, o modelo de negociações, é imutável? Será que podemos interagir com a lista de negociação? Será que podemos alterar sem passar pelo adiciona()? Vamos fazer um teste para descobrir.

<h2>Blindando as negociações dentro da lista</h2>
Colocamos em cheque a questão da imutabilidade da lista de negociações. A classe ListaNegociacoes será a única que poderá ter acesso a esta. A seguir, vamos incluir a seguinte linha no adiciona() do NegociacaoController, :

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
Ao definirmos que o length é igual a 0, estamos esvaziando o array. Quando imprimimos no Console, devemos ver quantas negociacoes são exibidas. Se conseguimos esvaziar o array, ou seja, se alteramos a lista, isto significa que as negociações não foram blindadas:

array vazio

Você pode perguntar "mas não colocamos em getter?". A resposta é: sim, mas negociacoes é um array. Trata-se de uma referência. Quando usamos o length, alteramos a propriedade do objeto... Da mesma forma, não temos uma única forma de adicionar uma negociação. Não usamos apenas o método adiciona(). Por exemplo, podemos usar o negociacoes.push():
```html
adiciona(event) {

    event.preventDefault();

    this._listaNegociacoes.adiciona(this._criaNegociacao());
    this._listaNegociacoes.negociacoes.push(this._criaNegociacao());
    this._limpaFormulario();
    console.log(this._listaNegociacoes.negociacoes);
}
```
O método adiciona() deveria ser o único caminho para adicionarmos uma negociação, mas se executarmos o código, veremos que conseguimos salvar duas negociações. Se preenchermos o formulário uma vez, veremos que temos duas Negociacao. Alguém conseguiu adicionar fora do método adiciona(). Resolveremos o problema com programação defensiva. Quando alguém pedir uma lista de negociações, devolveremos uma nova lista - uma cópia da que tenho dentro da ListaNegociacoes. Mesmo que adicionarmos o length = 0 ou inserir um elemento, como a lista está separada, não será possível adicionar outra negociação.

Em ListaNegociacoes.js, usaremos um truque: daremos um return com array vazio, seguido pelo método concat():
```html
get negociacoes() {

    return [].concat(this._negociacoes);
  }
```
Ao passarmos o this._negociacoes dentro do concat(), o retorno será uma nova lista, um novo array. Agora se tentarmos usar o push() do NegociacaoController, só conseguiremos fazer a alteração na cópia da lista, mas não na original. Se fizermos um teste no formulário e preenchermos os campos uma vez, só deverá ter uma negociação.

array blindado

Só é exibida uma Negociacao. O push() só funcionou na cópia da lista. Podemos fazer pequenos ajustes no método adiciona, que ficará assim:
```html
adiciona(event) {

    event.preventDefault();
    this._listaNegociacoes.adiciona(this._criaNegociacao());
    this._limpaFormulario();
}
```
Conseguimos incluir negociações dentro da lista que só pode ser alterada por intermédio do método adiciona().


<h2>Resumindo</h2>

Vamos revisar o que foi visto até aqui. Vimos que quando trabalhamos com data, precisamos transformar o formato da string para um objeto Data, com dia-mês-ano. É importante evitar a repetição do código sempre que for preciso usar a data no sistema, para isto, isolamos o trecho referente às conversões numa classe: o DateHelper. Em vez de usarmos concatenações nesta, optamos por usar uma template string que é criada com um ` (backtick, em inglês). Quando usamos a crase no início e no fim, podemos colocar expressões dentro da template string, sem precisar das concatenações. Mais adiante, nos aprofundaremos no assunto.

Como a Negociacao está pronta, começamos a preparar a listagem de negociações para a exibição. Porém, nesta listagem não podemos incluir, remover ou alterar uma Negociacao - uma das regras de negócio. Então, nós criamos uma classe do modelo que recebeu o nome ListaNegociacoes. Depois, conseguimos adicionar e obter essas negociações, por meio do método adiciona() e do getter Negociacoes. Porém, vimos que essa lista de negociações dentro do model não estava blindada. Qualquer um que chamasse o getter conseguiria apagar ou incluir a lista, por isso, lançamos mão da programação defensiva.

Caso o getter de Negociacao fosse chamado, o retorno seria um array original e independente de qualquer interferência de fora. Fizemos isto utilizando um array vazio, seguido da função concat(). Criamos também alguns métodos auxiliares "privados" na Controller, além de brincarmos um pouco com as expressões regulares para validarmos o texto passado para conversão de data.

<h2>Olhar aguçado para o paradigma da orientação a objetos</h2>
Temos o seguinte código que define uma função que sabe validar um código:

```html
let codigo = 'GWZ-JJ-12';

function validaCodigo(codigo) {

    if(/\D{3}-\D{2}-\d{2}/.test(codigo)) {
          alert('Código válido!');
      } else {
          alert('Código inválido');
      }

}

validaCodigo('GWZ-JJ-12'); // válido
validaCodigo('1X1-JJ-12'); // inválido
```
Muita coisa acontecendo? Se você não é ninja em expressão regular, vamos desmembrar o código para facilitar sua leitura:

```html
function validaCodigo(codigo) {

    // cria a expressão regular. Poderíamos ter usado 
    // a sintaxe new RegExp(/\D{3}-\D{2}-\d{2}/)
    // \D é qualquer coisa não dígito, \D{3} é qualquer coisa não dígito que forme um grupo de 3 caracteres. E \d é qualquer dígito.
    let expressao = /\D{3}-\D{2}-\d{2}/; 

    // toda expressão regular possui o método test 
    // que recebe o alvo do teste, retornando true
    // se passou, e false se falhou
    if(expressao.test(codigo)) {
          alert('Código válido!');
      } else {
          alert('Código inválido');
      }

}

validaCodigo('GWZ-JJ-12'); // válido
validaCodigo('1X1-JJ-12'); // inválido
```
Essa solução é procedural. Veja que toda vez que criarmos um código precisaremos buscar em algum lugar do nosso sistema alguém que o valide. Temos uma separação entre dado e comportamento.

Refaça o código anterior adotando o paradigma da orientação a objetos. Uma dica: tudo começa com a criação da classe Codigo. Não se preocupe, a ideia aqui é instigar algumas percepções em você sobre este paradigma.

VER OPINIÃO DO INSTRUTOR
Opinião do Instrutor

Vou criar uma classe que representa um código e encapsular a regra de que o código deve ter determinado formato. Realizarei a validação no construtor da classe. Se o código for inválido, nenhum objeto será instanciado e o programador ainda receberá uma mensagem de erro o alertando do problema. Isto é, independente do lugar que eu tenha uma instância de Codigo todo código criado será validado!
```html
class Codigo {

    constructor(texto) {

        if(!this._valida(texto)) throw new Error(`O texto ${texto} não é um código válido`);
        this._texto = texto;        
    }

    _valida(texto) {

        return /\D{3}-\D{2}-\d{2}/.test(texto);
    }

    get texto() {

        return this._texto;
    }
}

let codigo1 = new Codigo('GWZ-JJ-12'); // válido
console.log(codigo1.texto);
let codigo2 = new Codigo('1X1-JJ-12'); // inválido
console.log(codigo2.texto);
```
Onde quer que tenhamos um código, dado e comportamento caminham juntos, mesmo que esse comportamento/regra esteja no construtor. Aliás, o _valida está prefixado desta forma porque esse método só deve ser chamado pela própria classe.

<h2>O parâmetro não encaixa, e agora?</h2>

Um programador amigo do coração criou uma função genérica para imprimir todos os itens de qualquer lista no console:
```html
function exibeNoConsole(lista) {
    lista.forEach(item => console.log(item));
}
```
Excelente, mas em nossa aplicação dentro de um contexto específico temos duas listas distintas que queremos imprimir no console. Sendo assim, precisamos chamar a função duas vezes.
```html
let listaDeNomes1 = ['Flávio', 'Rogers', 'Júlia'];
exibeNoConsole(listaDeNomes1);
let listaDeNomes2 = ['Vieira', 'Fernanda', 'Gerson'];
exibeNoConsole(listaDeNomes2);
```
Para evitar de chamarmos a função duas vezes, uma vez para cada lista, podemos juntar uma lista na outra. Implemente o código que cria uma nova lista que é a junção dos elementos de listaDeNomes1 e listaDeNomes2.

VER OPINIÃO DO INSTRUTOR
Opinião do Instrutor

Em uma abordagem procedural faríamos:
```html
function exibeNoConsole(lista) {
    lista.forEach(item => console.log(item));
}
```
Excelente, mas em nossa aplicação dentro de um contexto específico temos das listas distintas que queremos imprimir no console. Sendo assim, precisamos chamar a função duas vezes.
```html
let listaDeNomes1 = ['Flávio', 'Rogers', 'Júlia'];
let listaDeNomes2 = ['Vieira', 'Fernanda', 'Gerson'];
let lista = [];

listaDeNomes1.forEach(item => lista.push(item));
listaDeNomes2.forEach(item => lista.push(item));

exibeNoConsole(lista);
```
Contudo, todo array em JavaScript possui o método concat. Alterando nosso código:
```html
let listaDeNomes1 = ['Flávio', 'Rogers', 'Júlia'];
let listaDeNomes2 = ['Vieira', 'Fernanda', 'Gerson'];
let lista = listaDeNomes1.concat(listaDeNomes2);

exibeNoConsole(lista);
```
O resultado de concat é um novo array com todos os elementos de quem realizou o concat e quem foi passado para a função.

Se quisermos, podemos enxugar ainda mais nosso código:
```html
let listaDeNomes1 = ['Flávio', 'Rogers', 'Júlia'];
let listaDeNomes2 = ['Vieira', 'Fernanda', 'Gerson'];
exibeNoConsole([].concat(listaDeNomes1, listaDeNomes2));
```
Veja que não criamos mais a variável temporária lista. Estamos passando o resultado da concatenação de um array vazio [] com outras duas listas. Aliás, a função concat aceita receber um número infinito de parâmetros, inclusive aqueles que não são um array. Vejamos um exemplo:
```html
let listaDeNomes1 = ['Flávio', 'Rogers', 'Júlia'];
let listaDeNomes2 = ['Vieira', 'Fernanda', 'Gerson'];
exibeNoConsole([].concat(listaDeNomes1, listaDeNomes2, 'Rômulo'));
```
Com isso, a lista criada terá também um item de valor Rômulo.

<h2>Template String</h2>

Qual a maneira correta de se utilizar a Template String?
```html
let nome = 'Juca';
let sobrenome = 'Monteiro';

let frase = `${nome} ${sobrenome} também sabe JavaScript`;
```

<h2>E a lista de negociações?</h2>
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

R: É possível, através da propriedade negociacoes, pegar uma referência da lista interna, que guarda as negociações. Por conta disso, alguém mal intencionado pode fazer o que quiser com ela.



<h2>Por que...</h2>

Temos a seguinte classe:
```html
class ConversorXML {

    static converte(objeto) {
        // converte um objeto em XML
    }
}
```
Agora, vamos criar uma instância desta classe e chamar o método converte:
```html
let conversor = new ConversorXML();
conversor.converte({nome: 'Guaraci', idade: 40});
```
Teste este código no console.

VER OPINIÃO DO INSTRUTOR
Opinião do Instrutor

Este código não funciona porque o método converte é estático e não será encontrado na instância de uma classe, mas diretamente na classe. Alterando o código para ser válido:

ConversorXML.converte({nome: 'Guaraci', idade: 40});
Métodos estáticos antes do ES6
Curiosidade: como criávamos métodos estáticos antes do ES6? Vejamos um exemplo, com a classe Pessoa:

Vejamos um exemplo do ES6 para declarar uma classe com métodos de instância e métodos estáticos:
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
        console.log('Método estático chamado');
    }

}
```
E antes do ES6. Como implementávamos algo semelhante a métodos estáticos? Vejamos um exemplo:
```html
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

// método de instância
Pessoa.prototype.obterNomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
};

// declarando equivalente a método estático

Pessoa.metodoStaticoQualquer = function() {

    console.log('Método estático chamado');

};
```


-------------------------------------------------------------------------------------------------
<h1>Seção 05 - Temos o modelo, mas e a view?</h1>

<h2>Classes que representam nossas Views</h2>
Temos um modelo de Negociação, outro de ListaNegociacoes, e temos uma controller que orquestra o acesso aos modelos de acordo com as ações do usuário. No entanto, ainda não conseguimos refletir o estado do modelo para a tela. A tabela ainda não exibe os dados cadastrados. Agora temos que atacar a View, do MVC, já temos o model e a controller. Para que possamos aplicar vários conceitos e conhecer novos recursos da linguagem JavaScript, minha proposta é que em cada parte da View que sincronizarmos com o modelo, não será feita no arquivo HTML. Em vez disso, criaremos a classe NegociacoesView dentro da pasta View que irá encapsular a apresentação que exibiremos para o usuário. É o arquivo NegociacoesView.js que terá as definições de como será a tabela. Começaremos com ela assim:
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
Como retiramos o trecho do código referente à tabela, no index.html, ela já não será mais exibida abaixo do formulário.

formulario sem tabela

Ao incluirmos uma negociação na lista, queremos que ela seja incluída e exibida na tabela. Para isto, em NegociacoesView.js, adicionaremos a classe NegociacaoView, e dentro dela, criaremos a função template() - que retornará uma template string. Depois, jogaremos o conteúdo da tabela dentro do return da função.
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
Se o retorno não fosse uma template string, não poderíamos "identar" o código desta forma. Se fosse uma string, não poderíamos quebrar o código em linhas desta maneira. Ele não funcionaria. Nós teríamos que concatenar todas as linhas.

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
Precisaremos importar o arquivo também no index.html:
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
Após recarregarmos a página vamos digitar a seguinte linha no Console:

let NegociacoesView = new NegociacoesView()
Teremos uma instância de NegociacoesView. Se chamamos NegociacoesView.template(), recebemos uma mensagem de erro:

string no console

No Console, será exibida a string da tabela. Então, qual será nosso próximo objetivo? O template que está no NegociacoesView.js tem que aparecer no index.html, onde estava a marcação do HTML da tabela. Para isto, sinalizaremos o local em que o template será renderizado, adicionando a tag <div> e dentro, o id.

<div id="negociacoesView"></div>
Mas o NegociacoesView precisa saber que construiremos a tabela nesta <div>. Precisamos de alguma forma associar o elemento do DOM com a NegociacoesView. Por isso, vamos gerar um constructor() que recebe um elemento, responsável por receber o template:
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
Assim que a negociação for criada, pediremos para o negociacoesView fazer um update, então, a tabela aparecerá dentro da View. Depois, adicionaremos a função update dentro de NegociacoesView. Também vamos inserir o _ ao template, sinalizando que será uma função privada.
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
O método update() que será criado, pegará o elemento do DOM e acessará a propriedade innerHTML. Ela será o retorno da função _template():
```html
update() {

      this._elemento.innerHTML = this._template();
}
```
O innerHTML será responsável por converter as strings em elementos do DOM. Isto será inserido com filho da <div>.

Após as últimas alterações, quando recarregarmos a página no navegador, a tabela já será visualizada.

tabela na pagina

O problema é que ao chamarmos a função update(), a View que estamos renderizando no HTML, deveria refletir a lista de negociações. Se tivermos cinco negociações, todas deverão ser exibidas. Veremos mais adiante como atualizar a View com os dados do modelo.

Nosso objetivo era chamar na View a função update(), quando o modelo fosse atualizado, passando como parâmetro o model - que será enviado para o template da View. Depois, este será processado e usará como base os dados do model. A string final será colocada no atributo do elemento que a View associada no DOM. Toda string colocada na propriedade innerHTML será convertida em elementos do DOM.

Desta forma, conseguimos cadastrar as negociações, sendo atualizada no modelo e este notificará a View que deverá ser renderizada.

<h2>Construindo um template dinâmico com a função map</h2>
A função update() para atualização da View está funcionando e a tabela já pode ser visualizada abaixo do formulário. Porém, os dados do modelo ainda não são levados em consideração na construção dinâmica da tabela. Primeiramente, passaremos a ListaNegociacoes como parâmetro do método update(). Ou seja, quando o modelo for alterado, a lista deverá ser atualizada da tabela.
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
A ação não será realizada apenas quando a controller for carregada, mas também quando o adiciona() for chamado. Porque atualizamos a lista, assim que acabamos de adicionar uma nova negociação, temos que solicitar para View que esta se renderize com o novo modelo. Em NegociacoesView.js, faremos com que o método update() recebe o model.
```html
update(model) {

    this._elemento.innerHTML = this._template(model);
}
```
Passamos o model como parâmetro do _template().
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
Dentro da tag <tbody>, adicionaremos tags <tr> com base em cada negociação do ListaNegociacoes. Para isto, usaremos uma expressão que conterá o map() - podemos usar, inclusive, uma arrow function.
```html
<tbody>
    ${model.negociacoes.map(n => {

      })}
</tbody>
```
Se adicionarmos um console.log(n) e executarmos o código, a negociação será impressa no Console. Com o return n, será gerada uma nova lista, com base na modificação. O código ficaria assim:
```html
<tbody>
    ${model.negociacoes.map(n => {
        console.log(n);
        return n;
      })}
</tbody>
```
Porém, se selecionarmos esta opção, teremos um problema: a expressão precisa nos devolver uma string, que seja enxertada no template. Seguiremos outro caminho: varreremos cada negociação e usaremos o return de outra template string.
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
Dentro da template string, adicionamos as tags <tr> e <td>, e usamos várias expressões para definirmos a exibição de data, quantidade, valor e volume. Quando o _template() for retornar a string, terá que processar o trecho do return primeiramente, e depois retornar a template string. Para cada negociação será criada uma lista - cada uma com as tags <tr> e os dados cadastrados. Estamos varrendo a lista e para um objeto Negociacao, estamos criando um array, mas o novo elemento será uma string com os dados. No entanto, por enquanto, o retorno será um array. Por isso, adicionaremos o join().
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
Ao utilizarmos o join(), usamos como critério de junção uma string em branco. Agora, teremos uma string com todos os dados do array concatenados. Vamos ver o que será exibido no navegador, após o preenchimento do formulário:

tabela com valores

Em seguida, adicionaremos uma nova negociação e os dados também serão exibidos na tabela.

tabela com duas negociações

Se completarmos os dados do formulário novamente, a tabela terá dados das três negociações. Observe que não manipulamos o DOM de maneira imperativa, em vez disso, fizemos de maneira declarativa. Nós declaramos o template, ele recebeu um modelo e com base nos dados do modelo, usamos a template string.

Conseguimos de maneira elegante, utilizando apenas recursos do JavaScript, fazer um template render. Porém, faltam algumas ações para que nossa tabela fique completa.

<h2>Enxugando o código</h2>

Faremos um pequeno ajuste que passou despercebido no vídeo anterior, antes de completarmos o código. Deixamos incompleto o fechamento da tag <tr>. Corrigiremos a falha dentro da <tbody>:
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
Felizmente, o navegador entendeu que tratava-se de um tag <tr>. Outro ajuste será na arrow function. Quando trabalhamos com um único retorno, não precisamos usar as chaves ({}). Também podemos remover o return. Veja como nosso código ficará mais enxuto:
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
Facilitamos a leitura do código. Fizemos a declaração do template.

A seguir, trabalharemos com a tag <tfoot>, com a qual criaremos o rodapé.

<h2>Totalizando o volume em nosso Template</h2>
Vamos trabalhar com o rodapé... Atualmente, o método _template() está assim:
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
Observe que utilizamos a colspan com o valor 3, assim teremos três colunas. Usamos também uma <td> que tem o valor igual a 0. Mas se executarmos o código agora, ainda não será totalizado o volume.

volume 0

Para totalizar, poderíamos usar o forEach() e somar cada volume da negociação com uma variável.
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
Porém, dentro da expressão, precisamos retornar um valor. Só que quando usamos uma instrução, não podemos adicionar uma sequência de instruções. Seremos espertos e adicionaremos uma função dentro do $. Utilizaremos uma Immediately-invoked function expression (IIFE) ou a função imediata. Trata-se de um recurso usado na criação de escopo em JavaScript, que nos ajudará a colocar um bloco na expressão, sendo executado imediatamente. No caso, o $ receberá o total.

tabela com o volume total

Se testarmos no navegador, já será exibido o total do volume. Mas depois dessa "gambiarra", o código não ficou bonito. É possível fazer a ação de totalização de outra maneira funcional. Veremos mais adiante.

<h2>Totalizando o volume em nosso Template com a função reduce</h2>
Podemos fazer o código de maneira funcional, sem precisar usar a "gambiarra" feita na tag <tfoot> para exibirmos o total do volume:
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
Vamos mostrar como conseguir o mesmo resultado usando o paradigma funcional e como o JavaScript array é bastante poderoso.
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
Observe que utilizamos a função reduce(), que irá processar o array e no fim, disponibiliza um único resultado. Primeiramente, não utilizaremos arrow functions. Optamos por passar uma função com as variáveis total e n(elementos da lista) - ambas receberam esses nomes, mas poderíamos ter definido outros. O return que criamos ainda não será suficiente. Qual será o valor inicial de total? Ele deve iniciar de 0 para conseguirmos somá-lo com volume. Por isso, o segundo parâmetro da função reduce() será a inicialização da variável total.

Basicamente, nós pedimos que negociacoes reduzisse. Em seguida, executamos a função para cada item da lista. A variável total começou com o valor igual a 0 e foi somado com o volume. Quando passamos para o segundo item da lista, este pega o valor anterior e o soma com o volume atual. No fim, a função retorna um valor único, que será o resultado de total.

Ao executarmos o código, veremos que ele funciona perfeitamente:

tabela com total 

Temos o valor correto do total. Agora vamos melhorar o código, utilizando a arrow function. No caso, como estamos trabalhando com dois parâmetros, não podemos remover os parênteses, mas podemos eliminar o function. Depois de adicionarmos a flecha, podemos remover as chaves {}. Poderemos também remover o return(). Com as alterações, a tag <tfoot> ficará assim:
```html
<tfoot>
    <td colspan="3"></td>
    <td>
        ${ model.negociacoes.reduce((total, n) => total + n.volume, 0.0)}
    </td>
<tfoot>
```
A função reduce() executará uma arrow function, que recebe como parâmetro as variáveis total e n. Cada vez que varrermos os elementos do array, o total será o que tínhamos (inicializando pelo 0) somado ao volume. No fim, o reduce() retornará o resultado de total. É uma maneira funcional de lidarmos com problema para totalizar o volume. Como a função retornará um único valor, não foi necessário utilizar a IIFE para incluirmos várias instruções dentro do forEach().

Vamos executar o código. Após preenchermos duas vezes o formulário, teremos o valor correto do total de volume.

total volume final

Terminamos o template da tabela. A cada negociação incluída, a informação será exibida para o usuário com base nas informações da lista.

<h2>Resumindo</h2>
Vamos revisar o que vimos até aqui: implementamos um mecanismo de View dentro da aplicação. Ou seja, nós temos um tabela na qual exibimos os dados da negociação. Mas em vez das marcações estarem no arquivo HTML, estas foram colocadas em uma classe nova chamada NegociacaoView.js.

Como o código da tabela ficou no JavaScript, a View precisou encontrar alguma forma de se renderizar e aparecer no HTML. Por isso, nós criamos uma <div> que leva o id e indicou o ponto no qual o arquivo da tabela será inserido. Para realizar tal ação, a View recebeu um modelo - com qual “tampamos” as lacunas do template.

Nós ainda criamos o método _template(), utilizando a template string. Vimos que podemos gerar expressões mais "rebuscadas" para montar tags <tr> dinamicamente. Usamos novamente a função map() para transformar o conteúdo de um array. Além disso, utilizamos a função join() para poder concatenar todos os itens do array que equivalem às tags <tr> da tabela.

<h2>Dominando o reduce</h2>
Você já deve ter ouvido falar em somatórios. O somatório de uma lista de números é a soma de todos os números daquela lista, como por exemplo:

let numeros = [1, 2, 3, 4]; // Somatório = 1 + 2 + 3 + 4 = 10
Um exemplo de função que nos retorne o somatório de um array de números poderia ser assim:
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
Existe um outro conceito matemático conhecido como produtório, que é análogo ao somatório, só que ao invés de somarmos os números , nós os multiplicamos. Por exemplo:

var numeros = [1, 2, 3, 4]; // Produtório = 1 * 2 * 3 * 4 = 24
Juntando este seu novo conhecimento matemático com o conhecimento de JavaScript adquirido neste capítulo, qual das funções abaixo nos retorna o produtório de um array de números corretamente, usando a função reduce?

R: 
```html
let numeros = [1, 2, 3, 4];
let resultado = numeros.reduce(function(total, num) {
    return total * num;
}, 1);
```

A função reduce recebe dois parâmetros: uma função e um valor inicial. Na função interna ao reduce, o primeiro parâmetro é o valor da última iteração, que neste caso é o total. O segundo parâmetro é o valor da iteração atual, neste caso o novo número que queremos multiplicar.

O reduce executa sua função interna a cada iteração, então no nosso caso ele multiplica o valor anterior (total) pelo valor da iteração atual (num). Como o produtório é a multiplicação de uma sequência de números, no nosso caso o que está acontecendo é o seguinte:

Supondo o array:

var numeros = [1, 2, 3, 4];
O total se inicia com o valor 1, definido pelo segundo parâmetro da função reduce.

É feita a primeira iteração, pegando o primeiro valor do array (1) :

return total * num; // Leia-se: return 1 * 1 e coloque este valor em total.
Na segunda iteração, com o segundo valor do array (2):

return total * num; // Leia-se return 1 * 2 e coloque este valor em total, que agora vale 2;
Na terceira iteração, com o segundo valor do array (3):

return total * num; // Leia-se return 2 * 3 e coloque este valor em total, que agora vale 6;
Na segunda iteração, com o segundo valor do array (4):

return total * num; // Leia-se return 6 * 4 e coloque este valor em total, que agora vale 24;
E no final ele devolve para nós o valor 24 , que é o valor esperado do produtório!


<h2>Um pouco mais sobre o reduce</h2>

Vejamos um exemplo com reduce que soma todos os números de um array:
```html
let numeros = [1,2,3,4];

let resultado = numeros.reduce((anterior, atual) => anterior + atual);
alert(resultado);
```
O resultado é 10. Contudo, muitas vezes queremos começar a operação considerando um valor de inicialização. Por exemplo, queremos realizar a mesma operação, só que dessa vez, queremos começar com o valor 5.
```html
let resultado2 = numeros.reduce((anterior, atual) => anterior + atual, 5);
alert(resultado2);
```
Desta vez, o resultado final é 15!

Sendo assim, nada nos impede de fazer o primeiro reduce passando 0:
```html
let numeros = [1,2,3,4];

let resultado = numeros.reduce((anterior, atual) => anterior + atual, 0);
alert(resultado);
```
O resultado será 10 também. Mas será que vale a pena passar o segundo parâmetro da função reduce já que neste caso ele não faz diferença? Tudo vai depender do seu gosto.


<h2>Dominando o map</h2>
Qual das funções abaixo aproveita-se dos recursos da função map para obter arrays com os valores dobrados, com valores pela metade e com raiz quadrada de todos os números abaixo, mantendo a ordem apresentada:

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
 
Cada map recebe uma função como parâmetro, e em cada uma dessas funções, utilizamos um parâmetro que é o elemento de cada índice da array que deverá ser retornado em cada iteração.


<h2>View declarada no JS ou no HTML?</h2>

Aprendemos a declarar nossas views no mundo JavaScript. Um framework que segue este caminho é o React do Facebook. Contudo, há uma outra abordagem que é declarar as views em arquivos HTML, inclusive o famoso Angularjs faz dessa maneira.

Neste treinamento optei por declarar a view no mundo JS, pois essa solução me permitiu implementar o modelo MVC sem grandes voltas e ainda manter o foco em boas práticas e ES6, tornando o treinamento mais acessível para diversos perfis de "ninjas" em JavaScript.

Um fato curioso é que no React declaramos nossos componentes de view usando o JSX que permite escrever HTML mais facilmente no mundo JS. Apesar de não termos esses recursos, as templates strings do ES6 nos ajudam bastante com nossas declarações e tudo sem precisar de um framework ou biblioteca!

<h1>Generalizando a solução da nossa View</h1>

<h2>Classe Mensagem</h2>
Nossa aplicação já está funcionando, mas vamos melhorar a experiência do usuário. Quando adicionamos uma negociação, os dados são inseridos na tabela. Nosso objetivo será exibir uma mensagem para o usuário, na qual informaremos que a negociação foi incluída com sucesso. Para fazer isto, vamos criar um novo modelo que chamaremos de Mensagem.js. Nele, adicionaremos um texto e sempre que quisermos exibir uma mensagem, será instanciado um objeto da minha classe Mensagem. O texto que será exibido, ficará guardado nesta classe.
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
Nós usamos a convenção do prefixo _ para manter o _texto privado. Usamos um get que terá um return this._texto.

Nós queremos também ser capazes de alterar o texto, faremos isto, adicionando o set texto(). Assim como temos a opção de usar o get, usaremos o set:
```html
set texto(texto) {

    this._texto = texto;
}
```
Mas seria possível aceitar um intervenção como a variável let, como nas linhas abaixo:
```html
let mensagem = new Mensagem();
mensagem.texto = 'x';
```
O valor dentro do mensagem.texto será enviado por debaixo dos panos para o método texto() e depois, será atribuído a mensagem. Porém, quando criamos uma mensagem nova, o valor deve estar com uma string em branco. Mas ainda é possível alterar o texto da mensagem em branco:

let mensagem = new Mensagem('xxxx');
mensagem.texto = 'nova mensagem';
Temos ainda a opção de já passar a mensagem no constructor():
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
Agora podemos usar a variável let e passaremos o texto dentro da Mensagem().

let mensagem = new Mensagem('Flávio Almeida');
console.log(mensagem.texto)
A mensagem Flávio Almeida poderá ser visualizada no Console, quando executarmos o código. Mas e nos casos em que não sabemos qual será a mensagem do objeto Mensagem()? Qual será o valor padrão do texto? Teremos que passar como parâmetro uma string vazia.

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
Para resolver a questão, o ES6 permite atribuir um valor padrão para parâmetros do constructor() ou de funções do JS. Se não passarmos no construtor da Mensagem() um texto, ele adotará como padrão uma string em branco.
```html
class Mensagem {

    constructor(texto='') {

        this._texto = texto;
    }
//...
```
Mas se abaixo, adicionamos um texto e Mensagem, ele entende que não poderá usar o valor padrão. Vamos testar o código.

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
Ao imprimirmos o mensagem.texto, o retorno é uma string em branco. Se colocarmos como valor padrão do constructor() o texto Olá, o código fica assim:
```html
class Mensagem {

    Constructor(texto='Olá') {

        this._texto = texto;
    }
//...
```
Ao recarregarmos o Console, o retorno será:

let mensagem = new Mensagem();
undefined
mensagem.texto
"Olá"
Ele imprimiu o valor padrão. Mas se adotarmos como padrão outro texto,Tchau!, por exemplo, o retorno será diferente.

let mensagem = new Mensagem();
undefined
mensagem.texto
"Tchau!"
Este é um recurso interessante, porque podemos definir um parâmetro default, tanto no construtor quanro no método.

<h2>Criando a classe MensagemView</h2>
Criamos o modelo de negociação, agora, criaremos o this._mensagem no NegociacaoController.js:
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
Sabemos que quando for feita uma adição, queremos dizer que o this._mensagem.texto:
```html
adiciona(event) {

    event.preventDefault();
    this._listaNegociacoes.adiciona(this._criaNegociacao());
    this._mensagem.texto = 'Negociacao adicionada com sucesso';
    this._negociacoesView.update(this._listaNegociacoes);  
    this._limpaFormulario();
}
```
Se preenchermos o formulário, os dados serão inseridos na tabela, mas a mensagem não, porque ainda não foi criada a View da mesma. Faremos isto a seguir.

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
Usaremos o alert alert-info do bootstrap, seguido pela expressão ${model.texto}.

Logo abaixo, adicionaremos o método update() que receberá o model.
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
No NegociacoesController.js, colocaremos a View assim que a página for recarregada:
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

    <h1 class="text-center">Negociações</h1>

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
Usamos o update e dentro passamos o this._mensagem. Vamos incluir o this._negociacoesView também no método adiciona():
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
Vamos ver se algo já é exibido no navegador.

barra azul

Agora aparece um barra com um fundo azul, isto é uma mensagem do bootstrap vazia. A mensagem não deveria estar sendo exibida, considerando que a nossa string está em branco. Vamos testar cadastrar uma nova negociação no formulário.

cadastro com sucesso

Conseguimos adicionar os dados a tabela e a mensagem de sucesso apareceu corretamente. Veja que conseguimos usar o mesmo mecanismo de criação da View para lidar com as mensagens do sistema. As ações de importar e apagar negociações podem ser associadas com a atualização de mensagem. Quando chamarmos o updatena View, passando o model, este atualizará a tela. Mas queremos retirar o parágrafo com o fundo azul que aparece acima do formulário. Resolveremos isso em MensagemView.js.

Na classe _template, faremos um if ternário:
```html
_template(model) {

    return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : '<p></p>';
}
```
Nós vamos retornar um parágrafo sem a classe. Em JavaScript, uma string sem conteúdo é avaliada como falso. Podemos testar se o modelo.texto é uma string em branco, 0 ou null, nesses casos, a resposta é falso. Mas se tiver texto, vai dar verdadeiro e o retorno será o template. Caso contrário, o retorno será um parágrafo sem a classe alert-info e, consequentemente, sem a tarja azul. Se inspecionamos o elemento do DOM no Console, vemos que o paragrafo está vazio:
```html
<div id="mensagemView">
    <p></p>
</div>
```
Não aparece a classe do bootstrap. Mas se cadastramos a negociação no formulário, a mensagem aparecerá corretamente. Conseguimos resolver a parte das mensagens para o usuário. Mas será que conseguimos melhorar ainda mais o código?


<h2>Herança e reutilização de código</h2>
Temos duas Views criadas: MensagemView e NegociacoesView. Se observarmos, ambas posuem um construtor que recebe um elemento, além de possuir a propriedade elemento. As duas têm os métodos _template e update, que são bem semelhantes. A diferença está na forma em que o método _template foi implementado e o seu retorno. E se aumentarmos o número de Views, teremos que ter mais updates. Atualmente, o método update do NegociacoesView está assim:
```html
update(model) {

    this._elemento.innerHTML = this._template(model);
}
```
Se nos enganamos e escrevermos innerHtml, com as letras de HTMLem caixa baixa, teremos problemas na execução do código. Para evitarmos a repetição, vamos colocar o que as classes têm em comum, apenas em uma, a nova classe receberá o nome de View.
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
A classe View recebeu tudo o que as Views tinham em comum: um constructor(elemento) - que guardará internamente um elemento - e update(). Lembrando que o método _template possui algumas diferenças nas classe. Depois, removeremos os métodos constructor() e update().

Em seguida, para evitarmos duplicar o código, faremos com que MensagemView herde todas as características de View. Como em JavaScript trabalhamos com o conceito da orientação a objetos que é herança? Podemos dizer que a MensagemView é uma View:
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
Observe que ao carregarmos os scripts, devemos posicionar a View antes das outras Views dependentes. Se a View for carregada por última, no navegador veremos uma mensagem de erro que nos dirá: View is not defined, porque na definição da classe estamos usando herança nas duas Views.

Se digitarmos a seguinte linha no Console...

let v = new NegociacoesView()
Tudo funcionará corretamente e o arquivo NegociacoesView herdará de View o método update(). Apesar de termos removido o método, ele está sendo invocado. Mas quando carregamos NegociacoesView e MensagemView, precisamos ter um constructor() que recebe o elemento. O construtor chamará o super() - fazendo referência ao super class, a classe pai. Com as alterações, o NegociacoesView ficará assim:
```html
class NegociacoesView extends View {

    constructor(elemento) {
        super(elemento);
    }
//...
```
E o MensagemView ficará da seguinte maneira:
```html
class MensagemView extends View {

    constructor(elemento) {
        super(elemento);
    }
//...
```
Se cadastrarmos uma nova negociação, veremos que está tudo funcionando.

formulario funcionando corretamente

Mas, só encontraremos o método update na View. Para que as duas Views pudessem herdar da classe View, seria necessário adicionarmos no NegociacaoView o MensagemView e o extends.

Evitamos a duplicação do código, mas será que existe alguma outra falha? Veremos mais adiante.

<h2>Construtor vs super</h2>

Se definimos que "para a criação de uma View, esta deverá herdar de View", pode ocorrer que o desenvolvedor esqueça de implementar o método _template. O arquivo MensagemView ficaria assim:
```html
class MensagemView extends View {

    constructor(elemento) {
        super(elemento);
    }
}
```
Se executarmos o código no navegador, teremos um erro.

erro no Console

O erro ocorrerá porque o método update depende do _template() para funcionar. E na classe View, não podemos definir a implementação do método, considerando que este sofre variações nas classes filhas, logo, estas serão as responsáveis por definir o _template(). Por isso, vamos encontrar uma forma de lembrar ao desenvolvedor que ele deve usar o método _template().

No arquivo View.js, vamos adicionar o _template(), que lançará um new Error.
```html
_template() {
    throw new Error('O método template deve ser implementado');
}
```
A mensagem informará que o método template deve ser implementado. Mas se NegociacoesView possui um método definido com o nome _template() - também utilizado na classe pai - a classe filha irá sobrescrevê-lo. Isto significa que o método válido é o _template() de NegociacoesView. O mesmo ocorrerá com MensagemView. Desta forma, a mensagem de erro só será adicionada caso o desenvolvedor se esqueça de implementar o método nas Views.

mensagem template deve ser implementado

Como não adicionamos o _template() no MensagemView.js, fomos avisados no Console.

Na linguagem JavaScript, não existem classes abstratas e, por isso, não podemos obrigar as classes filhas a implementarem o _template(). Explicado isto, vamos adicionar novamente o método _template() no MensagemView.js:
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
A mensagem de erro não será exibida quando recarregarmos a página no navegador. Para finalizar, faremos um pequeno ajuste. Como foi convencionado, ao usarmos o prefixo _ no nome do método _template(), mesmo as classes filhas não poderiam chamar o método. Apenas a classe pai deveria ter este acesso. Por isso, vamos remover o _ de todas as referências ao método _template.

O trecho referente em View.js ficará assim:
```html
template(model) {

    return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : '<p></p>';
}

update(model) {
    this._elemento.innerHTML = this.template(model);
}
```
Em NegociacoesView, o método template() ficará assim:
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
E por último, em MensagemView:
```html
template(model) {

    return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : '<p></p>';
}
```
Se tivéssemos mantido o prefixo _, o código funcionaria corretamente. Mas como se trata de uma indicação de private, por convenção, as classes filhas não poderiam sobescrever o método. Com isto, organizamos o nosso código baseados em herança.

<h2>Resumindo</h2>
Vimos que o código das Views NegociacoesView e MensagemView tinham trechos em comum. Nós isolamos tais partes dentro de uma classe, juntamente com o construtor que recebeu o elemento e o método update(). Depois, fizemos com que as duas Views herdassem da classe View, assim, não repetimos o código em comum. Mas coube às classes filhas implementarem o método template().

Criamos ainda uma "armadilha" para evitar a possibilidade de que o desenvolvedor se esquecesse de incluir o método, incluindo uma mensagem de erro no Console. Lembrando que um método da classe filha sobrescreve métodos da classe pai.

Depois, adicionamos o constructor() nas classes filhas com o super, que passava o parâmetro para a classe pai. Fizemos também um pequeno ajuste, retirando o prefixo _ do método template(), que anteriormente era privado. A alteração foi necessária porque os métodos template() de NegociacoesView eMensagemView precisavam sobrescrever o método em View.

Aguardamos você na segunda parte do curso.

