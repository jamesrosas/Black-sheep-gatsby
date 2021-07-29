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
    const difSize= cart.find( item => item.size !== element.size)
    const sameName = cart.find(item => item.name === element.name)


    if(sameProduct && sameSize) {
        setCart([
            ...cart.filter((item) => item.id !== element.id )
        ])
        // setCart(cart.filter((item) =>
        // item.size === sameSize.size &&  item.id === sameProduct.id ? item.id !== element.id : null
        // ))
    }
    if(sameProduct && difSize && sameName){
        setCart([
            ...cart.filter((item) => item.size !== element.size )
        ])
    }
}

return (
    <CartContext.Provider value={{cart, addToCart, removeToCart}} >
        {children}
    </CartContext.Provider>
)
}

