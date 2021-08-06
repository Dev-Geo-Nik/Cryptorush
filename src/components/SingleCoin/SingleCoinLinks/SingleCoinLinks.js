import React from 'react';
import {SingleCoinLinksSection} from "./style";

import {useCoinContext} from "../../../context/coins/CoinsContext";


const SingleCoinLinks = () => {

    const {singleCoinData} = useCoinContext();
    let displayCoinLinks = null;


    if (singleCoinData) {
        
        const{links} = singleCoinData;
        console.log(links.homepage)

        displayCoinLinks =
            <React.Fragment>

            </React.Fragment>
    }



    return (
        <SingleCoinLinksSection>
           {displayCoinLinks}
        </SingleCoinLinksSection>
    )
}

export default SingleCoinLinks
