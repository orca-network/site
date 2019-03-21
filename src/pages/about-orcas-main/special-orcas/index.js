import React from "react"
import Layout from "../../../components/layout"
import AccordionList from "../../../components/accordion-list.js"
import FeatureCard from "../../../components/feature-card.js"
import LeftMenu from "../../../components/pages/left-menu.js"

const SpecialOrcas = props => {
  const posts = props.data.specialPosts.edges
  const featured = props.data.specialFeatured.edges[0].node
  const menu = props.data.menu.edges

  return (
    <Layout>
      <LeftMenu
        title={"Special Orcas"}
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

export const query = graphql`
  query PodsQuery {
    specialFeatured: allMarkdownRemark(
      filter: {
        frontmatter: { templateKey: { regex: "/featured/" } }
        fileAbsolutePath: { regex: "/special-orcas/" }
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
    specialPosts: allMarkdownRemark(
      filter: {
        frontmatter: { templateKey: { regex: "/post/" } }
        fileAbsolutePath: { regex: "/special-orcas/" }
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

export default SpecialOrcas
