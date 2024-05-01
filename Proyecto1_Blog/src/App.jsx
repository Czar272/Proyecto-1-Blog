import { useState } from 'react'
import './App.css'
import Router from './view/Router'
function App() {

  const [rutaActual, setRutaActual] = useState("")

  const handleNavigation = (ruta) => {
    setRutaActual(ruta) 
  }

  return (
    <>
      <div className="contenedor">
        <nav >
          <ul>
            <li>
              <a href="/home" onClick={(e) => {e.preventDefault(); handleNavigation('/home')}}> Home</a>
            </li>
            <li>
              <a href="/login" onClick={(e) => {e.preventDefault(); handleNavigation('/login')}}>Login</a>
            </li>            
          </ul>
        </nav>
        <div className="contenedor-rutas">
        <Router ruta={rutaActual} setRutaActual={setRutaActual} />
        </div>
      </div>
    </>
  )
}

export default App
