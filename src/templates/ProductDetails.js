import React from 'react'
import CardDetails from '../components/cardDetails'

const ProductDetails = ({pageContext}) => {
    return (
        <>
            <div>
                <CardDetails {...pageContext} />
            </div>
        </>
    )
}

export default ProductDetails