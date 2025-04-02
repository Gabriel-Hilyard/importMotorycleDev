import React from 'react';
import Logo from '/IMS_Logo.png'

function footer() {
  console.log("Hello, footer is working!")
  return (
    <footer>
      <div className='footerLogo'>
       
       <img src={Logo}
        alt="logo"
        style={{height: '16em'}}/>
      </div>

      <div className='footerContact'>
        <h1>Contact</h1>
        <h3>661-877-6725</h3>
        <h3><a href="mailto:johndoe@fakeemail.com">E-mail</a></h3>
        <h3><a href="https://www.facebook.com/motorbikeauthority/">Facebook</a></h3>
        <h3><a href="quotePage">Request a Quote</a></h3>
      </div>

      <div className='footerHours'>
        <h1>Business Hours</h1>
        <h2>Tuesday 10 AM- 6 PM</h2>
        <h2>Wednesday 10 AM- 6 PM</h2>
        <h2>Thursday 10 AM- 6 PM</h2>
        <h2>Friday 10 AM- 6 PM</h2>
        <h2>Saturday 9AM- 1PM</h2>
        <h2>Sunday & Monday - CLOSED</h2>
      </div>

      <div className="googleMapPreview">
        <div className='preview'>

        </div>

        <h2>25345 Avenue Stanford #206, Santa Clarita, CA 91355</h2>
      </div>

      <div className='copyRightNotice'>
      &copy; {new Date().getFullYear()} Import Motorcycle Specialist all rights reserved.
      </div>
    </footer>
  )
}

export default footer;
