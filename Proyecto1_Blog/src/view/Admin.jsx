import './Admin.css'
import MetalGear from '../assets/img/MetalGear.webp'
import MetalGear2 from '../assets/img/MetalGear2.webp'
import MGS from '../assets/img/MGS.webp'
import MGS2 from '../assets/img/MGS2.webp'
import MGS3 from '../assets/img/MGS3.webp'
import MGS4 from '../assets/img/MGS4.webp'
import MGSPW from '../assets/img/MGSPW.webp'
import MGSV from '../assets/img/MGSV.webp'
import opc from '../assets/img/menu-puntos-vertical.png'
import { useState } from 'react'

function Admin({setRutaActual}){

    const [usuario,setUsuario] = useState("Admin")
    const [busqueda, setBusqueda] = useState("")
    // const [rutaActual, setRutaActual] = useState("Menu")

    const handleNavigation = (ruta) => {
        setRutaActual(ruta) 
      }

    const handleBusqueda = (event) => {
        setBusqueda(event.target.value);
    };
    
    const data = [
        {id: 1, title: 'Metal Gear',                                description: 'En el año de 1995, en una gigantesca fortaleza conocida como Outer Heaven, fundada por un mercenario legendario, se está construyendo un arma gigante de destrucción masiva. El gobierno de los Estados Unidos decide contactar a la Unidad de Fuerzas Especiales FOXHOUND. "',                                                                                                                                                                 imgName:'Imagen No. 1', img: MetalGear,   imgFoot: 'Cesar Lopez '},
        {id: 2, title: 'Metal Gear 2: Solid Snake',                 description: 'Cuatro años después, Solid Snake se ha jubilado. Pero nada anda bien, debido a que el creador de una nueva especie de alga conocida como OILIX, la cual puede producir petróleo con alto grado de hidrocarburos con poco gasto y esfuerzo, ha sido secuestrado por la nación renegada de Zanzibar. ',                                                                                                                  imgName:'Imagen No. 2', img: MetalGear2,  imgFoot: 'Pablo Medina '},
        {id: 3, title: 'Metal Gear Solid',                          description: 'En el año 2005, durante una misión de entrenamiento rutinaria en una remota instalación de depósitos de residuos nucleares en la isla de Shadow Moses, miembros de FOXHOUND (que también se hacen llamar los Hijos de Big Boss) liderados por Liquid Snake se rebelan en contra del gobierno de los Estados Unidos. ',                                                                                                                                                                                    imgName:'Imagen No. 3', img: MGS,         imgFoot: 'Ariana Perez '},
        {id: 4, title: 'Metal Gear Solid 2: Sons of Liberty',       description: 'Solid Snake y Otacon, después de sobrevivir al incidente de Shadow Moses, forman Philanthropy con la intención de eliminar la imponente amenaza de Metal Gears. En el año 2007, se ha filtrado información que los Marines han construido un nuevo Metal Gear para combatir la sobreabundancia de Metal Gears.',                                                                                                                                                                                                                                                    imgName:'Imagen No. 4', img: MGS2,        imgFoot: 'Kim Morales '},
        {id: 5, title: 'Metal Gear Solid 3: Snake Eater',           description: 'Al final de la Segunda Guerra Mundial, el mundo quedó dividido en dos, marcando el inicio de la Guerra Fría. En el año 1964, el agente de FOX Naked Snake es enviado a Tselinoyarsk en una Misión virtuosa para rescatar al científico ruso Sokolov, quien estaba trabajando en el Shagohod. ',                                                                                                                                                                                                                                                          imgName:'Imagen No. 5', img: MGS3,        imgFoot: 'Andreina Par '},
        {id: 6, title: 'Metal Gear Solid 4: Guns of the Patriots',  description: 'En el año 2014, la restricción de la intervención militar en territorio extranjero ha disminuido, impulsando la necesidad de Compañías Militares Privadas (PMCs) para luchar contra las guerras por poderes con fines comerciales. ',                                                                                                                                                                                                                               imgName:'Imagen No. 6', img: MGS4,        imgFoot: 'Briana Carrera '},
        {id: 7, title: 'Metal Gear Solid: Peace Walker',            description: 'En 1974, Snake/Big Boss ha creado sus Soldados sin Fronteras en Colombia, Sudamérica, donde él fue abordado por unos visitantes (Ramón Gálvez Mena y Paz Ortega Andrade) de Costa Rica, una Nación sin EjércitoA raíz de la Crisis de los Misiles de Cuba, debido a que Latinoamérica se convirtió en una pieza clave para mantener el balance de poder entre Oriente y Occidente.',                                                                                                                                                                                                                                                                                                                                                                  imgName:'Imagen No. 7', img: MGSPW,       imgFoot: 'Fernando Leal '},
        {id: 8, title: 'Metal Gear Solid V: The Phantom Pain',      description: 'Metal Gear Solid V: Ground Zeroes se desarrolla un año después de Metal Gear Solid: Peace Walker. Relatando todo lo que ocurrió exactamente después de los hechos de Peace Walker, y el periodo anterior a la fundación de Outer Heaven. ',                                                                                                                                                                                                                                                                                                                                                              imgName:'Imagen No. 8', img: MGSV,        imgFoot: 'Valeria Bardales '}
    ]

    const resultados = data.filter((item) =>
        item.title.toLowerCase().includes(busqueda.toLowerCase()) ||
        item.description.toLowerCase().includes(busqueda.toLowerCase()) ||
        item.imgFoot.toLowerCase().includes(busqueda.toLowerCase())
    );

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
                    {resultados.map(item => (
                        <div className="card">
                            <div className="cardCol1">
                                <div className="titlesqr"><img src = {opc} alt="" className='opcionesCard' /> <p className='title'>{item.title}</p> </div> 
                                <div className="descriptionsqr"> <p className='description'>{item.description}</p></div>
                            </div>
                            <div className="cardCol2">
                                <div className="imgName"><h3> </h3></div>
                                <div className="img1">
                                    <img src= {item.img} className='img'/>
                                </div>
                                <div className="imgFoot"><p className='autortxt'>{item.imgFoot}</p></div>
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