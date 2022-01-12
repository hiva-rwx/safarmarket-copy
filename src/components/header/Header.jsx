import React from "react";
import { Link } from "react-router-dom";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { useDispatch } from "react-redux";
import { ActiveSidebar } from "../../redux/actions/ActiveSidebar";

import "./header.scss";

const Header = () => {
  const { width } = useWindowDimensions();
  const dispatch = useDispatch();

  return (
    <div
      className={`header py-8 px-8 d-flex j-c-b a-i-c ${
        width <=500 && "pos-fixed"
      }`}
    >
      {width <= 500 && (
        <div
          className="menu-icon my-8"
          onClick={() => dispatch(ActiveSidebar())}
        >
          <i className="bi bi-list"></i>
        </div>
      )}
      <div className="logo">
        <Link to={"/"}>
          <div className="d-flex">
            <h1 style={{ color: "#ff6348" }}>Safar</h1>
            <h1 style={{ color: "#747d8c" }}>estan</h1>
          </div>
        </Link>
      </div>
      <div className="btn-sign">
        <Link to={"/signin"}>
          {width > 991 ? (
            <button className="px-8 py-4">{"ثبت نام / ورود"}</button>
          ) : (
            <i className="bi bi-box-arrow-in-right"></i>
          )}
        </Link>
      </div>
    </div>
  );
};

export default Header;