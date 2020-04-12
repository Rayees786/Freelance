import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Image,
  Card,
  CardDeck,
  Nav,
  Jumbotron,
} from "react-bootstrap";

import sshot from "./images/Sshot.jpg";
import sshot1 from "./images/sshot1.jpg";
import about1 from "./images/About1.png";
import about2 from "./images/About2.png";
import about4 from "./images/About4.png";
import about5 from "./images/About5.png";
import about6 from "./images/About6.png";
import about7 from "./images/About7.png";
import about8 from "./images/About8.png";
import about9 from "./images/About9.png";

import { Map, InfoSquare, KanbanFill } from "react-bootstrap-icons";

function Hire() {
  return (
    <div className="width">
      <h2 className="heading">How can we help?</h2>
      <br />
      <br />
      <br />
      <br />
      <br />

      <Container>
        <Row>
          <Col xs={6}>
            <h2 className="heading2">What kind of work can I get done?</h2>
            <br />
            <p className="paragraph">
              How does "anything you want" sound? We have experts representing
              every technical, professional, and creative field.
            </p>
            <br />
            <br />

            <Button variant="warning">Post a project</Button>
          </Col>
          <Col xs={6}>
            <img alt="" width="100%" src={sshot} />
          </Col>
        </Row>
      </Container>

      <hr></hr>

      <Container>
        <Row>
          <Col>
            <h4 className="heading">
              Just give us the details about the work you need completed, and
              our freelancers will get it done faster, better, and cheaper than
              you could possibly imagine. This includes:
            </h4>
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <Container>
        <Row>
          <Col className="size2">
            <Map className="size1" />
            <br />
            <p className="paragraph2">
              Small jobs, large jobs, anything in between
            </p>
          </Col>
          <Col className="size2">
            <InfoSquare className="size1" />
            <br />
            <p className="paragraph2">
              Jobs that are on fixed price, or hourly terms
            </p>
          </Col>
          <Col className="size2">
            <KanbanFill className="size1" />
            <br />
            <p className="paragraph2">
              Work that requires specific skill sets, costs, or scheduling
              requirements.
            </p>
          </Col>
        </Row>
      </Container>

      <br />
      <br />

      <br />
      <br />
      <Container fluid className="contcolor">
        <Row>
          <Col>
            <img alt="" width="100%" src={sshot1} />
          </Col>
          <Col className="coldown">
            <h1 className="heading3">How does it work?</h1>
            <h4 className="heading3"> Post a project</h4> <br />
            <p className="paragraph1">
              {" "}
              It's always free to post your project. You'll automatically begin
              to receive bids from our freelancers. Alternatively, you can
              browse through the talent available on our site, and make a direct
              offer to a freelancer instead.
            </p>
            <h4 className="heading3">Choose the perfect freelancer</h4> <br />
            <p className="paragraph1">
              IBrowse freelancer profiles Chat in real-time Compare proposals
              and select the best one Award your project and your freelancer
              goes to work
            </p>
            <p className="paragraph1">
              {" "}
              Pay safely using our Milestone Payment system - release payments
              according to a schedule of goals you set, or pay only upon
              completion. You are in control, so you get to make decisions.
            </p>
            <br />
            <br />
            <br />
            <br />
            <Button variant="warning">Post a project</Button>
          </Col>
        </Row>
      </Container>

      <Container className="container1">
        <Row>
          <Col sm={6}>
            <h2> Be in Control. Keep in Contact. </h2> <br />
            <p>
              {" "}
              Use our Desktop App to track progress, monitor hours, communicate,
              share, and do much more. Always know what's going on with your
              project, what is getting done, and what still needs doing.
            </p>
            <p>
              {" "}
              Use our mobile app for easy on-the-go messaging. Stay in touch
              with your freelancer or client whenever you have questions,
              updates, or have something to share.{" "}
            </p>
            <p>
              Control the completion of projects, and payments. Only release
              your payment when benchmarks are met, or when a project is
              completed to your satisfaction.{" "}
            </p>
          </Col>
          <Col sm={6}>
            <Image src={about1} fluid />
          </Col>
        </Row>
      </Container>

      <Container className="container1">
        <Row>
          <Col sm={6}>
            <Image src={about2} fluid />
          </Col>
          <Col sm={6}>
            <h2> Safe and Secure. </h2> <br />
            <p>
              Freelancer.com is a community that values your trust and safety as
              our number one priority:
            </p>
            <ul>
              <li>
                {" "}
                State-of-the-art security for your funds. All transactions are
                secured with DigiCert 4096-bit SSL encryption.
              </li>
              <li>
                Request for Milestone Payments from your clients to make sure
                that your hard earned money gets to you safely.
              </li>
              <li>
                Our representatives are available 24/7 to assist you with any
                issues.{" "}
              </li>{" "}
            </ul>
          </Col>
        </Row>
      </Container>

      <Jumbotron fluid className="jumbotron big-banner">
        <Container fluid className="trail">
          <Row>
            {" "}
            <Col>
              {" "}
              <h2> So what are you waiting for? </h2>{" "}
            </Col>{" "}
          </Row>
          <br />
          <Row>
            {" "}
            <Col>
              {" "}
              Post a project today and get bids from talented freelancers.
            </Col>{" "}
          </Row>
          <br />
          <Button variant="primary"> Post a Project</Button>
        </Container>
      </Jumbotron>
      <section>
        <Container fluid className="bcontainer">
          <Row>
            {" "}
            <Col>
              {" "}
              <h2> Still not convinced? Check out the results! </h2>{" "}
            </Col>{" "}
          </Row>
          <br />
          <Row>
            {" "}
            <Col>
              {" "}
              Here are just some of the things you could get done on
              Freelancer.com. For more completed projects, visit our Project
              Showcase.{" "}
            </Col>{" "}
          </Row>
        </Container>

        <CardDeck>
          <Card>
            <Card.Body>
              <Card.Img src={about4} />
            </Card.Body>
            <Card.Footer>
              <small>
                <Card.Link href="#">Spaycer Mobile App Design</Card.Link>
                <br />
                <Card.Link href="#">DesignerShed</Card.Link>
                <hr />
                <p> $ 200.00 </p>
              </small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Body>
              <Card.Img src={about5} />
            </Card.Body>
            <Card.Footer>
              <small>
                <Card.Link href="#">
                  3d photo-realistic architectural visualizations
                </Card.Link>
                <br />
                <Card.Link href="#">BobDenic</Card.Link>
                <hr />
                <p> $ 500.00 </p>
              </small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Body>
              <Card.Img src={about6} />
            </Card.Body>
            <Card.Footer>
              <small>
                <Card.Link href="#">Blueberry App Design Example</Card.Link>
                <br />
                <Card.Link href="#">SRaishe</Card.Link>
                <hr />
                <p> $ 1000.00 </p>
              </small>
            </Card.Footer>
          </Card>
        </CardDeck>

        <CardDeck>
          <Card>
            <Card.Body>
              <Card.Img src={about7} />
            </Card.Body>
            <Card.Footer>
              <small>
                <Card.Link href="#">
                  Design Sublimation Shirt for our Brand.
                </Card.Link>
                <br />
                <Card.Link href="#">Franstyas</Card.Link>
                <hr />
                <p> $ 60.00 </p>
              </small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Body>
              <Card.Img src={about8} />
            </Card.Body>
            <Card.Footer>
              <small>
                <Card.Link href="#">
                  Box design for male grooming product!
                </Card.Link>
                <br />
                <Card.Link href="#">mariacastillo67</Card.Link>
                <hr />
                <p> $ 400.00 </p>
              </small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Body>
              <Card.Img src={about9} />
            </Card.Body>
            <Card.Footer>
              <small>
                <Card.Link href="#">
                  Design a Car Wrap Advertisement on the BMW i3 Vehicle
                </Card.Link>
                <br />
                <Card.Link href="#">Jun01</Card.Link>
                <hr />
                <p> $ 220.00 </p>
              </small>
            </Card.Footer>
          </Card>
        </CardDeck>

        <div className="wrapper">
          <Button size="lg" active className="cbutton">
            <b> Browse More Projects </b>
          </Button>
        </div>
        <br />
        <br />

        <hr />
      </section>
      <Container fluid className="bcontainer">
        <Row>
          {" "}
          <Col>
            {" "}
            <h2> Additional Help </h2>{" "}
          </Col>{" "}
        </Row>
        <br />
        <Row>
          {" "}
          <Col> Not sure where to start? Check out the links below: </Col>{" "}
        </Row>
        <br />
        <Row>
          {" "}
          <Col sm={6}>
            {" "}
            <Nav.Link href="#"> How to Hire with Freelancer.com </Nav.Link>{" "}
          </Col>{" "}
          <Col sm={6}>
            {" "}
            <Nav.Link href="#"> Tips for posting projects </Nav.Link>{" "}
          </Col>{" "}
        </Row>

        <Row>
          {" "}
          <Col sm={6}>
            {" "}
            <Nav.Link href="#"> How to Select the Right Bidder </Nav.Link>{" "}
          </Col>{" "}
          <Col sm={6}>
            {" "}
            <Nav.Link href="#"> Milestone Payments </Nav.Link>{" "}
          </Col>{" "}
        </Row>
      </Container>
    </div>
  );
}

export default Hire;
