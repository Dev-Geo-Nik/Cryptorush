import styled from "styled-components";

export const  DominanceDiv = styled.div`
  /* margin: 2rem 0; */
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  
.coins-container{
  display: flex;
  justify-content: space-between;
  padding:  2rem 0;
    

  }

  .title{
    margin-top:1rem;
    
  }


  .coin-text{
    font-size:1.6rem;
    text-transform:uppercase;
    font-weight: bold;
  }


  .coin-number{
    font-size:1.6rem;
    margin-left: 1rem;
  }


  @media (max-width:750px){
    .coins-container{
      display :grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;  
      grid-gap:2rem;
      justify-items: center;
      
    
      }
  }


`
