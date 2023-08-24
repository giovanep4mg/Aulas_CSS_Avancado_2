import React from 'react';
import { BrowserRouter as Router,  Link, Route, Routes} from 'react-router-dom';
import MenuEscolha from '../MenuEscolha/menuEscolha';
import styles from './menu.module.css'; 

import Aula1 from '../Aulas/Aula1/aula1';
import Aula2 from '../Aulas/Aula2/aula2';
import Aula3 from '../Aulas/Aula3/aula3';
import Aula4 from '../Aulas/Aula4/aula4';
import Aula5 from '../Aulas/Aula5/aula5';
import Aula6 from '../Aulas/Aula6/aula6';
import Aula7 from '../Aulas/Aula7/aula7';
import Aula8 from '../Aulas/Aula8/aula8';

import PageNotFound from '../PageNotFound/index';
import About from '../About/About';

import MenuAula1 from '../MenuAulas/menuAula1';
import MenuAula2 from '../MenuAulas/MenuAula2';
import MenuAula3 from '../MenuAulas/MenuAula3';
import MenuAula4 from '../MenuAulas/MenuAula4';
import MenuAula5 from '../MenuAulas/MenuAula5';
import MenuAula6 from '../MenuAulas/MenuAula6';
import MenuAula7 from '../MenuAulas/MenuAula7';
import MenuAula8 from '../MenuAulas/MenuAula8';
import Home from '../Home/Home';


function Menu() {
    return (
        <>
        <Router>
            <section className={styles.menu}>

                   {/* HEADER CABEÇARIO */}
                <header className={styles.header}>
                    <Link to="/">
                        <span>Aulas CSS Avançado</span>
                    </Link>
                    <nav>
                        <Link to="/aulas/aula1">Página Principal</Link>
                        <Link to="/about">Sobre</Link>
                    </nav>
                </header>
                     
                     {/* Menu das aulas */}
                <div className={styles["menu_algo1"]}>
                    <div>
                        <MenuEscolha/>
                    </div>
                </div>

                            {/* Aparecer a aula selecionada no Menu das aulas */}
                <div className={styles["menu_algo2"]}>
                    <div>
                        <Routes>
                            <Route path='/' element={<Home/>}></Route>
                            <Route path="/aulas/aula1" element={<Aula1/>} />
                            <Route path='/aulas/aula2' element={<Aula2/>}/>
                            <Route path='/aulas/aula3' element={<Aula3/>}/>
                            <Route path='/aulas/aula4' element={<Aula4/>}/>
                            <Route path="/aulas/aula5"  element={<Aula5/>}/>
                            <Route path="/aulas/aula6"  element={<Aula6/>}/>
                            <Route path="/aulas/aula7"  element={<Aula7/>}/>
                            <Route path="/aulas/aula8"  element={<Aula8/>}/>
                            <Route path="*"  element={<PageNotFound/>}/>
                            <Route path='/about' element={<About/>}></Route>
                        </Routes>
                    </div>
                </div>

                            {/* sub menu das aulas */}
                <div className={styles["menu_algo3"]}>
                    <Routes>
                        <Route path='/aulas/aula1' element={<MenuAula1/>}></Route>
                        <Route path='/aulas/aula2' element={<MenuAula2/>}></Route> 
                        <Route path='/aulas/aula3' element={<MenuAula3/>}></Route>
                        <Route path='/aulas/aula4' element={<MenuAula4/>}></Route>
                        <Route path="/aulas/aula5"  element={<MenuAula5/>}></Route>
                        <Route path="/aulas/aula6"  element={<MenuAula6/>}></Route>
                        <Route path="/aulas/aula7"  element={<MenuAula7/>}></Route>
                        <Route path="/aulas/aula8"  element={<MenuAula8/>}></Route>    
                    </Routes>        
                    
                </div>
            </section>
                
        </Router>
        </>
    );
}

export default Menu;