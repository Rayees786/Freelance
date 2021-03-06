import React,{useState}from 'react';
import '../index.css';
import axios from 'axios';
import { Card, Form, Button, Alert, FormGroup,Nav, Navbar,NavLink} from 'react-bootstrap';
import { Input, Label } from 'reactstrap';
import {
  Redirect
} from "react-router-dom";
import logo from "./images/freelancerlogo.png";

function Signup(){


  const[state,setState]=useState({name: "",
  email: "",
  username: "",
  password: "",
  cpassword: "",
  role: "",
  error: false,
  signup: false,});

    return (
      <>
     
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
            <NavLink to="/login"> Log in </NavLink>
           
          </Nav>

          <Nav>
           

          
            <Button variant="outline-primary" className="button11">
              {" "}
              Post a Project{" "}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Card className="Card">
        <Card.Body>
          <Card.Title>
            <Alert variant="primary"> SignUp Here </Alert>
          </Card.Title>

          {
            state.error ? (<Alert variant="danger"> Please check your form fields again </Alert>) : null
          }


          <Form className="signupform" onSubmit={(e) => {
            e.preventDefault();
            setState({ ...state, error: false });
            axios.post("http://FreelancerLaravel.test/api/signup", {
              name: state.name,
              email: state.email,
              username: state.username,
              password: state.password,
              cpassword: state.cpassword,
              role: state.role

            })
              .then((response) => {
                setState({ ...state, name: "", email: "", username: "", password: "", cpassword: "" });
                setState({ ...state, signup: true })


              })
              .catch(() => {
                setState({ ...state, error: true });
              })




          }}>




            {state.signup ? (<Redirect to={{ pathname: "/login", state: { name: state.name } }}></Redirect>) : null}


            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your Name" value={state.name} onChange={(e) => {
              setState({...state, name: e.target.value })

            }} /> <br />
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={state.email} onChange={(e) => {
              setState({...state, email: e.target.value })
            }} /> <br />
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Choose your Username" value={state.username} onChange={(e) => {
              setState({ ...state, username: e.target.value })
            }} /> <br />
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={state.password} onChange={(e) => {
              setState({ ...state, password: e.target.value })
            }} /> <br />
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm Password" value={state.cpassword} onChange={(e) => {
              setState({ ...state, cpassword: e.target.value })
            }} />
            <br />
            <FormGroup>
              <Label for="role"> Select your user type </Label>
              <Input type="select" name="select" id="role" onChange={(e) => {
                setState({...state, role: e.target.value })
              }}>
                <option> Employer </option>
                <option> Freelancer </option>
              </Input>
            </FormGroup>

            <Button disabled={!state.name || !state.email || !state.username || !state.password || !state.cpassword} variant="primary" type="submit" block>
              Sign Up
      </Button>
          </Form>
        </Card.Body>
      </Card >
      </>
    )
  }

export default Signup;
