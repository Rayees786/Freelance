import React, { Fragment } from 'react';
import '../App.css';
import Home from './Home';
import Howitworks from './Howitworks';
import Work from './Work';
import Signup from './Signup';

import {Carousel,Nav, Navbar, Figure, Container,Button, Card,CardColumns, Jumbotron, Image} from 'react-bootstrap';
import "./project/src/assets/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from "react-router-dom";
import logo from "./images/freelancerlogo.png";
import free from './images/Free.png';



class App extends React.Component {

  
  render() {



    return (
<div className="width">
            
<Router>

            <Navbar bg="light" variant="dark">
              <Navbar.Brand  href="./">
                <img
                  alt=""
                  src={logo}
                  width="140"
                  height="40"
                  className="d-inline-block align-top"
                />
              
<NavLink className="links" to="/hire" exact> How it Works</NavLink>
<NavLink className="links" to="/login" exact> Log in </NavLink>
<NavLink  className="links"to="/signup" exact> Sign up</NavLink>               
              </Navbar.Brand>
            </Navbar>
          
            

            <Switch>

            <Route path="/" exact>
            <Home></Home>
          </Route>
          <Route path="/hire" exact>
            <Howitworks></Howitworks>
          </Route>
          <Route path="/work" exact>
            <Work></Work>
          </Route>

          <Route path="/login">
            <h1>This is log in page</h1>
          </Route>

          <Route path="/signup">
            <Signup/>
          </Route>
         

          <Route>
            <h1>404 Not Found</h1>
          </Route>
        </Switch>


            </Router>
          
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
      <span><i className="fa fa-facebook mr-2"></i> <i class="fa fa-twitter mr-2"></i> <i class="fa fa-youtube mr-2"></i> <i class="fa fa-instagram mr-2"></i> <i class="fa fa-rss mr-2"></i></span>
      
    </div>
  </div>
  <hr className="hrbig"/>
    <div clasNames="col copyright">
      <p className=""><small className="text-white-50">© 2019. All Rights Reserved.</small></p>
    </div>
  </div>
</div>




</div>
    );
  }

}
export default App;





