import React from 'react'

const portfolios = ({image,cardHead,info}) => {
  return (

    <>
      <main>
      <section id='portfolios'>
            <div className="container">
             <div className="portfolios--all">
                <div className="card-common">
                    <div className="card">
                    <div className="card_img">
                      <img src={image.CardImg_first} alt="" />
                    </div>
                        <div className="card-text">
                            <p className='card_head' >{cardHead}</p>
                            <span>
                            Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry. Lorem <br /> Ipsum has been the industry's standard
                            </span>
                            <p className='card_info'>{info}</p>
                        </div>
                    </div>
                    <div className="card">
                    <div className="card_img">
                      <img src={image.CardImg_fourth} alt="" />
                    </div>
                        <div className="card-text">
                            <p className='card_head' >{cardHead}</p>
                            <span>
                            Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry. Lorem <br /> Ipsum has been the industry's standard
                            </span>
                            <p className='card_info'>{info}</p>
                        </div>
                    </div>
                    <div className="card">
                    <div className="card_img">
                      <img src={image.CardImg_second} alt="" />
                    </div>
                        <div className="card-text">
                            <p className='card_head' >{cardHead}</p>
                            <span>
                            Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry. Lorem <br /> Ipsum has been the industry's standard
                            </span>
                            <p className='card_info'>{info}</p>
                        </div>
                    </div>
                    <div className="card">
                    <div className="card_img">
                      <img src={image.CardImg_fiveth} alt="" />
                    </div>
                        <div className="card-text">
                            <p className='card_head' >{cardHead}</p>
                            <span>
                            Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry. Lorem <br /> Ipsum has been the industry's standard
                            </span>
                            <p className='card_info'>{info}</p>
                        </div>
                    </div>
                    <div className="card">
                    <div className="card_img">
                      <img src={image.CardImg_third} alt="" />
                    </div>
                        <div className="card-text">
                            <p className='card_head' >{cardHead}</p>
                            <span>
                            Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry. Lorem <br /> Ipsum has been the industry's standard
                            </span>
                            <p className='card_info'>{info}</p>
                        </div>
                    </div>
                    <div className="card">
                    <div className="card_img">
                      <img src={image.CardImg_sixth} alt="" />
                    </div>
                        <div className="card-text">
                            <p className='card_head' >{cardHead}</p>
                            <span>
                            Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry. Lorem <br /> Ipsum has been the industry's standard
                            </span>
                            <p className='card_info'>{info}</p>
                        </div>
                    </div>

                </div>
             </div>
            </div>
        </section>
      </main>
    </>
     
  )
}

export default portfolios