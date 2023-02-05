import React from 'react'
import Content from "../content"
const about = ({ image, description }) => {
  return (
    <section id='about'>
      <div className="container">
        <div className="about--all">
          <div className="about_head">
            <div className="about_img">
              <img src={image} alt="about-img" />
            </div>


            <h1 className="about_text">I’m Amirhossein Meydani <br />
              A <span style={{ color: '#FDB827' }}>Backend</span> and
              <span style={{ color: '#FDB827' }}>Android </span> <br />
              Programmer and <span style={{ color: '#FDB827' }}>UI/UX</span> <br /> Designer</h1>
          </div>
            <div>
            <Content/>
            </div>
        </div>
      </div>
    </section>
  )
}

export default about