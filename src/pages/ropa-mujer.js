import React from 'react'
// import { graphql } from 'gatsby'
// import ProductCard from "../components/ProductCard"
import Seo from "../components/seo"
import "./page_styles/for-they.css"
import { graphql } from 'gatsby'
import ProductCard from '../components/ProductCard'

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
              women
            }
          }
        }
      }
    }
  }
`
const ForHer = ({data}) => {

    const cosas = [
      {
        id: 48,
        name: 'perro'
      },
      {
        id: 30,
        name: 'carro'
      },
      {
        id: 15,
        name: 'moto'
      }
    ]

    const filtered = cosas.filter(item => item.id > 30)
    console.log(filtered)

    const filterWoman = data.allStripePrice.edges.filter(item => item.node.product.metadata.women === 'true')
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

