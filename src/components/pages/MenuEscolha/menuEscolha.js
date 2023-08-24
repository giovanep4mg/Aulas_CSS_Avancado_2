import {  Link  } from "react-router-dom";



function MenuEscolha(){
    return(
        <>
        <section>
            <div>
                <h1>Aulas</h1>
            </div>
            <div>
                <h3>
                <div>
                    <Link to='../Aulas/Aula1'>Inicio</Link>
                    <Link to='../Aulas/Aula2'>LESS</Link>
                    <Link to='../Aulas/Aula3'>SASS</Link>
                    <Link to='../Aulas/Aula4'>POST CSS</Link>
                    <Link to='../Aulas/Aula5'>Styled Components</Link>
                    <Link to='../Aulas/Aula6'>CSS Module</Link>
                    <Link to='../Aulas/Aula7'>Web Components</Link>
                    <Link to='../Aulas/Aula8'>Google Mobile-</Link>
                </div>
                </h3>
            </div>
        </section>
        </>
    )
}
export default MenuEscolha;