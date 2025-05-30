import React from 'react';
import Logo from '/IMS_Logo.png'
import { Link } from 'react-router-dom';
import './hero.css';


function Hero() {
  console.log("Hello, Hero is working!")
  return (
    <section>
        <div className='heroText'>
        <h1>Import Motorcycle Specialist</h1>
        <h2>Santa Clarita, CA</h2>
        <p className='heroParagraph'>Import Motorcycle Specialist is a veteran-owned shop dedicated to 
            precision, performance, and expert craftsmanship. With over 25 years 
            in the industry and factory training from top brands like Suzuki, 
            Kawasaki, Honda, Yamaha, and Triumph, we deliver trusted, high-quality service for every ride. 
            Whether you're a daily commuter or a weekend warrior, your bike deserves the best—because when 
            you ride, reliability matters.</p>
        </div>
        <div className='heroLogoButton'>
            <img className='heroLogo'
            src={Logo}
            alt="logo"
            style={{height: '16em'}}/>
            <Link to='/QuoteRequest'>
            <button className='quoteRequestBtn'>
            Request a Quote
            </button>
            </Link>

        </div>
    </section>
  )
}

export default Hero;
