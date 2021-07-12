import React, { useContext, useState } from 'react'
import priceFormat from '../utils/priceFormat'
import "./styles/CardDetails.css"
import styled from 'styled-components'
import Seo from './seo'
import Stars from './Stars'
import { CartContext } from '../Context'

const SelectSize = styled.div`
  & {
    width: fit-content;
    padding: 1rem;
    display: flex;
    flex-direction: row;
    gap: 5px;
    margin: 0 auto;
  }
  button {
    width: fit-content;
    padding: 5px;
    border-radius: 5px;
    border: 1px rgb(201, 198, 198) solid;
    background-color: white;
  }
  button:hover{
    background-color: cyan;
  }
  button:active{
    background-color: rgb(219, 219, 219);
  }
  button:nth-child(${props => props.selected}) {
    background-color: yellow;
  }
  .color-size_btn{
    background-color: cyan;
  }
`

const CardDetails = ({id, unit_amount, product:{name, metadata}}) => {
    const [cantidad, setCantidad] = useState(1)
    const totalPrice = priceFormat(unit_amount * cantidad)

    const [size, setSize] = useState("s")
    const {addToCart, cart} = useContext(CartContext)

    const handleClick = () =>{
     
      addToCart({ unit_amount, id, name, metadata, size, quantity: cantidad })
  
    }

    const handleButton = (e) => {
      e.target.classList.toggle('color-size_btn')
      setSize(e.target.value)
    }

    return (
      <>
        <Seo title={name} description={metadata.description}/>
        <div className="card-details_container">
            <img width={500} src={metadata.img} alt={name}/>
            <h2>{name}</h2>
            <Stars/>
            <p>{metadata.description}</p>
            <div className="cantidad-container">
                <button onClick={() => cantidad > 1 ? setCantidad(cantidad - 1) : null}>-</button>
                <input type="text" disabled value={cantidad}/>
                <button onClick={() => cantidad < 10 ? setCantidad(cantidad + 1) : null}>+</button>
            </div>
            {metadata.wear && (
             <SelectSize selected={size}>
                <button className="size-btn" onClick={handleButton} value="xs" size="1">XS</button>
                <button className="size-btn"  onClick={handleButton} value="s" size="2">S</button>
                <button className="size-btn" onClick={handleButton} value="m" size="3">M</button>
                <button className="size-btn" onClick={handleButton} value="l" size="4">L</button>
             </SelectSize>
        
        )}
            <span>USD {totalPrice}</span>
            <button className="add-cart" onClick={handleClick}>Agregar al Carrito</button>
        </div>
      </>
    )
}

export default CardDetails