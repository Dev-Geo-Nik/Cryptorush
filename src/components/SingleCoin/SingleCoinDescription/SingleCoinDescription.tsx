import React from 'react';
import {SingleCoinDescriptionSection} from  "./style";
import {useCoinContext} from "../../../context/coins/CoinsContext";

const SingleCoinDescription = () => {

    const {singleCoinData} = useCoinContext();

    let displayText = null;
    if (singleCoinData) {
        console.log(singleCoinData.description.en)

        displayText = <p className="text">{singleCoinData.description.en}</p>
    }

    return (
        <SingleCoinDescriptionSection>
            {displayText}
        </SingleCoinDescriptionSection>
    )
}

export default SingleCoinDescription
