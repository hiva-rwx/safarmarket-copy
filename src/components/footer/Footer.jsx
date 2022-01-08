import React from "react";
import Container from "./components/Container";
import Header from "./components/Header";
import "./footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <Header />
      <hr />
      <Container />
    </div>
  );
};

export default Footer;
