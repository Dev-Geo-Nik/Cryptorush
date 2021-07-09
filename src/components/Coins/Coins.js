import React from 'react';
import {CoinsSection} from "../Coins/style";
import {useCoinContext} from "../../context/coins/CoinsContext";
import {Link} from "react-router-dom";

const Coins = () => {
    const {allCoins} = useCoinContext();
    console.log(allCoins)

    const displayCoins = allCoins.length > 0 ? allCoins.map((coin)=>{
        const {id,market_cap_rank,image,symbol,current_price, price_change_percentage_24h,total_volume,market_cap} = coin;

            return(
                <Link to ={`/${id}`} key={id} className="link-container">
                        <tr className="row" >
                            <td className="coin-rank">{market_cap_rank}</td>
                            <td className="coin-image-container"><img src={image} alt={`image of ${symbol}`} className="coin-image" />   <td className="coin-name">{id}</td>   <td className="coin-symbol">{symbol.toUpperCase()}</td> </td>                  
                          
                            <td className="coin-price">${current_price}</td>
                            <td className="coin-price-24h">{price_change_percentage_24h.toFixed(2)} %</td>
                            <td className="coin-volume">$ {total_volume}</td>
                            <td className="coin-market">$ {market_cap}</td>
                        </tr>
                </Link>  
            );

    }):[];


    return (
        <CoinsSection>
            <table className="table">
                <tr className="table-labels">
                    <th className="rank text">Rank</th>
                    <th className="coin text">Coin</th>
                    <th className="price text">Price</th>
                    <th className="price-24h text">24H</th>
                    <th className="price-volume text">24h Volume</th>
                    <th className="market-cap text">Market Cap</th>
                    {/* <th className="chart text">Last 7 Days</th> */}
                </tr>
            </table>
            <table className="coins-table">
                 {displayCoins}
            </table>
        </CoinsSection>
    )
}

export default Coins
