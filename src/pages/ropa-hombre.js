import React from 'react'
import { graphql } from 'gatsby'
import ProductCard from "../components/ProductCard"
import Seo from "../components/seo"
import "./page_styles/for-they.css"
import { node } from 'prop-types'


export const query = graphql`
  query GET_DATA {
    allSite {
      edges {
        node {
          siteMetadata {
            description
          }
        }
      }
    }
    allStripePrice{
      edges{
        node{
          id
          unit_amount
          product{
            name
            metadata{
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

const ForHim = ({data}) => {

  const filterMen = data.allStripePrice.edges.filter(({node}) => node.product.metadata.gender === 'men')
  
    return(
        <div>
            <Seo title={`Ropa para hombre`} description="Encuentra aqui las prendas para hombre con los diseños mas frescos y originales"/>
            <section className="men-hero">
              <h2>FOR HIM</h2>
            </section>
            <section className="products-container">
                <ProductCard products={filterMen}/>
            </section>
        </div>
    )
}

export default ForHim