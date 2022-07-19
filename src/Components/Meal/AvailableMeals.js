import React, { Fragment } from "react";
import Card from "../UI/Card";
import "./AvailableMeals.css";
import Mealitems from "./MealItem/MealItem";
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Pizza',
      description: 'Finest Italian Food',
      price: 299,
    },
    {
      id: 'm2',
      name: 'Sandwiches',
      description: 'A Special Mexican Item!',
      price: 165,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 129,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 189,
    },
  ];
  
const AvailableMeals = ()=>{
    const meals = DUMMY_MEALS.map((x)=>{
        return(

           <Card><Mealitems key={x.id} id={x.id} name={x.name} description={x.description} price={x.price}/></Card>
        )
    });
    return(
        
 <section className="meals"><ul>{meals}</ul></section>

       
    )

}
export default AvailableMeals;