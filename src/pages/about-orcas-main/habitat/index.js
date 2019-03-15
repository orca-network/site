import React from "react"

import Layout from "../../../components/layout"
import AccordionList from "../../../components/accordion-list.js"
import Banner from "../../../components/banner.js"
import FeatureCard from "../../../components/feature-card.js"
import "../../../components/h1.scss"

const Habitat = props => {
  const posts = props.data.habitatPosts.edges;
  const featured = props.data.habitatFeature.edges[0].node;
  console.log("alias query", posts, featured)

  return (
    <Layout>
        <Banner title="Natural Habitat"/>
        <FeatureCard title={featured.frontmatter.title} content={featured.excerpt}/>
          <AccordionList posts={posts} />
    </Layout>
  )
}

export const query = graphql`
  query HabitatQuery {
    habitatFeature: allMarkdownRemark(
      filter: {
        frontmatter: {templateKey: {regex: "/featured/"}}
        fileAbsolutePath: {regex: "/habitat/"}
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
    habitatPosts: allMarkdownRemark(
      filter: {
        frontmatter: {templateKey: {regex: "/post/"}}
        fileAbsolutePath: {regex: "/habitat/"}
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

export default Habitat