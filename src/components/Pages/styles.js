import styled from "styled-components";



export const PagesSection = styled.section`

    margin: 10rem 0;


    .list-container{
   
        /* background: red; */
        display: flex;
        justify-content:center;
        align-items: center;
        cursor: pointer;
        }

    .list-item{
        padding:1rem;
     
        /* color:rgba(0, 0, 0, 0.2); */
        border-right: 1px solid rgba(0, 0, 0, 0.2);
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        border-top: 1px solid rgba(0, 0, 0, 0.2);
        transition:var(--transition);
        font-size:1.5rem;
    }

    .list-item:hover{
        /* background:#8dc647; */
        background: rgba(59,130,246,0.5);
    }
    
    .previous{
        border-left: 1px solid rgba(0, 0, 0, 0.2);
    
    
    }

    .previous-icon{
        color: rgba(0, 0, 0, 0.2);
       
    }
    
    .next-icon{
        
    }

    .icons{
        display: flex;
        align-items: center;
    }

    .active{
        background: rgba(59,130,246,0.5);
    }
    
    .list-item-1{
        border-left: 1px solid rgba(0, 0, 0, 0.2);
    }

    
    @media (max-width:340px){
        .list-container{
            /* font-size: 1.5rem; */
        }
    }
`