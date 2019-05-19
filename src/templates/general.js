import React from "react";
import { graphql, withPrefix } from "gatsby";
// import SEO from "../components/SEO";
import Layout from "../components/layout";

import withRoot from "../utils/withRoot";

const Detail = ({ data }) => {
  const { title, date } = data.markdownRemark.frontmatter,
    { html } = data.markdownRemark;
  return (
    <Layout>
      {/* <SEO title={title} /> */}
      <Card>
        <div>{title}</div>
        <div>{date}</div>

        </Card>
    </Layout>
  );
};

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
      html
    }
  }
`;

export default withRoot(Detail);
