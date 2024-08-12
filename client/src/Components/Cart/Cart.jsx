import CartItem from "./CartItem";
import "./Cart.css";

const Cart = ({ toggleCartVisibility }) => {
  return (
    <section className="cart">
      <div className="cart-header">
        <h1>Your Cart</h1>
      </div>
      <div className="cart-items">
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
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
