import React from "react"
import LeftMenu from "../../../components/menu-left/left-menu.js"
import Layout from "../../../components/layout/layout.js"
import Banner from "../../../components/banner/banner.js"
import FeatureCard from "../../../components/feature-card/feature-card.js"
import Facebook from "../../../components/facebook/facebook.js"

const Archives = props => {
  const featured = props.data.archivesFeature.edges[0].node
  const menu = props.data.menu.edges

  return (
    <Layout>
      <LeftMenu title={"Sightings"} menuItems={menu} prefix="/sightings/">
        {/* <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%"}}> */}
        <div className="centerRow">
          <Facebook />
        </div>
      </LeftMenu>
    </Layout>
  )
}

export const query = graphql`
  query ArchivesQuery {
    archivesFeature: allMarkdownRemark(
      filter: {
        frontmatter: { templateKey: { regex: "/featured/" } }
        fileAbsolutePath: { regex: "/archives/" }
      }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          frontmatter {
            title
          }
        }
      }
    }

    menu: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/sightings/" }
        frontmatter: { templateKey: { regex: "/featured/" } }
      }
    ) {
      ...menuFrontmatter
    }
  }
`

export default Archives
