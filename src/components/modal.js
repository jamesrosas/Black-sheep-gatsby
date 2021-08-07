import React, {useState} from 'react'
import "./styles/modal.css"


const Modal = ({children, onClick}) => {

    // const [modal, setModal] = useState(false)

    // const showModal = () => {
    //     setModal(!modal)
    // }

    return (
    <>
        <div onClick={onClick} className="modal-overlay">
        </div>
        <div className="modal-container"> 
            <button className="close-btn" onClick={onClick}>X</button>
            {children}
        </div>
    </>
    )
}

export default Modal
