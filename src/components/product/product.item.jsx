import React,{useContext} from "react";
import '../../styles/b.css'
import { ShopContext } from "../../provider/shop-context";
import { Link } from "react-router-dom";


const ProItem = ({item, add, show}) =>{
    return <div className='card'>
         <Link to='/Detail'>
                <img className='img' onClick={show} src={item.img}/>
        </Link>
        
        <div className='name'>{item.name}</div>
        <div className='stat'>{item.stat}</div>
        <div className='row1'> 
            <div className='price'>${item.price}</div>
            <button className="plus" onClick={add}>+</button>
            <Link to='/Detail'>
                <button className="plus1" onClick={show}>➤</button>
            </Link>
            
        </div>
    </div>
}

export default ProItem