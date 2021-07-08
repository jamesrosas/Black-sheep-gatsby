import React, { useState } from 'react'
import priceFormat from '../utils/priceFormat'
import "./styles/CardDetails.css"
import styled from 'styled-components'
import Seo from './seo'
import Stars from './Stars'

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
  button:nth-child(${props => props.selected}) {
    background-color: rgb(219, 219, 219);
  }
`

const CardDetails = ({unit_amount, product:{name, metadata}}) => {
    const [cantidad, setCantidad] = useState(1)
    const totalPrice = priceFormat(unit_amount * cantidad)

    const [size, setSize] = useState(2)
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
                <button onClick={() => setSize(1)}>XS</button>
                <button onClick={() => setSize(2)}>S</button>
                <button onClick={() => setSize(3)}>M</button>
                <button onClick={() => setSize(4)}>L</button>
             </SelectSize>
        
        )}
            <span>USD {totalPrice}</span>
            <button className="add-cart">Agregar al Carrito</button>
        </div>
      </>
    )
}

export default CardDetails