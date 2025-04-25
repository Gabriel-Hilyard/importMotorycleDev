import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/nav.jsx';
import Hero from './components/hero.jsx';
import Reviews from './components/reviews.jsx';
import About from './components/about.jsx';
import Specialties from './components/specialties.jsx';
import Footer from './components/footer.jsx';
import QuoteRequest from './components/quoteRequest.jsx';

function Home() {
  return (
    <>
      <Hero/>
      <Reviews />
      
      <Specialties />
    </>
  );
}



function App() {

  return (
<Router>
      <Nav /> {/* Navbar stays on all pages */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Renders all homepage components */}
        <Route path="/quoteRequest" element={<QuoteRequest />} /> {/* Renders only the Reservations page */}
      </Routes>
      <Footer /> {/* Footer stays on all pages */}
    </Router>
  )
}

export default App
