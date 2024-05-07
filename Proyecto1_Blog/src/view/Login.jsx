import { useState } from "react"
import './Login.css'

function Login({setUrlActual}){

    // const [ setText] = useState('');
    const [contra, setPassword] = useState('')
    const [username, setUsername] = useState('')

    // const handleChange = (event) => {
    //     const inputValue = event.target.value;
    //     const hiddenText = inputValue.replace(/./g, '*');
    //     setText(hiddenText);
    // };

    const handleChangeUsername = (event) => {
        setUsername(event.target.value)
    }

    const handleChangeContra = (event) => {
        setPassword(event.target.value)
    }

    const handleLogin = () => {
        const usuarioC = 'admin'
        const contraC = 'admin'

        if (username === usuarioC && contra === contraC){
            localStorage.setItem("login", true)
            setUrlActual("/admin")

        } else{
            alert('User or password incorrect')
        }

    }

    return(
        <>
            <div className="contenedorLogin">
                <div className="pic">
                    <div className="cardC">
                        <div className="logintxt"> <h3 className="txt">Admin</h3></div>
                        <input className="txtbox" rows={1} placeholder="Usuario" value={username} onChange={handleChangeUsername}></input>
                        <input className="txtbox" type="password" rows={1} placeholder="Contraseña" value={contra} onChange={handleChangeContra}></input>
                        <div className="contBtns">
                            <a onClick={handleLogin} >
                            <button className='btn' >Aceptar</button>
                            </a>
                            <a href="/home">
                            <button className='btn'>Cancelar</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
        
    )
}

export default Login