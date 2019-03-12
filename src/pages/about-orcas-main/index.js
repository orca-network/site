import React, { Component } from "react"
import Layout from "../../components/layout.js"
import Banner from "../../components/banner.js"
import SideMenu from "../../components/side-menu.js"
import FeatureCard from "../../components/feature-card.js"

const aboutImage =
  "https://static.wixstatic.com/media/760f65_3113669cb3064cdf9acd16f41934984b~mv2.jpg"

  const menuItems = [{title: "Habitat", path: "/about-orcas-main/habitat"}, {title: "Pods", path: "/about-orcas-main/pods"}]
  const AboutOrcaMain = props => {
  const query = props.data.allMarkdownRemark.edges[0].node
  console.log("posts from orca main", query)
  
  return (
    <Layout>
      <>
        <Banner title="About Orcas" />
        <div class="columns">
          <div class="column is-one-quarter">
            <SideMenu menuItems={menuItems} />
          </div>
          <div class="column">
          <FeatureCard title={query.frontmatter.title} content={query.excerpt} image={aboutImage}/>
          </div>
        </div>
      </>
    </Layout>
  )
}

export const query = graphql`
  query AboutQuery {
    allMarkdownRemark(
      filter: { 
        frontmatter: { templateKey: { regex: "/section-home/" } } 
        fileAbsolutePath: {regex: "/about-orca-main/"}
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

export default AboutOrcaMain
