import React from 'react'
import { Carousel } from "react-responsive-carousel"

import coverImageOne from "../../images/cover-image.png"
import coverImageTwo from "../../images/david-ellifrit-encounter-57.png"
import coverImageThree from "../../images/mark-malleson-encounter-95.png"
import Img from "gatsby-image"
import {graphql} from "gatsby"

import "./update-carousel.scss"

export default ({data})=> {
    return (
    <Carousel infiniteLoop="true" autoPlay="true" interval="5000" transitionTime="700" >
    <div>
      <img src={coverImageOne} />
      <p className="legend" >Legend 1</p>
    </div>
    <div>
      {/* <Img fluid={data.file.childImageSharp.fluid}/> */}
      <img src={coverImageTwo} />
      <p className="legend">Legend 2</p>
    </div>
    <div>
      <img src={coverImageThree} />
      <p className="legend">Legend 3</p>
    </div>
  </Carousel>
  )
}


export const query = graphql`
  query {
    file(relativePath: { regex: "/david-ellifrit/" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`