import styled from "styled-components";

export const SearchSpan = styled.span`
    
    .search-input{
        padding: 0.8rem 1rem;
        border: 1px solid rgba(0, 0, 0,0.2);
        width: 30rem;
        margin-right: 2rem;
    }

    .btn-submit{
        font-size:1.8rem;
        padding: 0.8rem 1.2rem;
        background:   rgba(59,130,246,0.5); 
        border-radius:0.4rem;
        
        text-transform: uppercase;
        

    }
    
 

     .btn-submit:hover{
       
        background:   #075ce67d; 
    }

    .form{
        display: flex;
        align-items: center;
    }


    @media (max-width:750px){

        .search-input{
            padding: 0.8rem 1rem;     
            width: 25rem;
        
        }
    }

    @media (max-width:500px){
        
        .search-input{
            padding: 0.8rem 1rem;     
            width: 20rem;
        
        }
    }

  
`