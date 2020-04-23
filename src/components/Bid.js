import React,{useState, useEffect} from 'react';

import "../Dashboard.css";
import "../Browse.css";
import "../Bid.css";


import 'react-activity-feed/dist/index.css';
import {Container, Col, Row, ListGroup,Nav, Navbar,Form , FormControl, Button, InputGroup} from 'react-bootstrap';
import axios from 'axios';
import logo from "./images/freelancerlogo.png";

import {
    Link
  } from "react-router-dom";

function Bid(props) {


    const[state,setState]=useState({projectId:props.location.state.id, amount:"", proposal:"" ,bidNo:props.bidNo});
console.log(props.bidNo)

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
      <Nav.Link href="#">Dashboard</Nav.Link>
      <Nav.Link href="#pricing">Inbox</Nav.Link>

     
    </Nav>
    <Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-3" />
      <Button variant="primary">Search</Button>
    </Form>    
     
    </Nav>
  </Navbar.Collapse>
</Navbar>

<br/>


<Container className="container2bid"> 
    <Row>
         <Col className="col1" sm={4}>  
<br/>

<Container className="containerbid1"><br/>
<h4>Employee Information</h4><hr/>
<p>Name: {props.name} </p>
<p> Email: {props.email}</p>
  
</Container><br/>
<Container className="container12"><br/>
<h4>Bids left</h4><hr/>
    <p>{props.bidNo}/8</p>
<p className="skillset">

    </p><br/>

</Container><br/>
<br/><br/>

    </Col> 

    
         <Col  className="cols" sm={8} ><br/>




         <Container className="column1" sm={8} ><br/>
         <h4>Project details  <h3 className="budgetbit">${props.location.state.budget} - ${props.location.state.budget*2}</h3><hr/></h4>
   
    <p>{props.location.state.desc}</p>
    <h4>Skills required<hr/></h4>
    <p>{props.location.state.skills}</p>



</Container> <br/><br/>

<Container className="column2" sm={8} ><br/>
     <h4>Place a bid on this project<hr/></h4>
<Form onSubmit={(e)=>{
    e.preventDefault();


    props.updateBidCount();
    axios.post('http://FreelancerLaravel.test/api/postbid',{

        project_id: state.projectId,
        amount: state.amount,
        proposal:state.proposal,
       
       },
        {
           headers: {
             Authorization: "Bearer " + localStorage.getItem("token")
           }
         }
    ).then(()=>{
        alert("Your bid has been posted");
        setState({...state,amount:"",proposal:"",bidNo:"bidNo"
      });

    }).catch(()=>{
        alert("Something went wrong");
    });

}}>
     <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text>$ Bid amount</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl placeholder="Enter the amount in USD"  value={state.amount} onChange={(e)=>{
        setState({...state,amount:e.target.value});

    }}/>
    <InputGroup.Append>
      <InputGroup.Text>.00</InputGroup.Text>
    </InputGroup.Append>
  </InputGroup>
  

  <InputGroup>
    <InputGroup.Prepend>
      <InputGroup.Text>Describe your proposal</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl as="textarea" aria-label="With textarea" value={state.proposal} onChange={(e)=>{
        setState({...state, proposal:e.target.value});

    }}/>
  </InputGroup><br/>
  <Button type="submit">Place a bid</Button>
  </Form>
     
     </Container> 
</Col>
         </Row> 
         </Container><br/><br/>
        </div>
           );
}

export default Bid;