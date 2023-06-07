import React from 'react'; 
import redBack from '../img/myImg.png'; 
import '../styles/pages/error.scss'; 
import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <div className="error-page" style={{background: "url(" + redBack + ")"}}>
      <h1>404 Page</h1>
      <h1>Not Found</h1>
      <Link to="/">
        <button>Go Back</button>
      </Link>
      
    </div>
  )
}

export default ErrorPage; 
