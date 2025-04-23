import React from 'react';
import './specialties.css';
import placeHolder from '/placeHolder.png'
import garyPortrait from '/GaryPortrait.png'
import counterHelmet from '/Helmet.png'

function Specialties() {
  console.log("Hello, Specialties is working!")
  return (
    <div className='specialtyComponent'>
      <div className='specialtyCards'>
        <img src={garyPortrait}
         alt="logo"
         style={{height: '16em'}}/>

         <h2>Insurance Jobs</h2>
      </div>
     
     <div className='specialtyCards'>
      <img src={counterHelmet}
         alt="logo"
         style={{height: '16em'}}/>

         <h2>Oil & Brake Change</h2>
      </div>
      
      <div className='specialtyCards'>
      <img src={placeHolder}
         alt="logo"
         style={{height: '16em'}}/>

         <h2>Engine Rebuilds</h2>
      </div>
      
      <div className='specialtyCards'>
      <img src={placeHolder}
         alt="logo"
         style={{height: '16em'}}/>

         <h2>Valve Adjustments</h2>
      </div>
      
      <div className='specialtyCards'>
      <img src={placeHolder}
         alt="logo"
         style={{height: '16em'}}/>

         <h2>Tire Changes</h2>
      </div>
      
      <div className='specialtyCards'>
      <img src={placeHolder}
         alt="logo"
         style={{height: '16em'}}/>

         <h2>Fork Seals</h2>
      </div>
    </div>
  )
}

export default Specialties;
