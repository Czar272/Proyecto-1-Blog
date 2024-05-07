// import { useEffect, useState } from 'react'
import './Edit.css' 

function Edit() {
    // const [title, setTitle] = useState('')
    // const [cont, setContent] = useState('')
    // const [img, setImage] = useState('')
    // const [creator, setImageDescription] = useState('')

    // const getJuegoById = async() => {
    //     try {
    //         const res = await fetch(`http://127.0.0.1:3000/juego${blogId}`)
    //         const jsonData = await res.json()
    //         // console.log('Respuesta JSON:', jsonData)
    //         const thisPost = jsonData.data[0]
    //         // console.log('Datos del post:', thisPost)
    //         setTitle(thisPost.title)
    //         setContent(thisPost.content)
    //         setImage(thisPost.item_image)
    //         setImageDescription(thisPost.image_description)
    //     } catch (error) {
    //         console.error('Error al obtener el post:', error)
    //         setError('Error al obtener el post')
    //     }
    // }

    // useEffect(() => {
    //     getJuegoByIdd()
    //     // console.log(`El post al que se quiere acceder es: ${blogId}`)
    // },[])


    return(
        <>
        <div className="contenedorEdit">
            <div className="cuadro">
                <div className="row">
                    <div className="txt">Title: </div>
                    <input type="txt" className='textArea'/>
                </div>
                <div className="rowCont">
                    <div className="txt">Description: </div>
                    <input type="text" className='textAreaCont'/> 
                </div>
                <div className="row">
                    <div className="txt">Img Link: </div>
                    <input type="text" className='textArea'/>
                </div>
                <div className="row">
                    <div className="txt">Creator: </div>
                    <input type="text" className='textArea'/>
                </div>
            </div>
        </div>
        </>
    )

}

export default Edit;