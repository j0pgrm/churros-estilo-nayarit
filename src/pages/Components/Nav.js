import React, { useState, useEffect } from 'react'; 
import '../../styles/Components/nav.scss'; 
import { Link } from 'react-router-dom'; 
import navIcon from '../../img/nav-icon.png'; 
import navx from '../../img/nav-x.png'; 
import logo from '../../img/churro-estilo-nayarit-logo.png'; 
import backImg from '../../img/myImg.png'; 

function Nav(props) {

    //useState 
    const [navOpen, setNavOpen] = useState(false); 

    //functions 
    const mobileNavOpen = () => {
        if (navOpen) {
            setNavOpen(false); 
        }

        else {
            setNavOpen(true); 
        }
    }

    //window size 
    const size = useWindowSize();

    function useWindowSize() {
        const [windowSize, setWindowSize] = useState({
            width: undefined,
            height: undefined,
        });
        
        useEffect(() => {
            // Handler to call on window resize
            function handleResize() {
            // Set window width/height to state
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
            }

            // Add event listener
            window.addEventListener("resize", handleResize);
            
            // Call handler right away so state gets updated with initial window size
            handleResize();
            
            // Remove event listener on cleanup
            return () => window.removeEventListener("resize", handleResize);
        }, []); // Empty array ensures that effect is only run on mount
        
        return windowSize;
    }; 

  return (
    <div>
    {
        size.width < 1024 ? 

            <nav className="mobile-nav" style={{background: props.red ? "url(" + backImg + ")" : null }}>

                <img alt="" src={navIcon} onClick={mobileNavOpen} /> 

                {
                navOpen ? 
                    
                    <div className="side-nav-container">
                        <div className="logo-container">
                            <img alt="" src={logo} /> 
                        </div>
                        
                        <div className="link-container">
                            <Link to="/churros-estilo-nayarit">Home</Link>
                            <Link to="/churros-estilo-nayarit/catering">Catering</Link>
                            <Link to="/churros-estilo-nayarit/about-business">About Business</Link>
                            <Link to="/churros-estilo-nayarit/locations">Location</Link>
                            <Link to="/churros-estilo-nayarit/contact-us">Contact Us</Link>
                        </div>

                        <div className="img-container">
                            <img alt="" src={navx} onClick={mobileNavOpen} /> 
                        </div>
                    </div>

                : 

                    null 
                }
            </nav>

        : 

            <nav className="desktop-nav" style={{background: props.red ? "url(" + backImg + ")" : null }}>
                <div className="nav-items-container">
                    <Link to="/churros-estilo-nayarit/">Home</Link>
                    <Link to="/churros-estilo-nayarit/catering">Catering</Link>
                    <Link to="/churros-estilo-nayarit/about-business">About Business</Link>
                    <Link to="/churros-estilo-nayarit/locations">Location</Link>
                    <Link to="/churros-estilo-nayarit/contact-us">Contact Us</Link>
                </div>
            </nav>
    }
    </div>
  )
}

export default Nav; 
