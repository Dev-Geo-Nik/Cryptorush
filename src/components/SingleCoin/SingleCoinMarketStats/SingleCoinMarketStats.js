import React from 'react';
import {SingleCoinMarketStatsSection} from "./style";
import {useCoinContext} from "../../../context/coins/CoinsContext";

const SingleCoinMarketStats = () => {

    const {singleCoinData} = useCoinContext();
    
    let displayCoinMarketStats = null;
    
    if (singleCoinData) {
        
        const{
         name,
         market_data
        
        } = singleCoinData;
        // console.log(market_data.high_24h.usd)
        console.log(market_data)
        displayCoinMarketStats = 
            <div className="container">
                <h1 className="title">{name} Market Stats</h1>
                <div className="coin-market-stats-container">
                    <div className="containers dominance-container">
                        <span className="text-general dominance">Market Cap Dominance</span>
                        <span className="text-number-general">x</span>
                    </div>
                </div>
            </div>
    }


    return (
        <SingleCoinMarketStatsSection>
            {displayCoinMarketStats}
        </SingleCoinMarketStatsSection>
    )
}

export default SingleCoinMarketStats
