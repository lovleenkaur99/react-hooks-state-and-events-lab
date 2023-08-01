import React from "react";
import {useState} from "react";



function Item({ name, category }) {
  
  // const [items, setItems] = useState(0)
  const [cart, setCart] =  useState(false)
  
  function cartButton () { 
    
    if (cart === true) { 
      setCart(false)
    } else { 
      setCart(true)
    }
  }
  return (
    <li className= {cart ? "in-cart" : "" }>
      <span>{name}</span>
      <span className="category" >{category}</span>
      <button onClick={cartButton} 
      className={cart? "remove" : "add"} 
        
        >{cart ? "Remove from Cart" : "Add To Cart"}</button>
    </li>
  );
}

export default Item;
