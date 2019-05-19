import React, { Component } from "react"
import Layout from "../../components/layout/layout.js"
import Banner from "../../components/banner/banner.js"
import SideMenu from "../../components/side-menu/side-menu.js"
import FeatureCard from "../../components/feature-card/feature-card.js"
import MenuLeft from "../../components/menu-left/left-menu.js"
const aboutImage =
  "https://static.wixstatic.com/media/760f65_3113669cb3064cdf9acd16f41934984b~mv2.jpg"

const MuseumMain = props => {
  const query = props.data.mainContent.edges[0].node
  return (
    <Layout>
      {/* <MenuLeft title="Museum" menuItems={null} prefix="/about-orcas/"> */}
      <FeatureCard
              title={query.frontmatter.title}
              content={query.excerpt}
              image={aboutImage}
            />
      {/* </MenuLeft> */}
    </Layout>
  )
}

export const query = graphql`
  query MuseumQuery {
    mainContent: allMarkdownRemark(
      filter: {
        frontmatter: { templateKey: { regex: "/section-home/" } }
        fileAbsolutePath: { regex: "/museum/" }
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

export default MuseumMain