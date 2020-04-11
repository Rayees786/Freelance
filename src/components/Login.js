import React from 'react';
import '../index.css';
// import '../App.css';
import axios from 'axios';
import { Card, Form, Button, Col, Row, Alert, FormGroup} from 'react-bootstrap';
import {Input, Label} from 'reactstrap';
import {
    Redirect
  } from "react-router-dom";

class Login extends React.Component {

    state = {

        username:"",
        password:"",
        name:"",
        error:false,
        loggedin:false
    }

  render(){
    return (

        <Card className="Card">
      <Card.Body>
        <Card.Title>  
            <Alert variant="primary"> Login Here </Alert>
        </Card.Title>

        {
            this.state.error ? (<Alert variant="danger"> Username/Password incorrect </Alert>) : null
        }

        {
            this.state.loggedin ? (<Redirect to={{pathname:"/dashboard" , state: {username:this.state.username,name:this.name}}}></Redirect>) : null

        }


        <Form className="signupform" onSubmit={(e)=>{
            e.preventDefault();
            this.setState({error:false})
            axios.post("http://freelancerlaravel.test/api/login",{
            username: this.state.username,
            password: this.state.password
         }).then((response)=>{ 

            localStorage.setItem("token", response.data.token);
            this.name=response.data.user.name;            

            this.setState({loggedin:true});
         }).catch(()=>{
             this.setState({error:true})
            });
        }}>
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter your Username" value={this.state.username} onChange={(e)=>{
            this.setState({username:e.target.value})
        }}/> <br/>
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter your Password" value={this.state.password} onChange={(e)=>{
            this.setState({password:e.target.value})
        }}/> <br/>
     
      <Button   disabled={!this.state.username || !this.state.password} variant="primary" type="submit" block>
          Login
      </Button>
    </Form>
      </Card.Body>
    </Card>  
      )
  }

  
}

export default Login;
