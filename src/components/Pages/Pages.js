import React from 'react';
import {PagesSection} from "./styles";
import {Link} from "react-router-dom";
import { GrFormNext,GrFormPrevious } from "react-icons/gr";
import {useCoinContext} from "../../context/coins/CoinsContext";



const Pages = () => {
    const { currentPage,
        updateCurrentPage,
        fetchCoinsPage,
        allCoins,
        coinsPerPage,
        pageNumberLimit,
        maxPageNumberLimit,
        minPageNumberLimit,
        handlerNextButton,
        handlerPreviousButton,
        isButtonDisabled
    } = useCoinContext();
    // console.log(allCoins);

    const pages = [];
    for (let i = 1; i < 77; i++) {

        pages.push(i); 
    }
    
    const indexOfLastItem = currentPage * coinsPerPage;
    const indexOfFirstItem = indexOfLastItem - coinsPerPage;
    

    const renderPageNumbers = pages.map((number)=>{
        
        if (number < maxPageNumberLimit + 1 && number >= minPageNumberLimit) {

            return(
                <li  className={currentPage == number ? `list-item active list-item-${number}`: `list-item list-item-${number}`} key={number} onClick={ (e)=>updateCurrentPage(e)}>
                    {number}
                </li>
            )
        }

     
    })
   
    return(
          <PagesSection>
             <ul className="list-container">
                <button disabled={ isButtonDisabled } className="previous list-item icons"  onClick={handlerPreviousButton}><GrFormPrevious className="previous-icon"/>Prev</button>
                    {renderPageNumbers}
                <button  className="next list-item icons" onClick={handlerNextButton}>Next <GrFormNext className="next-icon"/></button>
            </ul>
          </PagesSection>
          )


}

// return (
//     <PagesSection>
//         <div className="pages-container"  onClick={ (e)=>updateCurrentPage(e)} >
//             <ul className="list-container"  onClick={fetchCoinsPage} >
//                     <li className="previous list-item icons" ><GrFormPrevious className="previous-icon"/>Prev</li>
//                     <li className=" list-item" >1</li>
//                     <li className="list-item">2</li>
//                     <li className="list-item">3</li>
//                     <li className="list-item">4</li>
//                     <li className="list-item">5</li>
//                     <li className="list-item">....</li>
//                     <li className="list-item">70</li>
//                     <li className="next list-item icons">Next <GrFormNext className="next-icon"/></li>
//             </ul>
//         </div>
    
//     </PagesSection>
// )

export default Pages
