import React, { useState, useEffect } from "react";
import { Container, Row,Col, Button ,Input} from 'react-bootstrap';
import Signup from './signup';
import Howitworks from './Howitworks';

import sshot3 from './images/sshot3.jpg';
import sshot4 from './images/sshot4.jpg';

import   {Map, InfoSquare, KanbanFill
} from 'react-bootstrap-icons';

import BootstrapSwitchButton from 'bootstrap-switch-button-react'


import '../App.css';

class Work extends React.Component {

    
    

render(){

    

    return(
      <div className="width">



          <h2 className="heading">How can we help?</h2>
          <br/>
<BootstrapSwitchButton 




onlabel='I want to work'
    offlabel='I want to hire' checked={true} onstyle="primary" offstyle="primary"
    
    onChange={()=>{

      
        setTimeout(function(){  

          window.location.assign("/home");

        }, 500);
      

    }}>
</BootstrapSwitchButton>



<br/><br/>
<br/><br/>



<Container>


<Row>
    <Col xs={6}>

<h2 className="heading2">What kind of work can I get done?</h2>
<br/>
<p className="paragraph">You can find just about any job you can imagine. We have jobs ranging from delivery to website development. You can find a variety of jobs that suit you on Freelancer.com.

Just complete your profile and let us know your skill sets so we can match you to the right jobs</p>
<br/>
<br/>

<Button variant="primary">Post a project</Button>

    </Col>
    <Col xs={6}>

    <img  alt="" 
    width="100%"
    src={sshot3}/>
    </Col>
  </Row>
</Container>

<hr></hr>

<Container>
  <Row>
    <Col>
    <h4 className="heading">Our job search can return a full range of results:</h4>
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
    <p className="paragraph2">Fixed price or hourly projects</p>

    </Col>
    <Col className="size2">
    <KanbanFill className="size1"/><br/>
    <p className="paragraph2">International and local jobs.</p>

    </Col>

    <Col className="size2">
    <InfoSquare className="size1"/><br/>
    <p className="paragraph2">Specific skills, price, and schedule requirements</p>

    </Col>
  </Row>
</Container>

<br/><br/>

<br/><br/>
<Container fluid className="contcolor1" >
  <Row  >
    <Col ><img  alt="" 
    width="80%"
    src={sshot4}/></Col>
    <Col className="coldown" ><h1 className="heading3">How do I get started?</h1>
    <h4 className="heading3"> Complete your profile</h4> <br/>
    <p className="paragraph1"> Select your skills and expertise
Upload a professional profile photo
Go through the Verification Center checklist</p>
    <h4 className="heading3">Browse jobs that suit your skills, expertise, price, and schedule</h4> <br/>
    <p className="paragraph1">We have jobs available for all skills. Maximize your job opportunities by optimizing your filters. Save your search and get alerted when relevant jobs are available.</p>
   <h4 className="heading3"> Write your best bid</h4> <br/>
    <p className="paragraph1"> Put your best foot forward and write the best pitch possible. Read the project and let the clients know you understand their brief. Tell them why you're the best person for this job. Writing a new brief for each project is more effective than using the same one!</p>
    <h4 className="heading3"> Get awarded and earn</h4> <br/>
    <p className="paragraph1"> Get ready to work once you get hired. Deliver high quality work and earn the agreed amount.</p>
    <br/><br/>

    <Button variant="primary">Post a project</Button>

    </Col>

  </Row>
</Container>
</div>
    );
}
}
          export  default Work;