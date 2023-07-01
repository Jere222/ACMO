import {Routes, Route, Link} from 'react-router-dom';
import './App.css';
import ItemListContainer from './components/itemListContainer';
import Home from './components/Home'
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import { ThemeContext } from './contexts/ThemeContext';
import {  useState } from 'react';
import {BsFillMoonFill, BsFillSunFill} from 'react-icons/Bs'
import CardDetail from './components/CardDetail';
import Login from './components/Login'
import { PerfilContext } from "./contexts/PerfilContext";
import { CartContext } from "./contexts/CartContext";
import Perfil from './components/Perfil';



function App() {
  let localTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : true;
  localTheme = JSON.parse(localTheme)
  const [isDark, setIsDark] = useState(localTheme)
  const [perfil, setPerfil] = useState({})
  const [cart, setCart] = useState([])
  const [cambio, setCambio] = useState(false)
  const themeIcon = isDark? <BsFillMoonFill/> : <BsFillSunFill />

  const ToggleTheme = () => {
    setIsDark(!isDark);
    localStorage.setItem('theme', !isDark);
  }

 

  return (
    <ThemeContext.Provider value={isDark}>
    
    <CartContext.Provider value={cart}>
    <PerfilContext.Provider value={perfil}>
      <div className={isDark ? "containerDark container" : "containerLight container"}>
        <p className={!perfil.nombre? 'login' : 'none'}> <Link to="Login">Iniciar sesion</Link> | <Link >Registrarse</Link></p>
        <Navbar cambio={cambio}/>
        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/category/:id' element={<ItemListContainer />}/>
          <Route path='/item/:id' element={<CardDetail setCambio={setCambio} cambio={cambio} />}/>
          <Route path='/Home' element={<Home />}/>
          <Route path='/Cart' element={<Cart setCambio={setCambio} cambio={cambio}/>}/>
          <Route path='/Login' element={<Login setPerfil={setPerfil}/>}/>
          <Route path='/Perfil' element={<Perfil />}/>
        </Routes>
        <a className={isDark ? 'btnThemeDark' : 'btnThemeLight'} onClick={ToggleTheme}>{themeIcon}</a>
      </div>
    </PerfilContext.Provider>
    </CartContext.Provider>
    
    </ThemeContext.Provider>
  )
}

export default App
