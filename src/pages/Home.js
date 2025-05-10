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
                Make your next event extra sweet with a Churro Topping 
                Bar. Catered bars the next big thing for any event.
                Haz que tu próximo evento sea más dulce con una barra 
                de churros. Las bares son la próxima novedad para 
                cualquier evento.
              </p>
              <a target="_blank" href="https://www.instagram.com/direct/t/107801280617047" rel="noreferrer">
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
              Churros Estilo Nayarit was born in 2001 when a mother was 
              looking for opportunities to help her loving husband raise 
              their family. New to Arizona they built this business from 
              scratch starting with a Churro machine and a dream. Slowly 
              they went from selling outside their home to owning their 
              first food truck. By 2010 they open their first brick and 
              mortar at Desert Sky Mall Mercado de Los Cielos. Building 
              a reputation for being the BEST CHURROS in town, this small 
              business continues to operate out of a food truck and has 
              even expanded to offering catering services. We strive to 
              provide our customers with the best experience at their 
              events with the most delicious Churros made with only 
              quality ingredients. We thank everyone of our customers 
              for the continued support and look forward to continue 
              to serve delicious Churros for more time to come!
            </p>
            <p>
              Churros Estilo Nayarit nació en el 2001 cuando una madre 
              buscaba oportunidades para ayudar a su amado esposo a criar 
              a su familia. Nuevos en Arizona, construyeron este negocio 
              desde cero comenzando con una máquina de Churros y un sueño. 
              Poco a poco pasaron de vender fuera de su casa a ser dueños 
              de su primer camión de comida. Para el 2010 abrieron su 
              primera tienda tradicional en Desert Sky Mall Mercado de 
              Los Cielos. Construyendo una reputación de ser los MEJORES 
              CHURROS de la ciudad, esta pequeña empresa continúa 
              operando desde un camión de comida e incluso se ha 
              expandido para ofrecer servicios de catering. Nos esforzamos 
              por brindar a nuestros clientes la mejor experiencia en sus 
              eventos con los más deliciosos churros elaborados solo con 
              ingredientes de calidad. ¡Agradecemos a todos nuestros 
              clientes por el continuo apoyo y esperamos seguir 
              sirviendo deliciosos churros por más tiempo!
            </p>
          </div>
        </div>

        <div className="churro-marketing-container">
          <div className="churro-marketing">
            <h1>Our Tasty Churros</h1>
            <img alt="" src={churro1} /> 
            <p>
              Indulge your taste buds with our delectable churros, 
              where you have the opportunity to customize them according 
              to your personal preferences. At our establishment, we pride 
              ourselves on offering a unique and memorable churro 
              experience that caters to each individual's cravings.
            </p>
            <p>
              Deleite su paladar con nuestros deliciosos churros, 
              donde tiene la oportunidad de personalizarlos según sus 
              preferencias personales. En nuestro establecimiento, nos 
              enorgullecemos de ofrecer una experiencia de churros única 
              y memorable que satisfaga los antojos de cada individuo.
            </p>
          </div>
        </div>

        <div className="events-done-container" style={{background: "url(" + otherRedBack + ")"}}>
          <div className="events-done">
            <h1>Events we've Catered</h1>
            <img alt="" src={churroQuince} /> 
            <p>
              Make your next event extra sweet with a Churro Topping 
              Bar. Catered bars the next big thing for any event.Haz 
              que tu próximo evento sea más dulce con una barra de 
              churros. Las bares son la próxima novedad para 
              cualquier evento.
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
