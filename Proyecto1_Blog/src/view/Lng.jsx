import './Lng.css'
function Lng() {
    
    return(
        <>
            <div className="contenedor">
                <div className="header">
                    <div className="header1">
                            <div className="opciones" ></div>
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
                    <textarea className='BarraBusqueda' placeholder='Buscar' ></textarea>
                    </div>
                </div>
                <div className="content">
                    <div className="card">
                        <div className="cardCol1Lng">
                            <div className="titlesqr"><img  alt="" className='opcionesCard'/> <p className='title'></p> </div> 
                            <div className="descriptionsqr"> <p className='description'></p></div>
                        </div>
                        <div className="cardCol2Lng">
                            <div className="imgName"><h3> </h3></div>
                            <div className="img1">
                            </div>
                            <div className="imgFoot"><p className='autortxt'></p></div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="cardCol1Lng">
                            <div className="titlesqr"><img  alt="" className='opcionesCard'/> <p className='title'></p> </div> 
                            <div className="descriptionsqr"> <p className='description'></p></div>
                        </div>
                        <div className="cardCol2Lng">
                            <div className="imgName"><h3> </h3></div>
                            <div className="img1">
                            </div>
                            <div className="imgFoot"><p className='autortxt'></p></div>
                        </div>
                    </div>
            </div>
                <div className="footer">
                    <h4 className='infoUsuario'>Tipo de Usuario:</h4>
                    <div className="infoUsuario">Cerrar Sesion</div>
                </div>
            </div>        
        </>
    )
}

export default Lng