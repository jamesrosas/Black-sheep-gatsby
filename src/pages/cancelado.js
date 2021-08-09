import React from 'react'
import {Link} from 'gatsby'
import "./page_styles/cancelado.css"

const Cancelado = () => {

    return(
        <div className="cancel-page">
            <div className="copy-cancel_page">
                <h2>Tu pedido ha sido cancelado</h2>
                <p>No pasa nada, recuerda que siempre puedes volver</p>
                <Link to="/">
                    ir al inicio
                </Link>
            </div>
            <div className="image-container_cancel">
                <span></span>
            </div>
        </div>
    )
}

export default Cancelado