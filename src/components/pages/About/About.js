import React from 'react';

import styled from 'styled-components';

const Tudo = styled.section`
    padding-top: 126px;
    margin-top: 5px;
    text-align: center;
    text-decoration: none;
    background-color: rgba(111, 217, 192, 0.489);
    padding-bottom: 200px;

    @media (max-width: 1440px){
        padding-top: 20px;
        height: 125%;
    }
    @media (max-width: 769px){
        padding-top: 0px;
    }
    @media (max-width: 426px){
        padding-top: 0px;
    }
    @media (max-width: 376px){
        padding-top: 0px;
        margin-top: '';
        text-align: center;
    }
    @media (max-width: 321px){
        padding-top: 0px;
        margin-top: '';
        text-align: center;
    }    
`;

const Titulo = styled.h1`
    color: #9c330ce6;
    text-decoration: underline;
    font-size: 4.2rem;
    padding-top: 100px;

    @media (max-width: 1440px){
        font-size: 55px;
        padding-top: 10px;
    }
    @media (max-width: 769px){
        font-size: 30px;
        padding-top: 9px;
    }
    @media (max-width: 426px){
        font-size: 30px;
        padding-top: 9px;
    }
    @media (max-width: 376px){
        font-size: 20px;
        padding-top: 4px;
    }
    @media (max-width: 321px){
        font-size: 20px;
        padding-top: 4px;
    }
`;

const Description = styled.h3`
    color: #1b0603d6;
    text-decoration: none;
    font-size: 2rem;

    @media (max-width: 1440px){
        font-size: 27px;
        margin-top: 30px;
    }
    @media (max-width: 769px){
        font-size: 20px;
        margin-top: 33px;
    }
    @media (max-width: 426px){
        font-size: 20px;
        margin-top: 33px;
    }
    @media (max-width: 376px){
        font-size: 18px;
        margin-top: 30px;
    }
    @media (max-width: 321px){
        font-family: inherit;
        font-size: 16px;
        margin-top: 30px;
    }
`;

function About(){
    return (
        <>
        <Tudo>
            <div>
                <Titulo>Informações sobre esse site</Titulo>
            </div>
            <div>
                <Description>
                    <p>
                        Esse site foi criado como um bloco de notas, <br/>
                        sobre o curso de CSS Avançado <br/>
                        <br/>
                        Foi feito usando o React.js, o styled components,<br/>
                        e também o  CSS Module e outras coisas.<br/>
                        <br/>
                    </p>
                    <p>
                        Obrigado pela sua visita e volte sempre!<br/>
                    </p>
                </Description>
            </div>
        </Tudo>
        </>
    );
}
export default  About;