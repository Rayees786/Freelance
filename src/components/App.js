import React, { Fragment } from 'react';
import '../App.css';
import Signup from './signup';
import 'semantic-ui-css/semantic.min.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Signup></Signup>
    );
  }

}
export default App;
