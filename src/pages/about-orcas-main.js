import React, { Component } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
const aboutImage =
"https://static.wixstatic.com/media/760f65_3113669cb3064cdf9acd16f41934984b~mv2.jpg"
const AboutOrcaMain = props => {
  // const posts = props.data.allMarkdownRemark.edges;
  // console.log('posts from orca main', posts[0].node)

  return (
    <Layout>
      <>
        {/* <h1 className="title has-text-weight-bold is-size-2 has-text-centered">
          The Orca Network
        </h1>{" "} */}
        <section
          class="hero is-primary"
        >
          <div class="hero-body">
            <div class="container">
              {/* <h1 class="title">About Orcas</h1> */}
            </div>
          </div>
        </section>

        <div class="columns">
          <div class="column is-one-quarter">
            <aside class="menu" style={{margin: '2rem'}}>
              <h2 class="menu-label">All About Oras</h2>
              <ul class="menu-list">
                <li>
                  <Link to="/habitat" class="navbar-item">
                    Habitat
                  </Link>
                </li>
                <li>
                  <Link to="/pods" class="navbar-item">
                    Pods
                  </Link>
                </li>

                <li>
                  <Link to="/pods" class="navbar-item">
                    Northwest Orcas
                  </Link>
                </li>
              </ul>
            </aside>
          </div>
          <div class="column">
            <figure class="image" style={{margin: "1rem"}}>
              <img src={aboutImage} />
            </figure>
          </div>
        </div>
      </>
    </Layout>
  )
}

// export const query = graphql`
//   query AboutQuery {
//     allMarkdownRemark(
//       filter: { fileAbsolutePath: { regex: "/about-orcas/" } }
//       sort: { fields: [frontmatter___date], order: DESC }
//     ) {
//       edges {
//         node {
//           excerpt
//           frontmatter {
//             title
//             path
//           }
//         }
//       }
//     }
//   }
// `;

export default AboutOrcaMain
