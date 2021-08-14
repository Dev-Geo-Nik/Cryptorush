import React from 'react';
import {SearchSpan} from "./style";
import {useCoinContext} from "../../../../context/coins/CoinsContext";
import {Link} from "react-router-dom"

const Search = () => {
    const { fetchSingleCoin,searchInputValue,onChangeInputSearchHandler} = useCoinContext();
    
    return (
        <SearchSpan>
            <form  className="form" >
                <input type="text" className="search-input"  placeholder="Enter the name of coin" value={searchInputValue}  onChange={(e)=>onChangeInputSearchHandler(e)}/>
                <Link className="btn btn-submit" to={`/${searchInputValue}`} onClick={()=>fetchSingleCoin(searchInputValue.toLowerCase())}>Search</Link>
            </form>
        </SearchSpan>
    )
    
}

export default Search
