import React from 'react'; 
import Nav from './Components/Nav'; 
import Footer from './Components/Footer'; 
import backImg from '../img/myImg.png'; 
import '../styles/pages/catering.scss'; 
import quince from '../img/churro-quince.jpg'; 
import quince2 from '../img/churro-quince-2.jpg'; 
import wedding from '../img/churro-wedding.jpg'; 
import wedding2 from '../img/churros-couple-pic.jpeg'; 

function Catering() {
  return (
    <div>
      <Nav /> 

      <div className="catering-page">
        
        <div className="catering-top-container" style={{background: "url(" + backImg + ")"}}>
          <div className="catering-top-content">
            <h1>Catering</h1>
            <p>
              Make your next event extra sweet with a Churro Topping Bar. 
              Catered bars the next big thing for any event. We have built 
              a unique concept of having fresh Churros made on-site that 
              allows guests the ability to customize each serving to their 
              liking with a broad selection of sweet toppings. You and 
              your guest will love this dessert option giving everyone 
              the opportunity to have a desert to their liking. Don’t 
              wait book today!
            </p>
            <p>
              Haz que tu próximo evento sea más dulce con una barra de 
              churros. Las bares son la próxima novedad para cualquier 
              evento. Hemos creado un concepto único de churros calientitos 
              hechos en el momento con la abilidad de personalizar cada 
              porción a su gusto con una amplia selección de ingredientes 
              dulces. A ti y a tus invitados les encantará esta opción de 
              postre que les da a todos la oportunidad de tener un postre a 
              su gusto. ¡No esperes reserva hoy!
            </p>
            <a target="_blank" href="https://www.instagram.com/churrosestilonayarit/" rel="noreferrer">
              <button>Book Reservation</button>
            </a>
          </div>
        </div>

        <div className="catering-events-container">
          <div className="catering-events-content">
            
            <h1>Events We've Done in the Past</h1>
            
            <div className="events-grid-container">
              <div className="event-content">
                <img alt="" src={quince2} />
                <p>
                  Churro catering for a beautiful quinceañera celebration
                </p>
              </div>
              <div className="event-content">
                <img alt="" src={wedding} /> 
                <p>
                  Making weddings sweeter with our churro bar experience
                </p>
              </div>
              <div className="event-content">
                <img alt="" src={quince} /> 
                <p>
                  Adding fun and flavor to birthday parties and special events
                </p>
              </div>
              <div className="event-content">
                <img alt="" src={wedding2} /> 
                <p>
                  Elegant churro setup for formal gatherings and receptions
                </p>
              </div>
              
            </div>

          </div>
        </div>

        <Footer /> 
      </div>

    </div>
  )
}

export default Catering; 
