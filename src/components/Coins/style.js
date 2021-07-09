import styled from "styled-components";


export const CoinsSection = styled.section`

.table{
    padding:  1rem 0;
    width: 100%;
    font-weight: bold;
    border-bottom: 2px solid rgba(0, 0, 0,0.2);
    }
    

 
    

    .text{
        font-weight: bold;
        font-size:1.7rem;
    }

    .rank{
       width: 5rem;
    }

    .coin{
      width: 40rem;
      text-align: left;
      padding-left:4rem;
    
    }

    .price{
        width:20rem;
        text-align: right;
    }

    .price-24h{
        width: 25rem;
        
    }

    .price-volume{
            width: 25rem;
    }

    .market-cap{
        width:24rem;
    }


    /* coins style from map */

    .link-container{
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    }

    .coin-rank{
        width:5rem;
        text-align: center;
    }

    .coin-image-container{
      width: 40rem;
      text-align: left;
      padding-left:4rem;
      display: flex;
      align-items: center;
    }

    .coin-name{
        display:inline-block;
        font-size: 1.8rem;
        margin-left: 4rem;
    }
    
    .coin-symbol{
        margin-left:auto;
    }

    .coin-price{
        width:20rem;
        text-align: right;
        font-size: 1.8rem;
    }

    .coins-table{
        width:100%;
    }

    
    .coin-price-24h{
        width: 25rem;
        text-align: center;
    }
 

    .coin-volume{
        width: 25rem;
        text-align: center;
    }

    .coin-market{
        width: 24rem;
        text-align: center;
    }


    .coin-image{
        width:2.5rem;
       
    }
`