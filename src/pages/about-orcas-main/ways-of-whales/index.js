import React from "react"
import Layout from "../../../components/layout"
import AccordionList from "../../../components/accordion-list.js"
import Banner from "../../../components/banner.js"
import FeatureCard from "../../../components/feature-card.js"


const WaysWhales = props => {
  const posts = props.data.waysPosts.edges
  const featured = props.data.waysFeatured.edges[0].node;

  return (
    <Layout>
      <Banner title="Ways of Whales" />
      <FeatureCard title={featured.frontmatter.title} content={featured.excerpt} image={featured.frontmatter.image}/>
      <AccordionList posts={posts} />
    </Layout>
  )
}

//prune length provides maximum number of characters to collect
//default is less than 200
export const query = graphql`
  query WaysQuery {
    waysFeatured: allMarkdownRemark(
      filter: {
        frontmatter: {templateKey: {regex: "/featured/"}}
        fileAbsolutePath: {regex: "/ways-of-whales/"}
    }
    ){
      edges{
        node{
          excerpt(pruneLength: 400)
          frontmatter{
            title
            image
          }
        }
      }
    }
    waysPosts: allMarkdownRemark(
      filter: {frontmatter: {templateKey: {regex: "/post/"}}
      fileAbsolutePath: {regex: "/ways-of-whales/"}
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
  }
`

export default WaysWhales;
