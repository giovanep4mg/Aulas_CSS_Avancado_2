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

const Aula6 = () => {
  const htmlContent = `
  <!--Pagina5-->
  <!DOCTYPE html>
  <html lang="pt-br">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="description" content="Esta página é sobre o CSS Módule.">
      <title>Módulos CSS</title>
  </head>
  <body>
      <main class="toda-pagina">
          <!--CSS Module-->
          <section class="description" id="CSS-Module">
              <header>
                  <h1 class="titulo">CSS Módule </h1>
              </header>
              <h2>
                  Ajuda a não gerar conflito com outras partes do projeto, <br>
                  que tenha uma classe com o mesmo nome.<br>
                  <br>
                  Exemplo:<br>
                  Você tem dentro do seu projeto o arquivoA.css e o arquivoB.css,<br>
                  dentro dele tem configurações diferentes para uma classe com o nome "Title".<br>
                  <br>
                  E no html, existe uma classe com o nome <b>Title</b>, <br>
                  se for um css normal, vai dá conflito um vai sobreescrever o outro.<br>
                  <b>Se for CSS MODULE</b> não terá conflito, pois quando for feito o build<br>
                  essa classe recebera uns números para diferenciar elas.<br>
                  <br>
                  É um processo que ocorre no processo de build,<br>
                  que altera o nome de classe e seletores para ter escopo local.<br>
                  <br>
                  Geralmente feito por JavaScript.<br>
                  Vem para sanar problemas como dependências, eliminação de código morto,<br>
                  e classes globais.<br>
                  <br>
                  É mais vantajoso usar em projeto grandes.<br>
                  <br>
                  Em projetos pequenos pode aumentar a complexidade de forma desnecessária.<br> 
                  <br>
              </h2>
          </section>
          <!--Aula-7B--CSS Module Exemplo PRÁTICO-->
          <section class="description" id="Exemplo-1-prático-de-CSS-Module">
              <header>
                  <h1 class="titulo">Exemplo prático de CSS Módule</h1>
              </header>
              <h2>
                  *Cria uma pasta, abra o VScode, e no terminal dele digite:<br>
                  // Comando para criar um projeto react
                  <b>npm install create-react-app </b> <br>
                  <br>
                  // Novamente cria outro passando o nome para o projeto:<br>
                  <b>npx create-react-app meu-app-css-modules</b> <br> 
                  <br>
                  Depois de instalado ele vai criar esses arquivos:<br>
                  <div class="imagem">
                      <img src="/assets/imagens/print-new-projeto-css-module.png"
                       alt="print da tela do programa mostrando os arquivos que foram criados.">
                  </div>
                  <br>
                  Depois de instalado, para rodar o programa, no terminal coloque:<br>
                  <b>cd </b>  + o nome do seu projeto, para entrar na pasta do seu projeto.<br>
                  <br>
                  Agora dentro da pasta do seu projeto, coloque:<br>
                  <b>npm start</b> *para rodar o programa.<br>
                  <br>
                  No código do programa, vamos alterar o <b>App.css</b>,<br>
                  mude o nome para <b>App.module.css</b> .<br>
                  <br>
                  Agora vai no <b>App.js</b> e vamos importa ele aqui.<br>
                  * Para importa:<br>
                  <b>import estilo from './App.module.css'; </b> <br>
                  <br>
                  * Para adicionar:<br>
                  <b>< div className={estilo.App} < /div > </b> <br>
                  <br>
                  * Para adicionar os que tenham " hífem ",tipo; "App-header" :<br>
                  <b>< header className= { estilo [ 'App-header' ] } > < /header > </b> <br>
                  <br>
                  Veja na imagem como fica o código:<br>
                  <div class="imagem">
                      <img src="/assets/imagens/usando-css-module.png" 
                      alt="print do código, usando o hífen no css módule.">
                  </div>
              </h2>
          </section>
          <!--Aula-7B--CSS Module Exemplo PRÁTICO 2-->
          <section class="description" id="Exemplo-2-prático-de-CSS-Module">
              <header>
                  <h1 class="titulo">Outro Exemplo de como usar o CSS Módule</h1>
              </header>
              <h2>
                  Usando o mesmo projeto que você criou.<br>
                  Faça uma cópia do arquivo <b>App.module.css</b> <br>
                  E depois modifique o nome dele para:<br>
                  <b>NovoCss.module.css</b> <br>
                  <br>
                  Apague quase tudo de dentro dele, deixe somente o:<br>
                  <b>App-header</b> <br>
                  * modifique a cor, o background-color.<br>
                  <br>
                  Para adicionar essas modificações:<br>
                  * importa ele no "App.js" :<br>
                  <b>import novoEstilo from './NovoCss.module.css' </b> <br>
                  <br>
                  * Para usar ela:<br>
                  <b>< header className= { novoEstilo['App-header'] } > < /header > </b> <br>
                  <br>
                  Veja na imagem como fica o código:<br>
                  <div class="imagem">
                      <img src="/assets/imagens/codigo-final-css-module.png" 
                      alt="print do código de como fica adicionando CSS module.">
                  </div>
                  <br>
                  <br>
              </h2>
          </section>
          <!--Aula-7C-Conclusão--->
          <section class="description" id="CSS-Módulo-ou-Styled-Components">
              <header>
                  <h1 class="titulo">CSS Módulo ou Styled-Components</h1>
              </header>
              <h2>
                  Se você for mais conservador, e goste de programar usando o CSS,<br>
                  a sugestão é usar o <b>CSS Module</b>.<br>
                  <br>
                  Se não gosta de usar o CSS puro,Less ou o SASS, <br>
                  uma boa opção é o <b>styled-components</b>.<br>
                  <br>
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

export default Aula6;
