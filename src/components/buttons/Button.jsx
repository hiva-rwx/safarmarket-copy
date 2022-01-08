import React from "react";
import "./button.scss";
const Button = ({ type, children }) => {
  return (
    <div className="button my-8">
      <button className="btn" type={type}>
        {children}
      </button>
    </div>
  );
};

export default Button;
