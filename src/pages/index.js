import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Button } from "./page-2"
import ProductCard from "../components/ProductCard"
import Seo from "../components/seo"
import "./page_styles/Home.css"

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


const IndexPage = ({data}) => (
  <>
    <Seo title={`Los diseños mas inovadores`} description="Bienvenid@ a la tienda con los diseños mas inovadores. Entra ya y descubre todo lo que tenemos para ti"/>
    <h1>Black Sheep</h1>
    <p>Descubre todos nuestros diseños</p>
    <section className="products-container">
      <ProductCard products={data.allStripePrice.edges}/>
    </section>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={500}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Button>
        <Link to="/page-2/">Go to page 2</Link> <br />
      </Button>
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
  </>
)

export default IndexPage
