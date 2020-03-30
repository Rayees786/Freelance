import React, { useState, useEffect } from "react";
import '../App.css';
import Howitworks from './Howitworks';
import {Carousel,Nav, Navbar, Figure, Container,Button, Card,CardColumns, Jumbotron, Image, Row, Col} from 'react-bootstrap';
import   {Window,Alarm, Award, BarChart, EnvelopeFill,GearWide
} from 'react-bootstrap-icons';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
  Redirect
} from "react-router-dom";

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


function Home() {

return(
  <div className="width">

{/* <Navbar bg="light" className="mt-1">
            <Navbar.Brand >
              <NavLink className="links"to="/About" exact>About Freelancing</NavLink>
              <NavLink className="links" to="/Learn" exact>Learn more</NavLink>
              </Navbar.Brand>
            </Navbar> */}
            
<Carousel >
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={carousel}
      alt="First slide"
    />
    <Carousel.Caption>
    
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={carousel}
      alt="Third slide"
    />

    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={carousel1}
      alt="Third slide"
    />

    <Carousel.Caption>
      
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
  <h2 className="heading"> Need Work done?</h2>
  <br/>
  <br/>
  

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




          <h2 className="heading">Whats great about it</h2>
         <br/>
         <br/>
  
  <Container>
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
  </Container>

  
  <h1 className="heading">Crowd favorites  </h1>
  <br/>
  <br/>
  <br/>
  <br/>

  <Container>

  <CardColumns className="color">
  <Card className="Cardzz">
    <Card.Img variant="top" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg" />
    <Card.Body>
      <Card.Title>Graphic designing</Card.Title>
      <Card.Text>
      This card has supporting text below as a natural.
      </Card.Text>
    </Card.Body>
  </Card>
  
  <Card className="Cardzz">
    <Card.Img variant="top" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg" />
    <Card.Body>
      <Card.Title>Web Developer</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural.
      </Card.Text>
    </Card.Body>
   
  </Card>
  

  <Card className="Cardzz">
    <Card.Img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg" />
  
    <Card.Body>
      <Card.Title>Graphic designing</Card.Title>
      <Card.Text>
      This is a longer card with supporting text below.

      </Card.Text>
     
    </Card.Body>
  </Card>

  <Card className="Cardzz">
    <Card.Img variant="top" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg" />
    <Card.Body>
      <Card.Title>Web Designer</Card.Title>
      <Card.Text>
        This is a longer card with supporting text below.
      </Card.Text>
    </Card.Body>
  </Card>
  
  <Card className="Cardzz">
    <Card.Img variant="top" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg" />
    <Card.Body>
      <Card.Title>Web Designe</Card.Title>
      <Card.Text>
      This is a longer card with supporting text below.
      </Card.Text>
    </Card.Body>
   
  </Card>
  

  <Card className="Cardzz">
    <Card.Img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg" />
  
    <Card.Body>
      <Card.Title>Graphic designing</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below.
      </Card.Text>
     
    </Card.Body>
  </Card>
</CardColumns>


  </Container>

  


<Container fluid className="jumbo">
<Row>
<Col>
<Image fluid src={screen}/>

</Col>

</Row>

</Container>




  <Container>
  <Row>
  <Col sm={6} className="Monde">
<Card className="card1">
<Card.Img src={shot}/>
<Card.ImgOverlay>

<Card.Link href="#">FREELANCER API</Card.Link>
<br/>
<br/>
  <Card.Body>
    <Card.Title className="one"> <p> <b>42 million professionals <br/> on demand </b> </p></Card.Title>
    <Card.Text>
    Why hire people when you can <br/> simply integrate our talented <br/> cloud workforce instead?
    </Card.Text>
    <Button variant="primary">View Documentation</Button>
  </Card.Body>
  </Card.ImgOverlay>



</Card>
</Col>
<Col sm={6} className="Monde">
<Card className="card2">
<Card.Img src={shot1}/>
<Card.ImgOverlay>
<Card.Link href="#">FREELANCER ENTERPRISE</Card.Link>
<br/>
<br/>
  <Card.Body>
    <Card.Title className="two"><p> <b>Company budget? Get <br/> more done for less </b> </p></Card.Title>
    <Card.Text>
    Use our workforce of 42 million to <br/> help your business achieve more.
    </Card.Text>
    <Button variant="primary">Contact Us</Button>
  </Card.Body>
</Card.ImgOverlay>

</Card>
</Col>
</Row>
</Container>





</div>
);

}
export default Home;



















