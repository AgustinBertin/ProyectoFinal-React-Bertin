import React from "react";
import { Link } from "react-router-dom";
import { useGetCollectionItems } from "../../hooks/useGetCollectionItems";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidgetComponent from "../CartWidgetComponent/CartWidgetComponent";

const NavBarComponent = () => {

  const {items} = useGetCollectionItems("category");

  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      bg="dark"
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Brand>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            E-commerce
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                Inicio
              </Link>
            </Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              {items.map((category) => {
                return (
                  <NavDropdown.Item key={category.id}>
                    <Link style={{textDecoration: "none"}} to={`/category/${category.slug}`}>
                      {category.name}
                    </Link>
                  </NavDropdown.Item>
                );
              })}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidgetComponent />
      </Container>
    </Navbar>
  );
};
export default NavBarComponent;
