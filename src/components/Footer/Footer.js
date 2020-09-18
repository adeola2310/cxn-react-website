import React from "react";
import './Footer.css'

const Footer=()=>{
return(
    <footer>
            <div className="footer-details">
                    <h3>CXN Network</h3>
                <div className="social-icons">
                    <i className="fa-4x"></i>
                    <i className="fa fa-twitter-square"></i>
                    <i className="fa fa-linkedin-square"></i>
                    <i className="fa fa-instagram"></i>
                    <i className="fa fa-facebook-square"></i>
                </div>
                    <p className="foot">© {new Date().getFullYear()} Liquidity Dividends Protocol. All Rights Reserved</p>
            </div>
        </footer>
)
}

export default Footer;