import {BrowserRouter, Route, Routes} from 'react-router-dom';
import About from './components/pages/About/About';
import PageNotFound from './components/pages/PageNotFound';
import Menu from './components/pages/Menu/menu';
import Aula1 from './components/pages/Aula1/aula1';
import MenuEscolha from './components/pages/MenuEscolha/menuEscolha';


function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Menu/>}></Route>
                <Route path="/menu" element={<Menu/>}></Route>

                <Route path='/aula1' element={<Aula1/>}></Route>

                <Route path='/menuEscolha' element={<MenuEscolha/>}></Route>


                <Route path='/about' element={<About/>}></Route>
                <Route path='*' element={<PageNotFound/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes;