import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon"
import "./HeaderButton.css"
import CartContext from "../../assets/Store/CartContex";
import { clear } from "@testing-library/user-event/dist/clear";
const HeaderButton=(props)=>{
    const cntx = useContext(CartContext);
    const [btnhight,setbtnhight]= useState();
    const numberOfCartItems = cntx.items.reduce((curNumber, items) => {
         return curNumber + items.amount;
      }, 0);
    const a = "button"
    const btnclasses = `${a} ${btnhight ? "bump":" "}`
    useEffect(()=>{
        if(cntx.items.length===0){
            return
        }
        setbtnhight(true)
        const timer = setTimeout(()=>{
            setbtnhight(false)
        },300)
        return()=>{
            clearTimeout(timer);
        }
    },[cntx.items])
    return(
        <button className={btnclasses} onClick={props.onclick}>
           <span className="icon"><CartIcon/></span>
            <span>
                Your Cart
            </span>
            <span className="badge">{numberOfCartItems}</span>
        </button>

    )

}
export default HeaderButton;