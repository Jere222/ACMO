//seedear la base de datos de productos
import { collection, addDoc } from "firebase/firestore";
import db from './firebase-config.js'
import products from '../productos.js'


const productsRef = collection(db, "Productos")

const promises = products.map((products) => addDoc(productsRef, products));

Promise.all(promises)
    .then(()=> process.exit(0))