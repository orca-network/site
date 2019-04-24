import React from "react"

import Layout from "../../../components/layout"
import AccordionList from "../../../components/accordion-list.js"
import FeatureCard from "../../../components/feature-card.js"
import "../../../components/styles/h1.scss"
import LeftMenu from "../../../components/pages/left-menu.js"


const Habitat = props => {
  const posts = props.data.habitatPosts.edges
  const featured = props.data.habitatFeature.edges[0].node
  const menu = props.data.menu.edges


  return (
    <Layout>
        <LeftMenu title={"Habitat"} menuItems={menu} prefix="/about-orcas-main/">
        <FeatureCard
            title={featured.frontmatter.title}
            content={featured.rawMarkdownBody}
            image={featured.frontmatter.image}
          />
          <AccordionList posts={posts} />

        </LeftMenu>
    </Layout>
  )
}

export const query = graphql`
  query HabitatQuery {
    habitatFeature: allMarkdownRemark(
      filter: {
        frontmatter: { templateKey: { regex: "/featured/" } }
        fileAbsolutePath: { regex: "/habitat/" }
      }
    ) {
      ...contentPost
    }
    habitatPosts: allMarkdownRemark(
      filter: {
        frontmatter: { templateKey: { regex: "/post/" } }
        fileAbsolutePath: { regex: "/habitat/" }
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      ...contentPost
    }
    menu: allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/about-orcas-main/" }
          frontmatter: { templateKey: { regex: "/featured/" } }
        }
      ) {
        ...menuFrontmatter
      }
  }
`

export default Habitat
