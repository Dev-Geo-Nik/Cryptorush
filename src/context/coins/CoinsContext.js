import  React,{createContext,useContext,useReducer,useEffect} from "react";
import   reducer from "./CoinsReducer";


//import actions
import {LOAD_ALL_COINS,GET_NUMBER_OF_ALL_COINS,GET_NUMBER_OF_ALL_EXCHANGES,GET_GLOBAL_DATA,TOP_TRENDING_COINS} from "../Actions";

const initialState = {

    allCoins: [],
    currentPage:1,
    fiatCurrency:"usd",
    coinsCount:0,
    exchangesCount:0,
    marketCap:0,
    marketCap24hVolume:[],
    marketCap24hVolumePercentage:0,
    coinsDominance:[],
    trendingCoins:[]

}


const CoinContext = createContext();

export const CoinsProvider = ({children}) =>{

    const [state,dispatch] = useReducer(reducer,initialState);


    useEffect(() => {
        
       fetchAllCoins(); 
       fetchNumberOfCoins();
       fetchNumberOfExchanges();
       fetchGlobalData();
       fetchTopTrendingCoins();
    
    },[])
    

   const fetchAllCoins = async  () =>{
    

       try {


           const res = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${state.fiatCurrency}&order=market_cap_desc&per_page=100&page=${state.currentPage}&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C30d%2C1y`);
        
            if (res.status >= 200 || res.status <= 299 ) {

                const data = await res.json();
                dispatch({type:LOAD_ALL_COINS ,payload:data});
            }
        } catch (error) {
                console.log(error)
        }

   }



   const fetchNumberOfCoins = async ()=>{

       try {

        const res = await fetch(`https://api.coingecko.com/api/v3/coins/list?include_platform=false`); 

        if (res.status >= 200 || res.status <= 299 ) {
            const data = await res.json();
            dispatch({type:GET_NUMBER_OF_ALL_COINS ,payload:data});
        }
       } catch (error) {
        console.log(error)
       }
   }

   const fetchNumberOfExchanges = async ()=>{

    try {
      const  res = await fetch(`https://api.coingecko.com/api/v3/exchanges/list`)

     if (res.status >= 200 || res.status <= 299 ) {
         const data = await res.json();
         dispatch({type:GET_NUMBER_OF_ALL_EXCHANGES ,payload:data})
     }
    } catch (error) {
     console.log(error)
    }
    }

   const fetchGlobalData = async ()=>{

    try {
      const  res = await fetch(`https://api.coingecko.com/api/v3/global`);

     if (res.status >= 200 || res.status <= 299 ) {
         const data = await res.json();
         dispatch({type:GET_GLOBAL_DATA ,payload:data});
     }
    } catch (error) {
     console.log(error)
    }
    }


   const fetchTopTrendingCoins = async ()=>{

    try {
      const  res = await fetch(`https://api.coingecko.com/api/v3/search/trending`);

     if (res.status >= 200 || res.status <= 299 ) {
         const data = await res.json();
         dispatch({type:TOP_TRENDING_COINS ,payload:data})
     }
    } catch (error) {
     console.log(error)
    }
    }



    const updateCurrentPage = async ()=>{
        

    }
   
 

    return (
        <CoinContext.Provider value={{...state,updateCurrentPage}}>
            {children}
        </CoinContext.Provider>
    )
}


export const useCoinContext = () =>{
    return useContext(CoinContext);
}