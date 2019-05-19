import React from "react"

import Layout from "../../../components/layout/layout.js"
import AccordionList from "../../../components/accordion/accordion-list.js"
import FeatureCard from "../../../components/feature-card/feature-card.js"
import LeftMenu from "../../../components/menu-left/left-menu.js"
import Form from "../../../components/forms/form.js"
import Facebook from "../../../components/facebook/facebook.js"
const Habitat = props => {
  // const featured = props.data.sightingsFeature.edges[0].node
  const menu = props.data.menu.edges

  return (
    <Layout>
      <LeftMenu title={"Sightings"} menuItems={menu} prefix="/sightings/">
        <Form />
      </LeftMenu>
    </Layout>
  )
}

export const query = graphql`
  query Sightings {
    sightingsFeature: allMarkdownRemark(
      filter: {
        frontmatter: { templateKey: { regex: "/featured/" } }
        fileAbsolutePath: { regex: "/report-a-sighting/" }
      }
    ) {
      ...contentPost
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

export default Habitat
