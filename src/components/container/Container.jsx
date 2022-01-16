import React from "react";
import { useSelector } from "react-redux";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import './container.scss'
const Container = (props) => {
  const sidebar = useSelector((state) => state.sidebar);
  const { width } = useWindowDimensions();
  return (
    <div
      className="container"
      style={{
        width: `${
          width > 991
            ? sidebar
              ? "calc(100% - 250px)"
              : "calc(100% - 90px)"
            : width <= 500
            ? "100%"
            : "calc(100% - 90px)"
        }`,
      }}
    >
      {props.children}
    </div>
  );
};

export default Container;
