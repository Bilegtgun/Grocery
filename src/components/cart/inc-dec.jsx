import React, { useContext } from "react";
import { ShopContext } from "../../provider/shop-context";
import '../../styles/c.css'

const Incdec = ({too, item})=>{
    const globalState = useContext(ShopContext)
    const { inc, dec} = globalState
    return <div className='row2 incdeccont'>
            <button onClick={()=>dec(item)} className='incdec'>-</button>
            <div className='number'>{`${too}`}</div>
            <button onClick={()=>inc(item)} className='incdec'>+</button>
        </div>
}

export default Incdec