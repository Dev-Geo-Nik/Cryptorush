import styled from "styled-components";


export const SingleCoinStatusSection = styled.section`
 /* background:purple; */
    width: 33%;


    .rank{

    }
    
    .rank-text{
        background: #343a40;
        color: #fff;
        font-size:1.6rem;
        padding:0.4rem;
        border-radius:0.5rem;
    }

    .image-container{
        display: flex;
        align-items: center;
        font-size:1.8rem;
        font-weight:bold;
        margin-top: 1rem;
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

`