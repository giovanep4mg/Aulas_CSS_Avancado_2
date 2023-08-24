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

const Aula5 = () => {
  const htmlContent = `
  <!--Pagina5-->

  <!DOCTYPE html>
  <html lang="pt-br">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="description" content="Esta página fala sobre o pré-processador Styled Components.">
      <title>Styled Components</title>
  </head>
  <body>
      <main class="toda-pagina">
          <!--Componentes Estilizados-->
          <section class="description" id="Componentes-Estilizados">
              <header>
                  <h1 class="titulo">Componentes Estilizados</h1>
              </header>
              <h2>
                  <b>styled components</b> <br>
                  É uma biblioteca para React/React Native,<br>
                  que permite o uso de estilos a nivel componentes.<br>
                  <br>
                  É baseado em JavaScript com CSS.<br>
                  <br>
                  <b>Principais vantagens:</b><br>
                  * Evita erros de nomes de classe.<br>
                  * Exclussão mais fácil de CSS:<br>
                  -> Se excluir um componente não usado, todos os seus estilos serão excluidos juntos.<br>
                  * Há uma ferramenta para detectar se o componente está ou não sendo usado.<br>
                  * Fácil manutenção.<br>
                  <br>
                  * Documentação:<br>
                  <a href="https://styled-components.com/docs">https://styled-components.com/docs</a> <br>
                  <br>
              </h2>
          </section>
          <!--Principais Vantagens-->
          <section class="description" id="Principais-vantagens">
              <header>
                  <h1 class="titulo">Principais Vantagens</h1>
              </header>
              <h2>
                  <b>Principais Vantagens</b> <br>
                  * Evita erros de nomes de classes, tem nomes exclusivo para cada estilo.<br>
                  * Para excluir é muito mais fácil,...<br>
                  * Fácil manutenção. <br>
                  * Só injeta os estilos necessário, ou seja diminui a quantidade de código carregado.<br>
                  -> isso quando o usuário abrir a página.<br>
                  * Adaptação de estilo de um componente bem é simples e intuitivo,<br>
                  sem precisar gerenciar vários lugares, dezenas de classes.<br>
                  <br>
                  * Documentação:<br>
                  <a href="https://styled-components.com/docs">https://styled-components.com/docs</a> <br>
                  <br>
              </h2>
          </section>
          <!--Instalando Styled Components-->
          <section class="description" id="Instalando-Styled-Components">
              <header>
                  <h1 class="titulo">Instalando Styled Components</h1>
              </header>
              <h2>
                  Vamos instalar usando o Node.js, tem que está na versão acima da 9.<br>
                  <br>
                  Verifique se você possui o Node.js e npm, instalado em seu computador.<br>
                  <br>
                  No Vscode, abra uma pasta, depois abra o terminal do VScode e digite esses comandos:<br>
                  <b> Instalar usando o NPM</b> <br>
                  <br>
                  <b>npm install create-react-app</b> <br>
                  dê enter e vai começar a instalar .<br>
                  <br>
                  * Criação do Projeto, use um dos dois comandos para criar o projeto:<br>
                  <b>npm init react-app *meu-app</b> <br> 
                  *nome do seu projeto. <br>
                  <br>
                  <b>npx create-react-app *meu-app</b> <br>
                  *nome do seu projeto.<br>
                  <br>
                  * Instalando o styled components:<br>
                  -> Importante verificar se você está dentro da pasta do seu projeto, que você acabou de criar.<br>
                  <br>
                  <b>npm install styled-components</b> <br>
                  <br>
                  * Para rodar/iniciar o projeto:<br>
                  <b>npm start</b> <br>
                  <br>
                  * Para Fechar a conexão, encerrar o projeto:<br>
                  <b>ctrl + c </b> teclas control + C <br>
                  <br>
                  <br>
              </h2>
          </section>
          <!--Como usar o Styled Components-->
          <section class="description" id="Como-usar-o-Styled-Components">
              <header>
                  <h1 class="titulo">Como usar o Styled Components</h1>
              </header>
              <h2>
                  ** Exemplo de uso: <br>
                  // Para importa <br>
                  <b>import styled from 'styled-components';</b> <br>
                  <br>
                  // Declara a variável, será constante por que não terá alteração.<br>
                  <b>const Title = styled.h1 </b> <br>
                  _____color: red; => vai receber essa cor<br> 
                  <b>;</b><br> * lembre-se desses sinais,  ;  <br>
                  <br>
                  // Na hora de usar, você vai usar ela como uma tag <br>
                  <b> < Title > </b> Página 01 <b> < /Title > </b> <br>
                  <br>
                  Vamos ver isso na prática com ajuda de imagens do código:<br>
                  * Primeiro vamos importa o styled no arquivo <b>App.js</b> <br>
                  <br>
                  * Criar um exemplo simples de uma página HTML: <br>
                  Veja o exemplo na imagem abaixo: <br>
                  <div class="imagem">
                      <img src="/assets/imagens/styled-components-print-codigo-html-criar-1.png" 
                      alt="Print do código do styled, parte do html como foi criado.">
                  </div>
                  <b>Note que as tags possui nomes diferentes do que normalmente é colocado, serão </b>variáveis. <br>
                  <br>
                  Agora vamos declarar as variáveis, do tipo <b>const</b> constante.<br>
                  Veja o exemplo na imagem abaixo: <br>
                  <div class="imagem">
                      <img src="/assets/imagens/styled-components-print-codigo-html-criar-variaveis.png" 
                      alt="Print do código do styled, parte do html, mostrando as variáveis constantes.">
                  </div>
                  <br>
              </h2>
          </section>
          <!--Exemplo mais completo-->
          <section class="description" id="Exemplo-mais-complexo">
              <header>
                  <h1 class="titulo">Styled Components exemplo mais completo</h1>
              </header>
              <h2>
                  Vamos criar outro projeto, com outras páginas e dá mais detalhes.<br>
                  <b>Criando projeto:</b> <br>
                  * No VScode, escolha uma pasta onde será criado, abra o Vscode nessa pasta.<br>
                  * Agora abra o terminal e digite esses comandos:<br>
                  <b>npm install create-react-app </b> <br>
                  <b>npm init react-app *meu-app</b> *nome do seu projeto. <br>
                  <br>
                  * Instalando o styled components:<br>
                  -> Importante verificar se você está dentro da pasta do seu projeto, que você acabou de criar.<br>
                  <br>
                  <b>npm install styled-components</b> <br>
                  <br>
                  Veja o print do VScode, dos arquivos que foram criados:<br>
                  <div class="imaggem">
                      <img src="/assets/imagens/print-vscode-arquivos-criados.png" 
                      alt="print da tela do VScode, dos arquivos que foram criados.">
                  </div>
                  <br>
                  Agora vamos criar dentro da pasta "src", uma pasta chamada <b>components</b> .<br>
                  Dentro dela vamos criar os arquivos: footer.js e header.js <br>
                  <br>
                  Veja na imagem como foi criado, o arquivo footer.js:<br>
                  <div class="imagem">
                      <img src="/assets/imagens/print-código-footer-completo.png" 
                      alt="print do código, mostrando como foi feito o footer.js">
                  </div>
                  <br>
                  Agora veremos os detalhes:<br>
                  <b>Aqui será importado o React e o Styled para serem usados aqui.</b><br>
                  <div class="imagem">
                      <img src="/assets/imagens/print-código-footer-parte-import.png" 
                      alt="print do código, mostrando como foi feito o footer.js, destacando os import">
                  </div>
                  <br>
                  <b>variável "Rodape"</b>, vai receber a tag => "p" e as configurações CSS.<br>
                  <div class="imagem">
                      <img src="/assets/imagens/print-código-footer-parte-criar-variavel-rodape.png" 
                      alt="print do código, mostrando como foi feito o footer.js, destacando a variável Rodape">
                  </div>
                  <br>
                  <b>variável Footer</b>, que será a tag "footer" e que vai receber a variável "Rodape"<br>
                  <div class="imagem">
                      <img src="/assets/imagens/print-código-footer-parte-criar-variavel-footer.png" 
                      alt="print do código, mostrando como foi feito o footer.js, destacando a variável Footer">
                  </div>
                  <br>
                  Por fim você exporta tudo isso:<br>
                  <b>export default Footer; </b> <br>
                  <br>
                  Finalizamos a criação do arquivo "footer.js" <br>
                  <br>
                  Para criar o arquivo "header.js" é praticamente igual, mudando algumas palavras.<br>
                  Veja na imagem o print do código: <br>
                  <div class="imagem">
                      <img src="/assets/imagens/print-codigo-header-completo.png" 
                      alt="print do código, mostrando como foi feito o header.js">
                  </div>
                  <br>
                  <br>
                  <b>Criando as páginas</b><br>
                  Agora dentro da pasta "src", iremos criar outra pasta com o nome "pages".<br>
                  Dentro da pasta "pages", vamos criar 3 arquivos .js :<br>
                  <br>
                  <b>sobre.js</b> <br>
                  Veja na imagem o print do código:<br> 
                  <div class="imagem">
                      <img src="/assets/imagens/print-codigo-completo-sobre-js.png" 
                      alt="print do código, mostrando como foi feito o sobre.js">
                  </div>
                  <br>
                  As outras são praticamente iguais.<br>
                  <b>contato.js</b> <br>
                  Veja na imagem o print do código:<br> 
                  <div class="imagem">
                      <img src="/assets/imagens/print-codigo-contato-js-completo.png" 
                      alt="print do código, mostrando como foi feito o contato.js">
                  </div>
                  <br>
                  <br>
                  <b>home.js</b> <br>
                  Veja na imagem o print do código:<br> 
                  <div class="imagem">
                      <img src="/assets/imagens/print-codigo-home-js-completo.png" 
                      alt="print do código, mostrando como foi feito o home.js">
                  </div>
                  <br>
                  <br>
                  Agora vamos criar o index.js, que é onde está definido as rotas de acesso.<br>
                  Veja na imagem abaixo como fica o códgio:<br>
                  <div class="imagem">
                      <img src="/assets/imagens/print-codigo-index-ja-completo.png" 
                      alt="print do código, mostrando como foi feito o index.js">
                  </div>
                  <br>
                  <br>
                  Criaremos agora o <b>App.js</b>:<br>
                  Veja na imagem abaixo como fica o códgio:<br>
                  <div class="imagem">
                      <img src="/assets/imagens/print-codigo-app-js-imports.png" 
                      alt="print do código, mostrando como foi feito o App.js, a parte de import">
                  </div>
                  Neste trecho, estão sendo importados vários módulos necessários para o funcionamento do aplicativo, incluindo o React, estilos do PrimeReact, componentes personalizados (Header e Footer), componentes do PrimeReact (Menubar) e utilitários do React Router (withRouter) para fornecer as propriedades de roteamento para o componente.
                  <br>
                  <br>
                  <b>2 parte do código:</b> <br>
                  <div class="imagem">
                      <img src="/assets/imagens/print-codigo-app-js-2parte.png" 
                      alt="print do código, mostrando como foi feito o App.js, a parte da const variável">
                  </div>
                  Aqui, é definido um componente estilizado usando a biblioteca styled-components. Esse componente, chamado DivMain, é estilizado para ter uma cor de texto preta e um tamanho de fonte de 10px.
                  <br>
                  <br>
                  <b>3 parte do código:</b> <br>
                  <div class="imagem">
                      <img src="/assets/imagens/print-codigo-app-js-3parte.png" 
                      alt="print do código, mostrando como foi feito o App.js, a parte da classe">
                  </div>
                  <div class="imagem">
                      <img src="/assets/imagens/print-codigo-app-js-4parte.png" 
                      alt="print do código, mostrando como foi feito o App.js, a parte do retorno da classe">
                  </div>
                  <br>
                  <br>
                  * Para rodar o programa: <b> npm start </b> .<br>
                  <br>
                  Veja como fica a página depois de tudo que criamos:<br>
                  <div class="imagem">
                      <img src="/assets/imagens/print-pagina-site-inteiro-final.png" 
                      alt="print da página, depois de rodar usando o npm start.">
                  </div>
                  <br>
                  <br>  
              </h2>
          </section>
          <!--Exercício styled components-->
          <section class="description" id="Exercício-Styled-Components">
              <header>
                  <h1 class="titulo">Exercício styled components</h1>
              </header>
              <h2>
                  * Criar um projeto com 5 páginas, simulando um site.<br>
                  * Utilizar styled components além de CSS num arquivo separado.<br>
                  * Tratar usabilidade e boas práticas.<br>
                  <br>
                  <br>
                  Exercício:<br>
                  <a href="https://project-site-base2.vercel.app/">exercício criado</a>
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

export default Aula5;
