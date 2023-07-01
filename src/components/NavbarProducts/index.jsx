import { useContext } from 'react';
import styles from './Navbar.module.scss'
import { NavLink } from 'react-router-dom'
import { ThemeContext } from '../../contexts/ThemeContext';

const NavbarProducts = () => {

  const value = useContext(ThemeContext);

  return (
    <div className={value? styles.navbarCategoriasDark : styles.navbarCategoriasLight}>
        <NavLink to="/category/para el viaje">
          <p>Para el viaje</p>
        </NavLink>
        <NavLink to="/category/accesorios">
          <p>accesorios</p>
        </NavLink>
        <NavLink to="/category/recipientes">
          <p>Recipientes</p>
        </NavLink>
        <NavLink to="/category/otros">
          <p>Otros</p>
        </NavLink>
    </div>
  )
}

export default NavbarProducts