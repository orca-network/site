import React from 'react'
import Banner from "../banner.js"
import SideMenu from "../side-menu.js"

const LeftMenu = (props) => {
  return (
    <>
    <Banner title={props.title} />

    <div class="columns">
    <div class="column is-one-quarter">
      <SideMenu menuItems={props.menuItems} prefix={props.prefix} />
    </div>

    <div class="column">
      {props.children}
    </div>
  </div>
  </>
  )
}



export default LeftMenu;