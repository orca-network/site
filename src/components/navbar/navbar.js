import React from "react"
import { If, Then, Else } from "../conditional/conditional.js"
import { Link, graphql, StaticQuery } from "gatsby"
import links from "./links.js"
import MenuItem from "./menu-item.js"
import "../styles/design.scss"

console.log("links", links)

// import Menu from "./menu.js"
// import AboutOrcaMain from "../../pages/about-orcas/index.js";

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

      toggle: true,
      showMenu: "hide",
      height: null,
      width: null,
      active: false,
      hamburgerClass: "hamburger hamburger--collapse",
    }

    this.updateDimensions = this.updateDimensions.bind(this)
  }

  nav = props => {
    if (this.state.toggle === true) {
      this.setState({ showMenu: "wrapper", toggle: false })
    } else {
      this.setState({ showMenu: "hide", toggle: true })
    }
  }

  activeHamburger = () => {
    this.state.toggle === true
      ? this.setState({
          toggle: false,
          hamburgerClass: "hamburger hamburger--3dx-r is-active",
          showMenu: "wrapper",
        })
      : this.setState({
          toggle: true,
          hamburgerClass: "hamburger hamburger--3dx-r",
          showMenu: "hide",
        })
    console.log(this.state)
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions)
  }

  updateDimensions() {
    this.setState({
      height: window.innerHeight,
      width: window.innerWidth,
    })
  }

  render() {
    return (
      <>
        <If condition={this.state.width < 600}>
          <Then>
            <div className={this.state.showMenu} onClick={this.nav}>
              <ul className="navigation">
                {links.map((link, i) => {
                  return <MenuItem link={link} showSub={true} key={i} />
                })}
              </ul>
            </div>
            <button
              className={this.state.hamburgerClass}
              onClick={this.activeHamburger}
              type="button"
            >
              <span className="hamburger-box">
                <span className="hamburger-inner" />
              </span>
            </button>
          </Then>
          <Else>
            {/* <div className="top" /> */}
            <div className="wrapper">
              <ul className="navigation">
                <li id="logo">
                  <Link to="/" className="" title="Logo">
                    <img
                      src="/assets/network-logo.png"
                      alt="The Orca Network Logo"
                    />
                  </Link>{" "}
                </li>
                {links.map((link, i) => {
                  return <MenuItem link={link} showSub={true} key={i} />
                })}
              </ul>
            </div>
          </Else>
        </If>
      </>
    )
  }
}


export default Navbar
