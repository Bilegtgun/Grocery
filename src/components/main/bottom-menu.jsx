import React from "react";
import shop from '../../assets/shop.png'
import exp from '../../assets/exp.png'
import cart from '../../assets/cart.png'
import fav from '../../assets/fav.png'
import Gshop from '../../assets/Gshop.png'
import Gexp from '../../assets/Gexp.png'
import Gcart from '../../assets/Gcart.png'
import Gfav from '../../assets/Gfav.png'
import '../../styles/a.css'
import { Link } from "react-router-dom";

const BotMenu = ({Shop, Exp, Cart, Fav}) =>{
    return<div className='botmenu'>
        <Link to='/Home' className='icons center'>
            <img src={Shop ? Gshop : shop} />
            <div style={Shop ? {color: 'green'} : {color: 'black'}} className='a'>Shop</div>
        </Link>
        <Link to='/Explore' className='icons center'>
            <img src={Exp ? Gexp : exp} />
            <div style={Exp ? {color: 'green'} : {color: 'black'}} className='a'>Explore</div>
        </Link>
        <Link to='/Cart' className='icons center'>
            <img src={Cart ? Gcart : cart} />
            <div style={Cart ? {color: 'green'} : {color: 'black'}} className='a'>Cart</div>
        </Link>
        <Link to='/Favorite' className='icons center'>
            <img src={Fav ? Gfav : fav} />
            <div style={Fav ? {color: 'green'} : {color: 'black'}} className='a'>Favorite</div>
        </Link>
    </div>
}

export default BotMenu