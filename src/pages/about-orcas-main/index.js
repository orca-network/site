import React, { Component } from "react"
import Layout from "../../components/layout.js"
import Banner from "../../components/banner.js"
import SideMenu from "../../components/side-menu.js"
import FeatureCard from "../../components/feature-card.js"

const aboutImage =
  "https://static.wixstatic.com/media/760f65_3113669cb3064cdf9acd16f41934984b~mv2.jpg"
// const menuItems = [
//   { title: "Natural History", path: "/about-orcas-main/natural-history" },
//   { title: "Special Orcas", path: "/about-orcas-main/special-orcas" },
//   { title: "Habitat", path: "/about-orcas-main/habitat" },
//   { title: "Southern Resident Community", path: "/about-orcas-main/so-resident" },
//   { title: "Biggs & Transient", path: "/about-orcas-main/biggs-transient" },  
//   { title: "Ways of Whales", path: "/about-orcas-main/ways-whales" },
//   { title: "Resources", path: "/about-orcas-main/resources" },
// ]


const AboutOrcaMain = props => {
  const query = props.data.mainContent.edges[0].node
  const menu = props.data.menu.edges
  console.log('menu results', menu);
  return (
    <Layout>
      <>
        <Banner title="About Orcas" />
        <div class="columns">
          <div class="column is-one-quarter">
            <SideMenu menuItems={menu} prefix="/about-orcas-main/" />
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
  query AboutQuery {
    mainContent: allMarkdownRemark(
      filter: {
        frontmatter: { templateKey: { regex: "/section-home/" } }
        fileAbsolutePath: { regex: "/about-orca-main/" }
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
      filter:{fileAbsolutePath: {regex: "/about-orcas-main/"}
        frontmatter: {templateKey: {regex: "/featured/"}}
      }
    ){
      edges{
        node
        {
          frontmatter{
            title
          }
        }
      }
    }
  }
`

export default AboutOrcaMain
