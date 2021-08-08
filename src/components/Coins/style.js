import styled from "styled-components";


export const CoinsSection = styled.section`

    margin: 0  var(--margin-x);

    
    

    .table{
        padding:  1rem 0;
        font-weight: bold;
        border-bottom: 2px solid rgba(0, 0, 0,0.2);
        }
        

    .row{
        display: flex;
        
    }
   
     .table-container{
        display: flex;
     }       


    .flex-group-1{
        display: flex;
        width: 80rem;
    }

    .flex-group-2{
        display: flex;
        width: 30rem;
        justify-content: space-around;
        /* margin-right: 5rem; */
    }

    .flex-group-3{
        display: flex;
        width: 40rem;
        justify-content: space-between;
        padding-left: 4rem;
    }
    

    .text{
        font-weight: bold;
        font-size:1.7rem;
    }

    .rank{   
       margin-left: 2rem;
    }

    .coin{
      margin-left:4rem;
    }

    .price{
       margin-left:auto;
       margin-right: 8rem;
    }

    .market-cap{
        margin-right:4rem;
    }
 

    .price-volume{
        margin-left: 3rem;
    }

    /* coins style from map */


    .flex-group-coin-1{
        width: 80rem;
        display: flex;
        justify-content:start;
        align-items: center;
    
    }

    .coin-image-container{
        display: flex;
        align-items: center;
        margin-left: 4rem;
        width:35rem;
        
    }

    .link-container{
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        display: inline-block;
        padding: 2rem 0;
        transition: var(--transition);
    }

    .link-container:hover{
        background: rgba(59,130,246,0.5);
    }

 

    .font{
        font-size: 1.5rem;  
        color:#000;
    }

    .coin-rank{
        margin-left: 3rem;     
    }



    .coin-name{
        margin-left: 1rem;
    }
    

    .coin-symbol-container{
        margin-left: auto;

    }
    
    .coin-symbol{
        text-align: left;
        width: 5rem;
    }


   


    .coin-price{
        margin-left: auto;
        margin-right: 8rem;

     
    }

    /* time frame styles */
    .flex-group-coin-2{
        display: flex;
        align-items: center;
        justify-content: space-around;     
        width: 30rem;
        
    
    }

    .flex-group-coin-3{
        display: flex;
        justify-content:space-around;
        width: 38rem;
        padding-left: 5rem;
    }

    .green{
        color:green;
    }
    
    .red{
        color:red;
    }
 

    .coin-volume{
        width: 20rem;
        text-align: center;
    }

    .coin-market{
        width: 20rem;
        text-align: right;
        
    }


    .coin-image{
        width:2.5rem;
       
    }
`