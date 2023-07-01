import { useContext, useEffect, useState } from "react";
import styles from "./CartItem.module.scss";
import {Link} from "react-router-dom"
import { CartContext } from "../../contexts/CartContext";

const CartItem = ({i, setCambio, cambio}) => {  
    const valueCart = useContext(CartContext);
    const [producto, setProducto] = useState({})
    const masCantidad = () => {
       valueCart[i].cantidad++;
       setCambio(!cambio);
    }
    const menosCantidad = () => {
        if(valueCart[i].cantidad > 1){
            valueCart[i].cantidad--;
            setCambio(!cambio);
        }
     }
    
    useEffect(() => {
      setProducto(valueCart[i]);
    }, [])
    
    return (
        <div className={styles.divCartItem}>
            <img src={producto.rutaImg} alt={producto.nombre} />
            <div className={styles.divTexto}>
                <h3>{producto.nombre}</h3>
                <h6>producto oficial del Atletic club Montes de Oca</h6>
                <h4>Precio: ${producto.precio}</h4>
            </div>
            <div className={styles.cant}>
                <Link onClick={masCantidad} ><h3>+</h3></Link> <h3>{producto.cantidad}</h3> <Link onClick={menosCantidad}><h3>-</h3></Link>
            </div>
        </div>
    )
}

export default CartItem