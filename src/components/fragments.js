
export const menuFrontmatterFragment = graphql`
  fragment menuFrontmatter on MarkdownRemarkConnection {
        edges{
          node
          {
            frontmatter{
              title
            }
          }
        }
  }
`
