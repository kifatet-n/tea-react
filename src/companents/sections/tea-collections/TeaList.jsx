import React from 'react'
import TeaListItem from './TeaListItem'
const teaData =[
  {name:"Black", src:"./src/assets/image/tea1.svg"},
  {name:"Green", src:"./src/assets/image/tea2.svg"},
  {name:"White", src:"./src/assets/image/tea3.svg"},
  {name:"Oolong", src:"./src/assets/image/tea4.svg"},
  {name:"Pu-erh", src:"./src/assets/image/tea5.svg"}
 
   
];

function TeaList() {
  return (
    <div className='tea-list container'>
      {teaData.map((tea,index) => (
        <TeaListItem item={tea} key={index}/>
      ))}
    

    </div>
  )
}

export default TeaList