import React from 'react';


const blog = ({image , cardHead , info}) => {

  
    
  return (
    
    <section id='blog'>

            <div className="container">
             <div className="blog--all">
                <div className="card-common">
                    <div className="card">
                            <div className="card-right">
                            <div className="card_img">
                      <img src={image.BlogFirst} alt="blog-first" />
                    </div>
                        <div className="card-text">
                            <p className='card_head' >{cardHead}</p>
                            <span>
                            Lorem Ipsum is simply dummy text of the printing and typesetting  industry. Lorem  Ipsum has been the  industry's standard
                            </span>
                            <p className='card_info'>{info}</p>
                        </div>
                            </div>
                    </div>
                    <div className="card">
                            <div className="card-right">
                            <div className="card_img">
                      <img src={image.BlogSecond} alt="blog-second" />
                    </div>
                        <div className="card-text">
                            <p className='card_head' >{cardHead}</p>
                            <span>
                            Lorem Ipsum is simply dummy text of the printing and typesetting  industry. Lorem  Ipsum has been the  industry's standard
                            </span>
                            <p className='card_info'>{info}</p>
                        </div>
                            </div>
                    </div>
                    <div className="card">
                            <div className="card-right">
                            <div className="card_img">
                      <img src={image.BlogThird} alt="blog-third" />
                    </div>
                        <div className="card-text">
                            <p className='card_head' >{cardHead}</p>
                            <span>
                            Lorem Ipsum is simply dummy text of the printing and typesetting  industry. Lorem  Ipsum has been the  industry's standard
                            </span>
                            <p className='card_info'>{info}</p>
                        </div>
                            </div>
                    </div>
                    <div className="card">
                            <div className="card-right">
                            <div className="card_img">
                      <img src={image.BlogFourth} alt="blog-fourth" />
                    </div>
                        <div className="card-text">
                            <p className='card_head' >{cardHead}</p>
                            <span>
                            Lorem Ipsum is simply dummy text of the printing and typesetting  industry. Lorem  Ipsum has been the  industry's standard
                            </span>
                            <p className='card_info'>{info}</p>
                        </div>
                            </div>
                    </div>
                    <div className="card">
                            <div className="card-right">
                            <div className="card_img">
                      <img src={image.BlogFiveth} alt="blog-fiveth" />
                    </div>
                        <div className="card-text">
                            <p className='card_head' >{cardHead}</p>
                            <span>
                            Lorem Ipsum is simply dummy text of the printing and typesetting  industry. Lorem  Ipsum has been the  industry's standard
                            </span>
                            <p className='card_info'>{info}</p>
                        </div>
                            </div>
                    </div>

                </div>
             </div>
            </div>
        </section>
  )
}

export default blog