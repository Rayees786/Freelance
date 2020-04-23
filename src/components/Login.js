import React,{useState} from 'react';
import '../index.css';
import axios from 'axios';
import { Card, Form, Button, Alert} from 'react-bootstrap';
import {
    Redirect
  } from "react-router-dom";


function Login(props){

  const[state,setState]=useState({username:"",
  password:"",
  error:false});

    return (
      

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
            axios.post("http://freelancer.test/api/login",{
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
      )
  }

  


export default Login;
