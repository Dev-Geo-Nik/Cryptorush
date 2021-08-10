import React from 'react';
import {SingleCoinLinksSection} from "./style";
import {Link} from "react-router-dom";

import {useCoinContext,redirectLink} from "../../../context/coins/CoinsContext";
import { FaReddit, FaGithub,FaTwitter,FaHashtag} from "react-icons/fa";


const SingleCoinLinks = () => {

    const {singleCoinData,redirectLink,redirectTwitter} = useCoinContext();
    
    let displayCoinLinks = null;


    if (singleCoinData) {
        
        const{links ,name} = singleCoinData;
        // console.log()
        // console.log(links.repos_url.github[0])
        // console.log()
        // console.log()
        // 
        // console.log(singleCoinData.categories)
       

        displayCoinLinks =
            <React.Fragment>
                    <h2 className="title">Useful Links for {name}</h2>
                    <div className="coin-links-container">

                        <div className="containers ">
                            <span className="text-general site">Website</span>                
                            <span className= "text-number-general">                   
                            <Link to="/" className="link homepage" onClick={()=>redirectLink(links.homepage)}>{links.homepage}</Link>
                        </span>               
                        </div>

                        <div className="containers ">
                            <span className="text-general explores">Explorers</span>                
                            <span className= "text-number-general">                   
                            <Link to="/" className="link Explorers" onClick={()=>redirectLink(links.blockchain_site)}>{`${name}explorer`}</Link>
                        </span>               
                        </div>

                        
                        <div className="containers ">
                            <span className="text-general reddit">Reddit</span>                 
                            <span className= "text-number-general">                   
                            <Link to="/" className="link Reddit" onClick={()=>redirectLink(links.subreddit_url)}><FaReddit className="icons"/>Reddit</Link>
                        </span>               
                        </div>

                        <div className="containers ">
                            <span className="text-general twitter">Twitter</span>                 
                            <span className= "text-number-general">                   
                            <Link to={`www.twitter.com/${links.twitter_screen_name}`} className="link Reddit" onClick={()=>redirectTwitter(`www.twitter.com/${links.twitter_screen_name}`)}><FaTwitter className="icons"/>Twitter</Link>
                        </span>               
                        </div>


                        <div className="containers hashtags-container">
                            <span className="text-general tags">Hashtags<FaHashtag/></span>                 
                            <span className= "text-number-general">                   
                      
                            {singleCoinData.categories.map((category,index)=>{
                               
                                
                                if (index < 1) {                                     
                                     return (<span className="hashtags" key={index}>{category}</span>)           
                                 }

                            })}
                            
                        </span>               
                        </div>

                    </div>
            </React.Fragment>
    }



    return (
        <SingleCoinLinksSection>
           {displayCoinLinks}
        </SingleCoinLinksSection>
    )
}

export default SingleCoinLinks
