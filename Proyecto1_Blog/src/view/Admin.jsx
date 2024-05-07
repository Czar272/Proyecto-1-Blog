import './Admin.css'
import opc from '../assets/img/menu-puntos-vertical.png'
import { useEffect, useState, useRef } from 'react'
import Popup from './Popup'

function Admin({setUrlActual}){

    const [usuario] = useState("Admin")
    const [busqueda, setBusqueda] = useState("")
    const [showMenu, setShowMenu] = useState(false)
    const [selectedItemId, setSelectedItemId] = useState(null)
    const [juegosData, setJuegosData] = useState([])
    const popupRef = useRef(null)


    async function apiCall() {
        const response = await fetch('http://127.0.0.1:3000/juego')
        const jsonData = await response.json()

        const juegosData = jsonData.data
        setJuegosData(juegosData)
    }

    useEffect(() => {
        // Llamada a la API cuando el componente se monta
        apiCall()
    },[])

    // async function post() {
    //     try{
    //         const response = await fetch('http://127.0.0.1:3000/juego', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify({
    //                 title: title, 
    //                 cont: description, 
    //                 img: img, 
    //                 creator: imgFoot 

    //             })
    //         })

    //         if (response.ok) {
    //             setRutaActual('/home')
    //         } else{
    //             const data = await response.json()
    //             setError(data.error || 'Error al crear el post')
    //         }            

    //     }catch(e){
    //         console.error('Error al cargar la API: ', e)
    //         setError('Error al cargar la API')
            
    //     }
    // }
    
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
        setUrlActual("/edit")
        console.log(`Editar ${selectedItemId}`);
        setShowMenu(false);
    };

    const handleDelete = () => {
        console.log(`Eliminar ${selectedItemId}`);
        setShowMenu(false);
    };

    // const handleNavigation = (ruta) => {
    //     setRutaActual(ruta) 
    //   }

    const handleBusqueda = (event) => {
        setBusqueda(event.target.value);
    };  
    
    // const data = [
    //     {id: 1, title: 'Metal Gear',                                cont: 'En el año de 1995, en una gigantesca fortaleza conocida como Outer Heaven, fundada por un mercenario legendario, se está construyendo un arma gigante de destrucción masiva. El gobierno de los Estados Unidos decide contactar a la Unidad de Fuerzas Especiales FOXHOUND. "',                                                                                                                                        img: MetalGear,   creator: 'Cesar Lopez '},
    //     {id: 2, title: 'Metal Gear 2: Solid Snake',                 cont: 'Cuatro años después, Solid Snake se ha jubilado. Pero nada anda bien, debido a que el creador de una nueva especie de alga conocida como OILIX, la cual puede producir petróleo con alto grado de hidrocarburos con poco gasto y esfuerzo, ha sido secuestrado por la nación renegada de Zanzibar. ',                                                                                                                  img: MetalGear2,  creator: 'Pablo Medina '},
    //     {id: 3, title: 'Metal Gear Solid',                          cont: 'En el año 2005, durante una misión de entrenamiento rutinaria en una remota instalación de depósitos de residuos nucleares en la isla de Shadow Moses, miembros de FOXHOUND (que también se hacen llamar los Hijos de Big Boss) liderados por Liquid Snake se rebelan en contra del gobierno de los Estados Unidos. ',                                                                                                 img: MGS,         creator: 'Ariana Perez '},
    //     {id: 4, title: 'Metal Gear Solid 2: Sons of Liberty',       cont: 'Solid Snake y Otacon, después de sobrevivir al incidente de Shadow Moses, forman Philanthropy con la intención de eliminar la imponente amenaza de Metal Gears. En el año 2007, se ha filtrado información que los Marines han construido un nuevo Metal Gear para combatir la sobreabundancia de Metal Gears.',                                                                                                       img: MGS2,        creator: 'Kim Morales '},
    //     {id: 5, title: 'Metal Gear Solid 3: Snake Eater',           cont: 'Al final de la Segunda Guerra Mundial, el mundo quedó dividido en dos, marcando el inicio de la Guerra Fría. En el año 1964, el agente de FOX Naked Snake es enviado a Tselinoyarsk en una Misión virtuosa para rescatar al científico ruso Sokolov, quien estaba trabajando en el Shagohod. ',                                                                                                                        img: MGS3,        creator: 'Andreina Par '},
    //     {id: 6, title: 'Metal Gear Solid 4: Guns of the Patriots',  cont: 'En el año 2014, la restricción de la intervención militar en territorio extranjero ha disminuido, impulsando la necesidad de Compañías Militares Privadas (PMCs) para luchar contra las guerras por poderes con fines comerciales. ',                                                                                                                                                                                  img: MGS4,        creator: 'Briana Carrera '},
    //     {id: 7, title: 'Metal Gear Solid: Peace Walker',            cont: 'En 1974, Snake/Big Boss ha creado sus Soldados sin Fronteras en Colombia, Sudamérica, donde él fue abordado por unos visitantes (Ramón Gálvez Mena y Paz Ortega Andrade) de Costa Rica, una Nación sin EjércitoA raíz de la Crisis de los Misiles de Cuba, debido a que Latinoamérica se convirtió en una pieza clave para mantener el balance de poder entre Oriente y Occidente.',                                   img: MGSPW,       creator: 'Fernando Leal '},
    //     {id: 8, title: 'Metal Gear Solid V: The Phantom Pain',      cont: 'Metal Gear Solid V: Ground Zeroes se desarrolla un año después de Metal Gear Solid: Peace Walker. Relatando todo lo que ocurrió exactamente después de los hechos de Peace Walker, y el periodo anterior a la fundación de Outer Heaven. ',                                                                                                                                                                            img: MGSV,        creator: 'Valeria Bardales '}
    // ]

    // const resultados = data.filter((item) =>
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
                    {juegosData.map(item => (
                        <div className="card">
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
                </div>
            </div>        
        </>
    )
}
export default Admin;