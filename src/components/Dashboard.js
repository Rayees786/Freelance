import React,{useState} from "react";
import "../Dashboard.css";
import adv from "./images/adv.png";
import 'react-activity-feed/dist/index.css';
import {
  Nav,
  Navbar,
  Container,
  Form,
  FormControl,
  Button,
  Row,
  NavDropdown,Col
} from "react-bootstrap";
import logo from "./images/freelancerlogo.png";
import advs from "./images/advs.jpg";
import icon1 from "./images/icon1.jpg";
import axios from "axios";

import {
  Link, Redirect
} from "react-router-dom";

function Dashboard(props) {

  const[state,setState]=useState({logout:false});

  console.log(props);
 

    return (
<div>

  {state.logout ? <Redirect to="/"></Redirect> : null}


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
      <NavDropdown className="drop" title={props.name} id="collasible-nav-dropdown">
        <NavDropdown.Item href="/profile" > View profile</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">User Settings</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Manage </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item onClick={()=>{
          axios.post("http://freelancer.test/api/logout", {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token")
            }
          }).then((response)=>{
            setState({logout:true})
          }).catch(()=>{
            alert("something went wrong")
          });

        }}>Logout</NavDropdown.Item>
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
    <h4>{props.name}</h4>
    <h5>{props.username}</h5>
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