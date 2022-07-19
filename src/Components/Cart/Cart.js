import React, { useContext, useState } from "react";
import "./Cart.css"
import Modal from "../UI/Modal";
import CartContext from "../../assets/Store/CartContex"
import CartItem from "./CartItem"
import CheckOut from "./CheckOut";


const Cart = (props)=>{
    const[orderclick,setorderclick]=useState(false);
    const [submiting,setsubmiting]=useState(false);
    const [submited,setsubmited]=useState(false);
    const cntx =  useContext(CartContext)
    const totalamount = `Rs ${cntx.totalAmount.toFixed(2)}`;
    const hasitems =  cntx.items.length>0;
    const cartitemremove=(id)=>{
        cntx.removeItem(id);
    };
    const orderhandler=()=>{
setorderclick(true);
    }
    async function addtobackend(object){
        const response =   await fetch("https://food-ordering-app-84e01-default-rtdb.firebaseio.com/orders.json",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                object
            })
     });
     const data = await response.json();
     setsubmiting(false);
     setsubmited(true);
    }
    const takedetails=(object)=>{
        

    
        const orderdetails={
            item:cntx.items,
            checkout_details:object
        }
        
        addtobackend(orderdetails);
        setsubmiting(true);
        cntx.resetcart();
        console.log("Value added successfully");
    }    
    const cartitemadd = (item)=>{cntx.addItem({...item,amount:1})};
    const cartitem = ( <ul className="cart-items">{cntx.items.map((item) => {return(
        <CartItem
        id={item.id}
        price={item.price}
        name={item.name}
        amount={item.amount}
        onRemove={cartitemremove.bind(this,item.id)}
        onAdd = {cartitemadd.bind(this,item)}
        />
        // onR = {cartitemremove}
    ) } )}</ul>);
    let cartcontent = <div>
{  cartitem }
      <div className="total"><span>Amount</span><span>{totalamount}</span></div>
      {!orderclick && <div className="actions">
        <button onClick={props.onclose}>Close</button>
         {hasitems && <button className="button" onClick={orderhandler}>Order</button>}
        </div>}
    </div>
    let isSubmitingcontent = <p>Sending data.....</p>
    let SubmitedContent = <p>Order sent Successfully !Thanks for Ordering</p>
    return <Modal onclose={props.onclose}>

      
       {!submited && !submiting && cartcontent}
       {orderclick && !submited && !submiting&& <CheckOut onAdd={takedetails}/>}
       {/* {submiting && submited && <p>Confirming your order</p>} */}
       {submiting && !submited && isSubmitingcontent}
       {!submiting && submited && SubmitedContent}
    </Modal>
}
export default Cart;