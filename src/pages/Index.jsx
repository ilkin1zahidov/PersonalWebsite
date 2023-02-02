import React from 'react'
import Main from '../components/main'
import Main_img from "../assets/img/image_one.svg";
import Main_imgSecond from "../assets/img/image_second.svg";

const mainImg ={
  Main_img,
  Main_imgSecond
};
const Index = () => {
  return (
    <div>
        <Main 
          image = {mainImg}
        />
    </div>
  )
}

export default Index