import React from "react";

//import necessary componenimport { format } from "util";

import Label from "../label/label.component.jsx";

//import necessary styles
import "./timer.styles.scss";

const Timer = ({ show, timeLeft }) => {
  return (
    <div id="timer">
      <Label id="timer-label">{show}</Label>
      <p id="time-left">{timeLeft}</p>
    </div>
  );
};

export default Timer;

//Things to do

/* 
 if isStarted is true, start an interval and decrease the amount each time and real time update it

 moment from timeLeft "string", extract 1 seconds,
*/
