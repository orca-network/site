import React, { Component } from "react"
import Layout from "../../components/layout/layout.js"
import Banner from "../../components/banner/banner.js"
import SideMenu from "../../components/side-menu/side-menu.js"
import FeatureCard from "../../components/feature-card/feature-card.js"
import MenuLeft from "../../components/menu-left/left-menu.js"
const aboutImage =
  "https://static.wixstatic.com/media/760f65_3113669cb3064cdf9acd16f41934984b~mv2.jpg"

const AboutOrcaMain = props => {
  const query = props.data.mainContent.edges[0].node
  const menu = props.data.menu.edges
  console.log('menu results', menu);
  return (
    <Layout>
      <MenuLeft title="About Orcas" menuItems={menu} prefix="/about-orcas/">
      <FeatureCard
              title={query.frontmatter.title}
              content={query.excerpt}
              image={aboutImage}
            />
      </MenuLeft>
    </Layout>
  )
}

export const query = graphql`
  query AboutQuery {
    mainContent: allMarkdownRemark(
      filter: {
        frontmatter: { templateKey: { regex: "/section-home/" } }
        fileAbsolutePath: { regex: "/about-orcas/" }
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
    menu: allMarkdownRemark(
      filter:{fileAbsolutePath: {regex: "/about-orcas/"}
        frontmatter: {templateKey: {regex: "/featured/"}}
      }
    ){
      ...menuFrontmatter
    }
  }
`

export default AboutOrcaMain
