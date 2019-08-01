import React from "react";

//import necessary styles
import "./settings-button.styles.scss";

//no state or lifecycle methods needed

const SettingsButton = ({ name, effect, onClick, isWorking }) => {
  return (
    <i
      id={`${name.toLowerCase()}-${
        effect === "increase" ? "increment" : "decrement"
      }`}
      className={`fas fa-arrow-${effect === "increase" ? "up" : "down"}`}
      onClick={() => onClick(name, effect)}
    />
  );
};

export default SettingsButton;
