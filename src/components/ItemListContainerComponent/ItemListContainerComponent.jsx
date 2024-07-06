import React from "react";

import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "./ItemListContainerComponent.css";


const ItemListContainerComponent = ({ products }) => {
  return (
    <div className="itemListContainer">
      {products.map((product) => {
        return (
          <Card key={product.id} style={{ width: "18rem", margin: 10,position:"relative"}}>
            <Card.Img variant="top" src={product.thumbnail} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <div style={{ position:"absolute",bottom: "5px",left: 0, right: 0,textAlign: "center" }}>
              <Link to={`/item/${product.id}`} style={{
          textDecoration: "none", 
          color: "#007bff", 
          fontWeight: "bold",
        }}>Ir a detalle</Link>
        </div>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default ItemListContainerComponent;
