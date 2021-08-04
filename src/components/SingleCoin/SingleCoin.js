import React from 'react';
import {SingleCoinSectionTag} from "./style";
// import {useCoinContext} from "../../context/coins/CoinsContext";
import SingleCoinSection from "./SingleCoinStatus/SingleCoinStatus";
import SingleCoinLinks from "./SingleCoinLinks/SingleCoinLinks";
import SingleCoinMarketStats from "./SingleCoinMarketStats/SingleCoinMarketStats";

const SingleCoin = () => {
    // const {singleCoinData} = useCoinContext();
    // console.log(singleCoinData)

    return (
        <SingleCoinSectionTag>
            <SingleCoinSection/>
            <SingleCoinMarketStats/>
            <SingleCoinLinks/>
        </SingleCoinSectionTag>
    )

}

export default SingleCoin
