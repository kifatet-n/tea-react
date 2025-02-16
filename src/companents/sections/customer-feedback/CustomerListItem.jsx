import React from 'react'

function CustomerListItem(props) {
  return (
    
        <div className="main-client-list-item">
                    <p>{props.item.commit}
                    </p>
                    <h5><b>{props.item.name}</b></h5>
                </div>
    
  )
}

export default CustomerListItem