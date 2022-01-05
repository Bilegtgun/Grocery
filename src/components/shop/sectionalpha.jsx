import React from "react";
import ProItem from "../product/product.item";
import '../../styles/b.css'

const Sectionalph = ({name, img, col}) =>{
    return <div className='row1 cont' style={{background: `${col}`}}>
        <img className='imgg' src={img}/>
        <div className='nam'>{name}</div>
    </div>
}

export default Sectionalph