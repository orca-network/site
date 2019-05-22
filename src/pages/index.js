import React, { Component } from "react"
import Layout from "../components/layout/layout.js"
import coverImageOne from "../images/cover-image.png"
import coverImageTwo from "../images/david-ellifrit-encounter-57.png"
import coverImageThree from "../images/mark-malleson-encounter-95.png"
import { Link } from "gatsby"
import InfoCard from "../components/card/info-card.js"
import Card from "../components/card/card.js"
import Banner from "../components/banner/banner.js"
import Subscribe from "../components/forms/subscribe.js";

import Carousel from "../components/carousel/carousel.js"
import "../components/styles/carousel.scss"

import Img from "gatsby-image"

let description =
  "Orca Network is a 502(c)(3) non-profit organization dedicated to rasing awareness of the whales of the Pacific Northwest, and the importance of providing them healthy and safe habitats."

export default ({ data }) => {
  // console.log("about orca results", data.AboutOrcasMain)
  console.log("image", data.coverImg)
  let events = data.events.edges;
  return (
    <Layout>
      {/* <Carousel /> */}
      <Img
        fluid={data.coverImg.childImageSharp.fluid}
        style={{ width: "100%" }}
      />

      <Banner title="Orca Network" sub={description}>
        {/* add the button here */}
        <a to="/" class="button is-warning is-normal is-rounded">
          Support Orca Network
        </a>
        <a class="button is-warning is-normal is-rounded">
        <Link to="/about/subscribe">
          Subscribe
        </Link>
        </a>
      
      </Banner>
      <section style={{ width: "100%" }}>
      {events.map(event=>{
        return (
          <Link to={event.node.frontmatter.path}>
          <InfoCard 
          title={event.node.frontmatter.title}
          location={event.node.frontmatter.locatoin}
          date={event.node.frontmatter.date}
          
          />
          </Link>
        )
      })}
     
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
    coverImg: file(relativePath: { eq: "david-ellifrit-encounter-57.png" }) {
      relativePath
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    events: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/events/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            path
            location
            date
            title
          }
          excerpt
        }
      }
    }
  }
`
