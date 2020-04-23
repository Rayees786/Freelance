import React,{useState} from 'react';
import '../index.css';
import axios from 'axios';
import { Card, Form, Button, Alert,Nav, Navbar,NavLink} from 'react-bootstrap';
import {
    Redirect
  } from "react-router-dom";
  import logo from "./images/freelancerlogo.png";


function Login(props){

  const[state,setState]=useState({username:"",
  password:"",
  error:false});

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
          </Nav>

          <Nav>
            
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

        <Card className="Card">
      <Card.Body>
        <Card.Title>  
            <Alert variant="primary"> Login Here </Alert>
        </Card.Title>

        {
            state.error ? (<Alert variant="danger"> Username/Password incorrect </Alert>) : null
        }

        {
            props.loggedin ? (<Redirect to="/dashboard"></Redirect> ) : null

        }


        <Form className="signupform" onSubmit={(e)=>{
            e.preventDefault();
            setState({...state,error:false})
            axios.post("http://FreelancerLaravel.test/api/login",{
            username: state.username,
            password: state.password
         }).then((response)=>{ 

            localStorage.setItem("token", response.data.token);
          
            props.loginattempt();
            setState({...state, loggedin:true})
            
            
            

         }).catch(()=>{
             setState({...state, error:true})
            });
        }}>
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter your Username" value={state.username} onChange={(e)=>{
            setState({...state, username:e.target.value})
        }}/> <br/>
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter your Password" value={state.password} onChange={(e)=>{
            setState({...state, password:e.target.value})
        }}/> <br/>
     
      <Button disabled={!state.username || !state.password} variant="primary" type="submit" block>
          Login
      </Button>
    </Form>
      </Card.Body>

    </Card>  
    </>
      )
  }

  


export default Login;
