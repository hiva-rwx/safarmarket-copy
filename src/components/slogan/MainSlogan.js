import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./main-slogan.scss";
const MainSlogan = () => {
  return (
    <Fragment>
      <div className="main-slogan w-100 d-flex j-c-c a-i-c rounded-2">
        <h4>
          مقایسه و خرید آنلاین از بین صدها سایت گردشگری{" "}
          <i className="bi bi-exclamation-circle"></i>
        </h4>
      </div>
      <div className="app-container d-flex j-c-a my-8 rounded-2">
        <div className="app-phone d-flex j-c-c a-i-c flex-col">
          <h5>با دانلود اپلیکیشن سفرمارکت</h5>
          <h2>جهان در جیب شما است</h2>
          <Link to={"/app"}>
            <button className="py-4 px-8 rounded-1 my-8 d-flex a-i-c">
              دانلود و راهنمای نصب<i className="bi bi-phone"></i>
            </button>
          </Link>
        </div>
        <div className="img-resize" style={{ flex: "1 0 50%" }}></div>
      </div>
    </Fragment>
  );
};

export default MainSlogan;
