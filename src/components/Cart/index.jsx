import { useContext, useEffect, useState } from 'react'
import styles from './Cart.module.scss'
import { CartContext } from '../../contexts/CartContext';
import CartItem from '../CartItem'
import { Link } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import db from '../../../db/firebase-config';
import {PerfilContext} from '../../contexts/PerfilContext'

const Cart = ({setCambio, cambio}) => {
  const [productos, setProductos] = useState([]);
  const valueCart = useContext(CartContext);
  const ordenRef = collection(db, "Orders");
  const valuePerfil = useContext(PerfilContext);

  useEffect(() => {
    setProductos(valueCart);
  }, [cambio])
  
  if(!(productos.length)){
    return(
      <div className={styles.divNohay}>
        <h4>Todavia no haz agragado nada al carrito</h4>
      </div>
    
    )
  }

  function precioCant() {
    let sumaPrecios=0, sumaCant=0;
    productos.forEach(e => {
      sumaPrecios += e.precio * e.cantidad;
      sumaCant += e.cantidad;
    });
    return ([sumaPrecios, sumaCant]);
  }

  const vaciarCarrito = () => {
    valueCart.length=0;
    setCambio(!cambio);
  }
  const setOrden = async() => {
    if(valuePerfil.nombre){
      const docAux = {
        'comprador': valuePerfil.nombre,
        'articulos': productos,
        'fecha de la compra': Date(),
        'estado': "generada",
        'total': precioCant()[0]
      }
      const docRef = await addDoc(ordenRef, docAux);
      Swal.fire({
        title: 'Haz realizado tu compra',
        text: 'El importe es de $' + precioCant()[0] + ' y este es el id de la orden ' + docRef.id,
        icon: 'success',
    })
    } else{
      Swal.fire({
        title: 'No puedes realizar la compra',
        text: 'inicia sesion para poder hacerlo',
        icon: 'error',
    })
    }
  }

  return (
    <div className={styles.divCarrito}>
        <h2>Productos Seleccionados</h2>
        {productos.map(producto => (<CartItem i={productos.indexOf(producto)} cambio={cambio} setCambio={setCambio} />))}
          <p>el precio total es ${precioCant()[0]} por la cantidad de {precioCant()[1]} productos</p>
        <div className={styles.btnsCarrito}>
          <Link onClick={setOrden}><p>Completar Compra</p></Link>
          <Link onClick={vaciarCarrito}><p>Vaciar Carrito</p></Link>
        </div>
    </div>
  )
}

export default Cart