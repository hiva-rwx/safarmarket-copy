import React, { Fragment } from "react";
import Carousel from "../../components/carousel/Carousel";
import Footer from "../../components/footer/Footer";
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/header/Header";
import Services from "../../components/services/Services";
import MainSlogan from "../../components/slogan/MainSlogan";
import { useSelector } from "react-redux";
import "./homepage.scss";
import useWindowDimensions from "../../hooks/useWindowDimensions";
const HomePage = () => {
  const sidebar = useSelector((state) => state.sidebar);
  const { width } = useWindowDimensions();

  return (
    <Fragment>
      <Sidebar />
      <div className="homepage">
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
          <Header />
          <Carousel />
          <MainSlogan />
          <Services />
          <Footer />
        </div>
      </div>
    </Fragment>
  );
};

export default HomePage;
