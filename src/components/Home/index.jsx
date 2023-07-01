import styles from './home.module.scss'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={styles.divHome}>
      <img src="https://i.ibb.co/BHD8VYb/escudo.jpg" alt="" />
      <div className={styles.divGrid}>
        <Link to='/Home' className={styles.cuadroPrinc}>
          
              <h2>Futbol de primera</h2>
              <p>Sigue toda la informacion de nuestro equipo de mayor categoria en el futbol</p>
           
        </Link>
        <Link to='/Home' className={styles.cuadrito3}>
           
            <h2>Deportes</h2>
          
        </Link>
        
        <Link to='/' className={styles.cuadrito2}>
          
            <h2>Merchandising</h2>
          
        </Link>

        <Link to='/Home' className={styles.cuadrito1}>
          
            <h2>Historia</h2>
  
        </Link>
      </div>
      </div>
  )
}

export default Home