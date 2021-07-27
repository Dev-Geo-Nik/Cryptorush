import  React,{createContext,useContext,useReducer,useEffect} from "react";
import   reducer from "./CoinsReducer";


//import actions
import {LOAD_ALL_COINS,
    GET_NUMBER_OF_ALL_COINS,
    GET_NUMBER_OF_ALL_EXCHANGES,
    GET_GLOBAL_DATA,
    TOP_TRENDING_COINS,
    UPDATE_CURRENT_PAGE,
    CHANGE_PAGE_COINS,
    NEXT_PAGE,
    SET_NEXT_PAGE,
    PREVIOUS_PAGE,
    SET_PREVIOUS_PAGE,
    PREVIOUS_PAGE_BOOL,
    SET_LOADING
   
} from "../Actions";

const initialState = {

    allCoins: [],
    currentPage:1,
    coinsPerPage:100,
    pageNumberLimit:10,
    maxPageNumberLimit:10,
    minPageNumberLimit:1,
    isButtonDisabled:true,
    fiatCurrency:"usd",
    coinsCount:0,
    exchangesCount:0,
    marketCap:0,
    marketCap24hVolume:[],
    marketCap24hVolumePercentage:0,
    coinsDominance:[],
    trendingCoins:[],
    isLoading:true

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
    

    useEffect (()=>{
        fetchCoinsPage()
    },[state.currentPage,state.maxPageNumberLimit])

 


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

    const handlerPreviousButton = ()=>{
        
       

        if (state.currentPage - 1 > 10 ) {
       
            dispatch({type:SET_PREVIOUS_PAGE,payload:{max:state.maxPageNumberLimit - state.pageNumberLimit,min: state.minPageNumberLimit - state.pageNumberLimit ,pageNumber:state.currentPage - 1}})
            
        }else{
            if (state.currentPage > 1) {
                    
                dispatch({type:PREVIOUS_PAGE,payload:state.currentPage - 1})
            }       
        }

        if (state.currentPage == 1){
            dispatch({type:PREVIOUS_PAGE_BOOL,payload:{pageNum:state.currentPage  ,button:true}})
        }
    }


    const handlerNextButton =  ()=>{
      
        
        if (state.currentPage + 1 > state.maxPageNumberLimit) {
            dispatch({type:SET_NEXT_PAGE,payload:{max:state.maxPageNumberLimit + state.pageNumberLimit,min: state.minPageNumberLimit + state.pageNumberLimit ,pageNum:state.currentPage + 1,button:false}})
            
        }else{
            dispatch({type:NEXT_PAGE,payload:{pageNum:state.currentPage + 1,button:false}})
          
        }
    }

    const updateCurrentPage =  (e)=>{
            // console.log(e.target.closest("li").innerText)
            const currentPageNumber = Number.parseInt(e.target.closest("li").innerText)
            dispatch({type:UPDATE_CURRENT_PAGE,payload:currentPageNumber})
        
    }

    const fetchCoinsPage = async ()=>{
        try {


            const res = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${state.fiatCurrency}&order=market_cap_desc&per_page=100&page=${state.currentPage}&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C30d%2C1y`);
         
             if (res.status >= 200 || res.status <= 299 ) {
 
                 const data = await res.json();
                 dispatch({type:CHANGE_PAGE_COINS ,payload:data});
                }
            } catch (error) {
                console.log(error)
            }
        }
        
        
        
        const setLoading = (bool) => {
            console.log("loading")
            dispatch({type:SET_LOADING ,payload:bool});

    }
   
 

    return (
        <CoinContext.Provider value={{...state,updateCurrentPage,fetchCoinsPage,handlerNextButton,handlerPreviousButton,setLoading}}>
            {children}
        </CoinContext.Provider>
    )
}


export const useCoinContext = () =>{
    return useContext(CoinContext);
}