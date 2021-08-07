import { Link } from "gatsby"
import * as React from "react"
import "./page_styles/not-found.css"

const NotFoundPage = () => (
  <div className="not-found_container">
    <h1>404: Not Found</h1>
    <p>It seems that what you are looking for does not exist...  yet.</p>
    <Link to="/">Go to home</Link>
    <div className="not-found_image_container">
    </div>
  </div>
)

export default NotFoundPage
