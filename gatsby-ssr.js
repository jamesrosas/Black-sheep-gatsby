/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it

const React = require('react');
const Layout = require('./src/components/layout').default
const {CartProvider} = require('./src/context')

export const wrapRootElement = ({element}) => (
    <CartProvider>
        <Layout>
            {element}
        </Layout>  
    </CartProvider>
)