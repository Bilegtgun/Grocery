import React from "react";
import check from '../../assets/check.png'
import '../../styles/c.css'
import LongBtn from "../main/long-button";

const Done = () =>{

    return<div className='donebg column'>
        <img className='doneimg' src={check} alt="" />
        <div className='donetxt1'>Your Order has been accepted</div>
        <div className='donetxt2'>Your items has been placed and is on it’s way to being processed</div>
        <LongBtn dest={'/Home'} btnname={'Track Order'}/>
    </div>
}

export default Done