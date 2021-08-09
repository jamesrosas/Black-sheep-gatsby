import { Link } from 'gatsby'
import React from 'react'
import "./styles/toggleMenu.css"

const ToggleMenu = ({onClick}) => {
    return (
        <div className="toggle-menu_container">
            <ul>
                <li id="toggle-home"><Link onClick={onClick} to="/">Home</Link></li>
                <li>
                    <details>
                        <summary>Categorys</summary>
                        <ul>
                            <li className="li-details">
                                <Link onClick={onClick} to="/ropa-mujer">For her</Link>
                            </li>
                            <li className="li-details">
                                <Link onClick={onClick} to="/ropa-hombre">For him</Link>
                            </li>
                        </ul>
                    </details>
                </li>
            </ul>
        </div>
    )
}

export default ToggleMenu