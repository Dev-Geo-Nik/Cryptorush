import React from 'react';
import {SingleCoinLinksSection} from "./style";

import {useCoinContext} from "../../../context/coins/CoinsContext";


const SingleCoinLinks = () => {

    const {singleCoinData} = useCoinContext();
    // console.log(singleCoinData)

    return (
        <SingleCoinLinksSection>
            SingleCoinLinksSection 
        </SingleCoinLinksSection>
    )
}

export default SingleCoinLinks
