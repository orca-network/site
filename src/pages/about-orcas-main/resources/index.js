import React from "react"

import Layout from "../../../components/layout"
import AccordionList from "../../../components/accordion-list.js"
import Banner from "../../../components/banner.js"
import FeatureCard from "../../../components/feature-card.js"
import "../../../components/h1.scss"

const Resource = props => {
  const posts = props.data.resourcePosts.edges;
  const featured = props.data.resourceFeature.edges[0].node;
  console.log("alias query", posts, featured)

  return (
    <Layout>
        <Banner title="Natural Resource"/>
        <FeatureCard title={featured.frontmatter.title} content={featured.excerpt}/>
          <AccordionList posts={posts} />
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

  }
`

export default Resource
