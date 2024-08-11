import motorPart from "../Pages/ProductPage/motor-part.png";

const CartItem = () => {
  return (
    <article>
      <div className="item-details">
        <div className="item-image">
          <img src={motorPart} alt="item" />
        </div>
        <div className="item-description">
          <h6>Motor Part</h6>
          <p>Rs.900.00</p>
          <div className="quantity-details">
            <button>&#43;</button>
            <p>1</p>
            <button>&#8722;</button>
          </div>
        </div>
      </div>
      <button className="remove-btn">&#10005;</button>
    </article>
  );
};

export default CartItem;
