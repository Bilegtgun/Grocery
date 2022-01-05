import React,{useContext} from "react";
import '../../styles/b.css'
import BotMenu from "../main/bottom-menu";
import carrot from '../../assets/carrot.png'
import exc from '../../assets/Exclude.png'
import pulses from '../../assets/pulses.png'
import Banner from "./banner";
import Section from "./section";
import Sectionalph from './sectionalpha.jsx'
import {ShopContext} from "../../provider/shop-context";



let sectalph = [
    {
        'name': 'Pulses',
        'img': pulses,
        'col': '#F8A44C'
    },
    {
        'name' : 'Rices',
        'img' : 'https://www.nicepng.com/png/full/8-82858_download-sack-of-rice-png.png',
        'col': '#53B175'
    }
]

const ShopSection = () =>{
    const globalState = useContext(ShopContext)
    const { products,cartItems, totalCost } = globalState 
    let Exclusive = [products[0], products[1], products[3]]
    let Bestselling = [products[2], products[4], products[7]]
    let Groceries = [products[5], products[6], products[8]]
    return <div className='column k'>
        <img className='carrot' src={carrot}/>
        <div className='loc'>
            <img className='exc' src={exc}/>
            <div>Ulaanbaatar, Mongolia</div>
        </div>
        <input className='search' placeholder='     🔍     Search Store'/>
        <Banner/>
        <Section arr={Exclusive} name={'Exclusive Offer'}/>
        <Section arr={Bestselling} name={'Best Selling'}/>
        <div className='row1'>
            {sectalph.map((el, ind)=>{
                return <Sectionalph col={el.col} name={el.name} img={el.img}/>
            })}
        </div>
        
        <Section arr={Groceries} name={'Groceries'}/>
        <BotMenu Shop={true} />
    </div>
}
export default ShopSection