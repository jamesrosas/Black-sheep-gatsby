import * as React from "react"
import { Link , graphql} from "gatsby"

import Seo from "../components/seo"

export const query = graphql`
  query GET_INFO {
    allSite {
      edges {
        node {
          siteMetadata {
            description
          }
        }
      }
    }
  }
`

const SecondPage = ({data}) => {
  const description = data.allSite.edges[0].node.siteMetadata.description;
  return (
  <>
    <Seo title="Page two" />
    <h1>Hi from the second page</h1><br/>
    <p>{description}</p>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </>
)
}

export default SecondPage
