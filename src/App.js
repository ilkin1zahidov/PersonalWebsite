import "./assets/css/main.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// TODO: Pages
import Index from "./pages/Index";
import About from "./pages/About";
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
        </Routes>
        <Footer 
          image = {footerImg}
        />
      </BrowserRouter>
            
    
    </>
  );
}

export default App;
