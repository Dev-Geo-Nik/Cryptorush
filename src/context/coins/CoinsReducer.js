//import actions
import {LOAD_ALL_COINS,GET_NUMBER_OF_ALL_COINS,GET_NUMBER_OF_ALL_EXCHANGES,GET_GLOBAL_DATA,TOP_TRENDING_COINS} from "../Actions";

export default (state,action) =>{

    if (action.type === LOAD_ALL_COINS)  return({...state,allCoins:action.payload });
    if (action.type === GET_NUMBER_OF_ALL_COINS)  return({...state,coinsCount:action.payload });
    if (action.type === GET_NUMBER_OF_ALL_EXCHANGES)  return({...state,exchangesCount:action.payload });
    if (action.type === TOP_TRENDING_COINS)  return({...state,trendingCoins:action.payload });

    if (action.type === GET_GLOBAL_DATA) {

        return({
               ...state,
               coinsDominance:action.payload.data.market_cap_percentage,
               marketCap:action.payload.data.total_market_cap,
               marketCap24hVolume:action.payload.data.total_volume,
               marketCap24hVolumePercentage:action.payload.data.market_cap_change_percentage_24h_usd
               })
    } 
    
    throw new Error ("No matching action found!");
}