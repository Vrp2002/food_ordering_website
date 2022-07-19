import React, {  useContext } from "react";
import MealForm from "./MealForm";
import CartContext from "../../../assets/Store/CartContex";
 const Mealitems = (props)=>{
    const price = `Rs ${props.price.toFixed(2)}`;
    const cntx =  useContext(CartContext);
    const addCart = (amount)=>{ 
      cntx.addItem({
        id:props.id,
        name:props.name,
        amount:amount,
        price:props.price

      });
      
    };
    return(
  <li>
    <div className="meal">
    <div>
        <h3>{props.name}</h3>
    </div>
    <div className="description">{props.description}</div>
    <div>{price}</div>
    </div>
    <div><MealForm onAdd={addCart}/></div>
    
  </li>
    )

 }
 export default Mealitems;