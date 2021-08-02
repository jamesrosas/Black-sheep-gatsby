import React, {useContext, useEffect, useState} from 'react'
import { CartContext } from '../Context'
// import CardCheckout from '../components/CardCheckout'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import priceFormat from '../utils/priceFormat'
import "./styles/CartModal.css"


const CartModal = () => {

    const {cart, removeToCart} = useContext(CartContext)
    const [total, setTotal] = useState(0)
    const [stripe, setStripe] = useState()

    const getTotal = () => {
        setTotal(
            cart.reduce((acc, current) => acc + current.unit_amount * current.quantity, 0)
        )
    }

    useEffect(()=>{
        setStripe(
            window.Stripe(process.env.STRIPE_PK)
        )
        getTotal()
    }, [])

    const handleRemove = (product) => {
        removeToCart(product)
      }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const {error} = await stripe.redirectToCheckout({
            lineItems: cart.map(({id, quantity}) => ({ price: id, quantity})),
            mode: "payment",
            successUrl: process.env.SUCCESS_REDIRECT,
            cancelUrl: process.env.CANCEL_REDIRECT
        })
        if(error){
            throw error
        }
    }


    console.log(cart)

    return(
        <div>
            <h2 className="title_cart">Carrito</h2>
            <div className="all-cart_container">
            {cart.length === 0 && (
                <div className="empty-cart_container">
                    <p>Aun no agregas nada al carrito 😕</p>
                    <div className="empty-cart_image">
                        <StaticImage
                            src="https://i.postimg.cc/vBPDQj2M/carrito-vacio.jpg"
                            width={400}
                            quality={95}
                            formats={["AUTO", "WEBP", "AVIF"]}
                            alt="carrito vacio"
                            style={{ marginBottom: `1.45rem` }}
                        />
                    </div>
                </div>
            )}
            {cart.map(carrito => {
                return(
                <>
                    <div className="cart-container">
                        <ul>
                            <li key={carrito.id}>
                                <div key={carrito.id} className="card-check_container">
                                    <img width={80} height={80} src={carrito.metadata.img} alt={carrito.name}/>
                                    <div className="info-product_container">
                                        <span>{priceFormat(carrito.unit_amount * carrito.quantity)}</span>
                                        <p className="product-name">{carrito.name}</p><br/>
                                        <div id="size-and-qty">
                                            <p>{carrito.size === 1 &&(
                                                <>XS</>
                                            )}
                                            {carrito.size === 2 &&(
                                                <>S</>
                                            )}
                                            {carrito.size === 3 &&(
                                                <>M</>
                                            )}{carrito.size === 4 &&(
                                                <>L</>
                                            )}</p>
                                            <span>|</span>
                                            <p>x{carrito.quantity}</p>
                                        </div>
                                        {/* <button onClick={() => qty > 1 ? setQty(qty - 1) : null}>-</button>
                                        <input type="text" disabled value={carrito.quantity}/>
                                        <button onClick={() => qty < 10 ? setQty(qty + 1) : null}>+</button> */}
                                    </div>
                                    <button onClick={() => handleRemove(carrito)}>X</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </>
                )
            })}
                <div className="button-buy_container">
                    {cart.length > 0 && (
                        <>
                        <div id="total-container">
                            <p>SubTotal:</p>
                            <p>USD {priceFormat(total)}</p>                   
                        </div>
                        <button id="buy" onClick={handleSubmit} >Ir al pago</button>
                        </>              
                    )}
                </div>
            </div>
        </div>
    )
}

export default CartModal