import './App.css'; 
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'; 
import Catering from './pages/Catering'; 
import AboutBusiness from './pages/AboutBusiness'; 
import Locations from './pages/Locations'; 
import ContactUs from './pages/ContactUs'; 
import ErrorPage from './pages/ErrorPage'; 

function App() {
  return (
    <Routes>
      <Route path="/churros-estilo-nayarit" element={<Home />} />
      <Route path="/churros-estilo-nayarit/catering" element={<Catering />} /> 
      <Route path="/churros-estilo-nayarit/about-business" element={<AboutBusiness />} /> 
      <Route path="/churros-estilo-nayarit/locations" element={<Locations />} /> 
      <Route path="/churros-estilo-nayarit/contact-us" element={<ContactUs />} /> 
      <Route path="*" element={<ErrorPage />} /> 
    </Routes>
  );
}

export default App;
