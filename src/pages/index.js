import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Button } from "./page-2"
import Seo from "../components/seo"
import "./page_styles/Home.css"
import her from '../images/her.jpg'
import him from '../images/him.jpg'


const IndexPage = () => (
  <>
    <Seo title={`Los diseños mas inovadores`} description="Bienvenid@ a la tienda con los diseños mas inovadores. Entra ya y descubre todo lo que tenemos para ti"/>
    <section className="welcome-hero">
      <span className="welcome-hero_image"></span>
      <h1 className="welcome-title">Welcome to Black Sheep</h1>
    </section>
    <h2 className="title-category">New Arrivals</h2>
    <section className="for-they_container">
      <div className="her-him_flayer">
        <Link to="/ropa-mujer/">
          <img src={her} alt="ropa de mujer" width={350} />
          <h2>FOR HER</h2>
          <span className="flayer-back_border"></span>
          <span className="destello"></span>      
        </Link>
      </div>
      <div className="her-him_flayer">
        <Link to="/ropa-hombre/">
          <img src={him} alt="ropa de hombre" width={350}/>
          <h2>FOR HIM</h2>
          <span className="flayer-back_border"></span> 
          <span className="destello"></span>
        </Link>
      </div>
    </section>
    <h3 className="slogan">"cool designs for cool people"</h3>
  </>
)

export default IndexPage
