import React ,{useState, useEffect}from "react";
import "../Profile.css";
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
    Window
    
  } from "react-bootstrap-icons";
import logo from "./images/freelancerlogo.png";
import free from "./images/Free.png";



import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from "react-router-dom";

function Profile(props) {


    useEffect(() => {
console.log(props);
      }, []);
    return (
<div>

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
           

          
            <Button variant="outline-primary" className="button11">
              {" "}
              Post a Project{" "}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

<Container className="container3">
  <Row className="justify-content-md-center">
    <Col className="cols"xs lg="3"><br/>
    <img alt="" width="98%"  height="35%" src={adv} /><br/><br/>
    <Container className="container1">
      <br/>
     <Window></Window>  Mississauga<br/><br/>
     <Window></Window>  Canada<br/><br/>
     <Window></Window>  Rayees<br/><br/>
     <Window></Window>  Rayees<br/><br/>
     </Container>
    </Col>
    <Col  className="cols1" lg="6">  <br/><h2>  hihihihih</h2><br/>
    <p>I'm a tech geek. My focus is always to deliver the best.</p>
<br/>
<p>I have 3+ years Experience of Website Design in WordPress, HTML ,CSS and blogs etc
I'm an Expert in:<p/>
<ui>
<li>✓ : HTML5, CSS3, Photoshop Web UI/UX Design, jQuery, Javascript, </li><br/>
<li>✓ : Web Technologies Front End </li><br/>
<li>✓ : HAML</li><br/>
<li>✓ : CSS GRIDS</li><br/>
<li>✓ : BOOTSTRAP</li><br/>
</ui>
<p>I will finish your tasks in a timely and efficient manner. 
I aspire to help others reach their goals through the use of my knowledge and experience. My Motive is to make my employer happy without adding additional charges..
</p>
<p>
Please don't hesitate to contact me with any opportunities. I am available 24 hours including weekend. I can work 40+ hours per week.

If you are looking for Websites work, I am the Right person for you.</p></p>

    </Col>
   
    <Col className="cols2" xs lg="3">
    <Container className="container1">
<h3>Verifications<hr/></h3>
<p>Identity verified</p>
 <p>Email verified</p>
 <p>Identity verified</p>

</Container>

<Container className="container2">
<h3>Top skills<hr/></h3>
     <p>CSS</p>  
     <p>Graphic designing</p>  
     <p>Bootstrap</p>   
 
 
</Container>
    </Col>
   
    
  </Row>
  </Container>
<br/><br/>
  <Container className="container4">
  <Row>
    <Col><h1>Reviews<hr/></h1><br/>
    
    <h3>Reviews for Rayees</h3><br/>
    <p>"Rayees M. Delivered the project very quickly and he did excellent Job. Beyond expectation., and imagination.. He has his own mind and talent to manipulate computer language to perform… </p></Col>
    

  </Row>
</Container>

  
          </div>
    );
  
      
}

export default Profile;