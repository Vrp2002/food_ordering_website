import React, { forwardRef, Fragment } from "react";
 const Input =React.forwardRef((props,ref)=>{
    return(
        <Fragment>
<label htmlFor={props.label}>{props.label}</label>
        <input ref={ref} {...props.input}></input>
        </Fragment>
        
    )
 });
 export default Input;