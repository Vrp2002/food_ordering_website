import React, { useRef, useState } from "react";
import Input from "../UI/Input";
import "./Cart.css"
const CheckOut = (props)=>{
    const [formvalidity,setformvalidity]=useState({
      name:true,
      address:true,
      zip:true
    });
    const nameref=useRef();
    const addressref=useRef();
    const zipref=useRef();
    const textvalidation=value=>value.trim()!=="";
    const pinvalidation =value=>value.length==5;
    
   
    const reset=()=>{
        nameref.current.value=""
    addressref.current.value=""
     zipref.current.value=""
    }
    const submithandler=(event)=>{
        let formvalid=false;
        const namevalue=nameref.current.value;
    const addressvalue=addressref.current.value;
    const zipvalue=zipref.current.value;
        event.preventDefault();
        const namevalid= textvalidation(namevalue);
        const addressvalid =  textvalidation(addressvalue);
        const zipvalid = pinvalidation(zipvalue);
        setformvalidity({
            name:namevalid,
            address:addressvalid,
            zip:zipvalid
        })
        formvalid=namevalid&&addressvalid&&zipvalid;
        
     
     
     if(!formvalid){
        return
     }
     const details={
        name:namevalue,
        address:addressvalue,
        zip:zipvalue
     }
     props.onAdd(details);
     reset();
     
    }
    return(
        <form>
            <h1 className="title">CheckOut</h1>
            <div className="inputfield">
                <label className="title">First Name </label>
                <Input type="text" ref={nameref}></Input> 
                {!formvalidity.name && <p>enter valid name</p>}
            </div>
            <div className="inputfield">
                <label className="title">Addresss </label>
                <Input  type="text" ref={addressref}></Input> 
                {!formvalidity.address && <p>enter valid address</p>}
            </div>
            <div className="inputfield">
                <label className="title">PinCode </label>
                <Input  type="text" ref={zipref}></Input>
                {!formvalidity.zip && <p>enter validnzip code</p>} 
            </div>
            {/* <button type="submit" onClick={submithandler}>Submit</button>
            <button type="reset" onClick={reset}>Cancel</button> */}
            <div className="actions">
        <button onClick={reset}>Reset</button>
     <button className="button" onClick={submithandler}>Submit</button>
        </div>
        </form>
    )
}
export default CheckOut;