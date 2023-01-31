import React from 'react'

function navbar() {
  return (
    <>
        <div id="navbar">
            <div className="container">
                <div className="nav-area">
                    <ul className='nav'>
                        <li className='home'><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Contact</a></li>
                        <li><a href="/">Portfolios</a></li>
                        <li><a href="/">Journey</a></li>
                        <li><a href="/">Blog</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default navbar

