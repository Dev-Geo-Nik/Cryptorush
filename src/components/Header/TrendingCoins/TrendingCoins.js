import React from 'react';
import {TrendingCoinsSection} from "./style";
import {useCoinContext} from "../../../context/coins/CoinsContext";
import { Link } from 'react-router-dom';

const TrendingCoins = () => {
    const {trendingCoins} = useCoinContext();
    const trendingCoinsArray = Object.entries(trendingCoins)
    // console.log(trendingCoinsArray[0])

    console.log(trendingCoins)
    

    const displayTrendingCoins = trendingCoinsArray.length > 0 ? trendingCoinsArray[0].map((coin)=>{
        const { coin_id ,name,symbol,small} = coin;
       
        return (
                <Link to={`/${name}`} key={coin_id}>
                    <img src={small} alt={`${name} image`} className="coin-image" />
                </Link>
             )
    }):[];

    return (
        <TrendingCoinsSection>
          {displayTrendingCoins}  
        </TrendingCoinsSection>
    )
}

export default TrendingCoins;
