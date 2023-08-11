import React from 'react'
import './NavBar.scss'

const NavBar = () => {
  return (
    <div>
      <nav className='nav'>
        <div className='navBarItems'>
          <a href='#' className='navItem'>
            Home
          </a>
          <a href='#projects' className='navItem'>
            Projects
          </a>
          <a href='#contact' className='navItem'>
            Contact
          </a>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
