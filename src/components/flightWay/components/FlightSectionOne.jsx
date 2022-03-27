import React, { forwardRef } from "react";
import "./../assets/flight-section-one.scss";
const FlightSectionOne = forwardRef(
  (
    {
      active,
      setActive,
      icon = null,
      changeElByOnClick = null,
      valueInput,
      title,
      className,
      refEl = null,
    },
    ref
  ) => {
    return (
      <div className="section-one mx-2" ref={refEl !== null && refEl}>
        <div
          className={`${className} main d-flex j-c-a a-i-c`}
          onClick={() => setActive(true)}
        >
          {icon !== null && <div className="icon">{icon}</div>}

          {changeElByOnClick !== null &&
            (active ? (
              <div className="el-change">{changeElByOnClick()}</div>
            ) : (
              <div className="el d-flex flex-col">
                <p className="el-title mb-4">
                  {valueInput.length > 0 ? valueInput : title}
                </p>
                <p className="el-comment">همه فرودگاه ها</p>
              </div>
            ))}
        </div>
      </div>
    );
  }
);

export default FlightSectionOne;
