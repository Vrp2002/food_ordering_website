import React, { Fragment } from "react";
import HeaderButton from "./HeaderButton";

import "./Headerlayout.css"
import image from "../../assets/meals.jpg"
const Headerlayout = (props)=>{
    return(
        <Fragment>
            <div className="header">
              <h1> Hey! PLz Order your food now</h1>
                <HeaderButton onclick={props.onclick}/>
            </div>
            

            
            <div className="main-image">
                <img src={image}/>
            </div>
            
        </Fragment>
           
            
        
    )
}
export default Headerlayout;