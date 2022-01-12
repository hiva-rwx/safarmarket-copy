import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActiveSidebar } from "../../redux/actions/ActiveSidebar";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import "./sidebar.scss";
const Sidebar = () => {
  const sidebar = useSelector((state) => state.sidebar);
  const dispatch = useDispatch();

  const { width } = useWindowDimensions();

  const items = [
    {
      id: 1,
      icon: <i className="bi bi-cloud-hail-fill"></i>,
      label: "هواپیما",
    },
    {
      id: 2,
      icon: <i className="bi bi-briefcase-fill"></i>,
      label: "تور",
    },
    {
      id: 3,
      icon: <i className="bi bi-segmented-nav"></i>,
      label: "هتل",
    },
    {
      id: 4,
      icon: <i className="bi bi-truck-flatbed"></i>,
      label: "بلیط قطار",
    },
    {
      id: 5,
      icon: <i className="bi bi-house-door-fill"></i>,
      label: "ویلا و اقامتگاه",
    },
    {
      id: 6,
      icon: <i className="bi bi-geo-fill"></i>,
      label: "بلیط اتوبوس",
    },
  ];

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
            {items?.map((item) => {
              return (
                <li className="d-flex j-c-b flex-reverse" key={item.id}>
                  <div className="item-icon">{item?.icon}</div>
                  <div className={` ${sidebar ? "label active" : "label"}`}>
                    {item?.label}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;