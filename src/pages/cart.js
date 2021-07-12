import React, {useContext, useEffect, useState} from 'react'
import { CartContext } from '../Context'
// import CardCheckout from '../components/CardCheckout'
import { Link, navigate } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import priceFormat from '../utils/priceFormat'
import "./page_styles/Cart.css"


const Cart = () => {

    const {cart, removeToCart} = useContext(CartContext)
    const [total, setTotal] = useState(0)

    const getTotal = () => {
        setTotal(
            cart.reduce((acc, current) => acc + current.unit_amount * current.quantity, 0)
        )
    }

    useEffect(()=>{
        getTotal()
    }, [])

    const handleRemove = (product) => {
        removeToCart(product)
      }


    console.log(cart)
    return(
        <div>
            <h2>Carrito</h2>
            <div>
            {cart.length === 0 && (
                <div className="empty-cart_container">
                    <p>Aun no agregas nada al carrito 😕</p>
                    <div className="empty-cart_image">
                        <StaticImage
                            src="https://i.postimg.cc/5yYVYQrG/bored.jpg"
                            width={300}
                            quality={95}
                            formats={["AUTO", "WEBP", "AVIF"]}
                            alt="carrito vacio"
                            style={{ marginBottom: `1.45rem` }}
                        />
                    </div>
                    <Link to="/">
                        <button>Ir a la tienda</button>
                    </Link>
                </div>
            )}
            {cart.map(carrito => {
                return(
                <>
                    <div className="cart-container">
                        <ul>
                            <li key={carrito.id}>
                                <div key={carrito.id} className="card-check_container">
                                    <img width={80} src={carrito.metadata.img} alt={carrito.name}/>
                                    <p>{carrito.name}</p><br/>
                                    <p>{carrito.size}</p>
                                    <div>
                                        <p>x{carrito.quantity}</p>
                                        {/* <button onClick={() => qty > 1 ? setQty(qty - 1) : null}>-</button>
                                        <input type="text" disabled value={carrito.quantity}/>
                                        <button onClick={() => qty < 10 ? setQty(qty + 1) : null}>+</button> */}
                                    </div>
                                <span>{priceFormat(carrito.unit_amount * carrito.quantity)}</span>
                                <button onClick={() => handleRemove(carrito)}>X</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </>
                )
            })}
                <div className="total-container">
                    <p>SubTotal:</p>
                    <p>USD {priceFormat(total)}</p>
                </div>
                <div className="buttons-container">
                    <Link to="/">
                        <button>volver</button>
                    </Link>
                    <button id="buy" disabled={cart.length === 0}>Comprar</button>               
                </div>
            </div>
        </div>
    )
}

export default Cart