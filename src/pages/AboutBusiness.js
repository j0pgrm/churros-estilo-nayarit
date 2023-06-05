import React from 'react'
import Nav from './Components/Nav';
import Footer from './Components/Footer'; 
import '../styles/pages/about-business.scss'; 
import churroStand from '../img/churro-stand.jpg'; 

function AboutBusiness() {
  return (
    <div className="about-business-page">

      <Nav red={true} /> 

      <div className="about-business-top-container">
        <div className="about-business-top-content">
          <h1>About Our Business</h1>
          <p>
            Ullamco aliquip culpa ipsum enim labore consectetur. 
            Eu labore veniam sit reprehenderit minim exercitation 
            laborum. Deserunt ipsum est culpa ea qui duis magna 
            consectetur.
          </p>
          <img alt="" src={churroStand} /> 
          <p>
            Est aliquip anim ullamco laborum mollit velit adipisicing 
            consequat magna Lorem. Aliqua ad adipisicing velit enim quis 
            nostrud laborum nulla veniam qui magna proident. Labore enim 
            exercitation et veniam sit excepteur. Ad commodo do magna 
            officia. Aliqua est occaecat cillum exercitation enim ea 
            sit voluptate et mollit. Aute irure velit adipisicing 
            eiusmod.
          </p>
        </div>
      </div>

      <Footer /> 

    </div>
  )
}

export default AboutBusiness; 
