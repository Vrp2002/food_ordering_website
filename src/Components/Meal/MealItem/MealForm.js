import { type } from "@testing-library/user-event/dist/type";
import "./MealItemForm.css"
import React, { Fragment, useRef, useState } from "react";
import Input from "../../UI/Input";
const MealForm=(props)=>{
     const amtref =  useRef();
     const [amtvalid,setamtvalid]= useState(true);
     const submitHandler = (event)=>{
        event.preventDefault()
        const amountval = amtref.current.value;
        const amountnum  = +amountval;
        if(amountval.trim().length===0 || amountnum<1||amountnum>5){
            
            setamtvalid(false);
            return
        }
       props.onAdd(amountnum)
     }
    //  const amountval =  amtref.current.value;
    return(
        <form className="form" onSubmit={submitHandler}>
        <span>Amount</span>
        <Input ref={amtref}     input={{
        
            type:"number",
            id:'amount',
            min:'1',
            max:'5',
            step:'1',
            defaultValue:'1'

        }}/>
        <button >+add</button>
        {!amtvalid && <p>Amount not valid</p>}
     
        </form>
        
    )
}
export default MealForm;