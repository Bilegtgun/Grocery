import React,{useContext} from "react";
import BotMenu from "../main/bottom-menu";
import '../../styles/c.css'
import Cartitems from "./cart-item";
import { ShopContext } from "../../provider/shop-context";
import LongBtn from "../main/long-button";
import Checkout from "./checkout";

const Mycart = () =>{
    const globalState = useContext(ShopContext)
    const { cartItems, totalCost, toggleModal } = globalState 
    var cost = totalCost.toString().substring(0, 5);
    return <div className='all'>
        <div className='tittle'>My Cart</div>
        <div className='column l'>{cartItems.map((el, ind)=>{
            return <Cartitems item={el} ind={ind}/>
        })}</div>
        <div onClick={toggleModal} className='checkout'> <LongBtn dest={'/Cart'} btnname={'Go To Checkout'} une={cost}/></div>
        <BotMenu Cart={true} />
        <Checkout/>
    </div>
}

export default Mycart
