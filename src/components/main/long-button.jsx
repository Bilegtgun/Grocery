import React from "react";
import { Link} from 'react-router-dom'
import '../../styles/a.css'

const LongBtn = ({btnname, dest, une, func}) =>{
    return <div>
        {
            func ? <Link to={dest}>
                    <button onClick={func} className='btn row3'>{btnname} {une ? <div className='q'>${une}</div> :<></>} </button>
                </Link> :
                <Link to={dest}>
                    <button className='btn row3'>{btnname} {une ? <div className='q'>${une}</div> :<></>} </button>
                </Link>
            }
    </div>
}

export default LongBtn