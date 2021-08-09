import React from 'react'
import Seo from "../components/seo"
import "./page_styles/for-they.css"
import { graphql } from 'gatsby'
import ProductCard from '../components/productCard'

export const query = graphql`
query GET_PRODUCTS{
    allStripePrice {
      edges {
        node {
          id
          unit_amount
          product {
            name
            metadata {
              img
              description
              wear
              gender
            }
          }
        }
      }
    }
  }
`
const ForHer = ({data}) => {

    const filterWoman = data.allStripePrice.edges.filter(item => item.node.product.metadata.gender === 'women')
    console.log(filterWoman)

    return(
        <div>
            <Seo title={`Ropa para mujer`} description="Lleva un estilo unico y original , vistete de tu personalidad"/>
            <section className="woman-hero">
              <h2>FOR HER</h2>
            </section>
            {data.allStripePrice.edges[0].node.product.metadata.women === 'true' && (
                <p style={{marginTop: '4rem', color: 'violet'}}>camiseta solo para mujer</p>
            )            
            }
            <section className="products-container">
                <ProductCard products={filterWoman}/>
            </section>
        </div>
    )
}

export default ForHer

