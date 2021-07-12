import { element } from 'prop-types'
import React, {createContext, useState} from 'react'

export const CartContext = createContext()

export const CartProvider = ({children}) => {
const [cart, setCart] = useState([])

const addToCart = (element) => {
    const exist = cart.find((item) => item.id === element.id)
    const otherSize = cart.find( item => item.size === element.size)

	if(exist) {
		setCart(cart.map((item) =>
			item.id === exist.id ? {...item, quantity: item.quantity + element.quantity} : item
		))
	} 
    if(otherSize && exist) {
        setCart(cart.map((item) =>
			item.size === otherSize.size &&  item.id === exist.id ? {...item, quantity: item.quantity + element.quantity} : item
		))
    }else {
        setCart([
            ...cart,
            element
        ])
    }

}

const removeToCart = (element) => {
    const sameProduct =  cart.find((item) => item.id === element.id)
    const sameSize = cart.find( item => item.size === element.size)

    if(sameProduct && sameSize) {
        setCart([
            ...cart.filter((item) => item.id !== element.id && item.size !== element.size)
        ])
        // setCart(cart.filter((item) =>
        // item.size === sameSize.size &&  item.id === sameProduct.id ? item.id !== element.id : null
        // ))
    }
}

return (
    <CartContext.Provider value={{cart, addToCart, removeToCart}} >
        {children}
    </CartContext.Provider>
)
}

