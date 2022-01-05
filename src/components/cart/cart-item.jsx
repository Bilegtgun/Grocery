import React,{useContext} from "react";
import BotMenu from "../main/bottom-menu";
import '../../styles/c.css'
import { ShopContext } from "../../provider/shop-context";
import Incdec from "./inc-dec";

const Cartitems = ({item,ind}) =>{
    const globalState = useContext(ShopContext)
    const { removeCartItem, totalCost } = globalState 
    
    return <div className='item row2'> 
    <img className='pic' src={item.img}/>
    <div className='detail column'>
        <div className='name11'>{item.name}</div>
        <div className='stat1'> {item.stat}</div>
        <Incdec too={item.count} item={item}/>
    </div>
    <div className='column back'>
        <div className='del' onClick={()=>removeCartItem(item,ind)}>x</div>
        <div className='une'>${item.price}</div>
    </div>
    </div>
}

export default Cartitems