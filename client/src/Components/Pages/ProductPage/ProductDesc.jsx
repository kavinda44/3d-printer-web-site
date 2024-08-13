import NavBar from "../../NavBar/NavBar";
import "./ProductDesc.css";
import React, { useState } from "react";
import axios from "axios";

const ProductDesc = ({val, name, desc, img, pr}) => {

  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prevQuantity) => {
      
      if (prevQuantity > 1) {
        return prevQuantity - 1;
      }
      return prevQuantity;
    });
  };

  const addcartval = async () => {
    try {
      const res = await axios.post("/cartc", {val, name, desc, img, quantity, pr});
      console.log(res);

    } catch (error) {
      console.log(error);
    }
    
  }

  return (
    <section className="product-description-container">
      <NavBar />
      <h1>{name}</h1>
      <p>{desc}</p>
      <div className="product-description-image">
        <img src={img} alt="" />
      </div>
      <div className="product-description-options">
        <div className="quantity-btn-group">
          <button onClick={incrementQuantity} >&#43;</button>
          <p>{quantity}</p>
          <button onClick={decrementQuantity} >&#8722;</button>
        </div>
        <button className="add-to-cart-btn" onClick={addcartval}>add to cart</button>
      </div>
    </section>
  );
};

export default ProductDesc;
