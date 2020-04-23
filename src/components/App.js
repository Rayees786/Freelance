import React,{useState, useEffect} from 'react';
import "../App.css";
import Home from "./Home";
import Howitworks from "./Howitworks";
import Signup from "./Signup";
import Login from "./Login";
import Postaproject from "./Postaproject";
import Dashboard from "./Dashboard";
import "./project/src/assets/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import Header from "./Header";

import free from "./images/Free.png";

import axios from "axios";

import Profile from "./Profile";
import Browseprojects from "./Browseprojects";
import Bid from "./Bid";


function App(props) {

  const[state,setState]= useState({loggedin:true, name:"", email:"", username:""});


  useEffect(()=>{
    if (localStorage.getItem("token")) {
      axios
        .get("http://freelancer.test/api/getuser", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token")
          }
        })
        .then(response => {
          setState({...state, name:response.data.name,
            email:response.data.email,
            username:response.data.username,
            id:response.data.id
          })
         
        })
        .catch(() => {
          setState({...state, loggedin: false });
        });
    } else {
      setState({...state, loggedin: false });
    }
     
           
        },[]);

    return (
      <div className="width">
        <Router>

          <Route path="/" component={Header}></Route>

          <Switch>
            <Route path="/" exact>
              <Home login={state.loggedin}></Home>
            </Route>

            <Route path="/hire" exact>
              <Howitworks></Howitworks>
            </Route>

            <Route path="/profile" exact>
              <Profile></Profile>
            </Route>

            <Route exact path="/bid" render={(props) => 
            <Bid {...props} name={state.name}
            email={state.email}  />} />


            <Route path="/login">
              <Login loginattempt={()=>{
                setState({...state, loggedin:true})
              }}
              loggedin={state.loggedin}/>
            </Route>

            <Route path="/browse">
              <Browseprojects />
            </Route>

            <Route path="/signup">
              <Signup />
            </Route>

            <Route path="/dashboard">
              <Dashboard login={state.loggedin}
              name={state.name}
              email={state.email}
              username={state.username}
              ></Dashboard>
            </Route>

            <Route path="/Postaproject" exact>
              <Postaproject login={state.loggedin}/>
            </Route>

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
                  <i className="fa fa-twitter mr-2"></i>{" "}
                  <i className="fa fa-youtube mr-2"></i>{" "}
                  <i className="fa fa-instagram mr-2"></i>{" "}
                  <i className="fa fa-rss mr-2"></i>
                </span>
              </div>
            </div>
            <hr className="hrbig" />
            <div className="col copyright">
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
  }
export default App;
