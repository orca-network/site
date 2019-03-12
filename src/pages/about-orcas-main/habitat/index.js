import React from "react"

import Layout from "../../../components/layout"
import AccordionList from "../../../components/accordion-list.js"
import Banner from "../../../components/banner.js"
import "../../../components/h1.scss"

const Habitat = props => {
  const posts = props.data.allMarkdownRemark.edges

  return (
    <Layout>
        <Banner title="Orca Habitat"/>
          <AccordionList posts={posts} />
    </Layout>
  )
}

export const query = graphql`
  query HabitatQuery {
    allMarkdownRemark(
      filter: {frontmatter: {templateKey: {regex: "/post/"}}
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
