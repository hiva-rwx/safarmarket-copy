import React from "react";
import "./button.scss";
const Button = ({ className, type, style, children }) => {
  return (
    <div className="button my-8">
      <button className={`btn ${className}`} type={type} style={style}>
        {children}
      </button>
    </div>
  );
};

export default Button;
