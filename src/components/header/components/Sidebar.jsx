import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActiveSidebar } from "./../../../redux/actions/ActiveSidebar";
import useWindowDimensions from "./../../../hooks/useWindowDimensions";
const Sidebar = () => {
  const sidebar = useSelector((state) => state.sidebar);

  const dispatch = useDispatch();

  const { width } = useWindowDimensions();

  return (
    <div className="sidebar">
      {/* <div className="header d-flex j-c-c a-i-c">
        <div className="menu-icon" onClick={() => dispatch(ActiveSidebar())}>
          <i className="bi bi-list"></i>
        </div>
      </div> */}
      <div
        className="list"
        style={{
          width: `${width > 768 ? sidebar ? "250px" : "90px" : '200px'}`,
          right: `${width < 768 ? sidebar ? "0" : "-200px" : '0'}`,
        }}
      >
        <ul>
          <li>
            <div className="d-flex j-c-b a-i-c">
              {width > 768 && <i className="bi bi-moon-fill"></i>}
              {sidebar && <h5>بلیط هواپیما </h5>}
            </div>
          </li>
          <li>
            <div className="d-flex j-c-b a-i-c">
              {width > 768 && <i className="bi bi-bag-fill"></i>}

              {sidebar && <h5>تور</h5>}
            </div>
          </li>
          <li>
            <div className="d-flex j-c-b a-i-c">
              {width > 768 && <i className="bi bi-house-fill"></i>}

              {sidebar && <h5>هتل</h5>}
            </div>
          </li>
          <li>
            <div className="d-flex j-c-b a-i-c">
              {width > 768 && <i className="bi bi-truck"></i>}

              {sidebar && <h5>بلیط قطار</h5>}
            </div>
          </li>
          <li>
            <div className="d-flex j-c-b a-i-c">
              {width > 768 && <i className="bi bi-minecart"></i>}

              {sidebar && <h5>ویلا و اقامتگاه</h5>}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
