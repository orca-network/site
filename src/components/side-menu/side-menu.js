import React from "react"
import { Link } from "gatsby"

class SideMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      link: [],
    }
  }
  render() {
    //  console.log('path', props.prefix.concat(props.menuItems[0].node.frontmatter.title.toLowerCase().replace(' ', '-')) );
    return (
      <aside >
        <h2 >{this.props.title}</h2>
        <ul >
          {this.props.menuItems.map(item => {
            return (
              <li>
                <Link
                  to={this.props.prefix.concat(
                    item.node.frontmatter.title
                      .toLowerCase()
                      .replace(/\s/g, "-")
                  )}
                  class="navbar-item"
                >
                  {item.node.frontmatter.title}
                </Link>
              </li>
            )
          })}
        </ul>
      </aside>
    )
  }
}

export default SideMenu
