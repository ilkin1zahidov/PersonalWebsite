import React from 'react'
import Main from '../components/home/main'
import Main_img from "../assets/img/image_one.svg";
import Main_imgSecond from "../assets/img/image_second.svg";

const mainImg ={
  Main_img,
  Main_imgSecond
};
const Index = () => {
  return (
    <>
        <Main 
          image = {mainImg}
        />
    </>
  )
}

export default Index