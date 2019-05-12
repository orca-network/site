import React, { Component } from "react"
import Layout from "../components/layout/layout.js"
import coverImageOne from "../images/cover-image.png"
import coverImageTwo from "../images/david-ellifrit-encounter-57.png"
import coverImageThree from "../images/mark-malleson-encounter-95.png"
import { Link } from "gatsby"
import ImgCard from "../components/img-card/img-card.js"

import Carousel from "../components/carousel/carousel.js"
import styles from "react-responsive-carousel/lib/styles/carousel.min.css"
import "../components/styles/carousel.scss"

import Img from "gatsby-image"

export default ({data})=> {
    return (
      <Layout>
        <>
          {/* <h1 className="title has-text-weight-bold is-size-2 has-text-centered">
          The Orca Network
        </h1>{" "} */}
          <section class="section" style={{ padding: "0em" }}>
            {/* <Carousel slides={slides}/> */}
            <div style={{width: "100%", height: "400px"}}/>
          </section>
          <section class="hero is-primary">
            <div class="hero-body">
              <div class="container has-text-centered">
                <h1 class="title">Orca Network</h1>
                <h2 class="subtitle">
                  Non profit for whale and orca research in the pacific
                  northwest.
                </h2>
                <a to="/" class="button is-warning is-normal is-rounded">
                  Support Orca Network
                </a>
              </div>
            </div>
          </section>

          <section class="section columns is-mobile">
            <div class="column is-one-quarter">
              <ImgCard img="assets/marine-stranding-network.png" />
            </div>
            <div class="column is-one-quarter">
              <ImgCard img="assets/network-logo.png" />
            </div>
            <div class="column is-one-quarter">
              <ImgCard img="assets/whale-center-logo.jpg" />
            </div>
            <div class="column is-one-quarter">
              <ImgCard img="assets/whale-sighting-logo.png" />
            </div>
          </section>
        </>
      </Layout>
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