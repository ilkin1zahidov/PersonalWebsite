import React from 'react';
import "../assets/css/about.css";
import About from "../components/about/about";
import AboutImg from "../assets/img/about-img.svg";
const about = () => {
  return (
    <>
       <About
       image = {AboutImg}
        

       />
    </>
  )
}

export default about