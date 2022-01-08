import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import { ActiveSidebar } from "../../../redux/actions/ActiveSidebar";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { width } = useWindowDimensions();

  const dispatch = useDispatch();
  return (
    <div className="navbar w-100 py-8 d-flex j-c-b px-8 a-i-c">
      <Link to={"/"}>
        <div className="d-flex logo">
          <h1 style={{ color: "#ff6348" }}>Safar</h1>
          <h1 style={{ color: "#747d8c" }}>estan</h1>
        </div>
      </Link>
      {width > 768 ? (
        <div className="d-flex a-i-c j-c-c">
          <div className="btn-sign mx-8">
            {width > 768 ? (
              <Link to={"/signin"}>
                <button className="px-8 py-4">{"ثبت نام / ورود"}</button>
              </Link>
            ) : (
              <Link to={"/signin"}>
                <i className="bi bi-box-arrow-in-right"></i>
              </Link>
            )}
          </div>

          <div
            className="menu-icon mx-8"
            onClick={() => dispatch(ActiveSidebar())}
          >
            <i className="bi bi-list"></i>
          </div>
        </div>
      ) : (
        <Fragment>
          <div className="btn-sign mx-8">
            {width > 768 ? (
              <button className="px-8 py-4">{"ثبت نام / ورود"}</button>
            ) : (
              <i className="bi bi-box-arrow-in-right"></i>
            )}
          </div>

          <div
            className="menu-icon mx-8"
            onClick={() => dispatch(ActiveSidebar())}
          >
            <i className="bi bi-list"></i>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default Navbar;
