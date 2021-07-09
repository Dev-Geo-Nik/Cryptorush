import React from 'react';
import {LogoSpan} from "./style";
// import LogoImage from "../../../../assets/images/logo.jpeg";
import {Link} from "react-router-dom";

const Logo = () => {

    return (
        <LogoSpan>
            <Link to="/" >
                 {/* <img src={LogoImage} alt="logo of the website" className="image" /> */}
                 <span className="logo-text">CryptoRush</span>
            </Link>
       
        </LogoSpan>
    )
    
}

export default Logo
