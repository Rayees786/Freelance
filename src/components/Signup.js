import React from 'react';
import '../index.css';
// import '../App.css';
import axios from 'axios';
import { Card, Form, Button, Col, Row, Alert, FormGroup} from 'react-bootstrap';
import {Input, Label} from 'reactstrap';
<<<<<<< HEAD
import {
  Redirect
} from "react-router-dom";
=======
>>>>>>> ad3d40500a09457386ab5e9df8677adc4d57cd97

class Signup extends React.Component {

    state = {
        name:"",
        email:"",
        username:"",
        password:"",
        cpassword:"",
        role:"Freelancer", 
<<<<<<< HEAD
        error:false,
        signup:false,
       
    }


  render(){
    return (
      
=======
        error:false
    }

  render(){
    return (

>>>>>>> ad3d40500a09457386ab5e9df8677adc4d57cd97
        <Card className="Card">
      <Card.Body>
        <Card.Title>  
            <Alert variant="primary"> SignUp Here </Alert>
        </Card.Title>

        {
            this.state.error ? (<Alert variant="danger"> Please check your form fields again </Alert>) : null
        }


        <Form className="signupform" onSubmit={(e)=>{
            e.preventDefault();
            this.setState({ error: false });
<<<<<<< HEAD
                axios.post("http://freelancerlaravel.test/api/signup", {
=======
                axios.post("http://freelancer.test/api/signup", {
>>>>>>> ad3d40500a09457386ab5e9df8677adc4d57cd97
                name: this.state.name,
                email: this.state.email,
                username: this.state.username,
                password: this.state.password,
                cpassword: this.state.cpassword,
                role: this.state.role

            })
            .then((response)=>{
                this.setState({name:"",email:"",username:"",password:"",cpassword:""});
<<<<<<< HEAD
                this.setState({signup:true})
                
                      
=======
                alert("You've been successfully signed up");               
>>>>>>> ad3d40500a09457386ab5e9df8677adc4d57cd97
            })
            .catch(()=>{this.setState({error:true});
        })

            
            
    
        }}>
<<<<<<< HEAD




{this.state.signup? (<Redirect to={{pathname:"/login", state: {name:this.state.name}}}></Redirect>) : null}


=======
>>>>>>> ad3d40500a09457386ab5e9df8677adc4d57cd97
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your Name" value={this.state.name} onChange={(e)=>{
            this.setState({name:e.target.value})

        }}/> <br/>
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={this.state.email} onChange={(e)=>{
            this.setState({email:e.target.value})
        }}/> <br/>
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Choose your Username" value={this.state.username} onChange={(e)=>{
            this.setState({username:e.target.value})
        }}/> <br/>
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={this.state.password} onChange={(e)=>{
            this.setState({password:e.target.value})
        }}/> <br/>
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Confirm Password" value={this.state.cpassword} onChange={(e)=>{
            this.setState({cpassword:e.target.value})
        }}/>
        <br/>   
        <FormGroup>
        <Label for="role"> Select your user type </Label>
        <Input type="select" name="select" id="role" onChange={(e)=>{
          this.setState({ role: e.target.value})
        }}>
          <option> Employer </option>
          <option> Freelancer </option>
        </Input>
      </FormGroup>
     
      <Button disabled={!this.state.name || !this.state.email || !this.state.username || !this.state.password ||!this.state.cpassword} variant="primary" type="submit" block>
        Sign Up
      </Button>
    </Form>
      </Card.Body>
    </Card>  
<<<<<<< HEAD
        )
  }
        
=======
      )
  }

>>>>>>> ad3d40500a09457386ab5e9df8677adc4d57cd97
  
}

export default Signup;
