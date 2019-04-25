import React from 'react'
import {Link} from 'gatsby'

class SideMenu extends React.Component{
  constructor(props){
    super(props);
    this.state={
      link: []
    }
  }
  render(){
  //  console.log('path', props.prefix.concat(props.menuItems[0].node.frontmatter.title.toLowerCase().replace(' ', '-')) );
  return (
   
      <aside class="menu" style={{margin: '2rem'}}>
        <h2 class="menu-label">{this.props.title}</h2>
        <ul class="menu-list">

        {this.props.menuItems.map(item => {
        
        return(
            <li>
            <Link to={this.props.prefix.concat(item.node.frontmatter.title.toLowerCase().replace(/\s/g,'-'))} class="navbar-item">
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

export default SideMenu;