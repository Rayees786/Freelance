import React, { useState, useEffect } from "react";
import '../App.css';
import {Carousel,Nav, Navbar, Figure, Container,Button, Card,CardColumns, Jumbotron, Image} from 'react-bootstrap';
import   {Window,Alarm, Award, BarChart, EnvelopeFill,GearWide
} from 'react-bootstrap-icons';

import carousel from "./images/carousel.jpg";
import logo from "./images/freelancerlogo.png";
import carousel1 from "./images/carousel1.png";
import logoclient1 from "./images/logomicrosoft.png";
import logoclient2 from "./images/photoshop.png";
import logoclient3 from "./images/intel.png";
import logoclient4 from "./images/ai.png";
import logoclient5 from "./images/amazon.png";
import logoclient6 from "./images/laliga.png";
import icon1 from "./images/settings.png";
import icon2 from "./images/settings.png";
import screen from './images/Screen.png';
import shot from './images/Shot1.png';
import shot1 from './images/Shot2.png';
import free from './images/Free.png';

import axios from "axios";

import "./project/src/assets/css/bootstrap.min.css";
import "./project/src/assets/css/paper-kit.css";
import "./project/src/assets/css/paper-kit.min.css";
import "./project/src/assets/css/paper-kit.css.map";
import "./project/src/assets/demo/demo.css";

