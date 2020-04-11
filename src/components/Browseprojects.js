import React ,{useState, useEffect}from "react";
import "../Dashboard.css";
import adv from "./images/adv.png";
import { StreamApp,NotificationDropdown,FlatFeed,Activity,LikeButton } from 'react-activity-feed';
import 'react-activity-feed/dist/index.css';
import {
  Nav,
  Navbar,
  Figure,
  Container,
  Form,
  FormControl,
  Button,
  Card,
  Dropdown,
  CardColumns,
  Jumbotron,
  Image, Row,
  Col,
  NavDropdown
} from "react-bootstrap";
import {
    Window,
    
  } from "react-bootstrap-icons";
import logo from "./images/freelancerlogo.png";
import free from "./images/Free.png";
import advs from "./images/advs.jpg";
import icon1 from "./images/icon1.jpg";


import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,Redirect,Link
} from "react-router-dom";

function Browseprojects(props) {
 
 
    useEffect(() => {
        
      }, []);
    return (
<div>
<Container className="container10">
  <Row>
    <Col>This is Browse
</Col>
  </Row>
</Container>

          </div>
    );
  
      
}

export default Browseprojects;