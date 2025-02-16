import React from 'react'
import  './headernav.css'

function HeaderNav() {
  return (
    
        <nav class="header-nav">
        
            
        <ul class="header-nav-list">
            <li>
                <a href="#" className="header-nav-list-item">Black</a>
            </li>
            <li >
                <a href="#"className="header-nav-list-item" >White</a>
            </li>
            <li>
                <a href="#"className="header-nav-list-item" >Green</a>
            </li>
            <li>
                <a href="#"className="header-nav-list-item" >Oolong</a>
            </li>
            <li>
                <a href="#"className="header-nav-list-item" >Pu-erh</a>
            </li>
        </ul>
    </nav>

    
  )
}

export default HeaderNav