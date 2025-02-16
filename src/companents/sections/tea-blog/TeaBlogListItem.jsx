import React from 'react'

function TeaBlogListItem(props) {
  return (
    
        <div class="main-blog-list-item">
                <div>
                    < img src = {props.item.src}alt=""/>
                </div>
                <div class="main-blog-list-item1">
                    <p>{props.item.commit}</p>
                    <h5>{props.item.author}</h5>
                    <a href="#">{props.item.click} </a>
                </div>
            </div>
    
  )
}

export default TeaBlogListItem