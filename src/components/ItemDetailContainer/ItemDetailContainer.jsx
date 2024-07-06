import React from "react";
import { CartContext } from "../../context/CartContext";

const ItemDetailContainer = ({ product }) => {
  const { addToCart, removeFromCart } = React.useContext(CartContext);
  const [quantity, setQuantity] = React.useState(0);

  const handleAdd = () => {
    setQuantity(quantity + 1);
    addToCart(product, 1);
  };

  const handleRemove = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      removeFromCart(product, 1);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        width: "150vh",
        margin: "10vh 0 0 30vh",
        border: "1.5px solid white",
        padding: "5vh",
        backgroundColor: "#d4b2fe",
        borderRadius: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {product.images ? (
          product.images.map((image, index) => {
            return (
              <img
                key={index}
                src={image}
                alt={product.title}
                style={{ width: 100, height: 100 }}
              />
            );
          })
        ) : (
          <img
            src={product.thumbnail}
            alt={product.title}
            style={{ width: 200, height: 200, marginLeft: "1em" }}
          />
        )}
      </div>
      <div style={{ marginLeft: 20, marginTop: 30 }}>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <p>{product.price}</p>
      </div>

      <div style={{ display: "flex", marginRight: "2em", marginTop: "4em" }}>
        <button onClick={handleAdd}>+</button>
        <button onClick={handleRemove}>-</button>
        <span style={{ marginTop: "1em", fontWeight: "bold" }}>{quantity}</span>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
