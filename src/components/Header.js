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
<<<<<<< HEAD


  if (props.location.pathname != "/login" && props.location.pathname != "/dashboard" && props.location.pathname != "/profile" ) {
    return (
      
=======
  if (props.location.pathname != "/login") {
    return (
>>>>>>> ad3d40500a09457386ab5e9df8677adc4d57cd97
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
<<<<<<< HEAD
            <NavLink to="/browse"> Browse Jobs </NavLink>
=======
            <NavLink to="#"> Browse Jobs </NavLink>
>>>>>>> ad3d40500a09457386ab5e9df8677adc4d57cd97
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
<<<<<<< HEAD

          
            <Button variant="outline-primary" className="button11">
=======
            <Button variant="outline-primary" className="button11" href="/Postaproject">
>>>>>>> ad3d40500a09457386ab5e9df8677adc4d57cd97
              {" "}
              Post a Project{" "}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
<<<<<<< HEAD
 );
 
  } else {
    return null;
  }



=======
    );
  } else {
    return null;
  }
>>>>>>> ad3d40500a09457386ab5e9df8677adc4d57cd97
}

export default Header;
