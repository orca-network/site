import React from "react"
import { Link } from "gatsby"

// import logo from "assets/network-logo.png"
import facebook from "../../images/facebook.svg"
import instagram from "../../images/instagram.svg"
import twitter from "../../images/twitter.svg"

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/" >
              About
            </Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <a
              href="/admin/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Admin{" "}
            </a>
          </li>
        </ul>

        <ul>
          <li>
            <a class= "social-media" title="facebook" href="https://facebook.com">
              <img
                src={facebook}
                alt="Facebook"
                style={{ width: "1em", height: "1em" }}
              />
            </a>
          </li>
          <li>
            <a class = "social-media" title="twitter" href="https://twitter.com">
              <img
                className="fas fa-lg"
                src={twitter}
                alt="Twitter"
                style={{ width: "1em", height: "1em" }}
              />
            </a>
          </li>
          <li>
            <a class = "social-media" title="instagram" href="https://instagram.com">
              <img
                src={instagram}
                alt="Instagram"
                style={{ width: "1em", height: "1em" }}
              />
            </a>
          </li>
        </ul>

        {/* <img
          src="/assets/network-logo.png"
          alt="Orca Network"
          style={{ width: "2.5em" }}
        /> */}
        <div> {"\u00A9"} Orca Network 2019</div>
      </footer>
    )
  }
}

export default Footer
