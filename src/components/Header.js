import React from "react";

import {
  Carousel,
  Nav,
  Navbar,
  Figure,
  Container,
  Button,
  Card,
  CardColumns,
  Jumbotron,
  Image
} from "react-bootstrap";

import logo from "./images/freelancerlogo.png";
import free from "./images/Free.png";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from "react-router-dom";

function Header(props) {
  if (props.location.pathname != "/login") {
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
            <NavLink to="#"> Browse Jobs </NavLink>
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
