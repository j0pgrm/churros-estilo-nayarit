import React from 'react'; 
import '../styles/pages/home.scss'; 
import Nav from './Components/Nav'; 
import otherRedBack from '../img/myImg.png';  
import Carousel from 'react-material-ui-carousel'; 
import churro1 from '../img/churro-1.jpg';
import churro2 from '../img/churro-2.jpg'; 
import churro3 from '../img/churro-3.jpg'; 
import churroQuince from '../img/churro-quince.jpg'; 
import Footer from './Components/Footer'; 
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <div className="home-page">

        <Nav /> 

        <div className="opening-page-container" style={{background: "url(" + otherRedBack + ")"}}>
          <div className="opening-page-content">
            <div className="opening-left-container">
              <h1>Churros Estilo Nayarit</h1> 
              <p>
                Cupidatat duis labore do sunt ea occaecat 
                amet nisi. Incididunt culpa elit amet eiusmod. 
                Irure sunt excepteur tempor nulla eu voluptate. 
              </p>
              <a target="_blank" href="https://linktr.ee/churrosestilonayarit" rel="noreferrer">
                <button>Catering Service</button>
              </a>
            </div>
            <div className="opening-right-container">
              <Carousel swipe={true}>
                <img alt="" src={churro1} loading={'eager'} /> 
                <img alt="" src={churro2} loading={'eager'} /> 
                <img alt="" src={churro3} loading={'eager'} /> 
              </Carousel>
            </div>
          </div>
        </div>

        <div className="who-we-are-container">
          <div className="who-we-are">
            <h1>Who We Are</h1>
            <p>
              Ipsum ut elit mollit excepteur eu qui 
              laborum proident ipsum proident.
              Non elit sit tempor elit qui magna et 
              irure reprehenderit et culpa et eu est.
              Voluptate consequat veniam veniam anim qui 
              mollit ex sit anim dolor. Aute nisi mollit sunt 
              officia Lorem tempor laboris esse qui quis magna 
              proident consequat. Nulla sint id enim sunt qui 
              culpa consequat culpa excepteur qui. Mollit qui 
              laborum ut ut qui tempor esse elit labore 
              voluptate dolore et sint eiusmod. Deserunt ullamco 
              fugiat enim ex consequat eu fugiat cillum magna. 
            </p>
            <p>
              Lorem mollit laborum anim deserunt excepteur Lorem 
              do ullamco duis et. Amet magna pariatur velit tempor 
              anim commodo. Culpa sunt nisi anim laborum mollit 
              nisi cillum incididunt labore eiusmod sit sunt. 
              Proident esse in esse elit duis eu. Sint deserunt 
              consectetur duis consequat eu. Fugiat fugiat dolore 
              nostrud ullamco nostrud amet enim ut dolore cillum 
              id amet.
            </p>
          </div>
        </div>

        <div className="churro-marketing-container">
          <div className="churro-marketing">
            <h1>Our Tasty Churros</h1>
            <img alt="" src={churro1} /> 
            <p>
              Culpa labore fugiat reprehenderit deserunt adipisicing 
              quis pariatur nulla consequat occaecat ex quis 
              reprehenderit. Aute esse tempor anim laborum cillum 
              deserunt eu.
            </p>
          </div>
        </div>

        <div className="events-done-container" style={{background: "url(" + otherRedBack + ")"}}>
          <div className="events-done">
            <h1>Events we've Catered</h1>
            <img alt="" src={churroQuince} /> 
            <p>
              Irure et ut sunt ipsum eiusmod ut eiusmod enim irure. 
              Aute cupidatat laborum aliquip excepteur minim in 
              esse anim. Lorem exercitation enim irure qui duis 
              commodo. 
            </p>
            <Link to="/catering">
              <button>More Events</button>
            </Link>
          </div>
        </div>

        <Footer /> 

      </div>        
    </div>
  )
}

export default Home; 
