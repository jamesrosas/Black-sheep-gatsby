import React from 'react'
import "./styles/toggleMenu.css"

const ToggleMenu = () => {
    return (
        <div className="toggle-menu_container">
            <ul>
                <li>Home</li>
                <li>
                    <details>
                        <summary>Categorys</summary>
                        <ul>
                            <li className="li-details">For her</li>
                            <li className="li-details">For him</li>
                        </ul>
                    </details>
                </li>
            </ul>
        </div>
    )
}

export default ToggleMenu