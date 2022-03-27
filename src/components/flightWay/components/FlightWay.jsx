import React from "react";
import './../assets/flight-way.scss'
const FlightWay = ({ setWayType, wayType }) => {
  return (
    <div className="paths text-right d-flex j-c-s pr-8 py-8">
      <div
        className={`ml-8 ${wayType === 1 ? "own-way active" : "own-way"}`}
        onClick={() => setWayType(1)}
      >
        یک طرفه
      </div>{" "}
      |{" "}
      <div
        className={`mr-8 ${wayType === 2 ? "two-way active" : "two-way"}`}
        onClick={() => setWayType(2)}
      >
        رفت و برگشت
      </div>
    </div>
  );
};

export default FlightWay;
