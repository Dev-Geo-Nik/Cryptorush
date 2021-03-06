import React from 'react';
import {PagesSection} from "./styles";
import {Link} from "react-router-dom";
import { GrFormNext,GrFormPrevious } from "react-icons/gr";
import {useCoinContext} from "../../context/coins/CoinsContext";



const Pages = () => {
    const { 
        currentPage,
        updateCurrentPage,
        maxPageNumberLimit,
        minPageNumberLimit,
        handlerNextButton,
        handlerPreviousButton,
        isButtonDisabled
    } = useCoinContext();
    

    const pages = [];
    for (let i = 1; i < 77; i++) {

        pages.push(i); 
    }
    

    

    const renderPageNumbers = pages.map((number)=>{
        
        if (number < maxPageNumberLimit + 1 && number >= minPageNumberLimit) {

            return(
                <li  className={currentPage == number ? `list-item active list-item-${number}`: `list-item list-item-${number}`} key={number} onClick={ (e)=>updateCurrentPage(e)}>
                    {number}
                </li>
            )
        }

     
    })


    let pageIncrementButton = null;
    let pageDecrementButton = null;
 

    if ( pages.length > maxPageNumberLimit) {
        
        pageIncrementButton = <div onClick={handlerNextButton} className="more-pages list-item">&hellip;</div>
    }
  
    if (currentPage  > 10   ) {
        pageDecrementButton = <div onClick={handlerPreviousButton} className="more-pages list-item">&hellip;</div>
    }else{
        pageDecrementButton = null;
    }

    let displayPreviousButton = null;

   if (currentPage > 1) {
    displayPreviousButton = <button disabled={ isButtonDisabled } className="previous list-item icons"  onClick={handlerPreviousButton}><GrFormPrevious className="previous-icon" />Prev</button>
   }


    return(
          <PagesSection>
             <ul className="list-container">
                    {displayPreviousButton}
                    {pageDecrementButton}
                    {renderPageNumbers}
                    {pageIncrementButton}
                <button  className="next list-item icons" onClick={handlerNextButton}>Next <GrFormNext className="next-icon"/></button>
            </ul>
          </PagesSection>
          )


}


export default Pages
