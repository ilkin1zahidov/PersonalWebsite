import React from 'react'

const footer = ({image}) => {
  return (
        <section id='footer'>
               <div className="container">
                    <div className="footer--all">
                        <p className='footer_text'>Copyright © 2021 All rights reserved.</p>

                        <div className="footer_icons">
                               <img src={image.Github} alt="github" />
                               <img src={image.Twitter} alt="twitter" />
                               <img src={image.Footericon} alt="footerLastIcon" />          
                        </div>
                        <span className='footer_source'>Source code available</span>
                    </div>
                </div> 
        </section>
  )
}

export default footer