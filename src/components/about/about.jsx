import React from 'react'

const about = ({ image }) => {
  return (
    <section id='about'>
      <div className="container">
        <div className="about--all">
            <div className="about_head">

            <div className="about_img">
            <img src={image} alt="about-img" />
            </div>

            
            <h1 className="about_text">I’m Amirhossein Meydani
             A Backend and Android Programmer and UI/UX Designer</h1>
            </div>
            
        </div>
      </div>
    </section>
  )
}

export default about