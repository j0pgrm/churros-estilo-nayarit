import React, { useRef } from 'react'
import Nav from './Components/Nav';
import Footer from './Components/Footer'; 
import '../styles/pages/contact-us.scss'; 
import emailjs from 'emailjs-com'; 
import redBack from '../img/myImg.png'; 

function ContactUs() {

  //useRef 
  const form = useRef(); 

  //functions 
  const sendEmail = e => {
      e.preventDefault(); 

      emailjs.sendForm('service_igyrmkh', 'template_wkkrlup', form.current, 'i71SBlVk862QskEzZ')
      .then((res) => {
          console.log(res.text); 
          console.log("success");  
      }, (err) => {
          console.log(err.text); 
          console.log("error"); 
      }); 
  }; 

  return (
    <div className="contact-us-page">

      <Nav red={true} /> 

      <div className="contact-us-top-container">
        <div className="contact-us-top-content">
          
          <h1>Contact Us</h1>

          <div className="contact-info-and-form-container">
            <div className="contact-info">
              <div className="contact-item">
                <p>Address: </p>
                <a href="#0" rel="noreferrer">2813 N 55th Ave Phoenix, AZ 85035</a>
              </div>
              <div className="contact-item">
                <p>Phone: </p>
                <a href="#0" rel="noreferrer">(623) 340-5212</a>
              </div>
              <div className="contact-item">
                <p>Email: </p>
                <a href="#0" rel="noreferrer">ChurrosEstiloNayarit@gmail.com</a>
              </div>
              <div className="contact-item">
                <p>Instagram: </p>
                <a href="https://www.instagram.com/churrosestilonayarit/" target="_blank" rel="noreferrer">instagram.com</a>
              </div>
              <div className="contact-item">
                <p>Facebook: </p>
                <a href="https://www.facebook.com/ChurrosEstiloNayarit" target="_blank" rel="noreferrer">facebook.com</a>
              </div>
              <div className="contact-item">
                <p>Tiktok: </p>
                <a href="https://www.tiktok.com/@churrosestilonayarit" target="_blank" rel="noreferrer">tiktok.com</a>
              </div>
            </div>
            <form className="contact-form" ref={form} onSubmit={sendEmail} style={{background: "url(" + redBack + ")"}}>
              <h1>Contact Form</h1>
              <input name="user_name" placeholder="Name" type="text" /> 
              <input name="user_email" placeholder="Email" type="text" /> 
              <textarea name="message" placeholder="Message"></textarea>
              <button type="submit">Send</button>
            </form>
          </div>

        </div>
      </div>

      <Footer /> 

    </div>
  )
}

export default ContactUs; 
