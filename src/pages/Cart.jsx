import React from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, deleteFromCart } =
    React.useContext(CartContext);

  const handleRemoveOne = (item) => {
    removeFromCart(item, 1);
  };

  const handleDeleteItem = (item) => {
    deleteFromCart(item);
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop:"20px" }}>Carrito de Compras</h1>
      {cart.length > 0 ? (
        <div style={{ display: "flex", flexDirection: "column", margin:"0 20vh", maxWidth:"90%" }}>
          <div style={{ flex: 1, padding: "10px", justifyContent: "center" }}>
            {cart.map((item, index) => (
              <div
                key={index}
                style={{
                  margin: "10px",
                  border: "1px solid black",
                  padding: "10px",
                  borderRadius: "5px",
                  backgroundColor: "#d4b2fe",
                }}
              >
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p>Precio unitario: ${item.price}</p>
                <p>Cantidad: {item.quantity}</p>
                <button onClick={() => handleRemoveOne(item)}>-</button>
                <button onClick={() => handleDeleteItem(item)}>Eliminar</button>
              </div>
            ))}
          </div>

          <div
            style={{
              margin: "20px",
              padding: "10px",
              width: "60vh",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              border: "1px solid black",
              borderRadius: "5px",
              backgroundColor: "#d4b2fe",
            }}
          >
            <p style={{ fontSize: "1.2em", margin: "0" }}>
              Total: ${total.toFixed(2)}
            </p>
            <Link
              to={"/checkout"}
              style={{
                display: "inline-block",
                padding: "10px 20px",
                textAlign: "center",
                textDecoration: "none",
                color: "white",
                backgroundColor: "black",
                borderRadius: "5px",
                fontSize: "16px",
              }}
            >
              Pagar
            </Link>
          </div>
        </div>
      ) : (
        <p>Tu carrito está vacío</p>
      )}
    </div>
  );
};

export default Cart;
