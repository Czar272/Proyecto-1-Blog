import React from 'react';
import './Popup.css'

function Popup({ onClose, onEdit, onDelete }) {
  return (
    <div className="popup">
      <button onClick={onEdit} className='btnPu'>Editar</button>
      <button onClick={onDelete}className='btnPu'>Eliminar</button>
    </div>
  );
}

export default Popup;
