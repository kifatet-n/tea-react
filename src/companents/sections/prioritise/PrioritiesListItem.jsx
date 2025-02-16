import React from 'react'

function PrioritiesListItem(props) {
  return (
    <div className="priorit-list-item">
                <p>{props.item.prioriti}</p>
                <b>{props.item.worth}</b>
                
                 <img src={props.item.src} className="image"/>
            </div>
        
    
  )
}

export default PrioritiesListItem