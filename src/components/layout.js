/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import Header from "./Header"
import Footer from "./Footer"
import "./Layout.css"

const Layout = ({ children }) => {

  return (
    <div>
      <Header/>
      <main>
        {children}
      </main>
      <Footer/>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
