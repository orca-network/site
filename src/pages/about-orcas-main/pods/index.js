import React from "react"
import Layout from "../../../components/layout"
import AccordionList from "../../../components/accordion-list.js"
import Banner from "../../../components/banner.js"

const AboutOrcas = props => {
  const posts = props.data.allMarkdownRemark.edges

  return (
    <Layout>
      <Banner title="Orca Pods" />
      <AccordionList posts={posts} />
    </Layout>
  )
}

//prune length provides maximum number of characters to collect
//default is less than 200
export const query = graphql`
  query AboutOrcaMainQuery {
    allMarkdownRemark(
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
