import Login from './Login.jsx'
import Home from './Home.jsx'
import Admin from './Admin.jsx'
import Edit from './Edit.jsx'
import { useState } from 'react'

function Router({ruta}){
    const [urlActual, setUrlActual] = useState(window.location.pathname)


    switch(urlActual){
        case "/home":
            return <Home setUrlActual={setUrlActual}/> 
        case "/login":
            return <Login setUrlActual={setUrlActual} />
        case "/admin":
            return <Admin ruta = {ruta} setUrlActual={setUrlActual} />
        case "/edit":
            return <Edit/>
        default:
            return (
                <h1>ruta actual {ruta}</h1>
            )
    }
}
export default Router;