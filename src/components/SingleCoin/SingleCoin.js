import React from 'react';
import {SingleCoinSectionTag} from "./style";

import SingleCoinSection from "./SingleCoinStatus/SingleCoinStatus";
import SingleCoinLinks from "./SingleCoinLinks/SingleCoinLinks";
import SingleCoinMarketStats from "./SingleCoinMarketStats/SingleCoinMarketStats";
import SingleCoinButtons from "./SingleCoinButtons/SingleCoinButtons";


const SingleCoin = () => {

    


    return (
     
        <React.Fragment>

        
            <SingleCoinButtons/>
            <SingleCoinSectionTag>
                    <div className="container">
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
