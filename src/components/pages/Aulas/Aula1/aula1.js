/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import '../styles.css';

const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        behavior: 'smooth',
        top: section.offsetTop,
      });
    }
  };

const Aula1 = () => {
  const htmlContent = `
  <!--pagina 1-->

  <!DOCTYPE html>
  <html lang="pt-br">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="description" 
      content="Esta página é sobre CSS avançado, falando sobre os pré-processadores, vantagens e desvantagens de usar ele.">
      
      <link rel="stylesheet" href="styles.css">

      <title>CSS Avançado</title>
  </head>
  <body>
        <main class="toda-pagina">
            <section id="o-que-veremos">
            <!-- Conteúdo da primeira seção -->
                <!--O que veremos nesse curso-->
                <section class="description">
                    <header>
                        <h1 class="titulo">O que veremos nesse curso</h1>
                    </header>
                    <h2>
                        * Pré processadores CSS, como:<br>
                        SASS e LESS<br>
                        <br>
                        * Variáveis, loopings, Funções e opreações para Pré-processadores CSS.<br>
                        <br>
                        * PostCSS <br>
                        <br>
                        * Shadow DOW <br>
                        <br>
                        * Styled Components <br>
                        <br>
                        * CSS Modules <br>
                        <br>
                    </h2>
                </section>
            </section>
            <section id="pre-processadores">
                <!--PRÉ-PROCESSADORES-->
                <section class="description">
                    <header>
                        <h1 class="titulo">PRÉ-PROCESSADORES</h1>
                    </header>
                    <h2>
                        * O CSS, não possui dinamismo e outros recursos.<br>
                        * Se o programa possuir muitos código, fica mais complicado ajustar todo CSS.<br>
                        <br>
                        O que são Pré-processadores:<br>
                        * São interpretadores de códigos.<br>
                        * Permiti gerar CSS apartir de um aquivo de outra sintaxe, conforme o pré-processador utilizado.<br>
                        * Leem todo código gerado e converte para CSS.<br>
                        * Possui funcionalidades que não existe no CSS puro, por exemplo herança.<br>
                        <br>
                        Bons exemplos, de pré-processadores são:<br>
                        * Less <br>
                        * Sass <br>
                        * Stylus <br>
                        <br>
                    </h2>
                </section>
            </section>
            <section id="vantagens-desvantagens">
                <!--Vantagens e Desvantagens de usar os pré-processadores-->
                <section class="description">
                    <header>
                        <h1 class="titulo" > Vantagens e Desvantagens de usar os pré-processadores</h1>
                    </header>
                    <h2>
                        * A maioria permite a criação de variáveis, Condicionais, Repetiçao, Imports /Externas, Funções e Mixins.<br>
                        * Facilita a manutenção do código.<br>
                        * Permite um código mais limpo.<br>
                        * Códigos CSS flexíveis e reutilizáveis.<br>
                        <br>
                        <b>Desvantagens</b><br>
                        * Aumento de complexidade em relação ao CSS puro.<br>
                        * Baixo desempenho devido a complexidade.<br>
                        <br>
                    </h2>
                </section>
            </section>
          
          
          
          <br>
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

export default Aula1;