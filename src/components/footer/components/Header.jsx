import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header d-flex j-c-b a-i-c flex-wrap py-8 px-4">
      <div className="text-right pr-8">
        <h3 className="my-4">اپلیکیشن سفرستان</h3>
        <p className="my-8">
          با نصب اپلیکیشن سفرمارکت جهان در جیب شماست .{" "}
          <Link to={"/app"}>اطلاعات بیشتر</Link>
        </p>
      </div>
      <div className="store d-flex">
        <div className="border-1 mx-4">
          <a href="#!">
            <img src="./images/bazar.png" alt="bazar" />
          </a>
        </div>
        <div className="border-1 mx-4">
          <a href="#!">
            <img src="./images/googleplay.png" alt="googleplay" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
