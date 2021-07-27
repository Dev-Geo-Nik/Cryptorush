import React from 'react';
import {FooterTag} from "./style";

const Footer = () => {
    return (
        <FooterTag>
          <p className="footer-text">CoinRush  &copy;{new Date().getFullYear()} All rights reserved</p>
        </FooterTag>
    )
}

export default Footer
