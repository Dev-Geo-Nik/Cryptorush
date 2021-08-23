import React from 'react';
import {TrendingCoinsSection} from "./style";
import {useCoinContext} from "../../../context/coins/CoinsContext";
import { Link } from 'react-router-dom';

const TrendingCoins = () => {
    const {trendingCoins,fetchSingleCoin} = useCoinContext();

    
    let displayTrendingCoins = [];
    
    if (trendingCoins.coins) {

    const trendingCoinsArray = trendingCoins.coins && Object.entries(trendingCoins.coins);
            
     displayTrendingCoins =  trendingCoinsArray.map((coin)=>{
        const {1:{item:{id,name,small,symbol,price_btc}}} = coin;
      
       
       
        return (
               
                <Link to={`/${name}`} key={id} className="coin-container" onClick={()=> fetchSingleCoin(id)}>       
                       <img src={small} alt={`${name} image`} className="coin-image" />
                       <div className="text-container">
                            <h5  className="name">{name}</h5>
                            <p className="symbol">{symbol}</p>      
                       </div>
                </Link>
             )
    })
    }
    


    return (
        <TrendingCoinsSection>
            <h3 className="title">Trending Coins</h3>
            <div className="coins-container">
                 {displayTrendingCoins}  
            </div>
        </TrendingCoinsSection>
    )
}

export default TrendingCoins;
