import React,{useContext} from "react"; 
import '../../styles/b.css'
import BotMenu from "../main/bottom-menu";
import Catitem from "./category-item";
import {ShopContext} from "../../provider/shop-context";


const Explore = () =>{
    const globalState = useContext(ShopContext)
    const { categories } = globalState 
    return <div className='column k'>
        <div className='text'>Find Products</div>
        <input className='search' placeholder='     🔍     Search Store'/>
        <div className='cats'>
            {categories.map((el, ind)=>{
                return <Catitem name={el.name} img={el.img} col={el.col} bcol={el.bcol}/>
            })}
        </div>
        <BotMenu Exp={true} />
    </div>
}

export default Explore