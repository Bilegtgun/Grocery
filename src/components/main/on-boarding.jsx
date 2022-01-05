import React from "react";
import '../../styles/a.css'
import obbg from '../../assets/OBbg.png'
import wel from '../../assets/welcome.png'
import get from '../../assets/get.png'
import icon from '../../assets/icon.png'
import LongBtn from "./long-button";


const OnBoard = () =>{
    return <div>
        <div className='bg'>
            <div className='obcont'>
                <img src={icon} className='icon'/>
                <img src={wel} className='wel'/>
                <img src={get} className='get'/>
                <LongBtn dest={'/Home'} btnname={'Get Started'}/>
            </div>
            
        </div>
    </div>
}
export default OnBoard