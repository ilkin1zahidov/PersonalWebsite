import React from 'react';
import "../assets/css/blog.css";
import Blog from "../components/blog/blog"
import BlogFirst from "../assets/img/blog-first.svg";
import BlogSecond from "../assets/img/blog-second.svg";
import BlogThird from "../assets/img/blog-third.svg";
import BlogFourth from "../assets/img/blog-fourth.svg";
import BlogFiveth from "../assets/img/blog-fiveth.svg";


const cardImg = {
    BlogFirst,
    BlogSecond,
    BlogThird,
    BlogFourth,
    BlogFiveth
  };

const blog = () => {
  return (
    <>
        <Blog
               image = {cardImg}
               cardHead = "There is more than you know"
               info = "Read more"
        />
    </>
  )
}

export default blog
