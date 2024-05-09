import { useEffect, useState } from 'react'
import './Edit.css' 
// import PropTypes from 'prop-types's
import PropTypes from 'prop-types'


function Edit({setUrlActual}) {
    const [title, setTitle] = useState('')
    const [cont, setCont] = useState('')
    const [img, setImg] = useState('')
    const [creator, setCreator] = useState('')
    // const [error, setError] = useState('')

    const handleCancelar = () => {
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

    // const getThisJuego = async () => {

    //     try {
    //         const response = await fetch(`http://localhost:3000/juego/${id}`)
    //         const jsonData = await response.json()
    //         const thisPost = jsonData.data[0]
            
    //         setTitle(thisPost.title)
    //         setCont(thisPost.cont)
    //         setImg(thisPost.img)
    //         setCreator(thisPost.creator)

    //     } catch (error) {
    //         console.error('Error al enviar la solicitud de edición:', error);
    //         alert('Error al editar el juego. Por favor, inténtalo de nuevo más tarde');
    //     }
    // }

    // useEffect(() => {
    //     getThisJuego()
    // },[])

    const handleEditar = async() => {
        // try{
        //     const response = await fetch('http://localhost:3000/juego/${id}', {
        //         method: 'PUT',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify({
        //             title: title,
        //             cont: cont, 
        //             img: img,
        //             creator: creator
        //         })
        //     })
        //     if (response.ok){
        //         setUrlActual('/admin')
        //         window.location.pathname = '/admin'
        //     }else{
        //         const data = await response.json()

        //     }

        // }catch(e){
        //     console.error('Error al cargar la API:', error)
        //     setError('Error al cargar la API')
        // }

    }
    return(
        <>
        <div className="contenedorEdit">
            <div className="cuadro">
                <div className="row">
                    <div className="titletxt">Edit Post</div>
                </div>
                <div className="row">
                    <div className="txt">Title: </div>
                    <input type="txt" className='textArea' value={title} onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div className="rowCont">
                    <div className="txt">Description: </div>
                    <input type="text" className='textAreaCont' value={cont} onChange={(e) => setCont(e.target.value)}/> 
                </div>
                <div className="row">
                    <div className="txt">Img Link: </div>
                    <input type="text" className='textArea' value={img} onChange={(e) => setImg(e.target.value)}/>
                </div>
                <div className="row">
                    <div className="txt">Creator: </div>
                    <input type="text" className='textArea' value={creator} onChange={(e) => setCreator(e.target.value)}/>
                </div>
                <div className="row">
                    <button className = 'btnEdit' onClick={handleEditar}> Editar </button>
                    <button className = 'btnEdit' onClick={handleCancelar}> Cancelar </button>
                </div>
            </div>
        </div>
        </>
    )

}

Edit.propTypes = {
    setUrlActual: PropTypes.func.isRequired
};

export default Edit;
