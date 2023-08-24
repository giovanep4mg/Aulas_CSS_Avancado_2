// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

import '../styles.css';

// eslint-disable-next-line no-unused-vars
const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        behavior: 'smooth',
        top: section.offsetTop,
      });
    }
  };

const Aula2 = () => {
  const htmlContent = `
  <!--pagina 2-->

  <!DOCTYPE html>
  <html lang="pt-br">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="description" 
      content="Esta página é sobre o pré-processadores LESS.">
      <title>LESS</title>

  </head>
  <body>
      <main class="toda-pagina">
          <!--Less-->
          <section id="O-que-é-LESS?">
            <section class="description">
            <header>
                <h1 class="titulo">Less</h1>
            </header>
                <h2>
                    * É um pré-processador CSS, vai ler um arquivo e transformar em CSS.<br>
                    * Amplia a capacidade do CSS e copila mais rápido que os outros processadores.<br>
                    * É baseado em JavaScript (não precisa conhecer a linguagem para usar o Less).<br>
                    <br>
                    * Reduz redudância de códigos.<br>
                    * Usado por várias empresas e frameworks, como o booTstrap.<br>
                    * Permiti o uso de variáveis, funções, cálculos ehierarquia.<br>
                    <br>
                    Site:<br>
                    <b>Lesscss.org</b> <br>
                    É recomendável acessar a documentação dele , que está no site, para ter mais detalhes.<br>
                    Link do site:<br>
                    <a href="https://lesscss.org/">Lesscss.org</a>
                    <br>
                    <br>
                    * Instalação no Node.js: (Não é obrigatório pois funciona sem instalação) <br>
                    <b>npm install less</b> <br>
                    <br>
                    <br>
                </h2>
            </section>
        </section>
          <!--Less na prática-->
          <section class="description" id="Less-na-pratica">
              <header>
                  <h1 class="titulo">Less na prática</h1>
              </header>
              <h2>
                  <b>Não é necessário sua instalação, mais para evitar erros instale, usando o node ou outro</b><br>
                  <br>
                  *Arquivo HTML<br>
                  <b> < link rel="stylesheet/less" type="text/css" href="style.css" / > </b> <br>
                  <br>
                  A parte importante do link é o :<br>
                  stylesheet/<b>less</b>, onde faz a definição do processamento. <br>
                  <br>
                  <b>href="style.csss"</b> pode ser também <b>href="style.less"</b> <br>
                  <br>
              </h2>
          </section>
          <!--Less => Variáveis-->
          <section class="description" id="Less-variáveis">
              <header>
                  <h1 class="titulo">Less => Variáveis</h1>
              </header>
              <h2>
                  Usa o " @ ", exemplo <b>@cor</b> .<br>
                  Ao invés de usar um determinado valor, você usa a variável.<br>
                  Facilita a mudança de propriedade do CSS de forma mais dinâmica e rápida.<br>
                  Veja na imagem:<br>
                  <div class="imagem">
                      <img src="/assets/imagens/variaveis-less.png" 
                      alt="print da tela do VScode mostrando o código das variáveis"
                      >
                  </div>
                  <br>
              </h2>
          </section>
          <!--Less => Hierarquia-->
          <section class="description" id="Less-Hierarquia">
              <header>
                  <h1 class="titulo">Less => Hierarquia</h1>
              </header>
              <h2>
                  Pode ser usado de forma mais intuitiva, colocando um dentro do outro.<br>
                  Exemplo:<br>
                  <b>
                  ____P { <br>
                  ________color: @cor-rosa; <br>
                  ________b{ <br>
                  ___________color: @cor-vermelho; <br>
                  _________} <br>
                  _____} <br>
                  </b>
                  <br>
                  Na prática, veja como fica na imagem: <br>
                  
                  <div class="imagem">
                      <img src="/assets/imagens/hierarquia-variavel-less.png" alt="print da tela do VScode mostrando a hierarquia das variáveis">
                  </div>
                  <br>
              </h2>
          </section>
          <!--Less => Função-->
          <section class="description" id="Less-Função">
              <header>
                  <h1 class="titulo">Less => Função</h1>
              </header>
              <h2>
                  Permite a manipulação de valores aparti de uma lista predefinida pelo <b>Less</b>.<br>
                  Permiti transformar um valor noutro, manipular condicionais, fazer cálculos, etc..<br>
                  <br>
                  Para saber mais e ver as funções e exemplos, veja a documentação que está no site:<br>
                  <a href="https://lesscss.org/functions/">Lesscss.Funções</a>
                  <br>
              </h2>
          </section>
          <!--Less => Função na prática-->
          <section class="description" id="Less-Função-na-prática">
              <header>
                  <h1 class="titulo">Less => Função na prática</h1>
              </header>
              <h2>
                  <b>Definindo o Width (largura)</b> <br>
                  <br>
                  Adicione uma variável no Less, que seja intuitiva, que você saiba do que se trata.<br>
                  <b>@largura: 0.75</b> * use o ponto para números decimais * <br>
                  <br>
                  E coloque a variável onde você quer que seja dessa largura.<br>
                  Mas tem que adicionar a "percentagem" por que o width espera isso.<br>
                  <b> width: percentage(@largura); </b> *percentage -> converte para porcentagem o valor da variável.<br>
                  <br>
                  Veja o print da tela do programa VScode, como fica:<br>
                  <div class="imagem">
                      <img src="/assets/imagens/funcao-definindo-width-less.png" alt="print da tela do VScode mostrando a função de alterar largura.">
                  </div>
                  <br>
                  Agora veja é a página antes de usar o width:<br>
                  <div class="imagem">
                      <img src="/assets/imagens/print-tela-antes-do-width.png" alt="print da tela da página, antes de usar o width.">
                  </div>
                  <br>
                  Depois de usar o width:<br>
                  <div class="imagem">
                      <img src="/assets/imagens/print-pagina-depois-de-usar-width.png" alt="print da tela da página, depois de usar o width.">
                  </div>
                  <br>
                  <br>
                  <b>Condicional</b><br>
                  Usando uma condicional, para fazer uma verificação usando o <b>if</b>.<br>
                  <br>
                  Se for uma cor, permanece a cor, se não for uma cor válida, vai mudar para outra cor.<br>
                  <b>color: if (iscolor(@cor1 ),@cor1, red)</b> <br>
                  <br>
                  Veja como fica o código do programa:<br>
                  <div class="imagem">
                      <img src="/assets/imagens/print-tela-programa-VScode-codigo-Condicional.png" alt="print da tela do VScode, código do programa.">
                  </div>
                  <br>
                  Como a cor não está correta, ela não vai ser exibida, ai a cor "red" aparece no lugar.<br>
                  <br>
                  Veja como fica na página:<br>
                  <div class="imagem">
                      <img src="/assets/imagens/print-pagina-como-fica-erro-na-variavel-cor.png" alt="print da página, com erro na variável cor.">
                  </div>
                  <br>
                  Existe várias outras formas e modos de usar as Funções.<br>
                  Para saber mais e ver as funções e exemplos, veja a documentação que está no site:<br>
                  <a href="https://lesscss.org/functions/">Lesscss.Funções</a>
                  <br>
              </h2>
          </section>
          <!--Less Mixins-->
          <section class="description" id="Less-Mixins">
              <header>
                  <h1 class="titulo">Less => Mixins </h1>
              </header>
              <h2>
                  Usado quando há itens iguais em mais de um seletor e acaba usando a mesma estrutura de função.<br>
                  É como criar "funtions" dentro do CSS, com passagem ou não de um parâmetro.<br>
                  Possibilita o uso de valores padrão.<br>
                  Evita repetições.<br>
                  <br>
                  A forma de criar é assim:<br>
                  <b>.cores(){ </b> <br>
                  ____* aqui dentro você adiciona as cores e/ou outros parâmetros ...* <br>
                  ____<b>}</b> <br>
                  <br>
                  <br>
                  Para colocar em prática é assim, vai passar as cores para o "h1" e o "p": <br>
                  <b> h1 { </b> <br>
                  _____ .cores(); "Vai receber as cores passadas." <br>
                  <b>}</b> <br>
                  <br>
                  <br>
                  <b>p { </b> <br>
                  _____ .cores(); "Vai receber as cores passadas." <br>
                  <b>}</b> <br>
                  <br>
              </h2>
          </section>
          <!-- Mixins => Colocando em prática -->
          <section class="description" id="LESS-Mixins-Colocando-em-prática">
              <header>
                  <h1 class="titulo"> Mixins => Colocando em prática </h1>
              </header>
              <h2>
                  Como colocar em prática, usando para cores repetidas.<br>
                  <br>
                  No exemplo temos duas cores repetidas, para facilitar vamos adicionar as duas dentro do:<br>
                  <b> <br>
                  ___ .cores(){ </b> <br>
                  ________color: @cor-azul; <br>
                  <b>}</b> <br>
                  <br>
                  Quando quiser adicionar essa cor, só adicionar o ".cores();" <br>
                  <br>
                  Veja como fica o código do programa:<br>
                  <div class="imagem">
                      <img src="/assets/imagens/mixings-print-codigo-usar-mixings.png" alt="print da tela do VScode mostrando como fica o mixings.">
                  </div>
                  <br>
                  <br>
                  Podemos usar parâmetros também.<br>
                  Você cria o mixins:<br>
                  <b>.cores( @tamanho ) {</b> -> aqui está passando o parâmetro -> @tamanho <br>
                  ___ color: @cor; <br>
                  ___ font-size: @tamanho; <br>
                  <b>}</b>
                  <br>
                  <br>
                  Quando adicionar na tag, você passa o valor do font-size, que vai para a variável -> @tamanho.<br>
                  <b>h1 { </b> <br>
                  ____ .cores(45px); <br>
                  <b>}</b> <br>
                  <br>
                  Veja o código como fica: <br>
                  <div class="imagem">
                      <img src="/assets/imagens/mixins-parametro-less.png" alt="print da tela do VScode, como passar o parâmetro.">
                  </div>
                  <br>
                  <br>
              </h2>
          </section>
          <!-- Condicionais IFs -->
          <section class="description" id="Less-Condicionais-IFs">
              <header>
                  <h1 class="titulo"> Condicionais IF </h1>
              </header>
              <h2>
                  Pode ser usado para fazer alguma condição de correção.<br>
                  Faz uma verificação nas informações que você recebe, se veio "isso" faça "aquilo".<br>
                  <br>
                  // Se @color estiver vazia <br>
                  <b>& when( @color ='') {</b> <br>
                  ____// vai deixar dessa cor <br>
                  ____<b>color: darkgreen;</b> <br>
                  <br>
                  // senão <br>
                  <b>} else {</b> <br>
                  ____// vai deixar dessa cor <br> 
                  ____<b> color: @color;</b> <br>
                  <b>}</b><br>
                  <br>
                  <br>
                  <b>Colocando em prática:</b> <br>
                  <br>
                  Cria as tags de estilos, no Less:<br>
                  <b>
                  h1 { <br>
                  ___.cores(45px, 'h1'); -> adiciona o mixins <br>
                  }<br>
                  p{ <br>
                  ____.cores(42px, 'p'); -> adiciona o mixins <br>
                  } <br>
                  </b>
                  <br>
                  Criamos o mixins:<br>
                  // vai receber dois parâmetros,tamanho e a tag. <br>
                  <b>.cores(@tamanho, @tag){ </b> <br>
                  ____ color: @cor-azul; <br>
                  ____ font-size: @tamanho; <br>
                  ____ // se o valor do @tag for igual a tag "h1" <br>
                  ____<b>& when (@tag ='h1'){</b> <br>
                  ____ // fará isso colocará um efeito de sombra <br>
                  ____ text-shadow: 2px 1px 1px #7a7b7c; <br>
                  ____ }  <br>
                  ____ // se  o valor da @tag for igual a tag "p" <br>
                  ____ <b>& when (@tag ='p'){</b> <br>
                  ____ // colocar essa cor de fundo <br>
                  _________ background-color: aqua; <br>
                  ____ } <br>
                  __ } <br>
                  <br>
                  <br>
                  Veja o código como fica: <br>
                  <div class="imagem">
                      <img src="/assets/imagens/mixins-condicional-if.png" alt="print da tela do VScode, usando o if no less.">
                  </div>
                  <br>
              </h2>
          </section>
          <!--Math -> Operadores Matemáticos no Less -->
          <section class="description" id="LESS-Math-Operadores-Matemáticos">
              <header>
                  <h1 class="titulo"> Math -> Operadores Matemáticos no Less </h1>
              </header>
              <h2>
                  Ao fazer uma configuração, a definição de um estilo,<br>
                  você pode fazer cálculos para definir padrões porpocionalidades.<br>
                  <br>
                  * Funciona também com cores.<br>
                  <br>
                  * Opções: + - * / (adição, subtração, multiplicação, divisão). <br>
                  <br>
                  Devido as versões do Less, em algumas o "/" (divisão) não funciona.<br>
                  <br>
                  <b>Colocando em prática:</b> <br>
                  <br>
                  Usando para somar o valor do tamanho da fonte de um texto.<br>
                  Foi criado a variável => @tamanho: 50px; <br>
                  Se adicionar outro número na variável, será somado também.<br>
                  <br>
                  <br>
                  Veja o código como fica: <br>
                  <div class="imagem">
                      <img src="/assets/imagens/less-math-adicao-print-codigo.png" alt="print da tela do VScode, usando Math que esta fazendo a soma.">
                  </div>
                  <br>
                  <br>
                  <b>Multiplicando</b> <br>
                  <br>
                  Usando para multiplicar o valor do tamanho da fonte de um texto.<br>
                  Foi criado a variável => @tamanho: 20px; <br>
                  Se adicionar outro número na variável será realizado a multiplicação.<br>
                  <br>
                  <br>
                  Veja o código como fica: <br>
                  <div class="imagem">
                      <img src="/assets/imagens/less-math-multiplicar-codigo.png" alt="print da tela do VScode, usando Math que está fazendo a multiplicação">
                  </div>
                  <br>
                  <br>
                  <b>Usando o Math nas cores</b> <br>
                  <br>
                  Dá para fazer modificações nas cores, alterar sua tonalidade.<br>
                  Foi criado a variável => <b>@cor-azul: blue;</b> uma cor sólida. <br>
                  <br>
                  Aqui será acrescentado a modificação, a conta.<br>
                  .cores(@tag) { <br>
                  ____ color: @cor-azul<b>*1.8</b>; <br>
                  ____ // se a tag for igual a "p" <br>
                  ____ & when (@tag ='p'){ <br>
                  _________ font-size: @tamanho + 5;<br>
                  _____  } <br> 
                  ....}<br>
                  <br>
                  <br>
                  Veja o código como fica: <br>
                  <div class="imagem">
                      <img src="/assets/imagens/Math-modificando-cor.png" alt="print da tela do VScode, usando Math que está fazendo a mudança de tonalidade da cor">
                  </div>
                  <br>
              </h2>
          </section>
          <!-- Erros -->
          <section class="description" id="Erros-como-evitar-eles">
              <header>
                  <h1 class="titulo"> Erros, como evitar eles </h1>
              </header>
              <h2>
                  Vamos ver alguns possivéis erros que podem acontecer.<br>
                  <b>variable @cor1-azul is undefined</b> <br>
                  Esse erro acontece por que alguma variável, está errada ou não foi definida corretamente.<br>
                  Veja a imagem de como fica no VScode, e embaixo no terminal o que diz sobre o erro:<br>
                  <div class="imagem">
                      <img src="/assets/imagens/erro-variavel-nao-definida.png" alt="print da tela do VScode, usando Math que está fazendo a mudança de tonalidade da cor">
                  </div>
                  <br>
                  No terminal, acusa que o erro está na linha 10, coluna 3.<br>
                  Mas o erro, não está lá, na linha 10 tem o:<br>
                  h1 { <br>
                  ____<b>.cores('h1');</b> é o mixins que dentro dele possui o erro. <br>
                  } <br>
                  <br>
                  Então o erro fica aqui no mixins:<br>
                  .cores(@tag) { <br>
                  ____  color: <b>@cor1-azul</b>*1.8; <br>
                  ____ // se a tag for igual a "p" <br>
                  }<br>
                  <br>
                  O terminal avisa sobre o erro, avisa qual é o erro, e onde está ou ali perto.<br>
                  Exemplo:<br>
                  No terminal aparece assim, o aviso sobre o erro:<br>
                  <b>variable @cor_cinza_claro2 is undefined ln6, Col 21</b> <br>
                  <br>
                  <b>background-color: @cor_cinza_claro2;</b> <-- aqui está o erro, o 2 está errado.<br>
                  <br>
                  Importante, após arrumar a variável, lembre-se de salvar o projeto para atualizar e resolver o erro.<br>
                  <br>
                  Há vários outros erros que podem ocorrer, fique sempre atento quando estiver escrevendo seu código.<br>
                  <br>
              </h2>
          </section>
          <!--Criando um projeto que use o Less parte 1--> 
          <section class="description" id="Criando-projeto-que-usa-Less-parte-1">
              <header>
                  <h1 class="titulo">Criando um projeto em NODE e usando o Less (parte 1)</h1>
              </header>
              <h2>
                  Vamos iniciar um projeto simples para usar o Less.<br>
                  <br>
                  Abra o VScode e no pront de comando do VScode, adicione esses comandos:<br>
                  // Para criar uma pasta <br>
                  <b>mkdir *adicione um nome* </b> <br>
                  <br>
                  // comando para abrir a pasta que foi criada <br>
                  <b>cd </b> *nome da pasta8 <br>
                  <br>
                  // comando para iniciar o projeto <br>
                  <b>npm init -y</b>
                  <br>
                  // vamos utilizar o Express que é um framework para aplicações web do Node.js<br>
                  // que irá nos auxiliar em diversas situações, como por exemplo na criação de um servidor<br>
                  // e gerenciamento de rotas, que é o que vamos fazer. <br>
                  <b>npm install express</b> <br>
                  <br>    
                  // instalei o Express <br> 
                  <b>npm install express</b> <br>
                  <br>
                  // instalei o 'ejs' <br>
                  <b>npm install ejs</b> <br>
                  <br>
                  // Para instalar o Less <br>
                  <b>npm install less</b> <br>
                  <br>
                  // Abra a Pasta que você criou, no VScode, e no pront de comando, coloque:<br>
                  <br>
                  // Para rodar o programa <br>
                  <b>node index.js</b> <br>
              </h2>
          </section>
           <!--Criando um projeto que use o Less parte 2--> 
          <section class="description" id="Criando-projeto-que-usa-Less-parte-2">
              <header>
                  <h1 class="titulo">Criando um projeto em NODE e usando o Less (parte 2)</h1>
              </header>
              <h2>
                  Agora com o projeto aberto no VScode.<br>
                  <br>
                  Crie um arquivo com o nome <b>index.js</b> <br>
                  Veja a imagem do código feito no VScode:<br>
                  <div class="imagem">
                      <img src="/assets/imagens/index-codigo-print-VScode.png" alt="print da tela do VScode, do código index.js">
                  </div>
                  <br>
                  Crie uma pasta com o nome <b>views</b>, e dentro dela adicione esses arquivos:<br>
                  <br>
                  <b>Less</b> é apenas uma página de html normal, só para testar o Less.<br>
                  Veja a imagem do código feito no VScode:<br>
                  <div class="imagem">
                      <img src="/assets/imagens/less-codigo-print-VScode-parte1.png" alt="print da tela do VScode, do código less.ejs parte 1">
                  </div>
                  <div class="imagem">
                      <img src="/assets/imagens/less-codigo-print-VScode-parte2.png" alt="print da tela do VScode, do código less.ejs parte 2">
                  </div>
                  <br>
                  A outra página que iremos criar é a página <b>historia</b><br>
                  Que é igual a outra página less, só modifica o nome e o link para a página less.<br>
                  <div class="imagem">
                      <img src="/assets/imagens/historia-html-print-VScode-.png" alt="print da tela do VScode, do código historia.ejs">
                  </div>
                  <br>
                  Agora vamos criar uma pasta chamada <b>public</b>, e dentro dela, <br>
                  uma pasta com o nome <b>_css</b> e dentro dela coloque:<br>
                  o arquivo -> styles.less.<br>
                  <br>
                  Veja a imagem do código feito no VScode:<br>
                  <div class="imagem">
                      <img src="/assets/imagens/stylesLess-print-codigo-parte1.png" alt="print da tela do VScode, do código style.less parte 1">
                  </div>
                  <div class="imagem">
                      <img src="/assets/imagens/styleLess-print-codigo-parte2.png" alt="print da tela do VScode, do código style.less parte 2">
                  </div>
                  <br>
                  <b>Importante</b> <br>
                  ** Pode ser necessário usar esse comando para pode usar o LESS:<br>
                  <b>lessc styles.less styles.css</b> <br>
                  <br>
                  Link da página que eu criei:<br>
                  <a href="https://giovanep4mg.github.io/pagina_teste_less/">pagina teste less</a><br>
                  <br>
                  Para mais informações sobre o less, acesse o site, que contém a documentação:<br>
                  <a href="https://lesscss.org/">lesscss.org</a> <br>
                  <br>
              </h2>
          </section>
          <!--Exercício 1--> 
          <section class="description" id="Exercício-1">
              <header>
                  <h1 class="titulo">Exercício 1</h1>
              </header>
              <h2>
                  Crie um projeto.<br>
                  Você pode usar usa página sua como base, criando uma cópia.<br>
                  Sugiro usar o Node.js.<br>
                  Se já tiver um CSS pode apenas convertê-lo para LESS.<br>
                  <b>Obrigatório</b><br>
                  * Usar variáveis, funções, cálculos e hierarquia.<br>
                  <br>
                  Link da página que eu criei:<br>
                  <a href="https://giovanep4mg.github.io/pagina_exercicio1-usando_less/">pagina exercício 1 less</a><br>
                  <br>
              </h2>
          </section>
        
      </main>
  </body>
  </html>
  
  `;

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
};

export default Aula2;
