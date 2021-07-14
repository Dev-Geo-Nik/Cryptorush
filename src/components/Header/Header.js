import React from 'react';
import {HeaderTag} from "./style";
import Navigation from "./Navigation/Navigation";
import SubHeader from "./SubHeader/SubHeader";


const Header = () => {

    return (
        <HeaderTag>
          <Navigation/>
          <hr />
          <SubHeader/>
          <hr />
        </HeaderTag>
    )
}

export default Header;
