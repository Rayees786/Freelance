import React, { useState, useEffect } from "react";
import { Container, Row,Col, Button ,Input} from 'react-bootstrap';
import Signup from './signup';
import Work from './Work';
import {
   Redirect
  } from "react-router-dom";
import sshot from './images/Sshot.jpg';
import sshot1 from './images/sshot1.jpg';

import   {Map, InfoSquare, KanbanFill
} from 'react-bootstrap-icons';

import BootstrapSwitchButton from 'bootstrap-switch-button-react'


import '../App.css';

class Howitworks extends React.Component {
    
    
    

     
        

render(){
return(

      <div className="width">

          <h2 className="heading">How can we help?</h2>
          <br/>

<BootstrapSwitchButton 

onlabel='I want to work'
    offlabel='I want to hire'  onstyle="primary" offstyle="warning"
    onChange={()=>{
        setTimeout(function(){  

            window.location.assign("/work");
  
          }, 500);
    }}  >
</BootstrapSwitchButton>

<br/><br/>
<br/><br/>



<Container>


<Row>
    <Col xs={6}>

<h2 className="heading2">What kind of work can I get done?</h2>
<br/>
<p className="paragraph">How does "anything you want" sound? We have experts representing every technical, professional, and creative field.</p>
<br/>
<br/>

<Button variant="warning">Post a project</Button>

    </Col>
    <Col xs={6}>

    <img  alt="" 
    width="100%"
    src={sshot}/>
    </Col>
  </Row>
</Container>

<hr></hr>

<Container>
  <Row>
    <Col>
    <h4 className="heading">Just give us the details about the work you need completed, and our freelancers will get it done faster, better, and cheaper than you could possibly imagine. This includes:</h4>
     </Col>
  </Row>
</Container>
<br/><br/>
<Container>
  <Row>
    <Col className="size2">
    <Map className="size1"/><br/>
    <p className="paragraph2">Small jobs, large jobs, anything in between</p>
    </Col>
    <Col className="size2">
    <InfoSquare className="size1"/><br/>
    <p className="paragraph2">Jobs that are on fixed price, or hourly terms</p>

    </Col>
    <Col className="size2">
    <KanbanFill className="size1"/><br/>
    <p className="paragraph2">Work that requires specific skill sets, costs, or scheduling requirements.</p>

    </Col>
  </Row>
</Container>

<br/><br/>

<br/><br/>
<Container fluid className="contcolor" >
  <Row  >
    <Col ><img  alt="" 
    width="100%"
    src={sshot1}/></Col>
    <Col className="coldown" ><h1 className="heading3">How does it work?</h1>
    <h4 className="heading3"> Post a project</h4> <br/>
    <p className="paragraph1"> It's always free to post your project. You'll automatically begin to receive bids from our freelancers. Alternatively, you can browse through the talent available on our site, and make a direct offer to a freelancer instead.</p>
    <h4 className="heading3">Choose the perfect freelancer</h4> <br/>
    <p className="paragraph1">IBrowse freelancer profiles
Chat in real-time
Compare proposals and select the best one
Award your project and your freelancer goes to work</p>
   <p className="paragraph1"> Pay safely using our Milestone Payment system - release payments according to a schedule of goals you set, or pay only upon completion. You are in control, so you get to make decisions.</p>
    <br/><br/>
    <br/><br/>

    <Button variant="warning">Post a project</Button>

    </Col>

  </Row>
</Container>
</div>

    );
    }
}
          export  default Howitworks;