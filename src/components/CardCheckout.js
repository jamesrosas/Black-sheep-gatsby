import React, { useContext, useState} from 'react'
import { CartContext } from '../Context'
import priceFormat from '../utils/priceFormat'
import "./styles/CardCheckout.css"


const CardCheckout = ({info}) => {
    // const [qty, setQty] = useState(info.quantity)
    const {removeToCart} = useContext(CartContext)


    const handleRemove = (product) => {
        removeToCart(product)
      }

    return(
        <>
            <div key={info.id} className="card-check_container">
                <img width={80} src={info.metadata.img} alt={info.name}/>
                <p>{info.name}</p><br/>
                <p>{info.size}</p>
                <div>
                    <p>{info.quantity}</p>
                    {/* <button onClick={() => qty > 1 ? setQty(qty - 1) : null}>-</button>
                    <input type="text" disabled value={info.quantity}/>
                    <button onClick={() => qty < 10 ? setQty(qty + 1) : null}>+</button> */}
                </div>
                <span>{priceFormat(info.unit_amount * info.quantity)}</span>
                <button onClick={() => handleRemove(info)}>X</button>
            </div>
        </>
    )
}

export default CardCheckout