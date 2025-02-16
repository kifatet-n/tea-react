import React from 'react'
import './header.css'
import HeaderLogo from './header-sections/header-logo/HeaderLogo'
import HeaderNav from './header-sections/header-nav/HeaderNav'
import HeaderAction from './header-sections/header-action/HeaderAction'
import HamburgerMenu from './header-sections/hamburger-menu/HamburgerMenu'

function Header() {
  return (
    
    <header className='container header'> 
        <HamburgerMenu/>
        <HeaderLogo/>
        <HeaderNav/>
        <HeaderAction/>
        
              
    </header>
    
  )
}

export default Header