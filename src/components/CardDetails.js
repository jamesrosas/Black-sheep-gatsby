import React, { useContext, useState } from 'react'
import priceFormat from '../utils/priceFormat'
import "./styles/cardDetails.css"
import styled from 'styled-components'
import Seo from './seo'
import Stars from './stars'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../context'

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
    padding: 10px;
    font-size: 15px;
    border-radius: 5px;
    border: 1px rgb(201, 198, 198) solid;
    background-color: white;
  }
  button:hover{
    background-color: #d1d1d1;
  }
  button:nth-child(${props => props.selected}) {
    background-color: black;
    color: white;
  }
  .color-size_btn{
    background-color: cyan;
  }

  @media (min-width: 1290px){
    button {
      font-size: 20px;
    }
  }
`

const CardDetails = ({id, unit_amount, product:{name, metadata}}) => {
    const [cantidad, setCantidad] = useState(1)
    const totalPrice = priceFormat(unit_amount * cantidad)

    const [size, setSize] = useState(0)
    const {addToCart, cart} = useContext(CartContext)

    const randomNum = Math.floor(Math.random()*(939943 - 23824) + 1)
    const [random, setRandom] = useState(randomNum)

    const handleClick = () =>{
    
      addToCart({ id, unit_amount, name, metadata, size, random, quantity: cantidad })
  
    }

    return (
      <>
        <Seo title={name} description={metadata.description}/>
        <div className="card-details_container">
            <div className="img-container">
              <img width={500} src={metadata.img} alt={name}/>
            </div>
            <div className="info-container"> 
              <h2>{name}</h2> 
              <Stars/>
              <p>{metadata.description}</p>
              <div className="cantidad-container">
                  <button onClick={() => cantidad > 1 ? setCantidad(cantidad - 1) : null}><FontAwesomeIcon icon={faMinus} size="xs" /></button>
                  <input type="text" disabled value={cantidad}/>
                  <button onClick={() => cantidad < 10 ? setCantidad(cantidad + 1) : null}><FontAwesomeIcon icon={faPlus} size="xs" /></button>
              </div>
              {metadata.wear && (
              <SelectSize selected={size}> 
                  <button className="size-btn" onClick={() => setSize(1)} >XS</button>
                  <button className="size-btn"  onClick={() => setSize(2)} >S</button>
                  <button className="size-btn" onClick={() => setSize(3)} >M</button>
                  <button className="size-btn" onClick={() => setSize(4)} >L</button>
              </SelectSize>
              )}
              <span>USD {totalPrice}</span>
              <button className="add-cart" onClick={handleClick} disabled={size === 0}>Add to cart</button>
              {size === 0 && ( <p id="red-message">*escoje una talla antes de agregar al carrito</p> )}
            </div>
        </div>
      </>
    )
}

export default CardDetails