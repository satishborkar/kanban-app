import React from "react";

const Alert = ({ errCode, msg, erroType, hidden }) => {
  if (hidden) {
    return null;
  }
  return <div>There is some error message</div>;
};

export default Alert;
