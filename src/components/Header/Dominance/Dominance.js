import React from 'react';
import {DominanceDiv} from "./style";
import {useCoinContext} from "../../../context/coins/CoinsContext";

const Dominance = () => {
    const {coinsDominance} = useCoinContext();
    
   const dominanceArray = Object.keys(coinsDominance);
    console.log(dominanceArray);
    
    const displayCoinsDominance  =  dominanceArray.length > 0 ? dominanceArray.map((c,index)=>{
        const {coin,value} = c;
        console.log(coin)

        return(
            <div className="coin-item" key={index}>
                    <span className="coin-text">{coin}</span>
            </div>            
        )

    }):[]

    
    

    return (
        <DominanceDiv>
            <h3>Dominance of market  leaders</h3>
            <div className="coins-container">
                {displayCoinsDominance}
            </div>
        </DominanceDiv>
    )
}

export default Dominance
