import styled from "styled-components";


export const SingleCoinStatusSection = styled.section`
 /* background:purple; */
    /* width: 33%; */
    

    .rank{

    }

    

    .ranking-container{
        display:flex;
        justify-content:space-between;
        align-items: center;
    }
    
    .rank-text{
        background: #343a40;
        color: #fff;
        font-size:1.7rem;
        padding:0.6rem;
        height: 100%;
        border-radius:0.5rem;
    }

    .image-container{
        display: flex;
        align-items: center;
        font-size:1.8rem;
        font-weight:bold;
        margin: 2rem 0 2rem 0;
    }

    .image{
        width: 2.5rem;
        height: 2.5rem;
        margin-right: 1rem;
    }

    .name{
        margin-right: 1rem;
    }


    .price{
        font-size:2.5rem;
        font-weight: bold;
        margin-left: auto;
    }

    .stars-container{
        display:flex;
        align-items: center;
        font-size:1.6rem;
       
    }

    .star-text-container{
        background: rgba(0,0,0,0.1);
        padding:0.5rem;
        border-radius:0.5rem;
       
    }

    .star-icon{      
        color:gold;
        font-size:1.8rem;
        margin-right: 0.5rem;
        
    }
    .star-text{

    
    }

    .coin-stats-container{
        font-size:1.6rem;  
       
    }

  
    .containers{
        display: flex;
        justify-content:space-between;
        margin-bottom: 2rem;
    }

    .text-general{
        color: rgba(0,0,0,0.9);
    }

    .text-number-general{
        font-weight: bold;
    }



    @media (max-width:1100px){
      .general-container{
        
      }
    }
       
    

`