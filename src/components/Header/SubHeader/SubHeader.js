import React from 'react';
import {SubHeaderSection} from "./style";
import {useCoinContext} from "../../../context/coins/CoinsContext";
import {Link} from "react-router-dom";


const SubHeader = () => {
    const {coinsCount,exchangesCount} = useCoinContext();
    // console.log(coinsCount.length,exchangesCount.length)



    return (
        <SubHeaderSection>
            <div className="container">
                <div className="coins">Coins: <Link to="/">{coinsCount === null ? "" :coinsCount.length}</Link></div>
                <div className="exchanges">Exchanges: <Link to="/exchanges">{exchangesCount === null ? "" : exchangesCount.length}</Link></div>
            </div>
        </SubHeaderSection>
    )
}

export default SubHeader
