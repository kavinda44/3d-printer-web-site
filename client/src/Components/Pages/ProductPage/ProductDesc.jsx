import NavBar from "../../NavBar/NavBar";
import "./ProductDesc.css";

const ProductDesc = ({ name, desc, img }) => {
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
          <button>&#43;</button>
          <p>1</p>
          <button>&#8722;</button>
        </div>
        <button className="add-to-cart-btn">add to cart</button>
      </div>
    </section>
  );
};

export default ProductDesc;
