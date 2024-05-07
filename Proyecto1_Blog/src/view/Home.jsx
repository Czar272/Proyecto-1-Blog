import './Home.css'
import { useState, useEffect } from 'react'

function Home(){

    const [usuario] = useState("Comun")
    const [busqueda, setBusqueda] = useState("")
    const [juegosData, setJuegosData] = useState([])
    // const [rutaActual, setRutaActual] = useState("Menu")

    useEffect(() => {
        // Llamada a la API cuando el componente se monta
        apiCall()
    },[])

    async function apiCall() {
        const response = await fetch('http://127.0.0.1:3000/juego')
        const jsonData = await response.json()

        const juegosData = jsonData.data
        setJuegosData(juegosData)
    }

    // const handleNavigation = (ruta) => {
    //     setRutaActual(ruta) 
    //   }

    const handleBusqueda = (event) => {
        setBusqueda(event.target.value);
    };
    

    // const resultados = juegosData.filter((item) =>
    //     item.title.toLowerCase().includes(busqueda.toLowerCase()) ||
    //     item.description.toLowerCase().includes(busqueda.toLowerCase()) ||
    //     item.imgFoot.toLowerCase().includes(busqueda.toLowerCase())
    // );

    return(
        <>
            <div className="contenedor">
                <div className="header">
                    <div className="header1">
                        <div className="opciones"></div>
                    </div>
                    <div className="header2">
                        <a href='/home'  className='txt'>
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
                    {juegosData.map(item => (
                        <div className="card" key={item.title}>
                            <div className="cardCol1">
                                <div className="titlesqr"> <p className='title'>{item.title}</p> </div> 
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
                </div>
            </div>        
        </>
    )
}
export default Home;