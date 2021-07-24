import React from 'react'
import { graphql } from 'gatsby'
import ProductCard from "../components/ProductCard"
import Seo from "../components/seo"
import "./page_styles/for-they.css"


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
            }
          }
        }
      }
    }           
  }
`

const ForHim = ({data}) => {
    return(
        <div>
            <Seo title={`Ropa para hombre`} description="Encuentra aqui las prendas para hombre con los diseños mas frescos y originales"/>
            <section className="men-hero">
              <h2>FOR HIM</h2>
            </section>
            <section className="products-container">
                <ProductCard products={data.allStripePrice.edges}/>
            </section>
        </div>
    )
}

export default ForHim