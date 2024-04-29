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
                    <textarea className='BarraBusqueda'>
                        <img src= '../assets/img/busqueda.png' alt="" />
                    </textarea>
                    </div>
                </div>
                <div className="content"></div>
                <div className="footer"></div>
            </div>
        
        </>
    )
}
export default Home;