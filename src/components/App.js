<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import "../App.css";
import "../Dashboard.css";

=======
import React, { Fragment } from "react";
import "../App.css";
>>>>>>> ad3d40500a09457386ab5e9df8677adc4d57cd97
import Home from "./Home";
import Howitworks from "./Howitworks";
// import Work from './Work';
import Signup from "./Signup";
import Login from "./Login";
<<<<<<< HEAD
import Header from "./Header";
import Profile from "./Profile";
import Browseprojects from "./Browseprojects";


=======
import Postaproject from "./Postaproject";
>>>>>>> ad3d40500a09457386ab5e9df8677adc4d57cd97
import {
  Carousel,
  Nav,
  Navbar,
  Figure,
  Container,
  Button,
  Card,
  CardColumns,
  Jumbotron,
  Image
} from "react-bootstrap";
import "./project/src/assets/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from "react-router-dom";

<<<<<<< HEAD
// import Header from "./Header";
import Dashboard from "./Dashboard";


import logo from "./images/freelancerlogo.png";
import free from "./images/Free.png";

function App(props) {
  
  
    return (
      <div className="width">

   





        <Router>

          <Route path="/" component={Header}
          
        
          
          ></Route>

        
=======
import Header from "./Header";

import logo from "./images/freelancerlogo.png";
import free from "./images/Free.png";
import PostaProject from "./Postaproject";

class App extends React.Component {
  render() {
    return (
      <div className="width">
        <Router>

          <Route path="/" component={Header}></Route>

>>>>>>> ad3d40500a09457386ab5e9df8677adc4d57cd97
          <Switch>
            <Route path="/" exact>
              <Home></Home>
            </Route>

            <Route path="/hire" exact>
              <Howitworks></Howitworks>
            </Route>

<<<<<<< HEAD
            <Route path="/browse" exact>
              <Browseprojects></Browseprojects>
            </Route>

            <Route exact  path="/profile" render={(props)=>{
               return <Profile {...props}/>
          }}>           

</Route>
           

<Route path="/login" exact>
              <Login  ></Login>
            </Route>

          
           
            <Route exact  path="/dashboard" render={(props)=>{
               return <Dashboard {...props}/>
          }}>
            

              

</Route>

           


            <Route path="/signup">
              <Signup />
            </Route>
            
=======
            <Route path="/login">
              <Login />
            </Route>

            <Route path="/signup">
              <Signup />
            </Route>

            <Route path="/dashboard">
              <h1> This is your dashboard </h1>
            </Route>

            <Route path="/Postaproject" >
              
            <h1> This is your dashboard </h1>
            </Route>

>>>>>>> ad3d40500a09457386ab5e9df8677adc4d57cd97
            <Route>
              <h1>404 Not Found</h1>
            </Route>
          </Switch>
        </Router>

        <hr></hr>

        <div className="mt-5 pt-5 pb-5 footer">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-xs-12 about-company">
                <img src={free} /> <br />
                <span>
                  {" "}
                  <i className="fa fa-globe mr-3"></i> English - US
                  (International)
                </span>{" "}
                <br /> <br />
                <span>
                  {" "}
                  <i className="fa fa-question-circle mr-3"></i> Help and
                  Support{" "}
                </span>
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
                <img
                  src="https://www.freepnglogos.com/uploads/app-store-logo-png/apple-app-store-travel-awards-globestamp-7.png"
                  width="200"
                  alt="apple app store travel awards globestamp"
                />
                <span>
                  <i className="fa fa-facebook mr-2"></i>{" "}
                  <i class="fa fa-twitter mr-2"></i>{" "}
                  <i class="fa fa-youtube mr-2"></i>{" "}
                  <i class="fa fa-instagram mr-2"></i>{" "}
                  <i class="fa fa-rss mr-2"></i>
                </span>
              </div>
            </div>
            <hr className="hrbig" />
            <div clasNames="col copyright">
              <p className="">
                <small className="text-white-50">
                  © 2019. All Rights Reserved.
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
<<<<<<< HEAD
  
=======
  }
>>>>>>> ad3d40500a09457386ab5e9df8677adc4d57cd97
}
export default App;
