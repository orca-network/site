
const path = require('path');
/**
 *  Create slug pages for markdown files
 *  Create pages for each tag
 */
exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(`
      query {
        events: allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/events/" } }
        ) {
          edges {
            node {
              id
              frontmatter {
                path
                title
              }
              excerpt
            }
          }
        }
      }
    `).then(result => {
      /**
       * Create blog posts based on slugs
       */
      result.data.events.edges.forEach(({ node }) => {
        createPage({
          path: node.frontmatter.path,
          component: path.resolve(`./src/templates/event-template.js`),
          context: { id: node.id },
        })
      })

      resolve()
    })
  })
}

exports.onCreateWebpackConfig = ({
    stage,
    plugins,
    actions,
  }) => {
    actions.setWebpackConfig({
      plugins: [
        plugins.define({
          "global.GENTLY": false
        }),
      ],
    })
  }
