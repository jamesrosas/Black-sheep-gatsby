// import { navigate } from '@reach/router'
import React from 'react'
import {Link} from 'gatsby'

const Gracias = () => {

    return(
        <div>
            <p>Gracias por tu compra</p>
            <Link to="/">
                <button>ir al inicio</button>  
            </Link>
        </div>
    )
}

export default Gracias