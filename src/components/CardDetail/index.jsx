import { Link, useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import styles from './cardDetail.module.scss'
import {ThemeContext} from '../../contexts/ThemeContext'
import { doc, getDoc } from 'firebase/firestore'
import db from '../../../db/firebase-config'
import Error from '../Error'
import { CartContext } from '../../contexts/CartContext'

const CardDetail = ({setCambio, cambio}) => {

  const [isInCart, setIsInCart] = useState(true);
  const [stateProduct, setStateProduct] = useState(false)
  const [producto, setProducto] = useState({})
  const {id} = useParams()
  const valueContext = useContext(ThemeContext)
  const valueCart = useContext(CartContext);
  

  const getProducto = async() => {
    const productDoc = doc(db, "Productos", id);
    const product = await getDoc(productDoc);
    if(product.exists()) { 
      let band = true;
      valueCart.forEach(e => {
      (e.nombre ==  product.data().nombre)? band = false : band=band;
    });
    setIsInCart(band);
      setProducto(product.data()) 
    } else {
      setStateProduct(true);
    }
    
  }

  const setProductInCart = () => {
      producto.cantidad = 1;
      valueCart.push(producto);
  }

  function toggleIsInCart() {
    setIsInCart(false);
    setCambio(!cambio);
    setProductInCart();
    Toastify({
      text: 'Se agrego el producto al carrito',
      duration: '1500',
      gravity: 'bottom',
      position: 'left',
      style: {
          background: 'rgb(99, 99, 99) ',
      }
  }).showToast();
  }

  useEffect(() => {
    getProducto();
  }, [])
  
  if(stateProduct){
    return(<Error />)
  }
  return (
    <div className={valueContext? styles.divDetalleDark : styles.divDetalleLight}>
        <div className={styles.imgDetail}>
          <img src={producto.rutaImg} alt={producto.nombre} />
        </div>
        <div className={styles.textDetail}>
          <div >
            <h2>{producto.nombre}</h2>
            <h5>producto oficial del Atletic club Montes de Oca</h5>
          </div>
          <div className={styles.descripcion}>
            <h3>Descripcion: </h3>
            <h4>{producto.descripcion}</h4>
          </div>
          <div className={styles.precioBtn}>
            <h3> ${producto.precio}</h3>
            {isInCart? <Link  onClick={toggleIsInCart} ><p>Agregar al carrito</p></Link> : <Link to="/cart"> <p>ir al Carrito</p></Link>}
          </div>
        </div>
    </div>
  )
}

export default CardDetail



