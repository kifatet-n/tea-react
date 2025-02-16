import React from 'react'
import TeaBlogList from './TeaBlogList'
import './teablog.css'

function TeaBlog() {
  return (
    <section class="main-blog">
        <h3 class="container">Our Tea Blog</h3>
        <div class="container">
         <TeaBlogList/>
        </div>
        <form class="blog-input">
        <input type="submit" value="View all"/>
        </form>
    </section>
  )
}

export default TeaBlog