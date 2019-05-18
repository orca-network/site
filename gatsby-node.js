// const path = require("path"),
//   fs = require("fs");

// // Create pages from markdown files.
// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions;

//     const result = await graphql(
//       `
//         query {
//           events: allMarkdownRemark(
//             filter: { fileAbsolutePath: { regex: "/events/" } }
//             sort: { fields: [frontmatter___date], order: DESC }
//           ) {
//             edges {
//               node {
//                 id
//                 frontmatter {
//                   path
//                   title
//                   date(formatString: "DD MMMM YYYY")
//                 }
//                 excerpt
//               }
//             }
//           }
//         }
//       `
//     );
//     result.data[events].edges.forEach(({ node }) => {
//       const component = path.resolve(`src/templates/general.js`);
//       createPage({
//         component,
//         path: "/events/test-event/",
//         context: { title: "hello" },
//       });
//     });
// };