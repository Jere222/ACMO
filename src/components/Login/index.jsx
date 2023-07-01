import { useContext, useState } from "react";
import styles from "./login.module.scss";

const Login = ({setPerfil}) => {

  const [inputNombre, setInputNombre] = useState("")
  const [inputEmail, setInputEmail] = useState("")
  const [inputConfirmacion, setInputConfirmacion] = useState("")
  const [inputNro, setInputNro] = useState("")
  const [inputPassw, setinputPassw] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    if(inputEmail == inputConfirmacion){
      const perfilAux = {'nombre': inputNombre, 'email': inputEmail, 'nroTelefono': inputNro};
      setPerfil(perfilAux);
      setInputNombre(""); setInputEmail(""); setInputConfirmacion(""); setInputNro(""); setinputPassw("");
      Swal.fire({
        title: 'Haz iniciado sesion',
        icon: 'success',
      })
    } else {
      Swal.fire({
        title: 'No se ha podido iniciar sesion',
        text: 'los emails no coinciden',
        icon: 'error',
      })
    }
    
  } 
  return (
    <div className={styles.divLogin}>
        <form onSubmit={handleSubmit}>
            <img src="https://i.ibb.co/DVvmryR/image.png" alt="" />
            <div>
              <p>Nombre: </p><input type="text" required placeholder="Nombre" onChange={(e) =>setInputNombre(e.target.value)} value={inputNombre}/>
            </div>
            <div>
              <p>Email: </p><input type="email" required placeholder="Email" onChange={(e) =>setInputEmail(e.target.value)} value={inputEmail}/>
            </div>
            <div>
              <p> Confirmar email: </p><input type="email" required placeholder="Confirmar email" onChange={(e) =>setInputConfirmacion(e.target.value)} value={inputConfirmacion}/>
            </div>
            <div>
              <p>Nro de telefono: </p><input type="text" required placeholder="Nro de telefono" onChange={(e) =>setInputNro(e.target.value)}  value={inputNro}/>
            </div>
            <div>
              <p>Password: </p><input type="password" required placeholder="Password" onChange={(e) =>setinputPassw(e.target.value)}  value={inputPassw}/>
            </div>
            <input className={styles.submit} type="submit" value='Iniciar Sesion' />
        </form>
    </div>
  )
}

export default Login