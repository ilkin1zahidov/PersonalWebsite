import React from 'react'
import "../button"

import Button from "../button"
const contact = ({ image }) => {
  return (
    <section id='contact'>
      <div className="container">
        <div className="contact--all">
          <div className="contact_img">
            <img src={image} alt="contact_img" />
          </div>

          <div className="contact-text">
            <div className="text_head">
              <h1>You can reach me any <br />
                time🙂 </h1>
            </div>
            <div className="lorem_text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim <br /> ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut <br /> aliquip ex ea commodo consequat. Duis aute irure dolor.
            </div>

            <div className="contact_me">
              <div className="twitter">
                <span>Twitter: <span>amirhwsin</span></span>
              </div>
              <div className="twitter">
                <span>Github: <span>amireshoon</span></span>
              </div>
              <div className="twitter">
                <span>Dribble: <span>amireshoon</span></span>
              </div>
              <div className="twitter">
                <span>Telegram: <span>GeekDreamer</span></span>
              </div>
              <div className="twitter">
                <span>Email: <span>amirhwsin@outlook.com</span></span>
              </div>
            </div>
              <div>
                <Button/>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default contact