import React from "react"

import Layout from "../../components/Layout"
import AccordionList from "../../components/accordion-list.js"
import "../../components/h1.scss"

const Habitat = props => {
  const posts = props.data.allMarkdownRemark.edges

  return (
    <Layout>
          <div
            className="container"
            style={
              {
                //   backgroundImage: `url('/img/blog-index.jpg')`,
              }
            }
          >
            <section class="hero is-primary">
              <div class="hero-body">
                <div class="container">
                  <h1 class="title">Orca Habitat</h1>
                </div>
              </div>
            </section>
          </div>
          <AccordionList posts={posts} />
    </Layout>
  )
}

export const query = graphql`
  query HabitatQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/habitat/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt(pruneLength: 350)
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`

export default Habitat
