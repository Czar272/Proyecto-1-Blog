import './Home.css'
import MetalGear from '../assets/img/MetalGear.webp'
import MetalGear2 from '../assets/img/MetalGear2.webp'
import MGS from '../assets/img/MGS.webp'
import MGS2 from '../assets/img/MGS2.webp'
import MGS3 from '../assets/img/MGS3.webp'
import MGS4 from '../assets/img/MGS4.webp'
import MGSPW from '../assets/img/MGSPW.webp'
import MGSV from '../assets/img/MGSV.webp'

function Home(){

    const data = [
        {id: 1, title: 'Metal Gear',                                description: 'En el año de 1995, en una gigantesca fortaleza conocida como Outer Heaven, fundada por un mercenario legendario, se está construyendo un arma gigante de destrucción masiva. El gobierno de los Estados Unidos decide contactar a la Unidad de Fuerzas Especiales FOXHOUND. Big Boss, comandante de FOXHOUND, envía a su agente más fiable, Gray Fox. Sin embargo, antes de que pueda ser recolectada información alguna, Gray Fox desaparece siendo las palabras de su último mensaje "Metal Gear..." Todo depende ahora del novato recluta de FOXHOUND Solid Snake para inflitrarse en Outer Heaven y poner alto a la construcción del arma más poderosa del mundo.',                                                                                                                                                                 imgName:'Imagen No. 1', img: MetalGear,   imgFoot: 'Pablo Cesar Lopez Medina #22535'},
        {id: 2, title: 'Metal Gear 2: Solid Snake',                 description: 'Cuatro años después, Solid Snake se ha jubilado. Pero nada anda bien, debido a que el creador de una nueva especie de alga conocida como OILIX, la cual puede producir petróleo con alto grado de hidrocarburos con poco gasto y esfuerzo, ha sido secuestrado por la nación renegada de Zanzibar, la cual se ha convertido en la única nación remanente con capacidad de ataque nuclear por vía de Metal Gear D. El nuevo comandante de FOXHOUND, Coronel Roy Campbell, no tiene otra opción más que sacar a Solid Snake de su retiro. Snake tiene que infiltrarse en la fortificada nación, rescatar a Dr. Kio Marv y recuperar el programa del OILIX, y hacerse cargo de los hombres detrás de los terroristas...',                                                                                                                  imgName:'Imagen No. 2', img: MetalGear2,  imgFoot: 'Pablo Cesar Lopez Medina #22535'},
        {id: 3, title: 'Metal Gear Solid',                          description: 'En el año 2005, durante una misión de entrenamiento rutinaria en una remota instalación de depósitos de residuos nucleares en la isla de Shadow Moses, miembros de FOXHOUND (que también se hacen llamar los Hijos de Big Boss) liderados por Liquid Snake se rebelan en contra del gobierno de los Estados Unidos, demandando los restos del legendario mercenario Big Boss. Roy Campbell, ex-comandante de FOXHOUND saca a Solid Snake de su retiro una vez más, para infiltrarse en la fortaleza, descubrir si los terroristas tienen la capacidad de lanzar un misil nuclear por vía de Metal Gear REX, y detenerlos en caso de que lo hagan. ', imgName:'Imagen No. 3', img: MGS,         imgFoot: 'Pablo Cesar Lopez Medina #22535'},
        {id: 4, title: 'Metal Gear Solid 2: Sons of Liberty',       description: 'Solid Snake y Otacon, después de sobrevivir al incidente de Shadow Moses, forman Philanthropy con la intención de eliminar la imponente amenaza de Metal Gears. En el año 2007, se ha filtrado información que los Marines han construido un nuevo Metal Gear para combatir la sobreabundancia de Metal Gears. Infiltrándose en el buque en el que el nuevo Metal Gear RAY está siendo transportado, Snake debe conseguir evidencia fotográfica del nuevo Metal Gear. Mientras él concluye la misión, el buque es volado y hundido por Revolver Ocelot, llevándose a Snake con él.',                                                                                                                                                                                                                                                    imgName:'Imagen No. 4', img: MGS2,        imgFoot: 'Pablo Cesar Lopez Medina #22535'},
        {id: 5, title: 'Metal Gear Solid 3: Snake Eater',           description: 'Al final de la Segunda Guerra Mundial, el mundo quedó dividido en dos, marcando el inicio de la Guerra Fría. En el año 1964, el agente de FOX Naked Snake es enviado a Tselinoyarsk en una Misión virtuosa para rescatar al científico ruso Sokolov, quien estaba trabajando en el Shagohod, una terrorífica nueva arma capaz de lanzar un ataque nuclear desde cualquier lugar del planeta. Cuando Snake estaba a punto de completar su misión, su mentora The Boss deserta hacia la Unión Soviética, llevándose con ella a Sokolov y a dos misiles nucleares en miniatura.',                                                                                                                                                                                                                                                          imgName:'Imagen No. 5', img: MGS3,        imgFoot: 'Pablo Cesar Lopez Medina #22535'},
        {id: 6, title: 'Metal Gear Solid 4: Guns of the Patriots',  description: 'En el año 2014, la restricción de la intervención militar en territorio extranjero ha disminuido, impulsando la necesidad de Compañías Militares Privadas (PMCs) para luchar contra las guerras por poderes con fines comerciales. La nanotecnología se ha vuelto prominente para mejorar las capacidades de mercenarios e imponerles lealtad. El sistema de nanomáquinas que los PMCs usan es llamado "Sons of the Patriots" (Hijos de los Patriotas) o "SOP". Las cinco más grandes PMCs son propiedad de una única companía madre llamada Outer Heaven con Liquid Ocelot como el director ejecutivo.',                                                                                                                                                                                                                               imgName:'Imagen No. 6', img: MGS4,        imgFoot: 'Pablo Cesar Lopez Medina #22535'},
        {id: 7, title: 'Metal Gear Solid: Peace Walker',            description: 'En 1974, Snake/Big Boss ha creado sus Soldados sin Fronteras en Colombia, Sudamérica, donde él fue abordado por unos visitantes (Ramón Gálvez Mena y Paz Ortega Andrade) de Costa Rica, una Nación sin EjércitoA raíz de la Crisis de los Misiles de Cuba, debido a que Latinoamérica se convirtió en una pieza clave para mantener el balance de poder entre Oriente y Occidente, Costa Rica se las ha arreglado milagrosamente para mantener su paz y neutralidad.',                                                                                                                                                                                                                                                                                                                                                                  imgName:'Imagen No. 7', img: MGSPW,       imgFoot: 'Pablo Cesar Lopez Medina #22535'},
        {id: 8, title: 'Metal Gear Solid V: The Phantom Pain',      description: 'Metal Gear Solid V: Ground Zeroes se desarrolla un año después de Metal Gear Solid: Peace Walker. Relatando todo lo que ocurrió exactamente después de los hechos de Peace Walker, y el periodo anterior a la fundación de Outer Heaven. En este juego, la misión de Big Boss es ir al Campamento Omega, base estadounidense en Cuba en donde tienen retenido a Ricardo "Chico" Valenciano Libre y a Pacifica "Paz" Ortega Andrade, y llevarlos de vuelta a Mother Base.',                                                                                                                                                                                                                                                                                                                                                              imgName:'Imagen No. 8', img: MGSV,        imgFoot: 'Pablo Cesar Lopez Medina #22535'}
    ]


    return(
        <>
            <div className="contenedor">
                <div className="header">
                    <div className="header1">
                        <div className="opciones"></div>
                    </div>
                    <div className="header2">
                        <h2 className='txt'>Home</h2>
                        <h2 className='txt'>About</h2>
                        <h2 className='txt'>Service</h2>
                        <h2 className='txt'>Help</h2>
                    </div>
                    <div className="header3">
                    <textarea className='BarraBusqueda'></textarea>
                    </div>
                </div>
                <div className="content">
                    {data.map(item => (
                        <div className="card">
                            <div className="cardCol1">
                                <div className="titlesqr"> <h2 className='title'>{item.title}</h2> </div> 
                                <div className="descriptionsqr"> <p className='description'>{item.description}</p></div>
                            </div>
                            <div className="cardCol2">
                                <div className="imgName"><h3>{item.imgName}</h3></div>
                                <div className="img1">
                                    <img src= {item.img} className='img'/>
                                </div>
                                <div className="imgFoot">{item.imgFoot}</div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="footer"></div>
            </div>        
        </>
    )
}
export default Home;