import React, { useContext, useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "./styles/Header.css"
import { CartContext } from "../Context"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  const {cart} = useContext(CartContext)

  const [modal, setModal] = useState(false)
  
  const showModal = () => {
    setModal(!modal)
  }
  return(
    <>
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
            <li onClick={showModal}><Link to="/cart">
              <FontAwesomeIcon icon={faShoppingCart} size="xs" />
              {cart.length > 0 ? <span>{cart.length}</span> : null }
            </Link></li>  
          </ul>
        </nav>
      </div>
    </header>
    {modal 
    ?
    <div onClick={showModal} className="cart-overlay">
      <div className="cart-modal">
        <button onClick={showModal}>X</button>
        <h2>Carrito</h2>
        {cart.length === 0 && (
          <p>aun no agregas nada al carrito</p>
        )}
        {cart.map( item => {
          return(
          <>
            <img src={item.metadata.img} alt={item.name} width={150} />
            <p>{item.name}</p>
          </>
          )
        }      
        )
        }
      </div>
    </div>
    :
    null
    }
   
    </>
  )
}

export default Header
