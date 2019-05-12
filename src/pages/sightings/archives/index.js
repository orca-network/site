import React from "react"

import Layout from "../../../components/layout/layout.js"
import Banner from "../../../components/banner/banner.js"
import FeatureCard from "../../../components/feature-card/feature-card.js"

const Archives = props => {
  const featured = props.data.archivesFeature.edges[0].node;

  return (
    <Layout>
        <Banner title="Natural Habitat"/>
        <FeatureCard title={featured.frontmatter.title} content={featured.excerpt}/>
    </Layout>
  )
}

export const query = graphql`
  query ArchivesQuery {
    archivesFeature: allMarkdownRemark(
      filter: {
        frontmatter: {templateKey: {regex: "/featured/"}}
        fileAbsolutePath: {regex: "/archives/"}
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
  }
`

export default Archives
