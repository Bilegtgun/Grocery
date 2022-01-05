import Splash from'./components/main/splash-screen';
import { ShopProvider } from './provider/shop-context';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import React, {useEffect, useState} from 'react';
import OnBoard from './components/main/on-boarding';
import ShopSection from './components/shop/shop-section';
import Explore from './components/explore/categories';
import Mycart from './components/cart/carts';
import ProDetail from './components/shop/ProDetail';
import Favos from './components/favorite/favorites';
import CatItems from './components/explore/category-products';
import Done from './components/cart/done';

function App() {
  const [land, setLand] = useState(<Splash/>)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLand(<OnBoard/>)
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <ShopProvider>
       <BrowserRouter>
        <Routes>
          <Route exact={true} path='/' element={land}></Route>
          <Route  path='/Cart' element={<Mycart/>}></Route>
          <Route  path='/Detail' element={<ProDetail/>}></Route>
          <Route  path='/Home' element={<ShopSection/>}></Route>
          <Route  path='/Explore' element={<Explore/>}></Route>
          <Route  path='/Favorite' element={<Favos/>}></Route>
          <Route  path='/Categories' element={<CatItems/>}></Route>
          <Route  path='/Checkout' element={<Done/>}></Route>
        </Routes>
      </BrowserRouter>
    </ShopProvider>
  );
}

export default App;
