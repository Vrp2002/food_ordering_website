
import { Fragment, useState } from 'react';
import Headerlayout from './Components/Layout/Headerlayout';
import './App.css';
import MealSummary from './Components/Meal/MealSummary';
import Meals from './Components/Meal/Meals';
import Cart from './Components/Cart/Cart';
import CartProvider from './assets/Store/CartProvider';
function App() {
  const [showcart,setshowcart]=useState();
const showcarthandler = ()=>{
  setshowcart(true);
}
const hidecarthandler=()=>{
  setshowcart(false);
}
  return (
    <CartProvider>
      { showcart && <Cart onclose={hidecarthandler}/>}
      <Headerlayout onclick={showcarthandler}></Headerlayout>
      <main>
        <MealSummary/>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
