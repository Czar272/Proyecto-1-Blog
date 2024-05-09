import './Post.css'
// import PropTypes from 'prop-types'
import PropTypes from 'prop-types'
import { useEffect } from 'react'


function Post({setUrlActual}) {

    const handleCancelar = () => {
        setUrlActual('/admin')
        window.location.pathname = '/admin'
    }

    const handleEditar = () => {
        setUrlActual('/admin')
        window.location.pathname = '/admin'
    }

    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn')
        if (isLoggedIn === 'false') {
            window.location.pathname = '/login'
            setUrlActual("/login")
            alert('Esta pagina esta disponible unicamente para el administrador')

        }
    }, [setUrlActual])

    return(
        <>
            <div className="contenedorPost">
                <div className="cuadroPost">
                    <div className="rowPost">
                        <div className="titletxtPost">New Post</div>
                    </div>
                    <div className="rowPost">
                        <div className="txtPost">Title: </div>
                        <input type="txt" className='textAreaPost'/>
                    </div>
                    <div className="rowContPost">
                        <div className="txtPost">Description: </div>
                        <input type="text" className='textAreaContPost'/> 
                    </div>
                    <div className="rowPost">
                        <div className="txt">Img Link: </div>
                        <input type="text" className='textAreaPost'/>
                    </div>
                    <div className="rowPost">
                        <div className="txt">Creator: </div>
                        <input type="text" className='textAreaPost'/>
                    </div>
                    <div className="rowPost">
                        <button className = 'btnPost' onClick={handleEditar}> Publicar </button>
                        <button className = 'btnPost' onClick={handleCancelar}> Cancelar </button>
                    </div>
                </div>
            </div>
        </>
    )

}

Post.propTypes = {
    setUrlActual: PropTypes.func.isRequired
};

export default Post

