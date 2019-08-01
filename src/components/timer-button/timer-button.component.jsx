import React from "react";

import "./timer-button.styles.scss";

//just using it's props and an onClick function

const TimerButton = ({ id, children, onClick }) => {
  return (
    <button id={id} onClick={() => onClick(id)}>
      {children}
    </button>
  );
};

export default TimerButton;
