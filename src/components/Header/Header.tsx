import React from 'react';
import {HeaderTag} from "./style";
import Navigation from "./Navigation/Navigation";
import SubHeader from "./SubHeader/SubHeader";
import Dominance from "./Dominance/Dominance";
import TrendingCoins from "./TrendingCoins/TrendingCoins";


const Header = () => {

    return (
        <HeaderTag>
          <Navigation/>
          <TrendingCoins/>
          <Dominance/>    
          <SubHeader/>        
        </HeaderTag>
    )
}

export default Header;
