import contents from "../ProductPage/contents";
import NavBar from "../../NavBar/NavBar";
import Item from "./Item";
import Cart from "../../Cart/Cart";
import "./StoreStyles.css";

const Store = ({ cartIsVisible, toggleCartVisibility }) => {
  return (
    // <div>
    //   <div className="productTiles">
    //     {contents.map((contents) => (
    //       <Product
    //         key={contents.id}
    //         image={contents.image}
    //         name={contents.name}
    //         price={contents.price}
    //         totalSales={contents.totalSales}
    //         timeLeft={contents.timeLeft}
    //         rating={contents.rating}
    //       />
    //     ))}
    //   </div>
    // </div>
    <section className="store-container">
      <NavBar toggleCartVisibility={toggleCartVisibility} />
      <h1>Our products</h1>
      <p>
        Explore our wide range of high-quality 3D printed parts, crafted with
        precision and durability in mind.
      </p>
      <div className="item-container">
        {contents.map((contents) => (
          <Item
            key={contents.id}
            image={contents.image}
            name={contents.name}
            price={contents.price}
            rating={contents.rating}
            description={contents.desc}
            ino={contents.id}
          />
        ))}
      </div>
      {cartIsVisible && <Cart toggleCartVisibility={toggleCartVisibility} />}
    </section>
  );
};

export default Store;
