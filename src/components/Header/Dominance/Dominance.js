import React from 'react';
import {DominanceDiv} from "./style";
import {useCoinContext} from "../../../context/coins/CoinsContext";

const Dominance = () => {
    const {coinsDominance} = useCoinContext();
    
   let dominanceArray = [];
 
    dominanceArray = Object.entries(coinsDominance)
    
    const displayCoinsDominance  =  dominanceArray.map((coin,index)=>{

        if (coin[0] === "btc" || coin[0] === "eth") {
           return;
        }

        return(
            <div className="coin-item" key={index}>
                    <span className="coin-text">{coin[0]} :</span>
                    <span className="coin-number">{coin[1].toFixed(2)}%</span>
            </div>            
        )

    })

    
    

    return (
        <DominanceDiv>
            <h3 className="title">Dominance of most popular coins</h3>
            <div className="coins-container">
                {displayCoinsDominance}
            </div>
        </DominanceDiv>
    )
}

export default Dominance
