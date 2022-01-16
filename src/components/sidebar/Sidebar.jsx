import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActiveSidebar } from "../../redux/actions/ActiveSidebar";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { Link } from "react-router-dom";
import "./sidebar.scss";
import { PgaeSidebar } from "../../data/PageSidebar";
const Sidebar = () => {
  const sidebar = useSelector((state) => state.sidebar);
  const dispatch = useDispatch();

  const { width } = useWindowDimensions();

  return (
    <div
      className={`sidebar ${sidebar && "active"} text-center`}
      style={{
        width: `${width > 500 ? (sidebar ? "250px" : "90px") : "150px"}`,
      }}
    >
      {width > 500 && (
        <div
          className="menu-icon my-8"
          onClick={() => dispatch(ActiveSidebar())}
        >
          <i className="bi bi-list"></i>
        </div>
      )}
      <div className="list-items">
        <div className="d-flex flex-col">
          <ul>
            {PgaeSidebar?.map((item) => {
              return (
                <Link to={`/${item.link}`} key={item.id}>
                  <li className="d-flex j-c-b flex-reverse" key={item.id}>
                    <div className="item-icon">{item?.icon}</div>
                    <div className={` ${sidebar ? "label active" : "label"}`}>
                      {item?.label}
                    </div>
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
