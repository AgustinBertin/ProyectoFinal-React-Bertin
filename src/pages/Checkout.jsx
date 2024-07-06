import React from "react";
import Button from "react-bootstrap/Button";

import { collection, getFirestore, addDoc } from "firebase/firestore";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
const Checkout = () => {
  const [name, setName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [numberPhone, setNumberPhone] = React.useState("");
  const [paymentMethod, setPaymentMethod] = React.useState("");
  const [email, setEmail] = React.useState("");

  const { cart, clearCart } = React.useContext(CartContext);
  const navigate = useNavigate();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const createOrder = () => {
    const items = cart.map((item) => ({
      id: item.id,
      title: item.title,
      quantity: item.quantity,
    }));
    const order = {
      items: items,
      buyer: {
        name,
        lastName,
        numberPhone,
        email,
      },
      paymentMethod,
      total,
    };

    if (
      name !== "" &&
      lastName !== "" &&
      numberPhone !== "" &&
      email !== "" &&
      paymentMethod !== ""
    ) {
      const db = getFirestore();
      const ordersCollection = collection(db, "orders");

      addDoc(ordersCollection, order).then(({ id }) => {
        Swal.fire({
          title: "Se ha creado su orden existosamente!",
          text: "Tu orden se creo exitosamente, Codigo de orden: " + id,
          icon: "success",
          confirmButtonText: "Gracias por su compra!",
        }).then(() => {
          setName("");
          setLastName("");
          setNumberPhone("");
          setPaymentMethod("");
          setEmail("");
          clearCart();
          navigate("/");
        });
      });
    } else {
      alert("Por favor complete todos los campos!");
    }
  };

  return (
    <div style={{marginTop:"60px"}}>
    <div className="checkoutCard">
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Checkout</h2>
      <p>Ingrese sus datos:</p>
      <input
        type="text"
        value={name}
        placeholder="Nombre"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        value={lastName}
        placeholder="Apellido"
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        type="text"
        value={numberPhone}
        placeholder="Numero de telefono"
        onChange={(e) => setNumberPhone(e.target.value)}
      />
      <input
        type="text"
        value={email}
        placeholder="Direccion de Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <select
        name="paymentMethod"
        value={paymentMethod}
        onChange={(e) => setPaymentMethod(e.target.value)}
        defaultValue=""
      >
        <option value="" disabled>
          Seleccione el método de pago
        </option>
        <option value="efectivo">Efectivo</option>
        <option value="tarjeta">Tarjeta</option>
      </select>
      <p>Total a pagar: ${total.toFixed(2)}</p>
      <Button onClick={createOrder}>
        Comprar
      </Button>
    </div>
    </div>
  );
};

export default Checkout;
