import React from "react";

//import necessary components
import SettingsButton from "../settings-button/settings-button.component";
import Label from "../label/label.component.jsx";

//import necessary styles
import "./settings.styles.scss";

//no need for states, it will just pass it's props to it's own components
//functional stateless component

const Settings = ({ name, duration, onClick, isWorking }) => {
  const idFormat = name.toLowerCase();

  return (
    <div id={idFormat}>
      <Label id={`${idFormat}-label`}>{name} Length</Label>
      <SettingsButton
        isWorking={isWorking}
        onClick={onClick}
        name={name}
        effect="increase"
      />
      <span id={`${idFormat}-length`}>{duration}</span>
      <SettingsButton
        isWorking={isWorking}
        onClick={onClick}
        name={name}
        effect="decrease"
      />
    </div>
  );
};

export default Settings;
