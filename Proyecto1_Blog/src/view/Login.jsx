import { useState } from "react"
import './Login.css'

function Login({setRutaActual}){

    const [text, setText] = useState('');

    const handleChange = (event) => {
        const inputValue = event.target.value;
        const hiddenText = inputValue.replace(/./g, '*');
        setText(hiddenText);
    };
    return(
        <>
            <div className="contenedorLogin">
                <div className="pic">
                    <div className="cardC">
                        <div className="logintxt"> <h3 className="txt">Admin</h3></div>
                        <textarea className="txtbox" rows={1} placeholder="Usuario"></textarea>
                        <textarea className="txtbox" rows={1} placeholder="Contraseña" value={text} onChange={handleChange}></textarea>
                        <div className="contBtns">
                            <a href="/admin">
                            <button className='btn' onClick={() =>{setRutaActual("/admin")}}>Aceptar</button>
                            </a>
                            <a href="/home">
                            <button className='btn' onClick={()=>{setRutaActual("/home")}}>Cancelar</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
        
    )
}

export default Login