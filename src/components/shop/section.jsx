import React, { useContext } from "react";
import ProItem from "../product/product.item";
import '../../styles/b.css'
import { ShopContext } from "../../provider/shop-context";

const Section = ({ arr, name }) => {
    const globalState = useContext(ShopContext)
    const { addCartItem, cartItems, detailShow } = globalState
    return <div className='column section'>
        <div className='nem'>{name}</div>
        <div className='row1 a'>
            {arr.map((el, ind) => {
                return <div style={{ marginRight: '15px' }}><ProItem item={el} add={() => addCartItem({ ...el, count: 1 })} show={() => { detailShow({...el, count: 0}) }} /> </div>
            })}
        </div>
    </div>
}

export default Section