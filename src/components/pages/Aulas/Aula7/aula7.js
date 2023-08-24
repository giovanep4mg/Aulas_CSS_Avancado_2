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

const Aula7 = () => {
  const htmlContent = `
  <!--Pagina5-->
  <!DOCTYPE html>
  <html lang="pt-br">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="description" content="Esta página é sobre o Web Components.">
      <title>Web Components</title>
  </head>
  <body>
      <main class="toda-pagina">
          <!--Web Components-->
          <section class="description" id="Web-Components">
              <header>
                  <h1 class="titulo">Web Components</h1>
              </header>
              <h2>
                  Documentação:<br>
                  <a href="https://developer.mozilla.org/pt-BR/docs/Web/API/Web_components"
                  alt="Link que leva ao site da documentação do Web Components">
                      Documentação Web Components
                  </a><br>
                  <br>
                  Web Components é uma suíte de diferentes tecnologias que permite a criação de elementos,<br> 
                  customizados reutilizáveis — com a funcionalidade separada do resto do seu código — <br>
                  e que podem ser utilizados em suas aplicações web. <br>
                  <br>
              </h2>
          </section>
          <!--Custom Elements-->
          <section class="description" id="Custom-Elements">
              <header>
                  <h1 class="titulo">Elementos customizados</h1>
              </header>
              <h2>
                  Você pode criar seu próprio elemento "tag", com caracteristicas próprias e usar várias vezes.<br>
                  Exemplo:<br>
                  * Você cria um botão especial que mudar de cor ao ser clicado, a configuração de mudar de cora já está nele,<br>
                  onde você adicionar <b>< meu-botao > < /meu-botao> </b>, ele vai funcionar.<br>
                  <br>
                  Permitir criar elementos personalizados herdando caracteristicas de outro.<br>
                  <br>
                  Fazendo isso você evita usar muitas "DIVs" no seu código.<br>
                  <br>
                  Documentação:<br>
                  <a href="https://developer.mozilla.org/pt-BR/docs/Web/API/Web_components/Using_custom_elements">Documentação</a><br>
                  <br>
              </h2>
          </section>
          <!--Using shadow DOM-->
          <section class="description" id="Usando-Shadow-Dom">
              <header>
                  <h1 class="titulo">Usando shadow DOM</h1>
              </header>
              <h2>
                  Dom => é uma API de documentação de HTML.<br>
                  <br>
                  Aparti dai podemos fazer manipulações nessa arvoré, sem atrapalha nada.<br>
                  É bom conhecer <b>JavaScript</b> pois o DOM faz parte dessa linguagem.<br>
                  <br>
                  Ele permite que você crie um espaço isolado dentro de um elemento da página da web.<br>
                  O shadow DOM é como criar um espaço privado e isolado para os elementos e estilos de um componente da web,<br>
                  para que eles não causem confusão com o resto da página.<br>
                  Isso torna a construção de sites mais organizada e eficiente.<br>
                  <br>
                  É como se você criasse um <b>quarto</b> e dentro dele adicionar outro <b>quarto</b>,<br>
                  eles são únicos, se completam e não terão conflitos, erros.<br>
                  <br>
                  Exemplo de como fica num código simples de html:<br>
                  * O código é para criar um contador.<br>
                  <b>A parte do styles, estilo dentro do head</b> <br>
                  * Só para ter um estilo o contador que foi criado<br>
                  <div class="imagem">
                      <img src="/assets/imagens-Web-Components/print-codigo-exemplo-Dom-style-pagina.png" 
                      alt="print do código html, parte do styles que foi criado.">
                  </div>
                  <br>
                  <b>O html do site, o conteúdo do site</b> <br>
                  * Foi criado simplesmente uma "div" dentro dela um h2 e outra div <br>
                  <div class="imagem">
                      <img src="/assets/imagens-Web-Components/print-codigo-parte-html-principal-Dom-exemplo.png" 
                      alt="print do código html, da parte principal, o conteúdo do site.">
                  </div>
                  <br>
                  <b>O java script da página, onde entra o shadow DOM</b> <br>
                  * Aqui foi criado o shadom DOM, que adicionou um "span" e "buttons" ao código.<br>
                  <div class="imagem">
                      <img src="/assets/imagens-Web-Components/print-codigo-parte-script-DOM-exemplo.png" 
                      alt="print do código html, de onde foi implementado o DOM, no script.">
                  </div>
                  <br>
                  <br>
                  Documentação:<br>
                  <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM">Documentação</a><br>
                  <br>
              </h2>
          </section>
          <!--Template Elements-->
          <section class="description" id="Template-Elements">
              <header>
                  <h1 class="titulo">Template Elements</h1>
              </header>
              <h2>
                  <p>
                      Eles permitem definir conteúdo HTML que não é renderizado imediatamente, mas pode ser clonado e usado posteriormente. Isso é útil para criar modelos reutilizáveis que podem ser preenchidos com dados dinâmicos.
                  </p>
                  <br>
                  <p>
                      <b>Definição do Template</b>: Você cria um elemento <b>< template ></b> em seu HTML. Dentro deste elemento, você coloca o código HTML que serve como modelo. Isso pode incluir qualquer estrutura de marcação, como elementos, texto e até mesmo outros elementos Web Components.
                  </p>
                  <br>
                  <p>
                      <b>Conteúdo Oculto</b>: O conteúdo dentro do <b>< template ></b> não é renderizado na página quando a página é carregada. Ele permanece oculto.
                  </p>
                  <br>
                  <p>
                      <b>Clone e Preenchimento</b>: Quando você deseja usar o conteúdo do template, você pode cloná-lo e preenchê-lo com dados dinâmicos. Isso é especialmente útil para criar várias instâncias do mesmo modelo com diferentes informações.
                  </p>
                  <br>
                  <p>
                      <b>Inserção no DOM</b>: O clone do template preenchido pode ser inserido no DOM (a estrutura da página) onde você quiser. Isso permite criar componentes personalizados com base no template.
                  </p>
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

export default Aula7;