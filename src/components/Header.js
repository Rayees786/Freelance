import React from "react";

import {
  Nav,
  Navbar,
  Button
} from "react-bootstrap";

import logo from "./images/freelancerlogo.png";

import {
  NavLink
} from "react-router-dom";

function Header(props) {
  if (props.location.pathname != "/login" && props.location.pathname != "/dashboard" && props.location.pathname != "/browse" && props.location.pathname != "/signup"  && props.location.pathname != "/bid" && props.location.pathname != "/profile") {
    return (
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand href="./">
          <img
            alt=""
            src={logo}
            width="140"
            height="40"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavLink to="/hire" exact>
              {" "}
              How it Works
            </NavLink>
            <NavLink to="/browse"> Browse Jobs </NavLink>
          </Nav>

          <Nav>
            <NavLink to="/login" exact>
              {" "}
              Log in{" "}
            </NavLink>
            <NavLink to="/signup" exact>
              {" "}
              Sign up{" "}
            </NavLink>
            <Button variant="outline-primary" className="button11" href="/Postaproject">
              {" "}
              Post a Project{" "}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  } else {
    return null;
  }
}

export default Header;
