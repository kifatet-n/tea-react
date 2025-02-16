import React from 'react'
import './footerright.css'

const FooterRight = () => {
  return (
    <div className=" row footer-right">
            <div className="col">
                <br/>
                <br/>
                <br/>
                <p>
                
                    
                    "Tea is a journey. It can take you to <br/> new places and open your mind to <br/> new experinces.  
                    Let every sip <br/> transport you to a world of wonder <br/> and possibility"
                </p>
                <br/>
                <br/>
                <p>Dragomir Teodorescu,<br/> Tealuxe owner</p>
            </div>
            <div className="col">
                <h4>Stay In Touch</h4>
                <p>Please feel free to contact us via the email of <br/> phone. 
                    We would be happy to hear from you!
                </p>
                <div className="footer-info">
                    <a href="#" className="footer-logo">
                        <img src="./src/assets/image/footerlogo.svg" alt="" className="footer-logo-image"/>   
                    </a>
                    <div className="footer-info-contact">
                       
                        <div className="contact">
                       <a href="#" >
                        <img src="./src/assets/image/mail.svg" alt="" className="contact-image"/>
                        <span>+370 680 123456</span>
    
    
                       </a>
                        
                    
                        
                       
                       <a href="#" class="mobil">
                        <img src="./src/assets/image/mobile.svg" alt="" class="mobil-image"/>
                        <span>info@tealuxe.com</span>
    
                       </a>
                       </div>
                       
                       
                       
                       
                       <div class="concat-web">
                        <a href="#">
                            <img src=".src/assets/image/facebookimage.svg" alt=""/>
                        </a>
                        <a href="#">
                            <img src=".src/assets/image/youtubeimage.svg" alt=""/>
                        </a>
                        <a href="#">
                            <img src=".src/assets/image/instagram.svg" alt=""/>
                        </a>
                        <a href="#">
                            <img src=".src/assets/image/twitter.svg" alt=""/>
                        </a>

                       </div>
                       
                    </div>
                    
    
                </div>
                
    
    
            </div>
    
            

        </div>
        
  )
}

export default FooterRight