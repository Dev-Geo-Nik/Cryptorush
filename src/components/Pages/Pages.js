import React from 'react';
import {PagesSection} from "./styles";
import {Link} from "react-router-dom";
import { GrFormNext,GrFormPrevious } from "react-icons/gr";
import {useCoinContext} from "../../context/coins/CoinsContext";



const Pages = () => {
    const { currentPage,updateCurrentPage,fetchCoinsPage,allCoins} = useCoinContext();
    console.log(allCoins);



    return (
        <PagesSection>
            <div className="pages-container"  onClick={ (e)=>updateCurrentPage(e)} >
                <ul className="list-container"  onClick={fetchCoinsPage} >
                        <li className="previous list-item icons" ><GrFormPrevious className="previous-icon"/>Prev</li>
                        <li className=" list-item" >1</li>
                        <li className="list-item">2</li>
                        <li className="list-item">3</li>
                        <li className="list-item">4</li>
                        <li className="list-item">5</li>
                        <li className="list-item">....</li>
                        <li className="list-item">87</li>
                        <li className="next list-item icons">Next <GrFormNext className="next-icon"/></li>
                </ul>
            </div>
        
        </PagesSection>
    )
}

export default Pages
