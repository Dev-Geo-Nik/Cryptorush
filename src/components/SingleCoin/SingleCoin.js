import React from 'react';
import {SingleCoinSectionTag} from "./style";
// import {useCoinContext} from "../../context/coins/CoinsContext";
import SingleCoinSection from "./SingleCoinStatus/SingleCoinStatus";
import SingleCoinLinks from "./SingleCoinLinks/SingleCoinLinks";
import SingleCoinMarketStats from "./SingleCoinMarketStats/SingleCoinMarketStats";
import SingleCoinDescription from "./SingleCoinDescription/SingleCoinDescription";

const SingleCoin = () => {
    // const {singleCoinData} = useCoinContext();
    // console.log(singleCoinData)

    return (
        <SingleCoinSectionTag>
            <div className="coin-detail-container">
                <SingleCoinSection/>
                <SingleCoinMarketStats/>
                <SingleCoinLinks/>
           </div>
            {/* <SingleCoinDescription/> */}
        </SingleCoinSectionTag>
    )

}

export default SingleCoin
