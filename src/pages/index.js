import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Button } from "./page-2"
import ProductCard from "../components/ProductCard"
import Seo from "../components/seo"
import "./page_styles/Home.css"
import her from '../images/her.jpg'
import him from '../images/him.jpg'


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
    <section className="welcome-hero">
      <span className="welcome-hero_image"></span>
      <h2 className="welcome-title">Bienvenidx  a Black Sheep</h2>
    </section>
    <sectio className="for-they_container">
      <div className="her-him_flayer">
        <img src={her} alt="ropa de mujer" width={350} />
        <h2>FOR HER</h2>
        <span className="flayer-back_border"></span>
      </div>
      <div className="her-him_flayer">
        <img src={him} alt="ropa de hombre" width={350}/>
        <h2>FOR HIM</h2>
        <span className="flayer-back_border"></span>
      </div>
    </sectio>
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
