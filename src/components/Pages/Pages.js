import React from 'react';
import {PagesSection} from "./styles";
import {Link} from "react-router-dom";
import { GrFormNext,GrFormPrevious } from "react-icons/gr";
import {useCoinContext} from "../../context/coins/CoinsContext";



const Pages = () => {
    const { currentPage,updateCurrentPage} = useCoinContext();
    console.log(currentPage);

    const test = (event) => {
        // console.log(e.target.closest("li"))
        console.log(event.target)
   
    }

    return (
        <PagesSection>
            <div className="pages-container">
                <ul className="list-container" onClick={ ()=>test()}>
                        <li className="previous list-item icons" ><GrFormPrevious className="previous-icon"/>Prev</li>
                        <li className="page-1 list-item active" >1</li>
                        <li className="page-2 list-item">2</li>
                        <li className="page-3 list-item">3</li>
                        <li className="page-4 list-item">4</li>
                        <li className="page-5 list-item">5</li>
                        <li className="page-dots list-item">....</li>
                        <li className="page-last list-item">87</li>
                        <li className="next list-item icons">Next <GrFormNext className="next-icon"/></li>
                </ul>
            </div>
        
        </PagesSection>
    )
}

export default Pages
