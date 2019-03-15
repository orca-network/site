import React from "react"
import Layout from "../../../components/layout"
import AccordionList from "../../../components/accordion-list.js"
import Banner from "../../../components/banner.js"
import FeatureCard from "../../../components/feature-card.js"


const SpecialOrcas = props => {
  const posts = props.data.specialPosts.edges
  const featured = props.data.specialFeatured.edges[0].node;

  return (
    <Layout>
      <Banner title="Special Orcas" />
      <FeatureCard title={featured.frontmatter.title} content={featured.excerpt}/>
      <AccordionList posts={posts} />
    </Layout>
  )
}

//prune length provides maximum number of characters to collect
//default is less than 200
export const query = graphql`
  query PodsQuery {
    specialFeatured: allMarkdownRemark(
      filter: {
        frontmatter: {templateKey: {regex: "/featured/"}}
        fileAbsolutePath: {regex: "/special-orcas/"}
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
    specialPosts: allMarkdownRemark(
      filter: {frontmatter: {templateKey: {regex: "/post/"}}
      fileAbsolutePath: {regex: "/special-orcas/"}
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
  }
`

export default SpecialOrcas;
