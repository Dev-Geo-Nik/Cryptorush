import React from 'react';
import {HeaderTag} from "./style";
import Navigation from "./Navigation/Navigation";


const Header = () => {

    return (
        <HeaderTag>
          <Navigation/>
          <hr />
        </HeaderTag>
    )
}

export default Header;