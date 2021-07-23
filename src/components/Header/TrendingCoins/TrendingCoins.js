import React from 'react';
import {TrendingCoinsSection} from "./style";
import {useCoinContext} from "../../../context/coins/CoinsContext";
import { Link } from 'react-router-dom';

const TrendingCoins = () => {
    const {trendingCoins} = useCoinContext();

    const trendingCoinsArray = trendingCoins.length > 0 && Object.entries(trendingCoins.coins);
    // console.log(trendingCoinsArray[0])

    console.log(trendingCoinsArray)
    

    const displayTrendingCoins = trendingCoinsArray.length > 0 ? trendingCoinsArray.map((coin)=>{
        const { coin_id ,name,symbol,small} = coin;
        // console.log(coin)
       
        return (
                <div></div>
                // <Link to={`/${name}`} key={coin_id}>
                //     <img src={small} alt={`${name} image`} className="coin-image" />
                // </Link>
             )
    }):[];

    return (
        <TrendingCoinsSection>
          {displayTrendingCoins}  
        </TrendingCoinsSection>
    )
}

export default TrendingCoins;
