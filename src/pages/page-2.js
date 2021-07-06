import * as React from "react"
import { Link} from "gatsby"
import { StaticImage} from "gatsby-plugin-image"
import styled from "styled-components"

import Seo from "../components/seo"

// export const query = graphql`
//   query GET_DATA {
//     allSite {
//       edges {
//         node {
//           siteMetadata {
//             description
//           }
//         }
//       }
//     }
//     allStripePrice{
//       edges{
//         node{
//           id
//           unit_amount
//           product{
//             name
//             metadata{
//               img
//               description
//               wear
//             }
//           }
//         }
//       }
//     }           
//   }
// `

export const Button = styled.button`
  width: fit-content;
  padding: 10px;
  background-color: ${props => props.color || 'cyan'};
  border: none;
  border-radius: 5px;
  a {
    text-decoration: none;
  }
  &:hover{
    transform: scale(1.2);
  }
  transition: 350ms;
`

const SecondPage = ({data}) => {
  console.log(data)
  // const description = data.allSite.edges[0].node.siteMetadata.description;
  // const name = data.allStripePrice.edges[0].node.product.name
  // const imagen = data.allStripePrice.edges[0].node.product.metadata.img
  // const precio = data.allStripePrice.edges[0].node.unit_amount
  return (
  <>
    <Seo title="Page two" />
    <h1>Hi from the second page</h1><br/>
    <p>description</p>
    <StaticImage
      src="../images/gatsby-icon.png" //solo recibe imagenes locales o colocado directamente la url
      width={600}
      quality={95}
      // layout = "constrained" // aqui podemos colocar *fixed para que nuca cambie su tamaño, *constrained para que se adapte siempre --> donde el maxWidth sera el width que definamos dentro de nuestro componente StaticImage, y *fullWidth para que ocupe todo el ancho de la pantalla siempre. De  todas manera el layout por defecto simepre estara en constrained por lo que si lo necesitamos asi no es necesario especificar la prop layout.
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="the gatsby icon"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>Welcome to page 2</p>
    {/* <h2>{name}</h2>
    <img width="300" src={imagen} alt="es una camiseta" />
    <p>{`el precio de esta camiseta es de ${precio}`}</p> */}
    <Button color="yellow">
      <Link to="/">Go back to the homepage</Link>
    </Button>
  </>
)
}

export default SecondPage
