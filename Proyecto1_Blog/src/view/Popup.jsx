// import React from 'react';
import './Popup.css'
import PropTypes from 'prop-types'

function Popup({onEdit, onDelete }) {
  return (
    <div className="popup">
      <button onClick={onEdit} className='btnPu'>Editar</button>
      <button onClick={onDelete}className='btnPu'>Eliminar</button>
    </div>
  );
}

Popup.propTypes = {
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default Popup;
