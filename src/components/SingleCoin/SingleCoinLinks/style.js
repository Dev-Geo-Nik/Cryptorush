import styled  from "styled-components";

export const SingleCoinLinksSection = styled.section`

    /* width: 33%; */

    .title{
        margin-bottom:4rem;
    }

    .coin-links-container{
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

    .link{
        background: rgba(0,0,0,0.1);
        padding:0.5rem;
        border-radius:0.5rem;
        color: rgba(0,0,0,1);
        transition: var(--transition);
    }
    
    .link:hover{
        color: rgba(59,130,246,0.5);
    }

    .Reddit{
        display: flex;
        align-items: center;
    }

    .icons{
        margin-right: 0.5rem;
    }

    .tags{
        display: flex;
        align-items: center;
    }

    .hashtags{
        background: rgba(0,0,0,0.1);
        padding:0.5rem;
        border-radius:0.5rem;
        color: rgba(0,0,0,1);
        margin-right: 0.4rem;
    }
` 