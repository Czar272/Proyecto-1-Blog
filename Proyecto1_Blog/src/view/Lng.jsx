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

                    <a href='#'  className='txt'>
                    <h2 className='txt'>Service</h2>
                    </a>

                    <a href='#'  className='txt'>
                    <h2 className='txt'>Help</h2>
                    </a>
                </div>
                <div className="header3">
                <textarea className='BarraBusqueda' placeholder='Buscar' ></textarea>
                </div>
            </div>
            <div className="content">
                <div className="card" >
                    <div className="cardCol1L">
                        <div className="titlesqr lng" style={{marginBottom: '4%'}}><img  alt="" className='opcionesCard' /> <p className='title'></p> </div> 
                        <div className="descriptionsqr lng"> <p className='description'></p></div>
                    </div>
                    <div className="cardCol2L" style={{marginRight: '5%'}}>
                        <div className="imgName lng" style={{marginBottom: '2%'}}><h3> </h3></div>
                        <div className="img1 lng" style={{borderRadius: '0'}}>
                            <img  className='img'/>
                        </div>
                        <div className="imgFoot lng" style={{marginTop: '2%'}}><p className='autortxt'></p></div>
                    </div>
                </div>
                <div className="card" >
                    <div className="cardCol1L" >
                        <div className="titlesqr lng" style={{marginBottom: '4%'}}><img  alt="" className='opcionesCard' /> <p className='title'></p> </div> 
                        <div className="descriptionsqr lng"> <p className='description'></p></div>
                    </div>
                    <div className="cardCol2L" style={{marginRight: '5%'}}>
                        <div className="imgName lng" style={{marginBottom: '2%'}}><h3> </h3></div>
                        <div className="img1 lng" style={{borderRadius: '0'}}>
                            <img  className='img'/>
                        </div>
                        <div className="imgFoot lng" style={{marginTop: '2%'}}><p className='autortxt'></p></div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <h4 className='infoUsuario lng' style={{backgroundColor:"grey"}}></h4>
                <div className="infoUsuario lng" style={{backgroundColor:"grey"}}></div>
            </div>
        </div>        
        </>
    )
}

export default Lng


