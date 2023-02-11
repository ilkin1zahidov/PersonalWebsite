import React from 'react'
import Button from "../button/button"

const main = ({ image }) => {
  return (

    <main>
      <section id='main'>

        <div className="container">
          <div className="main--all">
            <div className="main_img">
              <img src={image.Main_img} alt="image_one" />
            </div>
            <h1 style={{ fontSize: 66, color: 'white', fontWeight: 900, marginTop: -52, zIndex: -2 }}>I </h1>
            <div className="content--all">
              <div className="main_content">
                <h1 className='text_one'>Hey there 👋 <br />
                  am Amirhossein</h1>

              </div>
              <div className='lorem_text'>
                <p style={{ marginBottom: 50 }} >
                  Lorem Ipsum is simply dummy text of the printing and typesetting <br /> industry. Lorem Ipsum has been the
                  industry's standard dummy text <br /> ever since the 1500s, when an unknown
                  printer took a galley of type <br /> and scrambled it to make a type specimen book.
                </p>

                <Button />

              </div>


              <div className="image_second">
                <img src={image.Main_imgSecond} alt="main_imgSecond" />
              </div>
            </div>
          </div>
        </div>

      </section>
    </main>

  )
}

export default main