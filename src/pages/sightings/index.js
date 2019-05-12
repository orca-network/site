import React, { Component } from "react"
import Layout from "../../components/layout/layout.js"
import Banner from "../../components/banner/banner.js"
import SideMenu from "../../components/side-menu/side-menu.js"
import FeatureCard from "../../components/feature-card/feature-card.js"

const aboutImage =
  "https://static.wixstatic.com/media/760f65_3113669cb3064cdf9acd16f41934984b~mv2.jpg"
const menuItems = [
  { title: "Archives", path: "/sightings/archives" },
  { title: "Report Sighting", path: "/sightings/archives" },
  { title: "Viewpoints Map", path: "/sightings/viewpoints-map" },
  { title: "Whale Watching Trips", path: "/sightings/whale-watch" }
]


const Sightings = props => {
  const query = props.data.allMarkdownRemark.edges[0].node
  return (
    <Layout>
      <>
        <Banner title="Sightings" />
        <div class="columns">
          <div class="column is-one-quarter">
            {/* <SideMenu  menuItems={menuItems} /> */}
          </div>
          <div class="column">
            <FeatureCard
              title={query.frontmatter.title}
              content={query.excerpt}
              image={aboutImage}
            />
          </div>
        </div>
      </>
    </Layout>
  )
}

export const query = graphql`
  query SightingsQuery {
    allMarkdownRemark(
      filter: {
        frontmatter: { templateKey: { regex: "/section-home/" } }
        fileAbsolutePath: { regex: "/sightings/" }
      }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            title
          }
        }
      }
    }
  }
`

export default Sightings;