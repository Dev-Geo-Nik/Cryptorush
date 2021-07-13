import styled from "styled-components";


export const CoinsSection = styled.section`




    .table{
        padding:  1rem 0;
        width: 100%;
        font-weight: bold;
        border-bottom: 2px solid rgba(0, 0, 0,0.2);
        }
        

    .row{
        display: flex;
    }
   
     .table-labels{
        display: flex;
     }       


    .flex-group-1{
        display: flex;
        width: 60rem;
    }

    .flex-group-2{
        display: flex;
        width: 60rem;
        justify-content: space-around;
    }
    .flex-group-3{
        display: flex;
        width: 40rem;
        justify-content: space-around;
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
       margin-right: 4rem;
    }

 



    /* coins style from map */


    .flex-group-coin-1{
        width: 60rem;
        display: flex;
        justify-content:start;
        align-items: center;
    }

    .coin-image-container{
        display: flex;
        align-items: center;
        margin-left: 6rem;
        width: 30rem;
    }

    .link-container{
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        display: inline-block;
        padding: 2rem 0;
    }

 

    .font{
        font-size: 1.8rem;  
        color:#000;
    }

    .coin-rank{
        margin-left: 3rem;     
    }



    .coin-name{
        margin-left: 2rem;
    }
    
    .coin-symbol{
        margin-left: auto;
    }

    .coin-price{
        margin-left: auto;
        margin-right: 4rem;
     
    }

    /* time frame styles */
    .flex-group-coin-2{
        display: flex;
        align-items: center;
        justify-content: space-around;     
        width: 60rem;
    
    }

    .flex-group-coin-3{
        display: flex;
        justify-content:space-around;
        width: 40rem;
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
        text-align: center;
    }


    .coin-image{
        width:2.5rem;
       
    }
`