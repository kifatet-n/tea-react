import React from 'react'
import './headeraction.css'

function HeaderAction() {
  return (
    <div className='header-action' >
        <ul >
                <li>
                <a href="#" className="header-action-list">
                  <img src="./src/assets/image/basket.svg" alt="" className="header-action-list-item"/>
                </a>
                </li>
                <li>
                <a href="#" className="header-action-list">
                 <img src="./src/assets/image/user.svg" alt="" className="header-action-list-item"/>
                </a>
              </li>

        </ul>   
        <ul>
         <li>
              <a href="#" className='header-action-list'>
             <img src="./src/assets/image/search.svg" alt="" className='header-action-list-item'/>
              </a>
    
              </li>
        </ul>
       
    </div>
  )
}

export default HeaderAction