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


const Aula3 = () => {
  const htmlContent = `
  <!--pagina 3-->

  <!DOCTYPE html>
  <html lang="pt-br">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="description" 
      content="Esta página é sobre o pré-processadores SASS.">
      <title>SASS</title>
  </head>
  <body>
      <main class="toda-pagina">
          <!--SASS-->
          <section class="description" id="O-que-é-SASS">
              <header>
                  <h1 class="titulo">SASS</h1>
              </header>
              <h2>
                  SASS é uma extensão do CSS que empodera o CSS básico.<br>
                  <br>
                  É um pré-processador de CSS, como o Less.<br>
                  <br>
                  Permite o uso de variáveis, funções, cálculos e hierarquia.<br>
                  <br>
                  É um Gem do Ruby, ou seja, uma biblioteca escrita em Ruby.<br>
                  <br>
                  Site do SASS, que tem toda sua documentação:<br>
                  <a href="https://sass-lang.com/">SASS</a>
                  <br>
                  No site você vai ter toda as informações de como instalar, como usar, etc...<br>
                  <br>
              </h2>
          </section>
          <!--Aula4-B-Como usar o SASS-->
          <section class="description" id="Como-usar-o-SASS">
              <header>
                  <h1 class="titulo">Como usar o SASS</h1>
              </header>
              <h2>
                  Pega o arquivo <b>scss</b> ou <b>sass</b> compila para <b>css</b><br>
                  <br>
                  Isso é feito em por você mesmo no código.<br>
                  Mas você usar site online, pré-processadores para fazer essas conversões,<br>
                  não é ideal, use somente para praticar.<br>
                  <br>
                  Links dos site que fazem esse pré-processamento:<br>
                  <b>SCSS</b> para <b>CSS</b> <br>
                  <a href="https://jsonformatter.org/scss-to-css">JSON formatter</a> <br>
                  <br>
                  Veja como é na imagem abaixo:<br>
                  <div class="imagem">
                      <img src="/assets/imagens/formatter-scss-to-css-site.png" alt="print do site que faz a conversão de sccs para css.">
                  </div>
                  <br>
                  <br>
                  <b>SASS</b> para <b>CSS</b> <br>
                  <a href="https://codebeautify.org/sass-to-css-converter">codebeautify</a> <br>
                  <br>
                  A imagem do site é bem parecida com o outro site, funcionamento é praticamente igual.<br>
                  <br>
                  Há vários outros sites compiladores, que fazem isso.<br>
                  <br>
                  Você pode usar plugin para VScode:<br>
                  <b>Live Sass Compiler</b> <br>
                  * Procure nas extensãoes do VScode, e instala ele.<br>
                  * Vai converter automaticamente o scss para css.<br> 
                  <br>
                  Exemplo do código <b>html</b> de uma página só para testar o plugin:<br>
                  <div class="imagem">
                      <img src="/assets/imagens/print-codigo-html-simples-para-testar-sass.png" alt="print do código no VScode, de html simples para testar o puglin para converter sass para css.">
                  </div>
                  <br>
                  Exemplo do código de <b>scss</b> só para testar o plugin:<br>
                  <div class="imagem">
                      <img src="/assets/imagens/print-codigo-style-scss.png" alt="print do código no VScode, de scss simples para testar o puglin para converter sass para css.">
                  </div>
                  <br>
                  No VScode, depois de instalado o plugin, você clicar o <b>Watching...</b>,<br>
                  que fica lá embaixo perto do terminal.<br>
                  <div class="imagem">
                      <img src="/assets/imagens/clicar-para-converte-scss-para-css.png" alt="print do código no VScode, de onde fica o botão, para converter sass para css.">
                  </div>
                  <br>
                  Ao clicar no "botão" será feita a conversão, de SCSS para CSS se o scss estiver correto.<br>
                  O próprio VScode cria o <b>style.css</b> com os códigos do SCSS.<br>
                  <div class="imagem">
                      <img src="/assets/imagens/scss-convertido-para-css.png" alt="print do código no VScode, do style.css que foi convertido do scss.">
                  </div>
                  <br>
                  Veja como fica na página online:<br>
                  <a href="https://giovanep4mg.github.io/pagina_teste_scss/">página teste</a> <br>
                  <br>
                  <br>
              </h2>
          </section>
          <!--Aula4-C--SASS Variáveis-->
          <section class="description" id="SASS-variáveis" >
              <header>
                  <h1 class="titulo">SASS variáveis</h1>
              </header>
              <h2>
                  Para a variável se usa o <b>$</b> e não o "@", como em outras linguagens.<br>
                  <br>
                  Permiti usar o <b>.sass</b> e <b>.scss</b>.<br>
                  * .scss é mais parecido com a sintaxe do CSS e Less, é a que usaremos.<br>
                  Exemplo:<br>
                  // setando a cor dentro da variável <br>
                  <b>$cor: red; </b> <br>
                  <br>
                  <b>.item {</b> -> item -> seria a tag.<br>
                  ______ <b>color: $cor;</b> -> colocar a cor que está na variável "$cor" <br>
                  <b>}</b> <br>
                  <br>
                  Veja o print do código, do documento:<br>
                  <div class="imagem">
                      <img src="/assets/imagens/print-variavel-documento-scss.png" 
                      alt="print do código de como é usado a variável do SASS.">
                  </div>
                  <br>
                  * .sass é mais parecido com a sintaxe do Pub, ou seja, sem abertura.<br>
                  Exemplo:<br>
                  // setando a cor dentro da variável <br>
                  <b>$cor: red; </b> <br>
                  <br>
                  <b>.item </b> <br>
                  ______ <b>color: $cor;</b> -> colocar a cor que está na variável "$cor" <br>
                  <br>
                  *** <b>Não precisa abrir e fechar as tags</b> <br>
                  Veja o print do código, do documento:<br>
                  <div class="imagem">
                      <img src="/assets/imagens/print-variavel-documento-sass.png" 
                      alt="print do código de como é usado a variável do SASS.">
                  </div>
                  <br>
                  No documento do SASS, você terá mais exemplos de como fica os códigos, se for:<br>
                  <b>.scss</b> ou <b>.sass</b>.<br>
                  Link para o site, e ter acesso ao documento:<br>
                  <a href="https://sass-lang.com/guide/">Site SASS</a> <br>
                  <br>
              </h2>
          </section>
          <!--Aula4-D--SASS Funções-->
          <section class="description" id="SASS-Funções">
              <header>
                  <h1 class="titulo">SASS Funções => Mixin</h1>
              </header>
              <h2>
                  Para usar o <b>mixin</b>.<br>
                  Temos que declarar ele no inicio antes de usar, veja como deve ser declarado:<br>
                  <br>
                  <b>@mixin</b> fundoP($color){ <br>
                  _____background-color: $color; <br>
                  } <br>
                  <br>
                  Na chamada usamos o <b>@include</b>.<br>
                  <br>
                  .tipo { <br>
                  _____<b>@include</b> fundoP($cor); <br>
                  } <br>
                  <br>
                  Veja como fica o código no formato SCSS:<br>
                  <div class="imagem">
                      <img src="/assets/imagens/print-codigo-sass-scss.png" 
                      alt="print do código, no formato de scss">
                  </div>
                  <br>
                  Veja como fica o código no formato CSS depois de converter:<br>
                  <div class="imagem">
                      <img src="/assets/imagens/print-codigo-css-depois-d-convertido.png" 
                      alt="print do código, no formato css">
                  </div>
                  <br>
              </h2>
          </section>
          <!--Aula4-E--SASS Hierarquia-->
          <section class="description" id="SASS-Hierarquia">
              <header>
                  <h1 class="titulo">SASS Funções => Hierarquia </h1>
              </header>
              <h2>
                  Pode ser usado de forma mais intuitiva, colocando um dentro do outro.<br>
                  *Sintaxe: <br>
                  <b>.tipo {</b> <br>
                  ____ <b>@include fundoP($cor2)</b> <br>
                  ____ <b>a {</b> <br>
                  __________ <b>color: $cor;</b> <br>
                  _____ <b>}</b> <br>
                  <b>}</b> <br>
                  <br>
                  Veja o print do código, style.scss:<br>
                  <div class="imagem">
                      <img src="/assets/imagens/print-style-scss-hierarquia.png" 
                      alt="print do código, mostrando a sintaxe da hierarquia">
                  </div>
                  <br>
                  Na página fica assim:<br>
                  <div class="imagem">
                      <img src="/assets/imagens/print-pagina-usando-hierarquia.png" 
                      alt="print da página, mostrando o uso da hierarquia.">
                  </div>
                  <br>
                  * Pode ser adicionado mais coisas dentro, isso é apenas um simples exemplo.<be></be>
                  <br>
              </h2>
          </section>
          <!--Aula4-F--SASS Import ou @use-->
          <section class="description" id="SASS-Import-ou-@use">
              <header>
                  <h1 class="titulo">SASS Funções => Hierarquia </h1>
              </header>
              <h2>
                  É possivel fazer o uso de <b>imports</b>. <br>
                  * @use 'base'; <br>
                  * @import 'base'; /* este está em desuso */ <br>
                  <br>
                  Ao contrário das importações de CSS simples, que exigem que o navegador,<br>
                  faça solicitações HTTP a medida que renderiza sua página.<br>
                  <br>
                  Aqui importa tudo de uma vez, visto que irá se torna só um arquivo CSS.<br>
                  <br>
                  * No exemplo, foi criado mais três arquivos em cada um deles,<br>
                  será aplicado códigos SCSS diferentes.<br>
                  <b>_base1.scss</b><br>
                  <div class="imagem">
                      <img src="/assets/imagens/print-codigo-base1-scss-imports.png" 
                      alt="print do código base1, de como foi feito o código.">
                  </div>
                  <br>
                  <b>_base2.scss</b>: <br>
                  <div class="imagem">
                      <img src="/assets/imagens/print-codigo-base2-scss-imports.png" 
                      alt="print do código base1, de como foi feito o código.">
                  </div>
                  <br>
                  <b>base3.scss</b>:<br>
                  <div class="imagem">
                      <img src="/assets/imagens/print-codigo-base3-scss-imports.png" 
                      alt="print do código base1, de como foi feito o código.">
                  </div>
                  <br>
                  <br>
                  Ai no arquivo principal <b>style.scss</b>, você importa os outros que foram criado,<br>
                  formando todo o CSS dá página, no exemplo separei para ver melhor.<br>
                  <b>style.scss</b> <br>
                  <div class="imagem">
                      <img src="/assets/imagens/print-codigo-style-scss.png" 
                      alt="print do código style.scss, de como foi feito o código.">
                  </div>
                  <br>
                  <br>
                  Para ver como ficou a página:<br>
                  <a href="https://giovanep4mg.github.io/pagina_teste_usando_imports_scss_sass/">Clique aqui</a>
                  <br>
              </h2>
          </section>
          <!--Aula4-G--Operadores Matemáticos-->
          <section class="description" id="SASS-Operadores-Matemáticos">
              <header>
                  <h1 class="titulo">Operadores Matemáticos Math </h1>
              </header>
              <h2>
                  Semelhantes as outras linguagens.<br>
                  Operadores Lógicos:<br>
                  <b><</b> menor. <br>
                  <b><=</b> menor ou igual. <br>
                  <b>></b> maior. <br>
                  <b>>=</b> maior ou igual. <br>
                  <b>==</b> igual. <br>
                  <b>!=</b> diferente.<br>
                  <br>
                  Operações de cálculos:<br>
                  "<b>+</b>" adição, "<b>-</b>" subtração, "<b>*</b>" multiplicação, "<b>/</b>" divisão. <br>
                  <br>
                  Para concatenar Strings.<br>
                  <b>+</b> <br>
                  <br>
                  Exemplos:<br>
                  <b>1 + 2 * 3</b> == <b>1 + (2 * 3)</b> // vai retorna true "verdadeiro" <br>
                  <br>
                  <b>true or false and false</b> == <b>true or (false and false)</b> <br>// retorna true "verdadeiro"<br>
                  <br>
                  <b>((1 + 2) * 3 + 4) * 5 </b> respota => 65 <br>
                  <br>
              </h2>
          </section>
          <!--Aula4-G--Operadores Matemáticos exemplos práticas-->
          <section class="description" id="Operadores-matemáticos-exemplos-práticos">
              <header>
                  <h1 class="titulo">Operadores Matemáticos Math, na prática </h1>
              </header>
              <h2>
                  <div style="border: 1px solid black; margin: 10px; padding: 10px;">
                      <b>Concatenação</b><br>
                      *ligar(-se), juntar(-se) numa cadeia ou sequência lógica ou orgânica.<br>
                      <br>
                      // variável normal:<br>
                      <b>$cor-azul: lightblue;</b> <br>
                      <b>$cor-verde: lightgreen;</b> <br>
                      <br>
                      // fazendo a concatuação <br>
                      $cor-azul: light<b>+</b> blue; <br>
                      $cor-verde: light<b>+</b>green; <br>
                      <br>
                      <b>Atenção</b>: Não use aspas '' quando for adicionar:<br>
                      Exemplo: $cor-azul: <b>'</b>light<b>' </b>+ blue<br>
                      <br>
                  </div>
                  <div style="border: 1px solid black; margin: 10px; padding: 10px;">
                      <b>Fazer cálculos</b><br>
                      * Vamos usar como exemplo a margem.<br>
                      <br>
                      // variável normal<br>
                      <b>$margem: 10% ;</b> <br>
                      // variável adicionando a adição de mais 10 <br>
                      <b>$margem: 10% + 10;</b> <br>
                      <br>
                      Veja como fica na página:<br>
                      <div class="imagem">
                          <img src="/assets/imagens/print-pagina-adicao-sass-math.png" 
                          alt="print da página depois de realizar a adição no código sass. ">
                      </div>
                      <br>
                      Só usar os sinais matemáticos e os valores que você desejar.<br>
                      <br>
                      <b>Atenção:</b><br>
                      Só não faça assim: <br>
                      $margem: <b>0.5</b> / 2; <br>
                      ** É preciso colocar o número inteiro => 50% <br>
                      <br>
                  </div>
                  <div style="border: 1px solid black; margin: 10px; padding: 10px;">
                      <b>Fazer comparações</b><br>
                      * Vamos usar o "if", mas aqui é feito adicionando o "@".<br>
                      <div style="border: 1px solid black; margin: 20px; padding: 20px; width: 10%;">
                          <b>@if(){</b> <br>
                          <br>
                          <b>} @else {</b> <br>
                          <br>
                          <b>}</b> <br>
                      </div>
                      <br>
                      Vamos mostrar um exemplo prático.<br>
                      // variável <br>
                      <b>$fundo-preto: black;</b> <br>
                      <br>
                      Veja na imagem como fica o código:<br>
                      <div class="imagem">
                          <img src="/assets/imagens/print-codigo-usando-if-sass.png" 
                          alt="print do código usando o if no sass">
                      </div>
                      * Se o valor da variável "$fundo-preto" for "black", não vai mudar nada na página. <br> 
                      <br>
                      Veja a imagem da página:<br>
                      <div class="imagem">
                          <img src="/assets/imagens/print-codigo-usando-if-sass-normal.png" 
                          alt="print da página, usando a comparação do if, sem modificações no sass">
                      </div>
                      <br> 
                      Agora faremos a mudança na comparação, trocando apenas a cor:<br>
                      de <b>black</b> para <b>red</b>.<br>
                      <br>
                      Veja o que acontece com a página.<br>
                      <div class="imagem">
                          <img src="/assets/imagens/print-codigo-usando-if-sass-modificado.png" 
                          alt="print da página, usando a comparação do if, com modificações no sass">
                      </div>
                      <br>
                      <br>
                  </div>
              </h2>
          </section>
          <!--Aula4-H-Como remover as aspas de uma string-->
          <section class="description" id="Como-remover-as-aspas-de-uma-string">
              <header>
                  <h1 class="titulo">Como remover as aspas de uma string</h1>
              </header>
              <h2>
                  Quando você concatenua uma string, pode ser que tenha aspas,<br>
                  e não será um valor válido para uma propriedade, não será possível usar ela.<br>
                  <br>
                  <b># { variavel + 1 }</b> Cria uma string sem aspas. <br>
                  <br>
                  Se for usar como número, pode não funcionar.<br>
                  <br>
                  Na prática:<br>
                  // variável <br>
                  <b>$cor-azul: light + blue;</b> => essa é a variável normal,<br>
                  funciona normalmente veja a página:<br>
                  <div class="imagem">
                      <img src="/assets/imagens/print-pagina-sass-usando-aspas.png" 
                      alt="print da página, como fica sem usar aspas.">
                  </div>
                  <br>
                  Agora veremos como funciona usando aspas na variável:<br>
                  // variável  <br>
                  <b>$cor-azul: 'light' + blue;</b> => adicionei nela as aspas, agora não funciona.<br>
                  Veja a imagem:<br>
                  <div class="imagem">
                      <img src="/assets/imagens/print-pagina-sass-usando-aspas-verdadeiro.png" 
                      alt="print da página, como fica usando a aspas, não irá funcionar.">
                  </div>
                  <br>
                  Para que volte a funcionar, você tira as aspas,<br>
                  ou pode modicar a propriedade, na hora de passar os valores:<br>
                  <br>
                  // exemplo de como é colocado no código scss/sass <br>
                  <b>color: $cor-azul;</b> => o jeito de passar normal é assim. <br>
                  <br>
                  // modificado para funcionar<br>
                  color:<b> #{$cor-azul}</b>;  => assim vai funcionar mesmo com aspas.<br>
                  <br>
                  Veja como fica na página, se funcionou ou não: <br>
                  <br>
                  <div class="imagem">
                      <img src="/assets/imagens/print-pagina-sass-com-aspas-funcionando.png" 
                      alt="print da página, como fica usando a aspas, agora irá funcionar.">
                  </div>
                  <br>
              </h2>
          </section>
          <!--Aula4-I-Repetição / For / Looping-->
          <section class="description" id="Repetição / For / Looping">
              <header>
                  <h1 class="titulo">Repetição / For / Looping- </h1>
              </header>
              <h2>
                  Não é muito comum usar o for, repetiçao mas pode ser usado em alguns casos específicos.<br>
                  É possível que haja algum padrão no código scss, para evitar ficar copiando e colando,<br>
                  por isso pode se usar a repetição.<br>
                  Exemplo da sintaxe:<br>
                  <div style="border: 1px solid black; margin: 10px; padding: 10px;">
                      <b>$cor: red;</b> <br>
                      <br>
                      <b>@for $i from 1 through 3 { </b> <br>
                      _________<b>$nome: 'tipo' + $i</b> "tipo" pode ser uma classe, tag... <br>
                      _________<b>#{$nome}{</b> <br>
                      _________________<b>background-color: lighten($cor, $1 * 5%);</b> <br>
                      _________<b>} </b>    <br>
                      <b>}</b> <br>
                      <br>
                  </div>
                  Exemplo prático:<br>
                  <div style="border: 1px solid black; margin: 10px; padding: 10px;">
                      Criei um projeto, com três divs colocando cada uma delas com um id diferente:<br>
                      <b>id="div-1"</b>, <b>id="id-2"</b> e <b>id="id-3"</b> <br>
                      <br>
                      E para que elas recebam a mesma configuração de estilos, usarei o <b>@for</b>. <br>
                      <b>@for $i from 1 through 3 {</b> <br>
                      ____<b>$nome: '#id-' + $i;</b> <br>
                      ____<b>#{$nome}{</b> <br>
                      ___________<b>font-size: $tamanho;</b> <br>
                      ___________<b>border: $borda;</b> <br>
                      ____<b>}</b> <br>
                      <b>}</b> <br>
                      <br>
                      ** Assim as três "divs" receberam essas configurações.<br>
                      <br>
                  </div>
                  <div style="border: 1px solid black; margin: 10px; padding: 10px;">
                      <b>Adicionar tamanhos diferentes nas divs</b> <br>
                      * Pode ser feito adicionando o valor a mais no @tamanho, a cada repetição.  <br>
                      <br>
                      @for $i from 1 through 3 { <br>
                      ____ $nome: '#id-' + $i; <br>
                      ___________#{$nome}{ <br>
                      _______________// só adicionar essa modificação no código:<br>
                      _______________<b>font-size: $tamanho + ($i * 4);</b> <br>
                      _______________ border: $borda; <br>
                      _________ } <br>
                      _} <br>
                      <br>
                      Veja a imagem de como fica a página:<br>
                      <div class="imagem">
                          <img src="/assets/imagens/print-pagina-usando-for-sass.png"
                          alt="print da página, de como fica depois de usar o @for do sass. ">
                      </div>
                      <br>
                  </div>
                  <div style="border: 1px solid black; margin: 10px; padding: 10px;">
                      <b>Tonalidade de cores, diferentes nas divs</b> <br>
                      <br>
                      // Adiciona uma variável que recebe a cor vermelha <br>
                      <b>$corDiv: red;</b> <br>
                      <br>
                      @for $i from 1 through 3 { <br>
                      _______$nome: '#id-' + $i; <br>
                      _________ #{$nome}{ <br>
                      ________________ font-size: $tamanho;</b> <br>
                      ________________ border: $borda; <br>
                      ________________ //Adiciona essa linha de código dentro do @for <br>
                      ____________ <b>background-color: lighten($corDiv, $i + %)25;</b> <br>
                      _______ } <br>
                      __ } <br>
                      <br>
                      <br>
                      ** Cuidado  se colocar um valor muito alto, a cor muda demais, ai será outra cor.<br>
                      <br>
                      Veja a imagem de como fica a página:<br>
                      <div class="imagem">
                          <img src="/assets/imagens/print-pagina-usando-for-para-modificar-cores.png"
                          alt="print da página, de como fica as cores depois de usar o @for do sass. ">
                      </div>
                      <br>
                  </div>
                  ** Pode ser feita várias modificações.<br>
              </h2>
          </section>
          <!--Aula4-J-Exercício 2-->
          <section class="description" id="Exercício 2">
              <header>
                  <h1 class="titulo">Exercício 2 </h1>
              </header>
              <h2>
                  Vamos criar um projeto.<br>
                  <br>
                  * Você pode usar uma página sua como base, criando uma cópia.<br>
                  * Sugiro usar algum plug-in, como segundo opção o Node.js. <br>
                  * Se já tiver um CSS pode converte-lo para SASS.<br>
                  * Obrigatório usar: variáveis, mixins, cálculos, looping e hierarquia.<br>
                  <br>
                  Link do projeto criado, é uma simples página.<br>
                  <a href="https://giovanep4mg.github.io/pagina_exercicio2_usando_sass/">Exercicio 2</a> <br>
                  <br>
                  <br>
              </h2>
          </section>
          <br>
      </main>
      <br>
  </body>
  </html>
  
  
  
  `;

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );

};

export default Aula3;
