//import actions
import {LOAD_ALL_COINS} from "../Actions";

export default (state,action) =>{

    if (action.type === LOAD_ALL_COINS)  return({...state,allCoins:action.payload });
    
    throw new Error ("No matching action found!");
}