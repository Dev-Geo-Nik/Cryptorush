import React from 'react';
import {SingleCoinStatusSection} from "./style";
import {useCoinContext} from "../../../context/coins/CoinsContext";
import { FaStar } from "react-icons/fa";
import {numberWithCommas} from "../../../util/helpers";

const SingleCoinStatus = () => {
    const {singleCoinData} = useCoinContext();
    console.log(singleCoinData)

    let displayCoinDetails = [];

    if (singleCoinData) {
       console.log("in") 
        const{
            name,
            symbol,
            market_cap_rank,
            genesis_date,
            market_data,
            developer_data,       
            image:{small}
        } = singleCoinData;

        // console.log(market_data.circulating_supply);
        // console.log(current_price.usd);
        // console.log(developer_data.stars);

        displayCoinDetails = 
        <React.Fragment>
            <div className="rank"><span className="rank-text">Rank #{market_cap_rank}</span> </div>
            <div className="image-container">
                <img src={small} alt={name} className="image" />
                <span className="name">{name}</span>
                <span className="symbol">{`(${symbol.toUpperCase()})`}</span>
            </div>
            <p className="price">$ {numberWithCommas(market_data.current_price.usd)}</p>
            <div className="stars-container">
                <span className="star-text-container">
                    <FaStar className="star-icon"/>
                    <span className="star-text">{developer_data.stars} people like {name}</span>
                </span>
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
