import { useContext } from 'react'
import styles from './Perfil.module.scss'
import { PerfilContext } from '../../contexts/PerfilContext';

const Perfil = () => {
  const valuePerfil = useContext(PerfilContext);
  return (
    <div className={styles.divPerfil}>
        <div >
            <img src="https://i.ibb.co/DVvmryR/image.png" alt="" />
            <h3>Nombre: {valuePerfil.nombre}</h3>
            <h4>Email: {valuePerfil.email}</h4>
            <h4>Nro. de telefono: {valuePerfil.nroTelefono}</h4>
        </div>
    </div>
  )
}

export default Perfil