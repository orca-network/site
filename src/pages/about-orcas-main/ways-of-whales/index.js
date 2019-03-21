import React from "react"
import Layout from "../../../components/layout"
import AccordionList from "../../../components/accordion-list.js"
import FeatureCard from "../../../components/feature-card.js"
import LeftMenu from "../../../components/pages/left-menu.js"

const WaysWhales = props => {
  const posts = props.data.waysPosts.edges
  const featured = props.data.waysFeatured.edges[0].node
  const menu = props.data.menu.edges

  return (
    <Layout>
      <LeftMenu
        title={"Ways of Whales"}
        menuItems={menu}
        prefix="/about-orcas-main/"
      >
        <FeatureCard
          title={featured.frontmatter.title}
          content={featured.excerpt}
        />
        <AccordionList posts={posts} />
      </LeftMenu>
    </Layout>
  )
}

//prune length provides maximum number of characters to collect
//default is less than 200
export const query = graphql`
  query WaysQuery {
    waysFeatured: allMarkdownRemark(
      filter: {
        frontmatter: { templateKey: { regex: "/featured/" } }
        fileAbsolutePath: { regex: "/ways-of-whales/" }
      }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          frontmatter {
            title
            image
          }
        }
      }
    }
    waysPosts: allMarkdownRemark(
      filter: {
        frontmatter: { templateKey: { regex: "/post/" } }
        fileAbsolutePath: { regex: "/ways-of-whales/" }
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt(pruneLength: 350)
          frontmatter {
            title
            image
          }
        }
      }
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

export default WaysWhales
