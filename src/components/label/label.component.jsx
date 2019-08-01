import React from "react";

import "./label.styles.scss";

//just shows props value

const Label = ({ id, children }) => {
  return <p id={id}>{children}</p>;
};

export default Label;
