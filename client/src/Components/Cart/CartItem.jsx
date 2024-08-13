import motorPart from "../Pages/ProductPage/motor-part.png";

const CartItem = ({n, p, q, i}) => {
  return (
    <article>
      <div className="item-details">
        <div className="item-image">
          <img src={i} alt="item" />
        </div>
        <div className="item-description">
          <h6>{n}</h6>
          <p>Rs {p}</p>
          <div className="quantity-details">
            <button>&#43;</button>
            <p>{q}</p>
            <button>&#8722;</button>
          </div>
        </div>
      </div>
      <button className="remove-btn">&#10005;</button>
    </article>
  );
};

export default CartItem;
