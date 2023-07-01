import Card from "../Card"
import styles from './ItemListContainer.module.scss'
import { useParams } from "react-router-dom"
import { useEffect, useState} from "react";
import NavbarProducts from "../NavbarProducts";
import db from '../../../db/firebase-config';
import { getDocs, collection, query, where } from 'firebase/firestore';

const ItemListContainer = () => {
  const {id} = useParams();
  const [productos, setProductos] = useState([])
  const productsRef = collection(db, "Productos")
 
  const getProductos = async () => {
      const q = id? query(productsRef, where("categoria", "==", id)) : productsRef;
      const itemsCollection =  await getDocs(q);
      const docs = itemsCollection.docs.map(doc => ({...doc.data(), 'id' : doc.id}));
      setProductos(docs);
  }

  useEffect(() => {
    getProductos();
  }, [id])
  
  return (
    <div className={styles.divCatalogo}>
      <NavbarProducts />
      <div className={styles.catalogo}>
          {productos.map(producto => (<Card key={producto.id} producto={producto}/>))}
      </div>
    </div>
  )
}


export default ItemListContainer