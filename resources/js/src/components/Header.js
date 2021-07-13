import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Header() {
  const [user, setUser] = useState("");
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user-info")));
  }, []);

  const history = useHistory();

  function signOut() {
    localStorage.clear();
    history.push("/register");
  }

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Link to="/">
          <Navbar.Brand>Ecomm</Navbar.Brand>
        </Link>
        <Nav className="mr-auto">
          {localStorage.getItem("user-info") ? (
            <>
              <Link to="/new-product">Add product</Link>
              <Link to="/edit-product">Edit product</Link>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </Nav>
        {localStorage.getItem("user-info") ? (
          <>
            <Nav>
              <NavDropdown title={user.name}>
                <NavDropdown.Item onClick={signOut} style={{ color: "black" }}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </>
        ) : null}
      </Navbar>
    </>
  );
}

export default Header;
