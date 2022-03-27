import React from "react";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import './../assets/change-paths.scss'
const ChangePaths = ({ handleChange }) => {
  const { width } = useWindowDimensions();
  return (
    <div className="change-paths mx-2">
      <div className="section d-flex j-c-c a-i-c" onClick={handleChange}>
        <div className="icon">
          {width >= 991 ? (
            <i className="bi bi-arrow-left-right"></i>
          ) : (
            <i className="bi bi-arrow-down-up"></i>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChangePaths;
