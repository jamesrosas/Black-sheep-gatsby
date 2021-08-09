import React, { useContext, useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "./styles/Header.css"
import { CartContext } from "../Context"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons'
import CartModal from "./CartModal"
import ToggleMenu from "./toggleMenu"
import Modal from "./modal"

const Header = () => {
  const {cart} = useContext(CartContext)

  const [modal, setModal] = useState(false)
  const [toggleMenu, setToggleMenu] = useState(false)

  const showModal = () => {
    setModal(!modal)
  }

  const showMenu = () => {
    setToggleMenu(!toggleMenu)
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
            <li id="home"><Link to="/">Home</Link></li>
            <li id="categorys">
              Categorys
              <div className="modal-category">
                <ul>
                  <li><Link to="/ropa-mujer">For her</Link></li>
                  <li><Link to="/ropa-hombre">For him</Link></li>
                </ul>
              </div>
            </li>
            <li onClick={showModal}>
              <FontAwesomeIcon icon={faShoppingCart} size="lg" />
              {cart.length > 0 ? <span>{cart.length}</span> : null }
            </li>
            <li id="toggle-menu" onClick={showMenu}>
              <FontAwesomeIcon icon={faBars} size="lg" />
            </li>  
          </ul>
        </nav>
      </div>
    </header>
    {modal && (
    <>
      <Modal onClick={showModal}>
        <CartModal />
      </Modal>
    </>
    )
    }
    {toggleMenu && (
    <>
      <Modal onClick={showMenu}>
        <ToggleMenu onClick={showMenu}/>
      </Modal>
    </>
    )
    }
    </>
  )
}

export default Header
