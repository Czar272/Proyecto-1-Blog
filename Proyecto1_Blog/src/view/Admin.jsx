import './Admin.css'
import opc from '../assets/img/menu-puntos-vertical.png'
import { useEffect, useState, useRef, Suspense, lazy } from 'react'
import PropTypes from 'prop-types'
import Popup from './Popup'
import Lng from './Lng'
import useApi from './Hooks/useApi'
const Ldng = lazy(() => import("./Lng"));

function Admin({setUrlActual}){

    const [usuario] = useState("Admin")
    const [busqueda, setBusqueda] = useState("")
    const [showMenu, setShowMenu] = useState(false)
    const [selectedItemId, setSelectedItemId] = useState(null)
    const [data, setData] = useState([])
    const popupRef = useRef(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn')
        if (isLoggedIn === 'false') {
            window.location.pathname = '/login'
            setUrlActual("/login")
        }
    }, [setUrlActual])

    async function apiCall() {
        const response = await fetch('http://127.0.0.1:3000/juego')
        const jsonData = await response.json()

        const juegosData = jsonData.data
        setData(juegosData)
        setIsLoading(false)
    }
    
    useEffect(() => {
        function handleClick(event) {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                setShowMenu(false)
            }
        }
        document.addEventListener("mousedown", handleClick)
        return () => {
            document.removeEventListener("mousedown", handleClick)
        }

    }, [popupRef])

    const toggleMenu = (itemID) => {
        setShowMenu(!showMenu || itemID !== selectedItemId)
        setSelectedItemId(itemID === selectedItemId ? null: itemID)
    }

    const handleEdit = () => {
        setUrlActual(`/edit/${selectedItemId}`)
        window.history.pushState({},"",`/edit/${selectedItemId}`)
        // window.location.pathname = '/edit'
        console.log(`Editar ${selectedItemId}`);
        setShowMenu(false);
    };

    const handleDelete = async() => {

        console.log(`Eliminar ${selectedItemId}`)
        setShowMenu(false);
        // try {
        //     const response = await fetch(`http://127.0.0.1:3000/juego/${selectedItemId}`, {
        //         method: 'DELETE',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         }
        //     })
        //     if (response.ok) {
        //         setUrlActual('/admin')
        //         window.location.pathname = '/admin'
        //         // window.history.pushState({},"","/")
        //         // console.log(`Se borro el post ${blogId}`)
        //     } else {
        //         const data = await response.json()
        //         console.log(`Error: ${data}`)
        //     }
        // } catch (error){
        //     console.error('Error al cargar la API:', error)
        // }
    }
    

    useEffect(() => {
        apiCall()
    },[])
    // const handleNavigation = (ruta) => {
    //     setRutaActual(ruta) 
    //   }

    const handleBusqueda = (event) => {
        setBusqueda(event.target.value);
    };  

    const handleAgregar = () => {
        window.location.pathname = '/post'
        setUrlActual('/post')
        
    }

    const resultados = data.filter((item) =>
        item.title.includes(busqueda) ||
        item.description.includes(busqueda) ||
        item.imgFoot.includes(busqueda)
    );

    const { dataH, loadingH, errorH } = useApi('http://127.0.0.1:3000/juego');

    if (errorH) {
        return <div>Error: {errorH.message}</div>;
    }

    if(loadingH){
        return (
            <Suspense fallback={<Lng />}>
              <Lng />
            </Suspense>
      )
    }

    const handleCerrarSession = () => {
        alert("Se ha cerrado sesion")
        localStorage.setItem('isLoggedIn', 'false')
        const isLoggedIn = localStorage.getItem('isLoggedIn')
        console.log(isLoggedIn)
        setUrlActual('/home')
        window.location.pathname = '/home'
    }


    return(
        <>
            <div className="contenedor">
                <div className="header">
                    <div className="header1">
                        <div className="opciones" onClick={handleAgregar}></div>
                    </div>
                    <div className="header2">
                        <a href='/home' className='txt'>
                            <h2 className='txt'>Home</h2>
                        </a>

                        <a href="/login" className='txt'>
                            <h2 className='txt'>Login</h2>
                        </a>

                        {/* <a href='#'  className='txt'> */}
                        <h2 className='txt'>Service</h2>
                        {/* </a> */}

                        {/* <a href='#'  className='txt'> */}
                        <h2 className='txt'>Help</h2>
                        {/* </a> */}
                    </div>
                    <div className="header3">
                    <textarea className='BarraBusqueda' placeholder='Buscar' value={busqueda} onChange={handleBusqueda}></textarea>
                    </div>
                </div>
                <div className="content">
                    {resultados.map(item => (
                        <div className="card" key={item.title}>
                            {showMenu && selectedItemId === item.id && (
                                <div ref={popupRef}>
                                    <Popup
                                        onClose={() => setShowMenu(false)}
                                        onEdit={handleEdit}
                                        onDelete={handleDelete}
                                    />
                                </div>
                            )}
                            <div className="cardCol1">
                                <div className="titlesqr"><img src = {opc} alt="" className='opcionesCard' onClick={() => toggleMenu(item.id)}/> <p className='title'>{item.title}</p> </div> 
                                <div className="descriptionsqr"> <p className='description'>{item.cont}</p></div>
                            </div>
                            <div className="cardCol2">
                                <div className="imgName"><h3> </h3></div>
                                <div className="img1">
                                    <img src= {item.img} className='img'/>
                                </div>
                                <div className="imgFoot"><p className='autortxt'>{item.creator}</p></div>
                            </div>
                            
                        </div>
                    ))}
                </div>
                <div className="footer">
                    <h4 className='infoUsuario'>Tipo de Usuario: {usuario}</h4>
                    <div className="infoUsuario" onClick={handleCerrarSession}>Cerrar Sesion</div>
                </div>
            </div>        
        </>
    )
}

Admin.propTypes = {
    setUrlActual: PropTypes.func.isRequired
}

export default Admin;