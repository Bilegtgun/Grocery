import React,{useContext} from "react";
import BotMenu from "../main/bottom-menu";
import '../../styles/c.css'
import { ShopContext } from "../../provider/shop-context";
import Favitems from "./favorite-item";

const Favos = () =>{
    const globalState = useContext(ShopContext)
    const { removeCartItem, favoriteItems } = globalState 
    return <div className='all'>
        <div className='tittle'>Favorites</div>
        <div className='column l'>{favoriteItems.map((el, ind)=>{
            return <Favitems item={el} ind={ind}/>
        })}</div>
        <BotMenu Fav={true}/>
    </div>
}

export default Favos