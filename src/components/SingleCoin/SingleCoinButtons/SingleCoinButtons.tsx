import React from 'react';
import {SingleCoinButtonsSection} from "./style";
import {useCoinContext} from "../../../context/coins/CoinsContext";
import {Link} from "react-router-dom";

const SingleCoinButtons = () => {
    const {singleCoinData} = useCoinContext();
    


    return (
        <SingleCoinButtonsSection>
             <Link to="/"className="home-btn btn" >Home</Link>
             <button className="coin-btn btn" >{singleCoinData && singleCoinData.name}</button>
        </SingleCoinButtonsSection>
    )
}

export default SingleCoinButtons
