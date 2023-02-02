import React from 'react'


const main = ({ image }) => {
  return (
    <section id='main'>

      <div className="container">
        <div className="main--all">
          <div className="main_img">
            <img src={image} alt="image_one" />
          </div>
          <h1 style={{ fontSize: 66, color: 'white', fontWeight: 900, marginTop: 57, zIndex: -2 }}>I </h1>
          <div className="content--all">
            <div className="main_content">
              <h1 className='text_one'>Hey there 👋 <br />
                am Amirhossein</h1>
            
            </div>
            <div className='main_lorem'>
                <p >
                Lorem Ipsum is simply dummy text of the printing and typesetting <br /> industry. Lorem Ipsum has been the 
               industry's standard dummy text <br /> ever since the 1500s, when an unknown
               printer took a galley of type <br /> and scrambled it to make a type specimen book.
                </p>
                </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default main