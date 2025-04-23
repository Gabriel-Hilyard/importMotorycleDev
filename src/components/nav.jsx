import React from 'react';
import './nav.css';
import squareLogo from '/squareLogo.png'


function Nav() {
  console.log("Hello, Nav is working!")
  return (
    <nav>
        <a className='pageTitle' href="/">
        <img src={squareLogo}
                 alt="logo"
                 style={{height: '7em'}}/></a>
        <ul className="navLinks">
          <li><a href="/">Home</a></li>
          <li><a href="/QuoteRequest">Request A Quote</a></li>
          <li><a href="#Specialties">Specialties</a></li>
        </ul>
    </nav>
  )
}

export default Nav;
