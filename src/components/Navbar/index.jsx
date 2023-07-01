import { NavLink } from "react-router-dom"
import styles from './Navbar.module.scss'
import {BsCart4} from 'react-icons/Bs'
import { useContext, useEffect } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"
import { PerfilContext } from "../../contexts/PerfilContext"
import { CartContext } from "../../contexts/CartContext"

const Navbar = ({cambio}) => {
  
  const valueTheme = useContext(ThemeContext);
  const valuePerfil = useContext(PerfilContext);
  const valuCart = useContext(CartContext);

  function CartItemsCant(productos) {
    let sumaCant=0;
    productos.forEach(e => {
      sumaCant += e.cantidad;
    });
    return ( sumaCant);
  }
  useEffect(() => {
    
  }, [cambio])
  
  return (
    <div className={valueTheme? styles.headerDark : styles.headerLight}>
      <NavLink to='/'>
        <h1>ACMO</h1>
      </NavLink>
      <div className={styles.navbar}>
      <NavLink to="/Perfil">
        
          <div className={valuePerfil.nombre? styles.divPerfilNavbar : "none"}>
          <img src="https://i.ibb.co/DVvmryR/image.png" alt="" />
            <p>{valuePerfil.nombre}</p>
          </div>
        
      </NavLink>
        <NavLink to='/Home'>
          <p>Home</p>
        </NavLink>
        <NavLink to='/'>
          <p>Productos</p>
        </NavLink>
        <NavLink className={styles.cart} to='/Cart'>
          <BsCart4 />
          <p>{CartItemsCant(valuCart)}</p>
        </NavLink>
            </div>
      </div>
  )
}

export default Navbar