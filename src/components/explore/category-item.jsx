import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../provider/shop-context";

const Catitem = ({col,bcol,img,name}) =>{
    const globalState = useContext(ShopContext)
    const { removeCartItem, cats } = globalState 
    return <Link to='/Categories'><div onClick={()=>cats(name)} style={{backgroundColor: `${col}`, borderColor: `${bcol}`}} className='huree'>
        <img className='img1' src={img}/>
        <div className='catname'>{name}</div>
    </div></Link>
}

export default Catitem