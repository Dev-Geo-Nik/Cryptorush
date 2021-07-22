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
          <hr />
          <SubHeader/>
          <hr />
          <Dominance/>
          <hr />
          <TrendingCoins/>
          <hr />
        </HeaderTag>
    )
}

export default Header;
