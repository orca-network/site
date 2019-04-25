import React from "react"
import { If, Then, Else } from "../conditional/conditional.js"
import { Link } from "gatsby"

import Menu from "./menu.js"
import "../styles/design.scss"

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      toggle: true,
      showMenu: "hide",
      height: window.innerHeight,
      width: window.innerWidth,
      active: false,
    hamburgerClass: "hamburger hamburger--collapse"
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

  activeHamburger = ()=>{
      this.state.toggle === true ? this.setState({
          toggle: false, 
          hamburgerClass: "hamburger hamburger--3dx-r is-active",
          showMenu: "wrapper",
        }) 
      : this.setState({
          toggle: true,
          hamburgerClass: "hamburger hamburger--3dx-r",
          showMenu: "hide", 
        });
        console.log(this.state);
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

  showAll = props => {}
  render() {
    return (
      <>
        <If condition={this.state.width < 600}>
          <Then>

            <div className={this.state.showMenu} onClick={this.nav}>
              <Menu />
            </div>
            <button
              className={this.state.hamburgerClass} onClick={this.activeHamburger}
              type="button"
            >
              <span className="hamburger-box">
                <span className="hamburger-inner" />
              </span>
            </button>
          </Then>

          <Else>
            <div className="top" />
            <div className="wrapper">
              <Menu showAll={this.showAll} />
            </div>
          </Else>
        </If>
      </>
    )
  }
}

export default Navbar
