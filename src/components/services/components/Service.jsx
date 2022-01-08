import React from "react";
const Service = ({ item }) => {
  return (
    <div className="service d-flex a-i-c" dir="rtl">
      <div className="icon mx-4">
        <img alt="" src={`./images/${item.icon}.png`} />
      </div>
      <div className="text">
        <div className="title">
          <h3>{item.title}</h3>
        </div>
        <div className="desc">
          <p>{item.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
