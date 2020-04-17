import React ,{useState, useEffect} from "react";
import "../Profile.css";
import adv from "./images/adv.png";
import 'react-activity-feed/dist/index.css';
import {
  Nav,
  Navbar,
  Container,
  Button,
  Row,
  Col,
  Form,
  ListGroup
} from "react-bootstrap";
import {
    Window
    
  } from "react-bootstrap-icons";
import logo from "./images/freelancerlogo.png";

import {
  NavLink
} from "react-router-dom";

import axios from "axios";

function Profile(props) {

  

  const[state,setState]=useState({edit:false, country:"", provience:"", city:"", phone:"", skype:"", git:"", id:props.id});

  
  console.log(state);
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
     <Window></Window>  {props.country}<br/><br/>
     <Window></Window>  {props.city},{props.provience}<br/><br/>
     <Window></Window>  {props.phone}<br/><br/>
     <Window></Window>  {props.skype}<br/><br/>
     <Window></Window>  {props.id}<br/><br/>
     </Container>
    </Col>
    <Col  className="cols1" lg="6">  <br/><h2>  Your Profile </h2><br/>

    {state.edit ?  (<Form onSubmit={(e)=>{
      e.preventDefault();
      axios.put("http://freelancer.test/api/updateprofile",{
        country: state.country,
        provience: state.provience,
        city: state.city,
        phone: state.phone,
        skype: state.skype,
        git: state.git
      }).then((response)=>{
        setState({...state, country:response.data.country, provience:response.data.provience, 
          city:response.data.city, phone:response.data.phone, skype:response.data.skype,
          git:response.data.git
        }).catch(()=>{
          alert("something went wrong");
          setState({...state, edit:false})
        })

      })

    }}>
  <Form.Group controlId="country">
    <Form.Label>Country</Form.Label>
    <Form.Control type="text" placeholder="Enter your Country" value={state.country} onChange={(e)=>{
      setState({...state, country:e.target.value});
    }}/>
  </Form.Group>
  <Form.Group controlId="state">
    <Form.Label>State/Provience</Form.Label>
    <Form.Control type="text" placeholder="Enter your State/Provience" value={state.provience} onChange={(e)=>{
      setState({...state, provience:e.target.value});
    }}/>
  </Form.Group>
  <Form.Group controlId="city">
    <Form.Label>City</Form.Label>
    <Form.Control type="text" placeholder="Enter your City" value={state.city} onChange={(e)=>{
      setState({...state, city:e.target.value});
    }}/>
  </Form.Group>
  <Form.Group controlId="phone">
    <Form.Label>Phone Number</Form.Label>
    <Form.Control type="number" placeholder="Enter your Phone Number" value={state.phone} onChange={(e)=>{
      setState({...state, phone:e.target.value});
    }}/>
  </Form.Group>
  <Form.Group controlId="skype">
    <Form.Label>Skype ID</Form.Label>
    <Form.Control type="text" placeholder="Enter your Skype ID" value={state.skype} onChange={(e)=>{
      setState({...state, skype:e.target.value});
    }}/>
  </Form.Group>
  <Form.Group controlId="git">
    <Form.Label>GitHub</Form.Label>
    <Form.Control type="text" placeholder="Enter your GitHub Username" value={state.git} onChange={(e)=>{
      setState({...state, git:e.target.value});
    }}/>
  </Form.Group>
  <Button variant="primary" type="submit">
    Update Profile
  </Button>
</Form>) : 

(<>
<Button variant="primary" onClick={()=>{
  setState({...state, edit:true});
}}>
    Edit Profile
  </Button>
  <br/>
  <br/>

<ListGroup>
  <ListGroup.Item disabled> Country : {props.country} </ListGroup.Item>
  <ListGroup.Item disabled> State/Provience : {props.provience} </ListGroup.Item>
  <ListGroup.Item disabled> City : {props.city} </ListGroup.Item>
<ListGroup.Item disabled> Phone : {props.phone} </ListGroup.Item>
<ListGroup.Item disabled> Skype ID : {props.skype} </ListGroup.Item>
<ListGroup.Item disabled> GitHub : {props.git} </ListGroup.Item>
</ListGroup>
</>
)

}
   
    

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