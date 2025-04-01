import React from 'react';


function nav() {
  console.log("Hello, Nav is working!")
  return (
    <nav>
        <h1><a href="#">Import Motorcycle Specialist</a></h1>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Request A Quote</a></li>
          <li><a href="#">Specialties</a></li>
        </ul>
    </nav>
  )
}

export default nav;
