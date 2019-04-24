import React from "react"

import Layout from "../../../components/layout"
import AccordionList from "../../../components/accordion-list.js"
import FeatureCard from "../../../components/feature-card.js"
import LeftMenu from "../../../components/pages/left-menu.js"
import "../../../components/styles/h1.scss"

const NaturalHistory = props => {
  const posts = props.data.historyPosts.edges
  const featured = props.data.historyFeature.edges[0].node
  const menu = props.data.menu.edges

  console.log("alias query", posts, featured)

  return (
    <Layout>
      <LeftMenu
        title={"Natural History"}
        menuItems={menu}
        prefix="/about-orcas-main/"
      >
        <FeatureCard
          title={featured.frontmatter.title}
          content={featured.rawMarkdownBody}
        />
        <AccordionList posts={posts} />
      </LeftMenu>
    </Layout>
  )
}

export const query = graphql`
  query HistoryQuery {
    historyFeature: allMarkdownRemark(
      filter: {
        frontmatter: { templateKey: { regex: "/featured/" } }
        fileAbsolutePath: { regex: "/natural-history/" }
      }
    ) {
      ...contentPost 
    }
    historyPosts: allMarkdownRemark(
      filter: {
        frontmatter: { templateKey: { regex: "/post/" } }
        fileAbsolutePath: { regex: "/natural-history/" }
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

export default NaturalHistory
