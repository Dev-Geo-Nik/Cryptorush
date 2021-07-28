import React from 'react';
import {SpinnerDiv} from './style';
import SpinnerGif from "../../assets/images/spinner.gif";



const Spinner = () => {
    return (
        <SpinnerDiv>
            <img  src={SpinnerGif} alt="" className="spinner" />
        </SpinnerDiv>
    )
}

export default Spinner;