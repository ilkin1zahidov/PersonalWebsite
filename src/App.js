import "./assets/css/main.css";
import Navbar from "./components/navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import Footer from "./components/footer";
import Github from "./assets/img/githubgithub.svg";
import Twitter from "./assets/img/twitter.svg";
import Footericon from "./assets/img/footer_icon.svg";


function App() {
  const footerImg ={
    Github,
    Twitter,
    Footericon
    
  }; 

  return (
    <>    
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
        <Footer 
          image = {footerImg}
        />
      </BrowserRouter>
            
    
    </>
  );
}

export default App;
