import React from 'react'
import { bubble as Menu } from 'react-burger-menu';
import './sidebar.css'

function Sidebar(props) {
  return (
    
        <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/order">
        Order service
      </a>
      <a className="menu-item" href="/ggifting">
        Gifting
      </a>
      <a className="menu-item" href="/desserts">
        Desserts
      </a>
    </Menu>
    
  )
}

export default Sidebar