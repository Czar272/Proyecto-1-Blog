import './Edit.css' 

function Edit() {

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