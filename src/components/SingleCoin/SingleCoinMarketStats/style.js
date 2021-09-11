import styled from "styled-components";


export const SingleCoinMarketStatsSection = styled.section`
   /* width: 33%; */


    .coin-market-stats-container{
        font-size:1.6rem;  
        width: 100%;
    }

    .containers{
        display: flex;
        justify-content:space-between;
        margin-bottom: 2rem;
    }

    .title{
        margin-bottom:2rem;
    }

    
    .text-general{
        color: rgba(0,0,0,0.9);
    }

    .text-number-general{
        font-weight: bold;
    
    }


    .dominance-container{
        margin-top: 1rem;
    }

    .green{
        color: green;
    }

    .red{
        color:red;
    }

`