import React from 'react';
import {SingleCoinMarketStatsSection} from "./style";
import {useCoinContext} from "../../../context/coins/CoinsContext";

const SingleCoinMarketStats = () => {

    const {singleCoinData} = useCoinContext();
    
    let displayCoinMarketStats = null;
    
    if (singleCoinData) {
        
        const{
         name,
         market_data,
        } = singleCoinData;
    
      
        displayCoinMarketStats = 
            <div className="container">
                <div className="coin-market-stats-container">
                <h1 className="title">{name} Price </h1>


                    <div className="containers price-7d-container">
                        <span className="text-general price-7d">Price Change in 7 Days</span>                
                        <span className={market_data.price_change_percentage_7d > 0 ? "  text-number-general green":"  text-number-general red"}>
                            {market_data.price_change_percentage_7d.toFixed(2)}%
                       </span>               
                    </div>

                    <div className="containers price-14d-container">
                        <span className="text-general price-14d">Price Change in 14 Days</span>                
                        <span className={market_data.price_change_percentage_14d > 0 ? "  text-number-general green":"  text-number-general red"}>
                            {market_data.price_change_percentage_14d.toFixed(2)}%
                       </span>               
                    </div>

                    <div className="containers price-30d-container">
                        <span className="text-general price-30d">Price Change in 30 Days</span>                
                        <span className={market_data.price_change_percentage_30d > 0 ? "  text-number-general green":"  text-number-general red"}>
                            {market_data.price_change_percentage_30d.toFixed(2)}%
                       </span>               
                    </div>


                    <div className="containers price-60d-container">
                        <span className="text-general price-60d">Price Change in 60 Days</span>                
                        <span className={market_data.price_change_percentage_60d > 0 ? "  text-number-general green":"  text-number-general red"}>
                            {market_data.price_change_percentage_60d.toFixed(2)}%
                       </span>               
                    </div>

                    <div className="containers price-200d-container">
                        <span className="text-general price-200d">Price Change in 200 Days</span>                
                        <span className={market_data.price_change_percentage_200d > 0 ? "  text-number-general green":"  text-number-general red"}>
                            {market_data.price_change_percentage_200d.toFixed(2)}%
                       </span>               
                    </div>

                    <div className="containers price-1y-container">
                        <span className="text-general price-1y">Price Change in 1 Year</span>                 
                        <span className={market_data.price_change_percentage_1y > 0 ? "  text-number-general green":"  text-number-general red"}>
                            {market_data.price_change_percentage_1y.toFixed(2)}%
                       </span>               
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
