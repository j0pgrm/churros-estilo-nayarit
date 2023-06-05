import React from 'react'; 
import Nav from './Components/Nav'; 
import Footer from './Components/Footer'; 
import backImg from '../img/myImg.png'; 
import '../styles/pages/catering.scss'; 
import quince from '../img/churro-quince.jpg'; 
import quince2 from '../img/churro-quince-2.jpg'; 
import wedding from '../img/churro-wedding.jpg'; 

function Catering() {
  return (
    <div>
      <Nav /> 

      <div className="catering-page">
        
        <div className="catering-top-container" style={{background: "url(" + backImg + ")"}}>
          <div className="catering-top-content">
            <h1>Catering</h1>
            <p>
              Elit labore ea dolor commodo culpa laboris ea in 
              magna mollit aliqua ipsum. Eiusmod anim quis 
              exercitation irure in eiusmod non aute nulla minim.
              Culpa aliquip fugiat irure amet ipsum dolor. Nostrud 
              et irure laborum quis veniam cupidatat. Enim excepteur
              quis eu eiusmod cillum sit sunt aute officia ea sint 
              sunt sit.
            </p>
            <a target="_blank" href="https://linktr.ee/churrosestilonayarit">
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
                  Elit sit duis occaecat duis exercitation 
                  consectetur laborum aliquip ad ad esse nulla 
                  qui quis.
                </p>
              </div>
              <div className="event-content">
                <img alt="" src={wedding} /> 
                <p>
                  Cillum incididunt ipsum veniam labore aliqua 
                  sunt dolore enim voluptate cillum Lorem tempor 
                  culpa.
                </p>
              </div>
              <div className="event-content">
                <img alt="" src={quince} /> 
                <p>
                  Incididunt nulla esse aute aliquip adipisicing 
                  nisi excepteur adipisicing veniam anim anim.
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
