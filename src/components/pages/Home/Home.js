import React from 'react';
import styles from './home.module.css';

function Home(){
    return(
        <>
        <section className={styles.tudo}>
            <div>
                <h1>Aulas sobre:</h1>
                <h1>CSS AVANÇADO</h1>
            </div>
            <div className={styles.copy}>
                <h2>
                    Criado por:<br/>
                    &copy; 2023 Giovani Teodoro Martins . Todos os direitos reservados.
                </h2>
            </div>
        </section>
        </>
    );
}
export default Home;