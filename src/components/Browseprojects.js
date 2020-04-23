import React,{useState, useEffect} from 'react';

import "../Dashboard.css";
import "../Browse.css";

import 'react-activity-feed/dist/index.css';
import {Container, Col, Row, ListGroup,Nav, Navbar,Form , FormControl, Button} from 'react-bootstrap';
import axios from 'axios';
import logo from "./images/freelancerlogo.png";

import {
    Link
  } from "react-router-dom";

function Browseprojects(props) {

    const [state, setState] = useState({
        projects: [], areProjects:"false",
        value:""
      });

      



    useEffect(()=>{
           if (localStorage.getItem("token")) {
            axios
              .get("http://FreelancerLaravel.test/api/postaprojectall", {
                headers: {
                  Authorization: "Bearer " + localStorage.getItem("token")
                }
              })
              .then(response => {

                setState({...state,
                  projects: response.data.map((project) => {
return {name:project.name,description:project.description, budget:project.budget,skills:project.skills,type:project.payment,id:project.id}


                  }),areProjects:true
                });

              })
              .catch(() => {
              });
          } else {
          }
        //   
                   
                },[]);

       
      

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
      <Nav.Link href="/dashboard">Dashboard</Nav.Link>
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


<Container> 
    <Row>
         <Col className="col1" sm={4}>  
<br/>

<Container className="container12">
<h1>Project Type</h1><hr/>
<input type="radio" id="male" name="gender" value="hourly"  onChange={e => {
                setState({...state,
                  value: e.target.value
                  
                });
              }}/>
  <label for="hourly">&nbsp;Hourly</label><br/>
  <input type="radio" id="female" name="gender" value="fixed"  onChange={e => {
                setState({...state,
                  value: e.target.value
                  
                });
              }}/>
  <label for="fixed">&nbsp;Fixed</label><br/>
  <input type="radio" id="other" name="gender" value="" onChange={e => {
                setState({...state,
                  value: e.target.value
                  
                });
              }}/>
  <label for="allprojects">&nbsp;Show all projects</label>
  
</Container><br/>
<Container className="container12">
<h1>Skills</h1><hr/>
<p className="skillset">
    CSS, html, Javascript, Node Js, React Js, Wordpress, Photoshop, Illustrator, Sketch, shopify, Python, Excel. word, Joomla, Go Daddy, Java, C++

    </p><br/>

</Container><br/>
<Container className="container12">
<h1>Languages</h1><hr/>
<p>English</p><hr/>
<p>French</p><hr/>
<p>Arabic</p>
</Container><br/>

    </Col> 

    
         <Col  className="cols" sm={8} ><br/><h4 className="projectheader">Projects<hr/></h4>  
         <Container className="col2" sm={8} >
     {state.projects.map((item, index)=>{




     return item.type==state.value?( <> <br/><Container className="cont1 " ><h4 className="budget text-muted"> ${item.budget}-{item.budget * 2}</h4><p>{item.name }<hr/></p>

     <p>{ item.description}</p> <p className="bids">Bids:</p> <Link   to={{ pathname:'/bid',state:{desc:item.description,skills:item.skills,budget:item.budget,id:item.id}}}><Button   className="bidnow"disabled={props.role==="Employer"}>Bid Now</Button></Link><p className="skills">{item.skills}</p><br/><br/> </Container> <br/></>
):state.value==""? ( <> <br/> <Container className="cont1 " ><h4 className="budget text-muted"> ${item.budget}-{item.budget*2}</h4><p>{item.name }<hr/></p>

<p>{ item.description}</p> <p className="bids">Bids:</p>  <Link   disabled={props.role==="Employer"} to={{ pathname:'/bid',state:{desc:item.description,skills:item.skills,budget:item.budget,id:item.id}}}><Button  className="bidnow" disabled={props.role==="Employer"}>Bid Now</Button></Link><p className="skills">{item.skills}</p><br/><br/>  </Container></>):null
})}



</Container> 
</Col>
         </Row> 
         </Container>
       
        </div>
           );
}

export default Browseprojects;