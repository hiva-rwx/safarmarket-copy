import React, { Fragment } from "react";
import Carousel from "../components/carousel/Carousel";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Services from "../components/services/Services";
import MainSlogan from "../components/slogan/MainSlogan";
const HomePage = () => {
  return (
    <Fragment>
      <Header />
      <div className="wrapper">
        <Carousel />
        <MainSlogan />
        <Services />
      </div>
      <Footer />
    </Fragment>
  );
};

export default HomePage;
