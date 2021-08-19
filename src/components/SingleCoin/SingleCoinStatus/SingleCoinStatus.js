import React from 'react';
import {SingleCoinStatusSection} from "./style";
import {useCoinContext} from "../../../context/coins/CoinsContext";
import { FaStar } from "react-icons/fa";
import {numberWithCommas} from "../../../util/helpers";

const SingleCoinStatus = () => {
    const {singleCoinData} = useCoinContext();
   

    let displayCoinDetails = [];

    if (singleCoinData) {
    
        const{
            name,
            symbol,
            market_cap_rank,
            market_data,
            developer_data,       
            image:{small}
        } = singleCoinData;


        displayCoinDetails = 
        <React.Fragment>
            <div className="ranking-container">
                <div className="rank"><span className="rank-text">Rank #{market_cap_rank}</span> </div>
                <div className="stars-container">
                    <span className="star-text-container">
                        <FaStar className="star-icon"/>
                        <span className="star-text">{developer_data.stars} people like {name} </span>
                    </span>
                </div>
            </div>

            <div className="image-container">
                <img src={small} alt={name} className="image" />
                <span className="name">{name}</span>
                <span className="symbol">{`(${symbol.toUpperCase()})`}</span>
                 <p className="price">$ {market_data.current_price.usd}</p>
            </div>
         
            <div className="coin-stats-container">
                <div className="market-cap-container containers">
                    <span className="market-cap text-general">Market Cap</span>
                    <span className="market-cap-text text-number-general">${numberWithCommas(market_data.market_cap.usd)}</span>
                </div>
                <div className="trading-vol-container containers">
                    <span className="trading-vol text-general">24 Hour Trading Vol</span>
                    <span className="trading-vol-text text-number-general">${numberWithCommas(market_data.total_volume.usd)}</span>
                </div>
                <div className="Supply-container containers">
                    <span className="Supply text-general">Circulating Supply</span>
                    <span className="Supply-text text-number-general">{numberWithCommas(market_data.circulating_supply)}</span>
                </div>
                <div className="Total-Supply-container containers">
                    <span className="Total-Supply text-general">Total Supply</span>
                    <span className="Total-Supply-text text-number-general">{market_data.total_supply ? numberWithCommas(market_data.total_supply):"∞"}</span>
                </div>
                <div className="Max-Supply-container containers">
                    <span className="Max-Supply text-general">Max Supply </span>
                    <span className="Max-Supply-text text-number-general">{market_data.max_supply ? numberWithCommas(market_data.max_supply):"∞"}</span>
                </div>
            </div>
        </React.Fragment>
        

    }

    return (
        <SingleCoinStatusSection>
            {displayCoinDetails}
        </SingleCoinStatusSection>
    )
}

export default SingleCoinStatus
