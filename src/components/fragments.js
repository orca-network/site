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
        html
        frontmatter {
          image
          title
        }
      }
    }
  }
`

export const ContentExcerptFragment = graphql`
  fragment contentExcerpt on MarkdownRemarkConnection {
    edges {
      node {
        ...excerpt
        frontmatter {
          image
          title
        }
      }
    }
  }
`
