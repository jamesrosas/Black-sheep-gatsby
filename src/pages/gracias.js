import React from 'react'
import {Link} from 'gatsby'
import "./page_styles/gracias.css"

const Gracias = () => {

    return(
        <div className="thanks-page">
            <div className="copy-thanks_page">
                <h2>Gracias por tu compra</h2>
                <p>Esperamos vuelvas pronto <span role="img">😉</span></p>
                <Link to="/">
                    ir al inicio
                </Link>
            </div>
            <div className="image-container_thanks">
                <span></span>
            </div>
        </div>  
    )
}

export default Gracias