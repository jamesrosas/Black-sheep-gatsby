import { Link } from 'gatsby'
import React, { useState } from 'react'
import "./styles/toggleMenu.css"

const ToggleMenu = ({onClick}) => {

    const [subMenu, setSubMenu] = useState(false)
    const showSubMenu = () => {
        setSubMenu(!subMenu)
    }
    
    return (
        <div className="toggle-menu_container">
            <ul>
                <li id="toggle-home"><Link onClick={onClick} to="/">Home</Link></li>
                <li onClick={showSubMenu} id="toggle-categorys">
                    Categorys
                    {subMenu && (
                    <div id="toggle-categorys_submenu">
                        <span onClick={showSubMenu}>x</span>
                        <ul>
                            <li className="li-details">
                                <Link onClick={onClick} to="/ropa-mujer">For her</Link>
                            </li>
                            <li className="li-details">
                                <Link onClick={onClick} to="/ropa-hombre">For him</Link>
                            </li>
                        </ul>
                    </div>
                    )}
                </li>
            </ul>
        </div>
    )
}

export default ToggleMenu