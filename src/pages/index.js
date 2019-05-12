import React, { Component } from "react"
import Layout from "../components/layout/layout.js"
import coverImageOne from "../images/cover-image.png"
import coverImageTwo from "../images/david-ellifrit-encounter-57.png"
import coverImageThree from "../images/mark-malleson-encounter-95.png"
import { Link } from "gatsby"
import InfoCard from "../components/card/info-card.js"
import Card from "../components/card/card.js"
import Banner from "../components/banner/banner.js"
import Carousel from "../components/carousel/carousel.js"
import styles from "react-responsive-carousel/lib/styles/carousel.min.css"
import "../components/styles/carousel.scss"

import Img from "gatsby-image"

let description =
  "Orca Network is a 502(c)(3) non-profit organization dedicated to rasing awareness of the whales of the Pacific Northwest, an the importance of providing them healthy and safe habitats."

export default ({ data }) => {
  console.log("about orca results", data.AboutOrcasMain)
  return (
    <Layout>
      <Carousel />
      <Banner title="Orca Network" sub={description}>
        {/* add the button here */}
        <a to="/" class="button is-warning is-normal is-rounded">
          Support Orca Network
        </a>
      </Banner>
      <section>
        <InfoCard title="event" 
        subtitle="new event for whales"
        date="1/1/1"
        location="Seattle"
        description="my event is going to be fantastic" 
        img={null}>
        <p>Date: 1/1/1</p>
        </InfoCard>
      </section>
      

      <section className="content">
        <div class="column is-one-quarter">
          <Card
            text="The Marine Stranding Network provides information regardng Marine Mammal strandings in Central Puget Sound"
            img="assets/marine-stranding-network.png"
          />
        </div>
        <div class="column is-one-quarter">
          <Card
            text="We provide news and updates about the ongoing efforts to free Lolita and return her to her home waters."
            img="assets/network-logo.png"
          />
        </div>
        <div class="column is-one-quarter">
          <Card
            title=""
            text="The Whale Center provides educational exhibits about Orcas and other marine mammals and offers a gift shop and library."
            img="assets/whale-center-logo.jpg"
          />
        </div>
        <div class="column is-one-quarter">
          <Card
            text="The Orca Sighing Network utilizes a variety of rescources to provide reports of Orca sightins in puget Sound."
            img="assets/whale-sighting-logo.png"
          />
        </div>
      </section>
    </Layout>
  )
}

//add a query to look for the events and get all the events
//map through the array of events and render an info-card for each event

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
