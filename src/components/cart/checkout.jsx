import React, { useContext, useState } from "react";
import '../../index.css'

import Modal from "react-modal";
import { ShopContext } from "../../provider/shop-context";
import LongBtn from "../main/long-button";

Modal.setAppElement("#root");

export default function Checkout() {
    const globalState = useContext(ShopContext)
    const { totalCost,isOpen,toggleModal } = globalState 
    var cost = totalCost.toString().substring(0, 5);

  return (
    <div className="App">

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className='hey'
      >
          <div className='chckt rowww'>
              <div className='c'>Checkout</div>
                <button className='btnnn' onClick={toggleModal}>x</button>
          </div>
          <div className='rowww heseg'>
              <div className='urd'>Delivery</div>
              <div className='ard'>Select Method</div>
          </div>
          <div className='rowww heseg'>
              <div className='urd'>Payment</div>
              <div className='ard'>Credit Card</div>
          </div>
        
          <div className='rowww heseg'>
              <div className='urd'>Promo Code</div>
              <div className='ard'>Pick discount</div>
          </div>
        
          <div className='rowww heseg'>
              <div className='urd'>Total cost</div>
              <div className='ard'>${cost}</div>
          </div>
          <div className='term'>By placing an order you agree to our Terms And Conditions</div>
          <div onClick={toggleModal}>
              <LongBtn dest={'/Checkout'} btnname={'Place Order'}/>
          </div>
            
        
      </Modal>
    </div>
  );
}
