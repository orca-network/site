import React from "react"
import Layout from "../../../components/layout"
import AccordionList from "../../../components/accordion-list.js"
import Banner from "../../../components/banner.js"
import FeatureCard from "../../../components/feature-card.js"


const AboutOrcas = props => {
  const posts = props.data.podsPosts.edges
  const featured = props.data.podsFeatured.edges[0].node;

  return (
    <Layout>
      <Banner title="Orca Pods" />
      <FeatureCard title={featured.frontmatter.title} content={featured.excerpt}/>
      <AccordionList posts={posts} />
    </Layout>
  )
}

//prune length provides maximum number of characters to collect
//default is less than 200
export const query = graphql`
  query PodsQuery {
    podsFeatured: allMarkdownRemark(
      filter: {
        frontmatter: {templateKey: {regex: "/featured/"}}
        fileAbsolutePath: {regex: "/pods/"}
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
    podsPosts: allMarkdownRemark(
      filter: {frontmatter: {templateKey: {regex: "/post/"}}
      fileAbsolutePath: {regex: "/pods/"}
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

export default AboutOrcas;
