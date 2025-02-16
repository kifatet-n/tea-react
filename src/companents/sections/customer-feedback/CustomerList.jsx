import React from 'react' 
import CustomerListItem from './CustomerListItem'
const ClientData = [
  {commit:  "As a tea enthusiast, I have tried teas from all over the world, but this tea store truly stands out. Their teas are of the highest quality and the variety is impressive. This is definitely a tea store that every tea lover should visit.", name: "Alica"},
  {commit: "This tea store is my go-to for all my tea needs. Their selection is unbeatable and the quality of their teas is exceptional. ", name: "Mad Hatter"},
  {commit: "If you're a tea lover, you must visit this tea store. The selection is vast and the quality is outstanding. I guarantee you won't be disappointed.", name: "Dormouse"},
  {commit: "I am not a big tea drinker, but this tea store has converted me. I highly recommend this tea store to anyone looking for a high-quality tea experience." , name:"March Hare"}

]

function CustomerList() {
  return (
    <div className='main-client-list container'>
      {
        ClientData.map((commit, index) => (
          <CustomerListItem item={commit} key={index}/>

        ))

        
      }
      
      
    </div>
  )
}

export default CustomerList