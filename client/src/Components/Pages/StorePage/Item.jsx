import {
  FaShoppingCart,
  FaRegBookmark,
  FaStar,
  FaFireAlt,
} from "react-icons/fa";
import "./Item.css";
import React, { useContext} from 'react';
import { Context } from '../../../App';
import { Link } from 'react-router-dom';

const Item = ({ image, name, price, rating, description, ino}) => {

  const {setIde, setName, setDes, setImage, setPrice} = useContext(Context);

  const lestgo = () => {
    setIde(ino);
    setName(name);
    setDes(description);
    setImage(image);
    setPrice(price);
  }

  return (
    <>
    
    <Link to={'/product'}><div className="product-item-container" onClick={lestgo}>
      <div className="product-item-icons">
        <FaFireAlt className="icon" />
        <div>
          <FaRegBookmark className="icon" />
          <FaShoppingCart className="icon" />
        </div>
      </div>
      <div className="product-item-image">
        <img src={image} alt="" />
      </div>
      <div className="product-item-description">
        <h3>{name}</h3>
        <p>Rs {price}</p>
        <div className="product-item-rating">
          {[...Array(rating)].map((index) => (
            <FaStar id={index + 1} key={index} />
          ))}
        </div>
      </div>
    </div>
    </Link>
    
    </>
  );
};

export default Item;
