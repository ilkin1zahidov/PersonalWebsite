import React from 'react';
import {Link} from "react-router-dom";
function navbar() {
  return (
        <section id="navbar">
            <div className="container">
                <div className="nav-area">
                    <ul className='nav'>
                        <li className='home'><Link to="/">Home</Link></li>
                        <li><Link to="/About">About</Link></li>
                        <li><Link to="/Contact">Contact</Link></li>
                        <li><Link to="/Portfolios">Portfolios</Link></li>
                        <li><Link to="/Journey">Journey</Link></li>
                        <li><Link to="/Blog">Blog</Link></li>
                    </ul>
                </div>
            </div>
        </section>
    
  )
}

export default navbar

