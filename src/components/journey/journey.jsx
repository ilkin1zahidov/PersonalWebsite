import React from "react";

import Content from "../content";


const journey = ({ image }) => {



    return (

        <>

            <section id="journey">
                <div className="container">
                    <div className="journey--all">
                        <div className="journey-row">
                            <div className="imgText">
                                <div className="journey_img">
                                    <img src={image} alt="journey_img" />
                                </div>
                                <div className="journey_head">
                                    <h1 className="journey_text">The resolution, What am <br /> I gonna do?</h1>
                                    <p className="journey_lorem">Lorem Ipsum is simply dummy text of the printing <br />
                                        and typesetting industry. Lorem Ipsum has been <br /> the industry's standard</p>
                                </div>
                            </div>

                            <div>
                                <Content />
                            </div>
                        </div>

                    </div>
                    <div className="journey--time">
                        <div className="time-row">
                            <h1 className="time">Time line</h1>

                            <div className="dropdown">
                                <div className="dropdown-btn" >
                                    2021
                                    <span style={{ fontSize: '30px' }} >▾</span>
                                </div>

                           

                            </div>

                            <div className="time_comment">
                                <p style={{ marginBottom: '15px' }}>2 January 2021</p>
                                <div className="comment_box">
                                    <h4 style={{ marginBottom: '12px' }}>The resolution, What am i <br /> gonna do?</h4>
                                    <span>It's all about the new year and <br /> works i have to do</span>
                                </div>
                            </div>
                            <div className="time_comment">
                                <p style={{ marginBottom: '15px' }}>29 January 2021</p>
                                <div style={{backgroundColor:'#FFFFFF1A'}} className="comment_box">
                                    <h4 style={{ marginBottom: '12px' }}>Gow - command line tool to <br /> manage works</h4>
                                    <span>Gow is cli tool written in golang  using cobra</span>
                                </div>
                            </div>
                            <div className="time_comment">
                                <p style={{ marginBottom: '15px' }}>2 February 2021</p>
                                <div style={{backgroundColor:'#FFFFFF1A'}} className="comment_box">
                                    <h4 style={{ marginBottom: '12px' }}>Started designing what you <br /> are seeing right now!</h4>
                                    <span>Yes in 2th of february i started <br /> designing this site </span>
                                </div>
                            </div>
                            <div className="time_comment">
                                <p style={{ marginBottom: '15px' }}>29 January 2021</p>
                                <div style={{backgroundColor:'#FFFFFF1A'}} className="comment_box">
                                    <h4 style={{ marginBottom: '12px' }}>Maybe it's time to deploy..!</h4>
                                    <span>Maybe in this day i completed <br /> the front and backend of this</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default journey

