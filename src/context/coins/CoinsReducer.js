//import actions
import {LOAD_ALL_COINS,
    GET_NUMBER_OF_ALL_COINS,
    GET_NUMBER_OF_ALL_EXCHANGES,
    GET_GLOBAL_DATA,
    TOP_TRENDING_COINS,
    UPDATE_CURRENT_PAGE ,
    CHANGE_PAGE_COINS,
    NEXT_PAGE,
    SET_NEXT_PAGE,
    SET_PREVIOUS_PAGE,
    PREVIOUS_PAGE,
    PREVIOUS_PAGE_BOOL,
    SET_LOADING,
    SET_SINGLE_COIN
    
} from "../Actions";

export default (state,action) =>{

    if (action.type === LOAD_ALL_COINS)  return({...state,allCoins:action.payload });
    if (action.type === GET_NUMBER_OF_ALL_COINS)  return({...state,coinsCount:action.payload });
    if (action.type === GET_NUMBER_OF_ALL_EXCHANGES)  return({...state,exchangesCount:action.payload });
    if (action.type === TOP_TRENDING_COINS)  return({...state,trendingCoins:action.payload });
    if (action.type === UPDATE_CURRENT_PAGE)  return({...state,currentPage:action.payload });
    if (action.type === CHANGE_PAGE_COINS)  return({...state,allCoins:action.payload });
    if (action.type === NEXT_PAGE)  return({...state,currentPage:action.payload.pageNum, isButtonDisabled:action.payload.button});
    if (action.type === PREVIOUS_PAGE)  return({...state,currentPage:action.payload });
    if (action.type === PREVIOUS_PAGE_BOOL)  return({...state,currentPage:action.payload.pageNum, isButtonDisabled:action.payload.button});
    if (action.type === SET_LOADING)  return({...state,isLoading:action.payload});
    if (action.type === SET_SINGLE_COIN)  return({...state,singleCoinData:action.payload});
    
    
    
    if (action.type === SET_NEXT_PAGE)  return({
        ...state,
        isButtonDisabled:action.payload.button,
        currentPage:action.payload.pageNum,
        maxPageNumberLimit:action.payload.max,
        minPageNumberLimit:action.payload.min,
    });

    if (action.type === SET_PREVIOUS_PAGE)  return({
        ...state,
        currentPage:action.payload.pageNumber,
        maxPageNumberLimit:action.payload.max,
        minPageNumberLimit:action.payload.min,
    });

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