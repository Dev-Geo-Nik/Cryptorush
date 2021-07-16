import React from 'react';
import {SubHeaderSection} from "./style";
import {useCoinContext} from "../../../context/coins/CoinsContext";
import {Link} from "react-router-dom";
import {numberWithCommas} from "../../../util/helpers";
import { GoArrowSmallUp ,GoArrowSmallDown} from "react-icons/go";
import { FaLevelUpAlt ,FaLevelDownAlt } from "react-icons/fa";

const SubHeader = () => {
    const {coinsCount,exchangesCount,globalData,coinsDominance,marketCap24hVolume,marketCap,marketCap24hVolumePercentage} = useCoinContext();
    // console.log(globalData.data.market_cap_change_percentage_24h_usd);
    // console.log(marketCap.usd)
    // console.log(marketCap24hVolume.usd)
    console.log(coinsCount.length)

    let percentage = marketCap24hVolumePercentage ? Number.parseInt(numberWithCommas(marketCap24hVolumePercentage.toFixed(2))): ""
    let percentageIcon = null;
    console.log(typeof percentage)

    if (typeof percentage === "number" ) {

        if (percentage > 0) {
            percentageIcon =  <FaLevelUpAlt className="icon-up green icon"><span className="text-up">{percentage}</span></FaLevelUpAlt>
        }else{
            percentageIcon =  <FaLevelDownAlt className="icon-down red icon"><span className="text-down">{percentage}</span></FaLevelDownAlt>

        }
    }


    return (
        <SubHeaderSection>
            <div className="container">
                <div className="coins">Coins: <Link to="/">{coinsCount.length > 0? coinsCount.length :""}</Link></div>
                <div className="exchanges">Exchanges: <Link to="/exchanges">{exchangesCount.length > 0? exchangesCount.length :""}</Link></div>
                <div className="market-cap">
                    <span className="market-cap-text">
                     {/* Market Cap:   ${ marketCap ? numberWithCommas(marketCap.usd.toFixed(0)):""} */}
                    </span>
                    <span className="market-cap-percentage">
                        {percentageIcon}
                    </span>
                </div>
            </div>
        </SubHeaderSection>
    )
}

export default SubHeader
