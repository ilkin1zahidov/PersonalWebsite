import React from 'react';
import DataJson from './data.json';

const blog = ({image}) => {



    return (
        <>
          <main>
            <section id='blog'>
                <div className="container">
                    <div className="blog--all">
                        <div className="card-common">
                          {
                            DataJson.map((data)=>{
                                return(
                                    <div className="card">
                                    <div className="card-right">
                                        <div className="card_img">
                                            <img src={data.image} alt="blog-first" />
                                        </div>
                                        <div className="card-text">
                                            <p className='card_head' >{data.cardHead}</p>
                                            <span>
                                                {data.span}
                                            </span>
                                            <p className='card_info'>{data.info}</p>
                                        </div>
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

export default blog