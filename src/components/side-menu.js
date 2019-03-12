import React from 'react'
import {Link} from 'gatsby'

const sideMenu = (props) => {
  return (
   
      <aside class="menu" style={{margin: '2rem'}}>
        <h2 class="menu-label">All About Oras</h2>
        <ul class="menu-list">

        {props.menuItems.map(item => {
        
        return(
            <li>
            <Link to={item.path} class="navbar-item">
              {item.title}
            </Link>
          </li>    
        )
        })}
        </ul>
      </aside>
  )
}

export default sideMenu;