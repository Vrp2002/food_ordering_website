import classes from './CartItem.module.css';

const CartItem = (props) => {
  const price = `Rs ${props.price.toFixed(2)}`;
  // const remove=(id)=>{
  //   props.onR(id);
  // }
  //  const n = props.id;
  // const add =(item)=>{
  //   props.onAdd(item);
  // }
  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
        {/* <button onClick={remove(n)}>Del</button> */}
      </div>
    </li>
  );
};

export default CartItem;
