import { useContext } from 'react'
import styles from './Card.module.scss'
import {Link} from 'react-router-dom'
import { ThemeContext } from '../../contexts/ThemeContext'

const Card = ({producto}) => {

  const value = useContext(ThemeContext);
  return (
    <Link to={'/item/' + producto.id}>
    <div className={value? styles.cardDark : styles.cardLight}>
        <h4>{producto.nombre}</h4>
        <img src={producto.rutaImg} alt=""/>
        <h4> ${producto.precio}</h4>
    </div>
    </Link>
  )
}

export default Card