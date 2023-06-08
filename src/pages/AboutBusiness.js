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
            Churros Estilo Nayarit was born in 2001 when a mother was looking 
            for opportunities to help her loving husband raise their family. 
            New to Arizona they built this business from scratch starting 
            with a Churro machine and a dream. Slowly they went from selling 
            outside their home to owning their first food truck. By 2010 
            they open their first brick and mortar at Desert Sky Mall Mercado 
            de Los Cielos. Building a reputation for being the BEST 
            CHURROS in town, this small business continues to operate 
            out of a food truck and has even expanded to offering catering 
            services. We strive to provide our customers with the best 
            experience at their events with the most delicious Churros 
            made with only quality ingredients. We thank everyone of our 
            customers for the continued support and look forward to continue 
            to serve delicious Churros for more time to come!
          </p>
          <img alt="" src={churroStand} /> 
          <p>
            Churros Estilo Nayarit nació en el 2001 cuando una madre 
            buscaba oportunidades para ayudar a su amado esposo a criar a 
            su familia. Nuevos en Arizona, construyeron este negocio desde 
            cero comenzando con una máquina de Churros y un sueño. Poco a 
            poco pasaron de vender fuera de su casa a ser dueños de su 
            primer camión de comida. Para el 2010 abrieron su primera tienda 
            tradicional en Desert Sky Mall Mercado de Los Cielos. Construyendo 
            una reputación de ser los MEJORES CHURROS de la ciudad, esta 
            pequeña empresa continúa operando desde un camión de comida e 
            incluso se ha expandido para ofrecer servicios de catering. 
            Nos esforzamos por brindar a nuestros clientes la mejor 
            experiencia en sus eventos con los más deliciosos churros 
            elaborados solo con ingredientes de calidad. ¡Agradecemos a 
            todos nuestros clientes por el continuo apoyo y esperamos 
            seguir sirviendo deliciosos churros por más tiempo!
          </p>
        </div>
      </div>

      <Footer /> 

    </div>
  )
}

export default AboutBusiness; 
