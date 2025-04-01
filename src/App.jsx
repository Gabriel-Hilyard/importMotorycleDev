import { useState } from 'react'
import './App.css'
import Nav from './components/nav.jsx';
import Hero from './components/hero.jsx';
import Reviews from './components/reviews.jsx';
import About from './components/about.jsx';
import Specialties from './components/specialties.jsx';
import Footer from './components/footer.jsx';

function App() {

  return (
    <div>
    <Nav />
    <Hero />
    <Reviews />
    <About />
    <Specialties />
    <Footer />
    </div>
    
  )
}

export default App
