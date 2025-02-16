import React from 'react'
import TeaBlogListItem from './TeaBlogListItem'
const BlogData = [ 
  {src:"./src/assets/image/teablogimage1.svg", commit:"Tea Time Travels: Funny Moments from Around the world", author:" by Robinson Crusoe", click:"Read >"},
  {src:"./src/assets/image/teablogimage2.svg", commit:"The Role of Tea in Mental Health", author: "by Joker", click:"Read >"},
  {src:"./src/assets/image/teablogimage3.svg", commit:"Tea-rific Tales: Hilarious Stories from Tea Lovers", author:"by Casper the Friendly Ghost", click:"Read >"},
  {src:"./src/assets/image/teablogimage4.svg", commit:" Tea and Caffeine: Effects on the Brain and Behavior", author:"by Author Authorius", click:"Read >"}
]
function TeaBlogList() {
  return (
      <div className='main-blog-list'>
        {BlogData.map((info , index)=>(
           <TeaBlogListItem item ={info} key={index} />
        ))}
        
        

      </div>
       
    
  )
}

export default TeaBlogList