import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "./styles/Header.css"

const Header = () => (
    <header className="header-container">
      <div className="icon-container">
        <div className="image-content">
          <Link to="/">
            <StaticImage 
              src="../images/sheep.png"
              width={50}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="black sheep icon"
            />
            <p className="icon-title">Black Sheep</p>
          </Link>
        </div>
      </div>
      <div className="nav-container">
        <nav>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li>Checkout</li>
          </ul>
        </nav>
      </div>
    </header>
)

export default Header
