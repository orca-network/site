import React from "react"
import { Carousel } from "react-responsive-carousel"

import coverImageOne from "../../images/cover-image.png"
// import coverImageThree from "../../images/mark-malleson-encounter-95.png"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

import "./update-carousel.scss"

const CarouselComponent = ({ data }) => (

  <StaticQuery
    query={graphql`
      query {
          coverImgTwo: file(relativePath: {eq: "david-ellifrit-encounter-57.png"}){
            relativePath
            childImageSharp{
              fluid(maxWidth:1600){
                ...GatsbyImageSharpFluid
              }
            }
          }
          coverImgOne: file(relativePath: {eq: "cover-image.png"}){
            relativePath
            childImageSharp{
              fluid(maxWidth:1600){
                ...GatsbyImageSharpFluid
              }
            }
          }
          coverImgThree: file(relativePath: {eq: "mark-malleson-encounter-95.png"}){
            relativePath
            childImageSharp{
              fluid(maxWidth:1600){
                ...GatsbyImageSharpFluid
              }
            }
          }
        
      }
    `}
    render={data => (
      <Carousel
      infiniteLoop="true"
      autoPlay="true"
      interval="5000"
      transitionTime="700"
      >
      {console.log('data', data)}
        <div>
        <Img fluid={data.coverImgOne.childImageSharp.fluid}/>
          <p className="legend">Legend 1</p>
        </div>
        {/* <div>
          <Img fluid={data.coverImgTwo.childImageSharp.fluid}/>
          <p className="legend">Legend 2</p>
        </div>
        <div>
           <Img fluid={data.coverImgThree.childImageSharp.fluid}/>

          <p className="legend">Legend 3</p>
        </div> */}
      </Carousel>
    )}
  />
)

export default CarouselComponent
