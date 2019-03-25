export const menuFrontmatterFragment = graphql`
  fragment menuFrontmatter on MarkdownRemarkConnection {
    edges {
      node {
        frontmatter {
          title
        }
      }
    }
  }
`

export const ContentPostFragment = graphql`
  fragment contentPost on MarkdownRemarkConnection {
    edges {
      node {
        rawMarkdownBody
        frontmatter {
          image
          title
        }
      }
    }
  }
`
