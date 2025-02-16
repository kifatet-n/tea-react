import React from 'react'

function InformationContent() {
  return (
    <div className="main-blog-information-list">
            <p>join our mailing list and stay up-to-date with the latest news, <br/> promotions, 
            and exclusuve offers form our tea store.
            Be the first <br/> to know about new tea arrivals, seasonal blends, and special <br/> discounts.
            Don't miss out on the tea-rrific perks-sign up today!
            </p>
        
            <form>
            
            <input type="email" placeholder="name@email.com"/>
            <input type="submit" value="join"/>
            
            <p>
            <input type="checkbox"/>
            We take your privacy seriosly and are committed to protecting your personal information.By <br/>
            subcribing to our mailing list, you are consenting to receive periodic emails form us about our <br/>
            products, promotions, and other tea-related information.
            </p> 
            </form>
        </div>
        
    
  )
}

export default InformationContent