import React from 'react';
import {SingleCoinSectionTag} from "./style";
import {useCoinContext} from "../../context/coins/CoinsContext";
import SingleCoinSection from "./SingleCoinStatus/SingleCoinStatus";
import SingleCoinLinks from "./SingleCoinLinks/SingleCoinLinks";
import SingleCoinMarketStats from "./SingleCoinMarketStats/SingleCoinMarketStats";
import {Link} from "react-router-dom";
// import SingleCoinDescription from "./SingleCoinDescription/SingleCoinDescription";

const SingleCoin = () => {
    const {singleCoinData} = useCoinContext();
    console.log()


    return (
        <React.Fragment>
            <div className="buttons-container">
             <Link to="/"className="home-btn btn" >Home</Link>
             <Link to="/"className="coin-btn btn" >{singleCoinData.name}</Link>
            </div>
        <SingleCoinSectionTag>
            <div className="coin-detail-container">
                <SingleCoinSection/>
                <SingleCoinMarketStats/>
                <SingleCoinLinks/>
           </div>
            {/* <SingleCoinDescription/> */}
        </SingleCoinSectionTag>
        </React.Fragment>
    )

}

export default SingleCoin
