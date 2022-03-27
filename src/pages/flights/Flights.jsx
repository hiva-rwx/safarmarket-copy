import React, { Fragment } from "react";
import FlightInfo from "../../components/flightWay/FlightInfo";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Title from "../../components/title/Title";
import Container from "./../../components/container/Container";
import "./flights.scss";
const Flights = () => {
  return (
    <Fragment>
      <Sidebar />
      <div className="flights">
        <Container>
          <Header />
          <Title
            title={"بلیط هواپیما را از بین صدها آژانس جستجو کن"}
            subSlogan={"موتور جستجو ارزانترین بلیط هواپیما داخلی و خارجی"}
          />
          <FlightInfo />
          <Footer />
        </Container>
      </div>
    </Fragment>
  );
};

export default Flights;
