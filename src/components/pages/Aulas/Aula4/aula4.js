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

const Aula4 = () => {
  const htmlContent = `
  <!--pagina 4-->

  <!DOCTYPE html>
  <html lang="pt-br">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="Esta página é sobre o pré-processador POSTCSS.">
        <title>POSTCSS</title>
    </head>
    <body>
      <main class="toda-pagina">
          <!--POST CSS-->
          <section class="description" id="Oque-é-POST-CSS?">
              <header>
                  <h1 class="titulo">POST CSS</h1>
              </header>
              <h2>
                  É um ecossistema de plugins personalizados e de ferramentas.<br>
                  Existe mais de 200 plugins e é possível criar mais.<br>
                  Pode ser usado como pré ou pós processador.<br>
                  Como pós processador, você não terá muito controle do que será feito,<br>
                  diferente do que é feito com o <b>Less</b> ou <b>Sass</b>.<br>
                  <br>
                  * Como existe vários plugins, cabe a você decidir qual vai querer usar,<br>
                  quase todos possuem uma boa documentação, para ter mais informações.<br>
              </h2>
          </section>
          <!--POST CSS Exemplo de como seria o funcionamento-->
          <section class="description" id="Como-funciona-o-POST-CSS">
              <header>
                  <h1 class="titulo">POST CSS Exemplo de como seria o funcionamento</h1>
              </header>
              <h2>
                  ** <b>Entrada</b> <br>
                  <div style="border: 1px solid black; margin: 10px; padding: 10px;">
                      <br>
                      <b>p { </b> <br>
                      _______<b>display: flex; </b> <br>
                      <b>}</b>
                      <br>
                  </div>
                  ** <b>Saida</b> <br>
                  <div style="border: 1px solid black; margin: 10px; padding: 10px;">
                      <br>
                      <b>p { </b> <br>
                      _______<b>display: -webkit-box; </b> <br>
                      _______<b>display: -ms-flebox; </b> <br>
                      _______<b>display: flex; </b> <br>
                      <b>}</b>
                      <br>
                  </div>
                  <br>
                  Na saida ele criou mais dois css diferentes do que eu adicionei,<br>
                  a vantagem dele fazer é que mais navegadores leia o CSS.<br>
                  <br>
                  Terá muito mais chances de funcionar em vários navegadores,<br>
                  mas não é certeza que todos funcionaram.<br>
                  <br>
                  É bom testar em vários navegadores, o seu projeto.<br>
                  <br>
              </h2>
          </section>
          <!--POST CSS Plugins-->
          <section class="description" id="POST-CSS-Documentação-mais-detalhes">
              <header>
                  <h1 class="titulo">POST CSS Documentação e mais detalhes</h1>
              </header>
              <h2>
                  É plugin para transaformar CSS com JavaScript.<br>
                  ** Não precisa saber a linguagem JavaScript.<br>
                  <br>
                  No desenvolvimento podemos usar conceitos já apresentados neste curso,<br>
                  visando evitar: repetição de código, reuso, código limpo, organizado de fácil manutenção.<br>
                  <br>
                  O uso pode ser:<br>
                  * Atráves de linhas de comando ou taskrunners.<br>
                  <br>
                  É sempre importante consultar as documentações para entender, <br>
                  e tirar melhores benefícios.<br>
                  <br>
                  Para usar com Node.js <b>npm install postcss-middleware</b> .<br>
                  <br>
                  Links para ver as documentações:<br>
                  <a href="https://github.com/jednano/postcss-middleware">https://github.com/jednano/postcss-middleware</a> <br>
                  <br>
                  <a href="https://github.com/postcss/postcss">https://github.com/postcss/postcss</a> <br>
                  <br>
                  <a href="https://www.postcss.parts/">https://www.postcss.parts/</a> <br>
                  <br>
                  <a href="https://postcss.org/">https://postcss.org/</a> <br>
                  <br>
                  Consulte as documentações, veja qual é mais adequado para seu projeto.<br>
                  <br>
              </h2>
          </section>
          <!--POST CSS Documentação e mais detalhes-->
          <section class="description" id="POST CSS Plugins">
              <header>
                  <h1 class="titulo">POST CSS Plugins</h1>
              </header>
              <h2>
                  Há muitos plugins, mais veremos 3.<br>
                  <br>
                  <b>PostCSS Brazilian Portuguese Stylesheets</b>  <br>
                  <a href="https://www.npmjs.com/package/postcss-brazilian-portuguese-stylesheets">https://www.npmjs.com/package/postcss-brazilian-portuguese-stylesheets</a> <br>
                  <br>
                  * Faz uma conversão.<br>
                  <br>
                  * Ajuda a quem não entende nada de inglês e está no início.<br>
                  * Permite a programação em português e processa para CSS.<br> 
                  <br>
                  Veja um exemplo, que está no site da documentação:<br>
                  <div class="imagem">
                      <img src="/assets/imagens/print-pagina-documentacao-postcss-brazilian.png" 
                      alt="print da página de documentação do site, mostrando um exemplo de como funciona o plugin.">
                  </div>
                  <br>
                  <br>
                  Outro plugin, funciona como um pré processador:<br>
                  <b>Autoprefixer</b> <br>
                  <a href="https://autoprefixer.github.io/">https://autoprefixer.github.io/</a><br>
                  <br>
                  * Dizem ser o mais utilizado, usado pelo Google e Twitter por exemplo.<br>
                  <br>
                  Documentação no github:<br>
                  <a href="https://github.com/postcss/autoprefixer">https://github.com/postcss/autoprefixer</a> <br>
                  <br>
                  Veja a imagem de um exemplo de entrada e saida de um código usando o Autoprefixer: <br>
                  <div class="imagem">
                      <img src="/assets/imagens/print-pagina-autoprefixer-entrada-codigo.png" 
                      alt="print da página de documentação do site, mostrando um exemplo de entrada de um código css.">
                  </div>
                  <br>
                  ** Saida, como fica o código depois de usar o Autoprefixer:<br>
                  <div class="imagem">
                      <img src="/assets/imagens/print-pagina-autoprefixer-saida-codigo.png" 
                      alt="print da página de documentação do site, mostrando um exemplo de como fica o código depois de usar o Autoprefixer.">
                  </div>
                  <br>
                  <br>
                  Outro plugin, para ver aplicação de regras:<br>
                  <b>Canisue</b> <br>
                  <a href="https://caniuse.com/">https://caniuse.com/</a><br>
                  <br>
                  * Para você pesquisar quais navegadores tem suporte aquilo que você quer usar.<br>
                  * Tipo, você pesquisa sobre 'margin', o site te dará informações, <br>
                  não só de margin, mas margin-top, margin-block, entre outros.<br>
                  E te dará informações de quais navegadores suportam ou não, o margin ou margin + alguma coisa.<br>
                  <br>
                  <br>
                  Outro plugin, para válida e revisa códigos CSS:<br>
                  <b>Stylelint</b> <br>
                  <a href="https://stylelint.io/">https://stylelint.io/</a><br>
                  <br>
                  * Básicamente fará a correção.<br>
                  * Erros de digitação, entre outros para não fazer nada errado.<br>
                  <br>
              </h2>
          </section>
          
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

export default Aula4;
