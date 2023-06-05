import React, { useMemo } from 'react'
import Nav from './Components/Nav';
import Footer from './Components/Footer'; 
import '../styles/pages/locations.scss'; 
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api"; 
import churroTruck from '../img/churro-truck.jpg'; 
import churroStandModel from '../img/churro-stand-model.jpg'; 
import churroStand from '../img/churro-stand.jpg'; 
import churroLady from '../img/churro-lady.jpg'; 

function Locations() {

  const { isLoaded } = useLoadScript({
    // googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    googleMapsApiKey: "AIzaSyCArtdL8CKJGnW67Mc9rrFPkq2dSyhQRm4",
  });

  const center = useMemo(() => ({ lat: 33.478490, lng: -112.177580 }), []);

  return (
    <div className="locations-page">

      <Nav red={true} /> 

      <div className="locations-top-container">
        <div className="locations-top-content">
        
          <h1>Locations</h1>

          <p>2813 N 55th Ave Phoenix, AZ</p>

          <div className="location-box-container">
            {
              !isLoaded ? (
                
                <h1>Loading...</h1>

              ) : (

                <GoogleMap
                  mapContainerClassName="map-container"
                  center={center}
                  zoom={17}
                >
                  <Marker position={{ lat: 33.478490, lng: -112.177580 }} />
                </GoogleMap>
            )}
          </div>

          <div className="hours-container">
            <h1>Hours</h1>
            <p>Sunday: 9am - 8pm</p>
            <p>Monday: Closed</p>
            <p>Tuesday: Closed</p>
            <p>Wednesday: Closed</p>
            <p>Thursday: Closed</p>
            <p>Friday: Closed</p>
            <p>Saturday: 9am - 8pm</p>
          </div>

          <h1>What to Expect</h1>

          <div className="img-grid-container">
            <img alt="" src={churroTruck} /> 
            <img alt="" src={churroStandModel} /> 
            <img alt="" src={churroStand} /> 
            <img alt="" src={churroLady} /> 
          </div>

        </div>
      </div>
      
      <Footer /> 

    </div>
  )
}

export default Locations; 
