import React from "react"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

import Navbar from "../navbar/navbar.js"
import Footer from "../../components/footer/footer.js"

// import '../styles/all.sass'

const TemplateWrapper = ({ children }) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <div className="layout">
      {/* TODO: add the script tag for the donorbox plugin here with <script></script> */}
        <Helmet>
          <html lang="en" />
          <title>{data.site.siteMetadata.title}</title>
          <meta
            name="description"
            content={data.site.siteMetadata.description}
          />
          <script src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
          <meta name="theme-color" content="#fff" />
          <meta property="og:type" content="business.business" />
          <meta property="og:title" content={data.site.siteMetadata.title} />
          <meta property="og:url" content="/" />
          <meta property="og:image" content="/img/og-image.jpg" />
        </Helmet>
        <Navbar/>
        <section>{children}</section>
        <Footer />
      </div>
    )}
  />
)
export default TemplateWrapper;
