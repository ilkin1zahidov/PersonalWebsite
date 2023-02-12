import React from 'react'
import DataJson from "./data.json"
const portfolios = ({ image, cardHead, info }) => {
  return (

    <>
      <main>
        <section id='portfolios'>
          <div className="container">
            <div className="portfolios--all">
              <div className="card-common">
              
                {  
                  DataJson.map((data) => {
                    return (
                      <div className="card">
                        <div className="card_img">
                          <img src={data.image} alt="" />
                        </div>
                        <div className="card-text">
                          <p className='card_head' >{data.cardHead}</p>
                          <span>
                            Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry. Lorem <br /> Ipsum has been the industry's standard
                          </span>
                          <p className='card_info'>{data.info}</p>
                        </div>
                      </div>
                    )
                  })
                }



              </div>
            </div>
          </div>
        </section>
      </main>
    </>

  )
}

export default portfolios