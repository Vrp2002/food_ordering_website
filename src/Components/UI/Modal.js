import React, { Fragment } from "react";
import  ReactDOM  from 'react-dom';
import "./Modal.css"
const Backdrop = props =>{
return <div className="backdrop" onClick={props.onclose}/>
}
const ModalOverlay = props=>{
    return (<div className="modal">
        <div>{props.children}</div>
    </div>)

}
const element =  document.getElementById("overlays");
const Modal = props=>{
    
    return(
        <Fragment>
           {ReactDOM.createPortal(<Backdrop onclose={props.onclose}/>,element)}
        { ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,element)}
        </Fragment>
       

    )

}
export default Modal