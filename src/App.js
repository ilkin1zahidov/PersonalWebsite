import "./assets/css/main.css";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";




// TODO: Pages
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact"
import Portfolios from "./pages/Portfolios";
import Journey from "./pages/Journey";
import Blog from "./pages/Blog"
// ---------------------------------------------------------------------
//TODO: Footer img

import Github from "./assets/img/githubgithub.svg";
import Twitter from "./assets/img/twitter.svg";
import Footericon from "./assets/img/footer_icon.svg";


function App() {
  const footerImg ={
    Github,
    Twitter,
    Footericon 
  }; 
// ----------------------------------------------------------------------

  return (
    <>    
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path ="/About" element ={<About />} />
          <Route path = "/Contact" element = {<Contact />} />
          <Route path = "/Portfolios" element = {<Portfolios />} />
          <Route path = "/Journey" element = {<Journey />} />
          <Route path = "/Blog" element = {<Blog />} />
        </Routes>
        <Footer 
          image = {footerImg}
        />
      </BrowserRouter>
            
    
    </>
  );
}

export default App;
