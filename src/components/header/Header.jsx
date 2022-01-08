import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import "./header.scss";
const Header = () => {
  return (
    <header className="d-flex">
      <Navbar />
      <Sidebar />
    </header>
  );
};

export default Header;
