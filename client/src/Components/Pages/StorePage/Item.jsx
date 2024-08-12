import {
  FaShoppingCart,
  FaRegBookmark,
  FaStar,
  FaFireAlt,
} from "react-icons/fa";
import "./Item.css";

const Item = ({ image, name, price, rating }) => {
  return (
    <div className="product-item-container">
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
        <p>{price}</p>
        <div className="product-item-rating">
          {[...Array(rating)].map((index) => (
            <FaStar id={index + 1} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Item;
