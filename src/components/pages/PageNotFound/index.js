
import styles from './pagenot.module.css';
import erro404 from './imagens/erro-4041.jpg';


function PageNotFound(){
    return (
      
      
        
            <section className={styles.container}>
                <h2>Ops! Página não localizada!</h2>
                <img src={erro404} alt="logo da página naolocalizada." ></img>
            </section>

       
    );
}
export default PageNotFound;