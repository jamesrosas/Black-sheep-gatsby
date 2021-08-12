import React from 'react'
import "./styles/modal.css"


const Modal = ({children, onClick, modalClass, overlayClass}) => {
    return (
    <>
        <div onClick={onClick} className={overlayClass}>
        </div>
        <div className={modalClass}> 
            <button className="close-btn"  onClick={onClick}>X</button>
            {children}
        </div>
    </>
    )
}

export default Modal
