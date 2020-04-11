import React from 'react';
import '../index.css';
// import '../App.css';
import axios from 'axios';
import { Card, Form, Button, Col, Row, Alert, FormGroup} from 'react-bootstrap';
import {Input, Label} from 'reactstrap';
import {
    Redirect
  } from "react-router-dom";
<<<<<<< HEAD

class Login extends React.Component {

    state = {

        username:"",
        password:"",
        name:"",
        error:false,
        loggedin:false
=======
import PostaProject from './Postaproject';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username:"",
    password:"",
    error:false,
    loggedin:false};
  }
   
    componentDidMount() {
      if (localStorage.getItem("token")) {
        this.setState({ loggedin: true });
      }
>>>>>>> ad3d40500a09457386ab5e9df8677adc4d57cd97
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
<<<<<<< HEAD
            this.state.loggedin ? (<Redirect to={{pathname:"/dashboard" , state: {username:this.state.username,name:this.name}}}></Redirect>) : null
=======
            this.state.loggedin ? (<Redirect to={{pathname:"/Postaproject", state:{loggedin:this.state.loggedin}}} ></Redirect>) : null
>>>>>>> ad3d40500a09457386ab5e9df8677adc4d57cd97

        }


        <Form className="signupform" onSubmit={(e)=>{
            e.preventDefault();
            this.setState({error:false})
<<<<<<< HEAD
            axios.post("http://freelancerlaravel.test/api/login",{
=======
            axios.post("http://freelancer.test/api/login",{
>>>>>>> ad3d40500a09457386ab5e9df8677adc4d57cd97
            username: this.state.username,
            password: this.state.password
         }).then((response)=>{ 

            localStorage.setItem("token", response.data.token);
<<<<<<< HEAD
            this.name=response.data.user.name;            

=======
>>>>>>> ad3d40500a09457386ab5e9df8677adc4d57cd97
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
     
<<<<<<< HEAD
      <Button   disabled={!this.state.username || !this.state.password} variant="primary" type="submit" block>
=======
      <Button disabled={!this.state.username || !this.state.password} variant="primary" type="submit" block>
>>>>>>> ad3d40500a09457386ab5e9df8677adc4d57cd97
          Login
      </Button>
    </Form>
      </Card.Body>
<<<<<<< HEAD
=======

>>>>>>> ad3d40500a09457386ab5e9df8677adc4d57cd97
    </Card>  
      )
  }

  
}

export default Login;
