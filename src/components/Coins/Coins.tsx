import React from 'react';
import {CoinsSection} from "./style";
import {useCoinContext} from "../../context/coins/CoinsContext";
import {Link} from "react-router-dom";
import {numberWithCommas} from "../../util/helpers";
import Spinner from "../Spinner/Spinner";




const Coins:React.FC = () => {
    const {allCoins,isLoading} = useCoinContext();
  

    let displayCoins:{}= [];

    if (allCoins) {
        displayCoins = allCoins.map((coin)=>{

      

            const {
                id,
                name,
                market_cap_rank,
                image,symbol,
                current_price,
                price_change_percentage_1h_in_currency :chart1h,
                price_change_percentage_24h :chart24h,
                price_change_percentage_7d_in_currency :chart7d,
                price_change_percentage_30d_in_currency :chart30d,
                price_change_percentage_1y_in_currency :roi,
                total_volume,
                market_cap
                  } = coin;
                  
                    
                return(
                    <Link to ={`/${id}`} key={id} className="link-container"  >
                            <div className="row" >
                                <span className="flex-group-coin-1">
                                    <div className="coin-rank font">{market_cap_rank}</div>
                                    <div className="coin-image-container font">
                                        <img src={image} alt={` ${symbol}`} className="coin-image" />
                                           <div className="coin-name font">{name}</div>  
                                           <div className="coin-symbol-container">
                                                <div className="coin-symbol font">{symbol.toUpperCase()}</div>
                                           </div>
                                    </div>                  
                                    <div className="coin-price font">$ {current_price}</div>
                                </span>
                                <span className="flex-group-coin-2">
                                    <div className={chart1h && chart1h.toFixed(2) > 0 ? "coin-price-1h font green" : "coin-price-1h font red"}>{chart1h ? chart1h.toFixed(2) :"---"} %</div>
                                    <div className={chart24h && chart24h.toFixed(2) > 0 ? "coin-price-24h font green" : "coin-price-24h font red"}>{chart24h ? chart24h.toFixed(2) :"---"} %</div>
                                    <div className={chart7d && chart7d.toFixed(2) > 0 ? "coin-price-7d font green" : "coin-price-7d font red"}>{chart7d ? chart7d.toFixed(2) : "---" } %</div>
                                    {/* <div className={chart30d && chart30d.toFixed(2) > 0 ? "coin-price-30d font green" : "coin-price-30d font red"}>{chart30d && chart30d.toFixed(2) } %</div> */}
                                </span>
                                <span className="flex-group-coin-3">
                                    <div className="coin-volume font">$ {numberWithCommas(total_volume)? numberWithCommas(total_volume) :"---"}</div>
                                    <div className="coin-market font">$ {numberWithCommas(market_cap) ? numberWithCommas(market_cap): "---"}</div>
                                </span>
                            </div>
                    </Link>  
                );
    
        })    
    }
    

   




    return (
        <CoinsSection>            
                <div className="table">
                    <div className="table-container">
                        <div className="flex-group-1">
                            <div className="rank text">Rank</div>
                            <div className="coin text">Coin</div>
                            <div className="price text">Price</div>
                        </div>
                        <div className="flex-group-2">
                            <div className="price-1h text">1h</div>
                            <div className="price-24h text">24h</div>
                            <div className="price-7d text">7d</div>
                            
                        </div>
                        <div className="flex-group-3">
                            <div className="price-volume text">24h Volume</div>
                            <div className="market-cap text">Market Cap</div>
                        </div>
                    </div>
                </div>
                <div className="coins-table">
                    { displayCoins }
                </div>

                {isLoading === true ? <Spinner /> : null }
        </CoinsSection>
    )
}

export default Coins
