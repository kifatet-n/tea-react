import React from 'react'

function TeaListItem(props) {
  return (
    
      <div className='listitem'>
                <img src ={props.item.src} alt=""/>
                <strong>{props.item.name}</strong>
      </div>

  )
}

export default TeaListItem