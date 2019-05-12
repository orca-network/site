import React from "react"
import { Link } from "gatsby"
import { When } from "../conditional/conditional.js"

//should map through an array of main links that has a sub array of sub
//each main link should map through

const MenuItem = props => {
  console.log("props from menu", props)
  return (
    <li>
      <Link to={props.link.main.link}>{props.link.main.title}</Link>{" "}
      <When condition={props.showSub}>
        <ul>
          {props.link.sub.map(sublink => {
            return (
              <li>
                <Link to={sublink.link}>{sublink.title}</Link>{" "}
              </li>
            )
          })}
        </ul>
      </When>
    </li>
  )
}

export default MenuItem
