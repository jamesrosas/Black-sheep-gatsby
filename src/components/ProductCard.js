import React from 'react'
import { Link } from 'gatsby'
import "./styles/ProductCard.css"
import formatPrice from '../utils/priceFormat'

const ProductCard = ({products}) => {
    return (
        <>
        {products.map(({node}) =>{
            const price = formatPrice(node.unit_amount)
            return (
            <div className="card-container" key={node.id}>
                <div className="img-card_container"> 
                    <img className="img-card" src={node.product.metadata.img} alt={node.product.name}/>
                </div>
                <p className="card-title">{node.product.name}</p>
                <span>{price}</span>
                <Link to={`/${node.id}`}>
                    <button className="buy-btn">
                        Comprar
                    </button>
                </Link>
            </div>   
            )
        })}
        </>

    )
}

export default ProductCard