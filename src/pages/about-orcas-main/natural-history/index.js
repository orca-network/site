import React from "react"

import Layout from "../../../components/layout"
import AccordionList from "../../../components/accordion-list.js"
import Banner from "../../../components/banner.js"
import FeatureCard from "../../../components/feature-card.js"
import "../../../components/h1.scss"

const NaturalHistory = props => {
  const posts = props.data.historyPosts.edges;
  const featured = props.data.historyFeature.edges[0].node;
  console.log("alias query", posts, featured)

  return (
    <Layout>
        <Banner title="Natural History"/>
        <FeatureCard title={featured.frontmatter.title} content={featured.excerpt}/>
          <AccordionList posts={posts} />
    </Layout>
  )
}

export const query = graphql`
  query HistoryQuery {
    historyFeature: allMarkdownRemark(
      filter: {
        frontmatter: {templateKey: {regex: "/featured/"}}
        fileAbsolutePath: {regex: "/natural-history/"}
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
    historyPosts: allMarkdownRemark(
      filter: {
        frontmatter: {templateKey: {regex: "/post/"}}
        fileAbsolutePath: {regex: "/natural-history/"}
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

export default NaturalHistory
