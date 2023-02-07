import React from 'react';
import {Link,useMatch,useResolvedPath} from "react-router-dom";

function navbar() {

  return (
        <section id="navbar">
            <div className="container">
                <div className="nav-area">
                    <ul className='nav'>
                        <CustomLink className='home' to="/">Home</CustomLink>
                        <CustomLink to="/About">About</CustomLink>
                        <CustomLink to="/Contact">Contact</CustomLink>
                        <CustomLink to="/Portfolios">Portfolios</CustomLink>
                        <CustomLink to="/Journey">Journey</CustomLink>
                        <CustomLink to="/Blog">Blog</CustomLink>
                    </ul>
                </div>
            </div>
        </section>
    
  )
}
function CustomLink({to, children, ...props}){
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path:resolvedPath.pathname, end :true})
     return(
         <li className={isActive ? "active": ""}>
             <Link to={to} {...props}>
              {children}    
              </Link>
         </li>
     )
 
 }
export default navbar

