import React from "react"
import Layout from "../../../components/layout/layout.js"
import AccordionList from "../../../components/accordion/accordion-list.js"
import FeatureCard from "../../../components/feature-card/feature-card.js"
import LeftMenu from "../../../components/menu-left/left-menu.js"

const SpecialOrcas = props => {
  const posts = props.data.specialPosts.edges
  const featured = props.data.specialFeatured.edges[0].node
  const menu = props.data.menu.edges

  return (
    <Layout>
      <LeftMenu
        title={"All About Orcas"}
        menuItems={menu}
        prefix="/about-orcas/"
      >
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
  query PodsQuery {
    specialFeatured: allMarkdownRemark(
      filter: {
        frontmatter: { templateKey: { regex: "/featured/" } }
        fileAbsolutePath: { regex: "/special-orcas/" }
      }
    ) {
     ...contentPost
    }
    specialPosts: allMarkdownRemark(
      filter: {
        frontmatter: { templateKey: { regex: "/post/" } }
        fileAbsolutePath: { regex: "/special-orcas/" }
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      ...contentPost
    }
    menu: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/about-orcas/" }
        frontmatter: { templateKey: { regex: "/featured/" } }
      }
    ) {
      ...menuFrontmatter
    }
  }
`

export default SpecialOrcas
