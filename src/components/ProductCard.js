import React from 'react'
import { Link } from 'gatsby'
import "./styles/productCard.css"
import formatPrice from '../utils/priceFormat'
import arrowRight from '../images/right-arrow.png'

const ProductCard = ({products}) => {
    return (
        <>
        {products.map(({node}) =>{
            const price = formatPrice(node.unit_amount)
            return (
            <div key={node.id} className="product-card_container">
                <Link to={`/${node.id}`}>
                    <div className="card-container" key={node.id}>
                        <div className="img-card_container"> 
                            <img className="img-card" src={node.product.metadata.img} alt={node.product.name}/>
                        </div>
                        <p className="card-title">{node.product.name}</p>
                        <span>{price}</span>
                        <Link to={`/${node.id}`}>
                            <div className="arrow-container">
                                <p>Ver Detalles</p>
                                <img id="arrow-card" src={arrowRight} width={100} alt="arrow details"/>
                            </div>
                        </Link>
                    </div>   
                </Link>
                <span className="back-border"></span>
            </div>
            )
        })}
        </>

    )
}

export default ProductCard