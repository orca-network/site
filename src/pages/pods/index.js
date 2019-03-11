import React from "react"

import Layout from "../../components/layout"
import AccordionList from "../../components/accordion-list.js"
import "../../components/h1.scss"

const AboutOrcas = props => {
  const posts = props.data.allMarkdownRemark.edges

  return (
    <Layout>
      <section className="section">
        <div className="container">
          <div
            className="full-width-image-container margin-top-0"
            style={
              {
                //   backgroundImage: `url('/img/blog-index.jpg')`,
              }
            }
          >
            <section class="hero is-primary">
              <div class="hero-body">
                <div class="container">
                  <h1 class="title">Orca Pods</h1>
                </div>
              </div>
            </section>
          </div>
          <AccordionList posts={posts} />
        </div>
      </section>
    </Layout>
  )
}


//prune length provides maximum number of characters to collect
//default is less than 200
export const query = graphql`
  query AboutOrcaMainQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/pods/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`

export default AboutOrcas
