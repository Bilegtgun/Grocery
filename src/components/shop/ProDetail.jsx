import React,{useContext} from "react";
import { ShopContext } from "../../provider/shop-context";
import { Link } from "react-router-dom";
import back from '../../assets/back.png'
import favicon from '../../assets/favicon.png'
import fav from '../../assets/fav.svg'
import '../../styles/b.css'
import Incdec from "../cart/inc-dec";
import LongBtn from "../main/long-button";

const ProDetail = ({}) =>{
    let k;
    const globalState = useContext(ShopContext)
    const { addCartItem, addFavItem, activeProduct, favoriteItems } = globalState
    console.log(favoriteItems)
    let newArr = favoriteItems.filter((el, i) =>activeProduct.name === el.name)
        if (newArr.length == 0)
            k = true
        else
            k = false
    return <div className='column'>
        <div className='top column'>
            <Link to='/Home'>
                <img className='backbtn' src={back} />
            </Link>
            
            <img className='topimg' src={activeProduct.img}/>
        </div>
        <div className='nameheseg row1 '>
            <div className=''>
                <div className='detname'>{activeProduct.name}</div>
                <div className='detstat'>{activeProduct.stat}</div>
                <Incdec too={activeProduct.count} item={activeProduct} />
            </div>
            <div className='column ard'>
                {k ? <img onClick={()=>addFavItem(activeProduct)} className='favicon' src={favicon}/> : <img onClick={()=>addFavItem(activeProduct)} className='favicon' src={fav}/>}
                <div className='detprice'>${activeProduct.price}</div>
            </div>
            
        </div>
        <div className='statss'>
                <div className='zzz'>Product Detail</div>
                <div className='yyy'>Size:{activeProduct.stat}</div>
        </div>
        <div className='avalebl row2'>
            <div className='xxx'>Available</div>
            <div className='yes'>Yes</div>
        </div>
        <div className='jjj'>
            <LongBtn func={()=>addCartItem(activeProduct)} dest={'/Detail'} btnname={'Add To Basket'}/>
        </div>
        
    </div>
}

export default ProDetail