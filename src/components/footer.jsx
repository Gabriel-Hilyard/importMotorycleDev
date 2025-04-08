import React from 'react';
import Logo from '/IMS_Logo.png'

function Footer() {
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
        <iframe
         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6581.396172488091!2d-118.58254542276845!3d34.43442327301536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c27e0074f14553%3A0xf95fb8a7d3962135!2sMotorcycle%20Specialist!5e0!3m2!1sen!2sus!4v1743639215270!5m2!1sen!2sus"
         width="600"
         height="450"
         style={{ border: 0 }}
         allowFullScreen
         loading="lazy"
         referrerPolicy="no-referrer-when-downgrade"
        />
        </div>

        <h2>25345 Avenue Stanford #206, Santa Clarita, CA 91355</h2>
      </div>

      <div className='copyRightNotice'>
      &copy; {new Date().getFullYear()} Import Motorcycle Specialist all rights reserved.
      </div>
    </footer>
  )
}

export default Footer;
