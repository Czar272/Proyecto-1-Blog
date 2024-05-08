import Login from './Login.jsx'
import Home from './Home.jsx'
import Admin from './Admin.jsx'
import Edit from './Edit.jsx'
import { useState } from 'react'
import PropTypes from 'prop-types'
import Post from './Post.jsx'

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
            return <Edit setUrlActual={setUrlActual}/>
        case "/post":
            return <Post setUrlActual={setUrlActual}/>
        default:
            return (
                <h1>ruta actual {ruta}</h1>
            )
    }
}
export default Router;

Router.propTypes = {
    ruta: PropTypes.string.isRequired 
}