function Signup() {

return(
  <div className="width">

  <Navbar bg="light" variant="dark">
    <Navbar.Brand href="#home">
      <img
        alt=""
        src={logo}
        width="140"
        height="40"
        className="d-inline-block align-top"
      />
          <a class="navbar-brand" href="#">How it Works</a>
          <a class="navbar-brand" href="#">Log In</a>
          <a class="navbar-brand" href="#">Sign up</a>

      
    </Navbar.Brand>
  </Navbar>

  <Navbar bg="light" className="mt-1">
    <Navbar.Brand href="#home">About Freelancing</Navbar.Brand>
    <Navbar.Brand href="#home">Learn more</Navbar.Brand>

  </Navbar>
  

<Carousel >
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={carousel}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={carousel}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={carousel1}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>


<Navbar bg="light" variant="dark">
    <Navbar.Brand href="#home">
    <img
        alt=""
        src={logoclient1}
        width="10%"
        height="40px"
      />
      <img
        alt=""
        src={logoclient2}
        width="10%"
        height="40px"
      />
       <img
        alt=""
        src={logoclient3}
        width="10%"
        height="40px"
      />
       <img
        alt=""
        src={logoclient4}
        width="10%"
        height="40px"
      />
      <img
        alt=""
        src={logoclient5}
        width="10%"
        height="40px"
      />
       <img
        alt=""
        src={logoclient6}
        width="10%"
        height="40px"
      />
       <img
        alt=""
        src={logoclient3}
        width="10%"
        height="40px"
      />
      <img
        alt=""
        src={logoclient4}
        width="10%"
        height="40px"
      />
       <img
        alt=""
        src={logoclient1}
        width="10%"
        height="40px"
      />
      <img
        alt=""
        src={logoclient4}
        width="10%"
        height="40px"
      />
      


</Navbar.Brand>
  </Navbar>
  <h1 className="heading"> Need Work done?</h1>
  

  <Figure className="roundimages">
  <Figure.Image
  className="rounded-circle center "
    width={250}
    height={220}
    alt="171x180"
    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
  />
  
  <Figure.Caption>
    Nulla vitae elit libero, a pharetra augue mollis interdum.
  </Figure.Caption>

 
  </Figure>
  
  <Figure className="roundimages">
  <Figure.Image
  className="rounded-circle "
    width={250}
    height={220}
    alt="171x180"
    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
  />
   
   <Figure.Caption>
    Nulla vitae elit libero, a pharetra augue mollis interdum.
  </Figure.Caption>
  
  </Figure>
  
  <Figure className="roundimages">

  <Figure.Image
  className="rounded-circle "
    width={250}
    height={220}
    alt="171x180"
    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
  />
  <Figure.Caption>
    Nulla vitae elit libero, a pharetra augue mollis interdum.
  </Figure.Caption>
</Figure>




          <h1 className="heading">Whats great about it</h1>
         

  <Figure className="resize">
  <GearWide className="size"/>Settings
  <Figure.Caption >

  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.   </Figure.Caption>
  </Figure>
  
  <Figure className="resize">
<Window className="size"/>Image
  <Figure.Caption >
  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </Figure.Caption>
  </Figure>
  
  <Figure className="resize">
  <Award className="size"/> Awards and achievements
  <Figure.Caption >
  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  
  </Figure.Caption>
  </Figure>

  <Figure className="resize">
  <Window className="size"/> Window
  <Figure.Caption >
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.   </Figure.Caption>
  </Figure>
  
  <Figure className="resize">
  <BarChart className="size"/> Charts
  <Figure.Caption >
  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  
  </Figure.Caption>
  </Figure>
  
  <Figure className="resize">
  <EnvelopeFill className="size"/> Messages
  <Figure.Caption >
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  
  </Figure.Caption>
  </Figure>
  <h1 className="heading">Crowd favorites  </h1>
  <br/>
  <br/>
  <br/>
  <br/>

  <CardColumns className="color">
  <Card>
    <Card.Img variant="top" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg" />
    <Card.Body>
      <Card.Title>Graphic designing</Card.Title>
      <Card.Text>
      This card has supporting text below as a natural.
      </Card.Text>
    </Card.Body>
  </Card>
  
  <Card>
    <Card.Img variant="top" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg" />
    <Card.Body>
      <Card.Title>Web Developer</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural.
      </Card.Text>
    </Card.Body>
   
  </Card>
  

  <Card>
    <Card.Img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg" />
  
    <Card.Body>
      <Card.Title>Graphic designing</Card.Title>
      <Card.Text>
      This is a longer card with supporting text below.

      </Card.Text>
     
    </Card.Body>
  </Card>

  <Card>
    <Card.Img variant="top" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg" />
    <Card.Body>
      <Card.Title>Web Designer</Card.Title>
      <Card.Text>
        This is a longer card with supporting text below.
      </Card.Text>
    </Card.Body>
  </Card>
  
  <Card>
    <Card.Img variant="top" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg" />
    <Card.Body>
      <Card.Title>Web Designe</Card.Title>
      <Card.Text>
      This is a longer card with supporting text below.
      </Card.Text>
    </Card.Body>
   
  </Card>
  

  <Card>
    <Card.Img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg" />
  
    <Card.Body>
      <Card.Title>Graphic designing</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below.
      </Card.Text>
     
    </Card.Body>
  </Card>
</CardColumns>


<Jumbotron>
  <Container>
    <h1 className="hfluid">Get work done in over 1350 different categories</h1>
    <Image src={screen} fluid className="center"/>
  </Container>
</Jumbotron>

<Jumbotron>
  <Container>
<Card className="card1">
<Card.Img src={shot}/>
<Card.ImgOverlay>
<Card.Link href="#" className="link1">FREELANCER API</Card.Link>
  <Card.Body>
    <Card.Title> <b> 42 million professionals <br/> on demand </b> </Card.Title>
    <Card.Text>
    Why hire people when you can <br/> simply integrate our talented <br/> cloud workforce instead?
    </Card.Text>
    <Button variant="primary">View Documentation</Button>
    
  </Card.Body>
</Card.ImgOverlay>
</Card>

<Card className="card2">
<Card.Img src={shot1}/>
<Card.ImgOverlay>
<Card.Link href="#" className="link2">FREELANCER ENTERPRISE</Card.Link>
  <Card.Body>
    <Card.Title><b>Company budget? Get <br/> more done for less </b></Card.Title>
    <Card.Text>
    Use our workforce of 42 million to <br/> help your business achieve more.
    </Card.Text>
    <Button variant="primary">Contact Us</Button>
  </Card.Body>
</Card.ImgOverlay>

</Card>
</Container>
</Jumbotron>


<div className="mt-5 pt-5 pb-5 footer">
<div className="container">
  <div className="row">
    <div className="col-md-3 col-xs-12 about-company">
      <img src={free}/> <br/>
      <span> <i className="fa fa-globe mr-3"></i> English - US (International)</span> <br/> <br/>
      <span> <i className="fa fa-question-circle mr-3"></i> Help and Support </span>
      

    
    </div>
    <div className="col-md-2 col-xs-12 links1">
      <h4 className="mt-md-0 mt-sm-3">Freelancer</h4>
        <ul className="m-0 p-0">
          <li>Categories</li>
          <li>Projects</li>
          <li>Contests</li>
          <li>Freelancers</li>
          <li>Enterprise</li>
          <li>Preferred Freelancer Program</li>
          <li>Project Management</li>
          <li>Local Jobs</li>
          <li>Showcase</li>
          <li>API for Developers</li>
        </ul>
    </div>
    <div className="col-md-2 col-xs-12 links2">
      <h4 className="mt-lg-0 mt-sm-3">About</h4>
        <ul className="m-0 p-0">
          <li>About us</li>
          <li>How it Works</li>
          <li>Security</li>
          <li>Investor</li>
          <li>Sitemap</li>
          <li>Quotes</li>
          <li>News</li>
        </ul>
    </div>
    <div className="col-md-2 col-xs-12 links3">
      <h4 className="mt-lg-0 mt-sm-3">Terms</h4>
        <ul className="m-0 p-0">
          <li>Privacy Policy</li>
          <li>Terms and Conditions</li>
          <li>Copyright Policy</li>
          <li>Code of Conduct</li>
          <li>Fees and Charges</li>
        </ul>
    </div>
    <div className="col-md-2 col-xs-12 location">
      <h4 className="mt-lg-0 mt-sm-4 hh">Apps</h4>
      <img src="https://www.freepnglogos.com/uploads/app-store-logo-png/apple-app-store-travel-awards-globestamp-7.png" width="200" alt="apple app store travel awards globestamp" />
      
    </div>
  </div>
  <div className="row mt-5">
    <div clasNames="col copyright">
      <p className=""><small className="text-white-50">© 2019. All Rights Reserved.</small></p>
    </div>
  </div>
</div>
</div>


</div>
);

}
export default Signup;



















