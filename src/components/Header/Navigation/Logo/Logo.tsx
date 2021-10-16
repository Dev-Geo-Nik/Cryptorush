import React from 'react';
import {LogoSpan} from "./style";
import LogoImage from  "../../../../assets/images/logo.jpg";
import {Link} from "react-router-dom";

const Logo = () => {

    return (
        <LogoSpan>
            <Link to="/" >
                 <img src={LogoImage} alt="logo of the website" className="image" />
            </Link>
       
        </LogoSpan>
    )
    
}

export default Logo
