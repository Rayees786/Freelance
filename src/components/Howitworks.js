import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Input,
  Image,
  Card,
  CardDeck,
  Nav,
  Jumbotron,
  ToggleButtonGroup,
  ToggleButton,
  Figure
} from "react-bootstrap";

import Home from "./Home";

import Work from "./Work";

import Hire from "./Hire";

// import {
//    Redirect
//   } from "react-router-dom";

import sshot3 from "./images/sshot3.jpg";
import sshot4 from "./images/sshot4.jpg";
import sshot from "./images/Sshot.jpg";
import sshot1 from "./images/sshot1.jpg";
import about1 from "./images/About1.png";
import about2 from "./images/About2.png";
import about3 from "./images/About3.png";
import about4 from "./images/About4.png";
import about5 from "./images/About5.png";
import about6 from "./images/About6.png";
import about7 from "./images/About7.png";
import about8 from "./images/About8.png";
import about9 from "./images/About9.png";
import about11 from "./images/About11.png";
import about12 from "./images/About12.png";
import about13 from "./images/About13.png";

import { Map, InfoSquare, KanbanFill } from "react-bootstrap-icons";

import BootstrapSwitchButton from "bootstrap-switch-button-react";

import "../App.css";

function Howitworks() {
  const [work, setWork] = useState(false);

  useEffect(() => {
    console.log("Hello");
  }, []);

  return (
    <>
      <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
        <ToggleButton
          value={1}
          className="toggle1"
          onClick={() => {
            setWork(false);
          }}
        >
          I want to hire
        </ToggleButton>
        <ToggleButton
          value={2}
          className="toggle2"
          onClick={() => {
            setWork(true);
          }}
        >
          I want to work
        </ToggleButton>
      </ToggleButtonGroup>

      {work ? <Work /> : <Hire />}
    </>
  );
}

export default Howitworks;
