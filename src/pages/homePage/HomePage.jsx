import React, { Fragment } from "react";
import Carousel from "../../components/carousel/Carousel";
import Footer from "../../components/footer/Footer";
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/header/Header";
import Services from "../../components/services/Services";
import MainSlogan from "../../components/slogan/MainSlogan";
import Container from "../../components/container/Container";
const HomePage = () => {
  return (
    <Fragment>
      <Sidebar />
      <div className="homepage">
        <Container>
          <Header />
          <Carousel />
          <MainSlogan />
          <Services />
          <Footer />
        </Container>
      </div>
    </Fragment>
  );
};

export default HomePage;
