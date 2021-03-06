import React, {useContext, useEffect, useState} from 'react'
import { CartContext } from '../context'
import { StaticImage } from "gatsby-plugin-image"
import priceFormat from '../utils/priceFormat'
import "./styles/cartModal.css"


const CartModal = ({classOut}) => {

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
    }, [cart.length])

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

    // console.log(cart)

    return(
        <div className={classOut}>
            <h2 className="title_cart">Cart</h2>
            <div className="all-cart_container">
            {cart.length === 0 && (
                <div className="empty-cart_container">
                    <p>You still don't add anything to the cart😕</p>
                    <div className="empty-cart_image">
                    </div>
                </div>
            )}
            {cart.map(carrito => {
                return(
                    <li key={carrito.id}>
                        <div className="card-check_container">
                            <img src={carrito.metadata.img} alt={carrito.name}/>
                            <div className="info-product_container">
                                <span>{priceFormat(carrito.unit_amount * carrito.quantity)}</span>
                                <p className="product-name">{carrito.name}</p><br/>
                                <div id="size-and-qty">
                                    <p className="feature">{carrito.size === 1 &&(
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
                                    <p className="feature">x{carrito.quantity}</p>
                                    {carrito.quantity > 1 && (
                                        <p id="price-each">{priceFormat(carrito.unit_amount)} each</p>
                                    )}
                                </div>
                            </div>
                            <button className="remove-btn" onClick={() => handleRemove(carrito)}>X</button>
                        </div>
                    </li>
                )
            })}
            </div>
            <div className="button-buy_container">
                {cart.length > 0 && (
                    <>
                    <div id="total-container">
                        <p>SubTotal:</p>
                        <p>{priceFormat(total)} <small>USD</small></p>                   
                    </div>
                    <button id="buy" onClick={handleSubmit} >Go to pay</button>
                    </>              
                )}
            </div>
        </div>
    )
}

export default CartModal