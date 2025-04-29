import React from 'react';
import './specialties.css';
import placeHolder from '/placeHolder.png'
import garyPortrait from '/GaryPortrait.png'
import oilChange from '/oilChange.jpg'
import engineRebuild from '/engineRebuild.jpg'
import valveAdjustment from '/valveAdjustment.jpg'
import tireChange from '/mystichrome.png'
import forkSeals from '/forkSeals.jpg'

function Specialties() {
  console.log("Hello, Specialties is working!")
  return (
    <div className='specialtyComponent'>
      <div className='specialtyCards'>
        <img src={garyPortrait}
         alt="Gary working on a KTM"
         style={{height: '16em'}}/>

         <h2>Insurance Jobs</h2>
      </div>
     
     <div className='specialtyCards'>
      <img src={oilChange}
         alt="Oil being poured into engine"
         style={{height: '16em'}}/>

         <h2>Oil & Brake Changes</h2>
      </div>
      
      <div className='specialtyCards'>
      <img src={engineRebuild}
         alt="Engine disassembled and ready for rebuild"
         style={{height: '16em'}}/>

         <h2>Engine Rebuilds</h2>
      </div>
      
      <div className='specialtyCards'>
      <img src={valveAdjustment}
         alt="Shim checking valve clearances"
         style={{height: '16em'}}/>

         <h2>Valve Adjustments</h2>
      </div>
      
      <div className='specialtyCards'>
      <img src={tireChange}
         alt="logo"
         style={{height: '16em'}}/>

         <h2>Tire Changes</h2>
      </div>
      
      <div className='specialtyCards'>
      <img src={forkSeals}
         alt="logo"
         style={{height: '16em'}}/>

         <h2>Fork Seals</h2>
      </div>
    </div>
  )
}

export default Specialties;
