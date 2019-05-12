import React from "react"
import { Link } from "gatsby"

const LeftMenu = props => {
  return (
    <div className="menu-left">
      <ul>
        <li className="menu-header">{props.title}</li>
        {props.menuItems.map(item => {
          return (
            <li>
              <Link
                to={props.prefix.concat(
                  item.node.frontmatter.title.toLowerCase().replace(/\s/g, "-")
                )}
              >
                {item.node.frontmatter.title}
              </Link>
            </li>
          )
        })}
      </ul>
      <div>{props.children}</div>
    </div>
  )
}

export default LeftMenu
