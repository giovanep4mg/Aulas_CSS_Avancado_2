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

const Aula8 = () => {
  const htmlContent = `
  <!--Pagina5-->
  <!DOCTYPE html>
  <html lang="pt-br">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="description" content="Esta página é sobre o Google Mobile, sites para verificar seu projeto ou página.">
      <title>Google Mobile</title>
  </head>
  <body>
      <main class="toda-pagina">
          <!--Google Mobile-->
          <section class="description" id="Google-Mobile">
              <header>
                  <h1 class="titulo">Google Mobile - Teste de compatibilidade</h1>
              </header>
              <h2>
                  Ferramenta para fazer validações no seu site, <br>
                  você pode usar o código ou url dele .<br>
                  <br>
                  Para realizar teste com o código, não fará uma análise muito correta,<br>
                  pois vai faltar código complementares .<br>
                  <br>
                  <a href="https://search.google.com/test/mobile-friendly?hl=pt-br">teste mobile</a> <br>
                  <br>
                  <br>
                  O site fará a verificação e te dará algumas sugestões,<br>
                  você que decide se quer ou não modificar, arrumar seu código/site.<br> 
                  <br>
                  <br>
              </h2>
          </section>
          <!--Google Pages-->
          <section class="description" id="Google-pages-Speed-Tools">
              <header>
                  <h1 class="titulo">Google Pages Speed Tools</h1>
              </header>
              <h2>
                  Ferramenta para fazer a verificação da velocidade do seu site.<br>
                  <br>
                  <a href="https://pagespeed.web.dev/?utm_source=psi&utm_medium=redirect">Page Speed</a> <br>
                  <br>
                  <br>
                  Vai ter algumas sugestões do que pode ser melhorado,<br>
                  mas você decide se é mesmo necessário fazer essas melhoria ou não.<br>
                  <br>
              </h2>
          </section>
          <!--Conclusão-->
          <section class="description" id="Conclusão">
              <header>
                  <h1 class="titulo">Conclusão</h1>
              </header>
              <h2>
                  O que vimos:<br>
                  <b>SASS</b> e <b>LESS</b> <br>
                  * Facilitam o uso do CSS, usam variáveis e outras coisas.<br>
                  <br>
                  <b>CSS Module</b> <br>
                  * Para trabalhar mais com CSS puro.<br>
                  <br>
                  <b>Styled-Components</b> <br>
                  * Para usar mais com Java Script.<br>
                  <br>
                  <b>Web Components</b> <br>
                  * Personalizar e criar componentes, elementos "tags".<br>
                  <br>
                  <b>Teste de Compatibilidade</b> <br>
                  * Sites para verificar se o seu projeto, está compatível com mobile e sua velocidade.<br>
                  <br>
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

export default Aula8;