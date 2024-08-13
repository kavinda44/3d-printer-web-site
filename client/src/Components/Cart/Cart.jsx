import CartItem from "./CartItem";
import "./Cart.css";
import React, {useEffect, useState} from "react";
import axios from "axios";

const Cart = ({ toggleCartVisibility }) => {

  const [items, setItems] = useState([]);

  useEffect(() => {
    getData()
  }, []);

  async function getData(){
    try {
        axios.get('/cartg').then(({data}) => {
          console.log(data.Cart)
          setItems(data.Cart)
        //   alert(data)
            
        }) 
        // alert("data recieved")
        console.log("data recieved")
        
    } catch (e) {
        alert("data not recieved"+ e)
    }
    console.log("this is data")
    console.log(items);
}

  return (
    <section className="cart">
      <div className="cart-header">
        <h1>Your Cart</h1>
      </div>
      <div className="cart-items">
        {items.map((item) => <CartItem key={item._id} n={item.product}  i={item.img} p={item.price} q={item.qty}/> )}
        
      </div>
      <div className="cart-footer">
        <div className="total-amount">
          <p>Total</p>
          <p>Rs.5000.00</p>
        </div>
        <button>Checkout</button>
        <button onClick={toggleCartVisibility}>Close cart</button>
      </div>
    </section>
  );
};

export default Cart;
