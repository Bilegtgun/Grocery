import React,{useContext} from "react";
import BotMenu from "../main/bottom-menu";
import '../../styles/c.css'
import { ShopContext } from "../../provider/shop-context";
import { Link } from "react-router-dom";

const Favitems = ({item,ind}) =>{
    const globalState = useContext(ShopContext)
    const { detailShow, totalCost } = globalState 
    return <div className='item1 row2'> 
    <img className='pic1' src={item.img}/>
    <div className='detail column'>
        <div className='name11'>{item.name}</div>
        <div className='stat1'> {item.stat}</div>
    </div>
    <div className='row2 back1'>
        <div className='une'>${item.price}</div>
        <Link to='/Detail'>
            <div className='sum' onClick={()=>detailShow(item)}>→</div>
        </Link>
        
    </div>
    </div>
}

export default Favitems