import React, { Fragment, useRef, useState } from "react";
import { useEffect } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Title from "../../components/title/Title";
import { citys } from "../../data/city";
import { useClickOutSide } from "../../hooks/useClickOutSide";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import Button from "./../../components/buttons/Button";
import Container from './../../components/container/Container'
import "./flights.scss";
const Flights = () => {
  const { width } = useWindowDimensions();

  const [wayType, setWayType] = useState(1);

  const [activeOriginCity, setActiveOriginCity] = useState(false);
  const [activeMovementCity, setActiveMoveMentCity] = useState(false);

  const [valueOriginCity, setValueOriginCity] = useState("");
  const [valueMoveMentCity, setValueMoveMentCity] = useState("");

  const refOriginCity = useRef(null);
  const refMoveMentCity = useRef(null);

  const domNodeOrigin = useClickOutSide(() => setActiveOriginCity(false));
  const domNodeMoveMent = useClickOutSide(() => setActiveMoveMentCity(false));

  useEffect(() => {
    if (activeOriginCity) {
      refOriginCity?.current?.focus();
    }
    if (activeMovementCity) {
      refMoveMentCity?.current.focus();
    }
  }, [activeMovementCity, activeOriginCity]);

  const handleChooseOriginCity = (city) => {
    setValueOriginCity(city);
    setActiveOriginCity(false);
  };

  const handleChooseMoveMentCity = (city) => {
    setValueMoveMentCity(city);
    setActiveMoveMentCity(false);
  };

  const handleChangeCity = () => {
    if (valueMoveMentCity.length && valueOriginCity.length) {
      setValueOriginCity(valueMoveMentCity);
      setValueMoveMentCity(valueOriginCity);
    }
  };

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
          <div className="info-flight rounded-2" dir="rtl">
            <div className="paths text-right d-flex j-c-s pr-8 py-8">
              <div
                className={`ml-8 ${
                  wayType === 1 ? "own-way active" : "own-way"
                }`}
                onClick={() => setWayType(1)}
              >
                یک طرفه
              </div>{" "}
              |{" "}
              <div
                className={`mr-8 ${
                  wayType === 2 ? "two-way active" : "two-way"
                }`}
                onClick={() => setWayType(2)}
              >
                رفت و برگشت
              </div>
            </div>
            <div className="flight-items my-8 ">
              <div className="seg1">
                <div
                  className="origin d-flex j-c-a a-i-c"
                  onClick={() => setActiveOriginCity(true)}
                >
                  <div className="icon">
                    <i className="bi bi-geo-alt-fill"></i>
                  </div>
                  {activeOriginCity ? (
                    <div className="input">
                      <input
                        placeholder="جستوجوی مقصد"
                        value={valueOriginCity}
                        onChange={(e) => setValueOriginCity(e.target.value)}
                        ref={refOriginCity}
                      />
                    </div>
                  ) : (
                    <div className="info d-flex flex-col">
                      <p className="city mb-4">
                        {valueOriginCity.length ? valueOriginCity : "مبدا"}
                      </p>
                      <p className="airport">همه فرودگاه ها</p>
                    </div>
                  )}
                </div>
              </div>
              <div className="seg2">
                <div
                  className="movement d-flex j-c-c a-i-c"
                  onClick={handleChangeCity}
                >
                  <div className="icon">
                    {width >= 991 ? (
                      <i className="bi bi-arrow-left-right"></i>
                    ) : (
                      <i className="bi bi-arrow-down-up"></i>
                    )}
                  </div>
                </div>
              </div>
              <div className="seg3">
                <div
                  className="destination d-flex j-c-a a-i-c"
                  onClick={() => setActiveMoveMentCity(true)}
                >
                  <div className="icon">
                    <i className="bi bi-geo-alt-fill"></i>
                  </div>
                  {activeMovementCity ? (
                    <div className="input">
                      <input
                        placeholder="جستوجوی مبدا"
                        value={valueMoveMentCity}
                        onChange={(e) => setValueMoveMentCity(e.target.value)}
                        ref={refMoveMentCity}
                      />
                    </div>
                  ) : (
                    <div className="info d-flex flex-col">
                      <p className="city mb-4">
                        {valueMoveMentCity.length ? valueMoveMentCity : "مقصد"}
                      </p>
                      <p className="airport">همه فرودگاه ها</p>
                    </div>
                  )}
                </div>
              </div>
              <div className="seg4">
                <div className="d-flex date-travel">
                  <div className="departure-date d-flex j-c-a a-i-c">
                    <div className="icon">
                      <i className="bi bi-calendar-event"></i>
                    </div>
                    <div className="info d-flex flex-col">
                      <p className="date mb-4">تاریخ رفت</p>
                      <p className="date-details">--</p>
                    </div>
                  </div>
                  <div className="return-date d-flex j-c-a a-i-c">
                    <div className="icon">
                      <i className="bi bi-calendar-event"></i>
                    </div>
                    <div className="info d-flex flex-col">
                      <p className="date mb-4">تاریخ برگشت</p>
                      <p className="date-details">--</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="seg5">
                <div className="d-flex passengers j-c-c a-i-c">
                  <div className="className-type d-flex">
                    <div className="icon">
                      <i className="bi bi-people-fill"></i>
                    </div>
                    <div>
                      <p className="pl-8">همه کلاس ها</p>
                    </div>
                  </div>
                  <div className="passenger mr-8 pl-8">
                    <div className="d-flex a-i-c j-c-b">
                      <div>
                        <span>1</span>
                        <span>مسافر</span>
                      </div>
                      <div>
                        {width <= 991 && (
                          <i className="bi bi-caret-down-fill"></i>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {activeOriginCity && (
                <div
                  className="origin-citys rounded-2 my-4"
                  ref={domNodeOrigin}
                >
                  <div className="origin-citys-head py-4 w-100 text-center">
                    شهر های پر تردد
                  </div>
                  <div className="internal-out py-4 d-flex j-c-a">
                    <span style={{ color: "#ff4500" }}>داخلی</span>
                    <span style={{ color: "#ff4500" }}>خارجی</span>
                  </div>
                  <div className="citys d-flex j-c-a">
                    <div className="internal-citys w-50 text-center">
                      {citys[0].inside.slice(0, 10).map((item) => {
                        return (
                          <div
                            className="city py-4"
                            key={item.id}
                            onClick={(e) => handleChooseOriginCity(item.city)}
                          >
                            {item.city}
                          </div>
                        );
                      })}
                    </div>
                    <div className="out-citys w-50 text-center">
                      {citys[1].out.slice(0, 10).map((item) => {
                        return (
                          <div
                            className="city py-4"
                            key={item.id}
                            onClick={(e) => handleChooseOriginCity(item.city)}
                          >
                            {item.city}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
              {activeMovementCity && (
                <div
                  className="movement-citys rounded-2 my-4"
                  ref={domNodeMoveMent}
                >
                  <div className="movement-citys-head py-4 w-100 text-center">
                    شهر های پر تردد
                  </div>
                  <div className="internal-out py-4 d-flex j-c-a">
                    <span style={{ color: "#ff4500" }}>داخلی</span>
                    <span style={{ color: "#ff4500" }}>خارجی</span>
                  </div>
                  <div className="citys d-flex j-c-a">
                    <div className="internal-citys w-50 text-center">
                      {citys[0].inside.slice(0, 10).map((item) => {
                        return (
                          <div
                            className="city py-4"
                            key={item.id}
                            onClick={() => handleChooseMoveMentCity(item.city)}
                          >
                            {item.city}
                          </div>
                        );
                      })}
                    </div>
                    <div className="out-citys w-50 text-center">
                      {citys[1].out.slice(0, 10).map((item) => {
                        return (
                          <div
                            className="city py-4"
                            key={item.id}
                            onClick={() => handleChooseMoveMentCity(item.city)}
                          >
                            {item.city}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="btn-search">
              <Button>جستوجوی بلیط هواپیما</Button>
            </div>
          </div>
          <Footer />
        </Container>
      </div>
    </Fragment>
  );
};

export default Flights;
