import React from "react"
import { Link } from "gatsby"

// import logo from "assets/network-logo.png"
import facebook from "../../images/facebook.svg"
import instagram from "../../images/instagram.svg"
import twitter from "../../images/twitter.svg"

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer has-background-primary has-text-white-ter">
        <div className="content has-text-centered has-background-primary has-text-white-ter">
          <div className="container has-background-primary has-text-white-ter">
            <div className="columns">
              <div class="column is-two-third has-text-centered">
                <nav
                  class="breadcrumb has-bullet-separator"
                  aria-label="breadcrumbs"
                >
                  <ul>
                    <li>
                      <Link to="/" className="has-text-white">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="has-text-white">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className=" has-text-white" to="/contact">
                        Contact
                      </Link>
                    </li>
                    <li>
                      <a
                        className=" has-text-white"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin{" "}
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="column is-one-third social">
                <a title="facebook" href="https://facebook.com">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="twitter" href="https://twitter.com">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="instagram" href="https://instagram.com">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="content has-background-white has-text-centered">
          <img src="/assets/network-logo.png" alt="Orca Network" style={{ width: "2.5em" }} />
          <div class="has-text-primary"> {"\u00A9"} Orca Network 2019</div>
        </div>
      </footer>
    )
  }
}

export default Footer
