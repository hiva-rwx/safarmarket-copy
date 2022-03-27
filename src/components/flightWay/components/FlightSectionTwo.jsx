import React, { forwardRef } from "react";
import "./../assets/flight-section-two.scss";
const FlightSectionTwo = forwardRef(
  (
    {
      setActiveSectionOne = null,
      setActiveSectionTwo = null,
      setActiveSection = null,
      handlePartOne = null,
      handlePartTwo = null,
      refEl = null,
    },
    ref
  ) => {
    return (
      <div className="section-two mx-2" ref={refEl !== null && refEl}>
        <span className="middle-line"></span>
        <div
          className="sections d-flex j-c-b a-i-c py-8"
          onClick={() => setActiveSection !== null && setActiveSection(true)}
        >
          <div
            className="part__1 pr-4 d-flex"
            onClick={() =>
              setActiveSectionOne !== null && setActiveSectionOne(true)
            }
          >
            {handlePartOne !== null && handlePartOne()}
          </div>
          <div
            className="part__2 d-flex"
            onClick={() =>
              setActiveSectionTwo !== null && setActiveSectionTwo(true)
            }
          >
            {handlePartTwo !== null && handlePartTwo()}
          </div>
        </div>
      </div>
    );
  }
);

export default FlightSectionTwo;
