import React from 'react'
import "../assets/css/portfolios.css"
import Portfolios from "../components/portfolios/portfolios"; 
import CardImg_first from "../assets/img/cardImg_first.svg";
import CardImg_second from "../assets/img/cardImg_second.svg";
import CardImg_third from "../assets/img/cardImg_third.svg";
import CardImg_fourth from "../assets/img/cardImg_fourth.svg";
import CardImg_fiveth from "../assets/img/cardImg_fiveth.svg";
import CardImg_sixth from "../assets/img/cardImg_sixth.svg";


const cardImg = {
  CardImg_first,
  CardImg_second,
  CardImg_third,
  CardImg_fourth,
  CardImg_fiveth,
  CardImg_sixth
};

const portfolios = () => {
  return (
    <>
        <Portfolios
          image = {cardImg}
          cardHead = "There is more than you know"
          info = "Read more"
        />
    </>
  )
}

export default portfolios
