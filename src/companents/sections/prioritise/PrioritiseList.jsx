import React from 'react'
import PrioritiesListItem from './PrioritiesListItem'
const prioritiData = [
  {prioriti: "Single garden teas", worth: " Complete transparency", src:"./src/assets/image/prioritiimage1.svg"},
  {prioriti: "Only Loose leaf tea", worth: "Best Drinking Experience", src: "./src/assets/image/prioritiimage2.svg"},
  {prioriti: "Customer support", worth: "No bots, no automated replies", src: "./src/assets/image/prioritiimage3.svg"},
  {prioriti: "Fast shipping", worth: "Save, Convenient, Reliable", src: "./src/assets/image/prioritiimage4.svg"}
]
function PrioritiseList() {
  return (
  <div className='priorit-list'>
    {prioritiData.map((data)=>(
    <PrioritiesListItem item = {data}/>))}
  </div>
  )
}

export default PrioritiseList