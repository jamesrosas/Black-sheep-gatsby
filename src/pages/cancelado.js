import React from 'react'
import {Link} from 'gatsby'


const Cancelado = () => {

    return(
        <div>
            <p>Tu compra ha sido cancelada</p>
            <Link to="/">
                <button>ir al inicio</button>
            </Link>
        </div>
    )
}

export default Cancelado