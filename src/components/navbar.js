import React from "react";
import { Link } from "gatsby";
import logo from "../images/network-logo.png";


//use to build in dropdown components with the navbar

{/* <div class="navbar-item has-dropdown is-hoverable">
<div class="navbar-link is-arrowless">Learn more about orcas: </div>
<div class="navbar-dropdown">
  <Link to="/habitat" class="navbar-item">
    Habitat
  </Link>
  <Link to="/pods" class="navbar-item">
    Pods
  </Link>
</div>
</div> */}

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: ""
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active"
            })
          : this.setState({
              navBarActiveClass: ""
            });
      }
    );
  };

  render() {
    return (
      <nav
      className="navbar is-transparent"
      role="navigation"
      aria-label="main-navigation"
    >
        <div className="navbar-brand">
        <Link to="/" className="" title="Logo">
          <img src={logo} alt="The Orca Network Logo" style={{ width: "125px", margin: '1em' }} />
      </Link>
      
          {/* Hamburger menu */}
          <div
            className={`navbar-burger burger ${this.state.navBarActiveClass}`}
            data-target="navMenu"
            onClick={() => this.toggleHamburger()}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/about-orcas-main">
                All About Orcas
              </Link>
              <Link className="navbar-item" to="/lolita-tokikae">
                Lolita/Tokikae
              </Link>
              <Link className="navbar-item" to="/museum">
                Museum
              </Link>
              <Link className="navbar-item" to="/sightings">
                Sightings
              </Link>
              <Link className="navbar-item" to="/sightings">
                Strandings
              </Link>
              {/* <Link className="navbar-item" to="/contact/examples">
                Form Examples
              </Link> */}
            </div>
            {/* <div className="navbar-end has-text-centered">
              <a
                className="navbar-item"
                href="https://github.com/AustinGreen/gatsby-netlify-cms-boilerplate"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={github} alt="Github" />
                </span>
              </a>
            </div> */}
          </div>
      </nav>
    );
  }
};

export default Navbar;