import { act } from "@testing-library/react";
import React, { useReducer } from "react";
import CartContext from "./CartContex";
const defaultCartState = {
    items: [],
    totalAmount: 0
  };
  
  const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
    const eventitemindex =  state.items.findIndex((item) => item.id === action.item.id);
    const eventitem = state.items[eventitemindex];
    let updateditem;
    let updateditems;
    
    if(eventitem){
        
        updateditem = {
            ...eventitem,
            amount: eventitem.amount + action.item.amount
        };
        updateditems = [...state.items];
        updateditems[eventitemindex]=updateditem;

    }else{
        updateditems = state.items.concat(action.item);
    }
      
      const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
      return {
        items:updateditems,
        totalAmount: updatedTotalAmount
      };
    }
    if(action.type==='REMOVE'){
        const existitemindex =  state.items.findIndex((item)=>item.id===action.id);
        const existitem = state.items[existitemindex];
        let Updateditem;
        let Updatedamount;
        let Updateditems;
    
        if(existitem.amount===1){
            Updateditems = [...state.items];
            Updateditems.splice(existitemindex,1);
        }else{
          
            Updateditem={
                ...existitem,
                amount : existitem.amount-1
            }
            Updateditems = [...state.items];
            Updateditems[existitemindex]=Updateditem;
        }
        Updatedamount = Math.abs(state.totalAmount - existitem.price);
        return{
            items:Updateditems,
            totalAmount:Updatedamount
        }
    }
    if(action.type==="reset"){
      return defaultCartState;
    }
    return defaultCartState;
  };
  
  const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);
  
    const addItemToCartHandler = (item) => {
      dispatchCartAction({type: 'ADD', item: item});
    };
  
    const removeItemFromCartHandler = (id) => {
      dispatchCartAction({type: 'REMOVE', id: id});
    };
    const resethandler=()=>{
      dispatchCartAction({type:"reset"})
    }
  
    const cartContext = {
      items: cartState.items,
      totalAmount: cartState.totalAmount,
      addItem: addItemToCartHandler,
      removeItem: removeItemFromCartHandler,
      resetcart: resethandler
    };
  
    return (
      <CartContext.Provider value={cartContext}>
        {props.children}
      </CartContext.Provider>
    );
  };
  
  export default CartProvider;
  