import './Home.css'

function Home(){
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
                    <div className="card">
                        <div className="cardCol1">
                            <div className="titlesqr"> <h1 className='title'>Metal Gear </h1> </div>
                            <div className="descriptionsqr"> <h3 className='description'>En el año de 1995, en una gigantesca fortaleza conocida como Outer Heaven, fundada por un mercenario legendario, se está construyendo un arma gigante de destrucción masiva. El gobierno de los Estados Unidos decide contactar a la Unidad de Fuerzas Especiales FOXHOUND. Big Boss, comandante de FOXHOUND, envía a su agente más fiable, Gray Fox. Sin embargo, antes de que pueda ser recolectada información alguna, Gray Fox desaparece siendo las palabras de su último mensaje "Metal Gear..." Todo depende ahora del novato recluta de FOXHOUND Solid Snake para inflitrarse en Outer Heaven y poner alto a la construcción del arma más poderosa del mundo.</h3></div>
                        </div>
                        <div className="cardCol2">
                            <div className="imgName"> Imagen No. 1</div>
                            <div className="img1"></div>
                            <div className="imgFoot"> Pablo Cesar Lopez Medina #22535</div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="cardCol1">
                            <div className="titlesqr"> <h1 className='title'>Metal Gear 2: Solid Snake</h1> </div>
                            <div className="descriptionsqr"> <h3 className='description'>Cuatro años después, Solid Snake se ha jubilado. Pero nada anda bien, debido a que el creador de una nueva especie de alga conocida como OILIX, la cual puede producir petróleo con alto grado de hidrocarburos con poco gasto y esfuerzo, ha sido secuestrado por la nación renegada de Zanzibar, la cual se ha convertido en la única nación remanente con capacidad de ataque nuclear por vía de Metal Gear D. El nuevo comandante de FOXHOUND, Coronel Roy Campbell, no tiene otra opción más que sacar a Solid Snake de su retiro. Snake tiene que infiltrarse en la fortificada nación, rescatar a Dr. Kio Marv y recuperar el programa del OILIX, y hacerse cargo de los hombres detrás de los terroristas...</h3></div>
                        </div>
                        <div className="cardCol2">
                            <div className="imgName"> Imagen No. 2</div>
                            <div className="img2"></div>
                            <div className="imgFoot"> Pablo Cesar Lopez Medina #22535</div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="cardCol1">
                            <div className="titlesqr"> <h1 className='title'>Metal Gear Solid</h1> </div>
                            <div className="descriptionsqr"> <h3 className='description'>En el año 2005, durante una misión de entrenamiento rutinaria en una remota instalación de depósitos de residuos nucleares en la isla de Shadow Moses, miembros de FOXHOUND (que también se hacen llamar los Hijos de Big Boss) liderados por Liquid Snake se rebelan en contra del gobierno de los Estados Unidos, demandando los restos del legendario mercenario Big Boss. Roy Campbell, ex-comandante de FOXHOUND saca a Solid Snake de su retiro una vez más, para infiltrarse en la fortaleza, descubrir si los terroristas tienen la capacidad de lanzar un misil nuclear por vía de Metal Gear REX, y detenerlos en caso de que lo hagan. Su otro objetivo es rescatar a los dos rehenes, el Jefe de DARPA Donald Anderson y al Presidente de ArmsTech Kenneth Baker. El destino de América está en las manos de Solid Snake.</h3></div>
                        </div>
                        <div className="cardCol2">
                            <div className="imgName"> Imagen No. 3</div>
                            <div className="img3"></div>
                            <div className="imgFoot"> Pablo Cesar Lopez Medina #22535</div>
                        </div>
                    </div>
                    
                    
                </div>
                <div className="footer"></div>
            </div>
        
        </>
    )
}
export default Home;