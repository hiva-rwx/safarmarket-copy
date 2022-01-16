import React from "react";
import "./title.scss";
const Title = ({ title, subSlogan }) => {
  return (
    <div className="title-header">
      <h1>{title}</h1>
      <div className="subSlogan">{subSlogan}</div>
    </div>
  );
};

export default Title;
