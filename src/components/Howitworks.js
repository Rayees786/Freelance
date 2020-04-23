import React, { useState, useEffect } from "react";
import {
  ToggleButtonGroup,
  ToggleButton,
} from "react-bootstrap";


import Work from "./Work";

import Hire from "./Hire";

import "../App.css";

function Howitworks() {
  const [work, setWork] = useState(false);

  

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
