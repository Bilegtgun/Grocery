import React, { useContext } from "react";
import { ShopContext } from "../../provider/shop-context";
import ProItem from "../product/product.item";
import back from '../../assets/back.png'
import log from '../../assets/log.png'
import '../../styles/c.css'
import { Link } from "react-router-dom";

const CatItems = () =>{
    const globalState = useContext(ShopContext)
    const { catItems,addCartItem,detailShow } = globalState
    return <div className='column'>
        <div className='row2 deed'>
            <Link to='/Explore'>
                <img src={back}/>
            </Link>
            
            <div className='aaa'>{catItems[0].category}</div>
            <img src={log}/>
        </div>
        <div className='cats1'>
            {catItems.map((el, ind) => {
                return <div style={{ marginRight: '15px' }}><ProItem item={el} add={() => addCartItem({ ...el, count: 1 })} show={() => { detailShow({...el, count: 0}) }} /> </div>
            })}
        </div>
        
    </div>
}

export default CatItems