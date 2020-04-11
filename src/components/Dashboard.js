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

function Dashboard(props) {
 
 
    useEffect(() => {
        
      }, []);
    return (
<div>


<Navbar collapseOnSelect expand="lg"  fluid>
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
      <Nav.Link href="#features">Dashboard</Nav.Link>
      <Nav.Link href="/browse">Browse Projects</Nav.Link>
      <Nav.Link href="#pricing">Inbox</Nav.Link>

     
    </Nav>
    <Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-3" />
      <Button variant="primary">Search</Button>
    </Form>    
      <NavDropdown className="drop" title={props.location.state.username} id="collasible-nav-dropdown">
        <NavDropdown.Item href="/profile" > View profile</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">User Settings</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Manage </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>

<br/>
   <Container fluid >
  <Row>
    <Col className="container6"> 
    <Container  className="container7"> 
    <Navbar className="navbar1"  >
    <Navbar.Brand   href="#home">Recent projects</Navbar.Brand>
    <a  href="#home">View all</a>
  </Navbar>
  <hr/>

<Container className="container15">
<img   className="img1" 
            alt=""
            src={icon1}
            className="d-inline-block align-top"
          /><br/><br/>
  <p>Start bidding now on projects that meet your skills.</p><br/>
  <Button variant="primary"className="btn-3" >
              {" "}
              Browse Project{" "}
            </Button>
            </Container>
  </Container>

<br/><br/>
<Container  className="container7">
    <br/>
<img alt="" width="100%" height="30%"src={advs} /><br/><br/>

<Container className="cont12">
<h5>Email Address</h5>
<Container className="btns">
<Button  >Update</Button>
</Container>
Verify your email address to make your profile more secure
</Container><br/>

<Container className="cont12">
<h5>Update your profile</h5>
<Container className="btns">
<Button  >Update</Button>
</Container>
A complete profile increases your chance of getting hired
Profile Page
</Container><br/>

<Container className="cont12">
<h5>Find projects</h5>
<Container className="btns">
<Button inline >Update</Button>
</Container>
Browse through projects and place another bid
</Container>
</Container>
   
</Col><br/>

    <Col sm={4}>
<Container className="container10">
<p>Welcome back,</p>
        <h1>{props.location.state.username}</h1>
<h3>{props.location.state.name}</h3>
</Container>

<br/>

<Container className="container11">
<br/>
<p>Set up your account</p>
<Link to="/profile" state={{state:"jjj"}} >hhhh</Link>
<div class="container14">
  <div class="skills css"></div>
</div><br/>
<h2>Complete your profile</h2><br/>
<p>Account balance</p>
</Container><br/>

<Container className="container12">
<h1>Bid Summary</h1><hr/>
<p>Remaining</p><hr/>
<p>Until next bid</p><hr/>
<p>Replenishment rate</p>
</Container><br/>


<img alt="" width="100%" height="25%"src={adv} />
    </Col>
  </Row>
</Container>
          </div>
    );
  
      
}

export default Dashboard;