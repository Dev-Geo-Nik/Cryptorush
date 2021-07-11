import  React,{createContext,useContext,useReducer,useEffect} from "react";
import   reducer from "./CoinsReducer";


//import actions
import {LOAD_ALL_COINS,GET_NUMBER_OF_ALL_COINS,GET_NUMBER_OF_ALL_EXCHANGES} from "../Actions";

const initialState = {
    allCoins: [],
    counter:1,
    fiatCurrency:"usd",
    coinsCount:null,
    exchangesCount:null,
}


const CoinContext = createContext();

export const CoinsProvider = ({children}) =>{

    const [state,dispatch] = useReducer(reducer,initialState);


    useEffect(() => {
       fetchAllCoins(LOAD_ALL_COINS); 
       fetchAllCoins(GET_NUMBER_OF_ALL_COINS); 
       fetchAllCoins(GET_NUMBER_OF_ALL_EXCHANGES); 
    
    },[])
    

   const fetchAllCoins = async  (action) =>{
        let res = "";

       try {
           
            if (action === LOAD_ALL_COINS) {  res = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${state.fiatCurrency}&order=market_cap_desc&per_page=100&page=${state.counter}&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C30d%2C1y`); }
            if (action === GET_NUMBER_OF_ALL_COINS) {res = await fetch(`https://api.coingecko.com/api/v3/coins/list?include_platform=false`);}   
            if (action === GET_NUMBER_OF_ALL_EXCHANGES) {res = await fetch(`https://api.coingecko.com/api/v3/exchanges/list`);}   
            

         
            if (res.status >= 200 || res.status <= 299 ) {

                const data = await res.json();
                if (action === LOAD_ALL_COINS) {dispatch({type:LOAD_ALL_COINS ,payload:data});}
                if (action === GET_NUMBER_OF_ALL_COINS) {dispatch({type:GET_NUMBER_OF_ALL_COINS ,payload:data});}
                if (action === GET_NUMBER_OF_ALL_EXCHANGES) {dispatch({type:GET_NUMBER_OF_ALL_EXCHANGES ,payload:data});}
               
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