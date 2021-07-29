import React from 'react';
import {SingleCoinSection} from "./style";
import {useCoinContext} from "../../context/coins/CoinsContext";

const SingleCoin = () => {
    const {singleCoinData} = useCoinContext();
    console.log(singleCoinData)
    return (
        <SingleCoinSection>
         
            <h5>   Single Coin Section Welcome</h5>
        </SingleCoinSection>
    )

}

export default SingleCoin
