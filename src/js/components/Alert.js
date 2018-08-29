import React from "react";

const Alert = ({ alert, /*hidden,*/ clearAlert }) => {
  // if (hidden) {
  //   return null;
  // }
  return (
    <div className={`alert ${alert.type}`}>
      {alert.message}
      <a href="javascript:void(0)" className="alert-close" onClick={clearAlert}> x </a>
    </div>
  );
};

export default Alert;
