import React from "react"

import Layout from "../../../components/layout"
import AccordionList from "../../../components/accordion-list.js"
import FeatureCard from "../../../components/feature-card.js"
import LeftMenu from "../../../components/pages/left-menu.js"
import "../../../components/h1.scss"

const Resource = props => {
  const posts = props.data.resourcePosts.edges;
  const featured = props.data.resourceFeature.edges[0].node;
  const menu = props.data.menu.edges


  return (
    <Layout>
         <LeftMenu title={"Resources"} menuItems={menu} prefix="/about-orcas-main/">
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
  query ResourceQuery {
    resourceFeature: allMarkdownRemark(
      filter: {
        frontmatter: {templateKey: {regex: "/featured/"}}
        fileAbsolutePath: {regex: "/resource/"}
    }
    ){
      edges{
        node{
          excerpt(pruneLength: 400)
          frontmatter{
            title
          }
        }
      }
    }
    resourcePosts: allMarkdownRemark(
      filter: {
        frontmatter: {templateKey: {regex: "/post/"}}
        fileAbsolutePath: {regex: "/resource/"}
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt(pruneLength: 350)
          frontmatter {
            title
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

export default Resource
