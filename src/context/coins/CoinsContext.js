import  React,{createContext,useContext,useReducer,useEffect} from "react";
import   reducer from "./CoinsReducer";


//import actions
import {LOAD_ALL_COINS} from "../Actions";

const initialState = {
    allCoins: [],
    counter:1,
    fiatCurrency:"usd"
}


const CoinContext = createContext();

export const CoinsProvider = ({children}) =>{

    const [state,dispatch] = useReducer(reducer,initialState);


    useEffect(() => {
       fetchAllCoins(); 
    },[])


   const fetchAllCoins = async  () =>{

       try {
            const  res = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${state.fiatCurrency}&order=market_cap_desc&per_page=100&page=${state.counter}&sparkline=true`); 
            if (res.status >= 200 || res.status <= 299 ) {

                const data = await res.json();
                dispatch({type:LOAD_ALL_COINS ,payload:data})
            }
        } catch (error) {
                console.log(error)
        }

   }
 

    return (
        <CoinContext.Provider value={{...state}}>
            {children}
        </CoinContext.Provider>
    )
}


export const useCoinContext = () =>{
    return useContext(CoinContext);
}