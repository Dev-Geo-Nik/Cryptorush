//import actions
import {LOAD_ALL_COINS,GET_NUMBER_OF_ALL_COINS,GET_NUMBER_OF_ALL_EXCHANGES} from "../Actions";

export default (state,action) =>{

    if (action.type === LOAD_ALL_COINS)  return({...state,allCoins:action.payload });
    if (action.type === GET_NUMBER_OF_ALL_COINS)  return({...state,coinsCount:action.payload });
    if (action.type === GET_NUMBER_OF_ALL_EXCHANGES)  return({...state,exchangesCount:action.payload });
    
    throw new Error ("No matching action found!");
}