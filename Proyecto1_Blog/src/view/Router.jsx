import Login from './Login.jsx'
import Home from './Home.jsx'
import Admin from './Admin.jsx'

function Router({ruta, setRutaActual}){
    switch(ruta){
        case "/home":
            return <Home setRutaActual={setRutaActual}/> 
        case "/login":
            return <Login setRutaActual={setRutaActual} />
        case "/admin":
            return <Admin setRutaActual={setRutaActual} />
        default:
            return (
                <h1>ruta actual {ruta}</h1>
            )
    }
}
export default Router;