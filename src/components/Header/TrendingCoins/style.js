import styled from "styled-components";


export const TrendingCoinsSection = styled.section`
    padding: 2rem 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    .title{
        margin-top:1rem;
    }

    .coins-container{
        display: flex;
        justify-content:space-between;
        margin: 2rem 0;
    }

    .coin-container{
        display: flex;
        padding: 1rem;
        box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1),0 2px 4px -1px rgba(0,0,0,0.06);
        width: 20rem;
        transition: var(--transition);
        border: 1px solid transparent;

        
    }

    .coin-container:hover{
        transform: scale(1.1);
        border: 1px solid black;
    }

    .coin-image{
        width:4rem;

    }
    .text-container{
        display: flex;
        flex-direction: column;
        justify-content:space-around;
        margin-left:2rem;
    }

`