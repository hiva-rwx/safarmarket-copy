import React, { useEffect, useRef, useState } from "react";
import { citys } from "../../data/city";
import { useClickOutSide } from "../../hooks/useClickOutSide";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import Button from "../buttons/Button";
import ChangePaths from "./components/ChangePaths";
import FlightSectionOne from "./components/FlightSectionOne";
import FlightSectionTwo from "./components/FlightSectionTwo";
import FlightWay from "./components/FlightWay";
import "./flight-info.scss";
const FlightInfo = () => {
  const { width } = useWindowDimensions();

  const [adult, setAdult] = useState(1);
  const [child, setChild] = useState(0);
  const [baby, setBaby] = useState(0);

  const [wayType, setWayType] = useState(1);
  const [number, setNumber] = useState(1);
  const [classType, setClassType] = useState("همه کلاس ها");

  useEffect(() => {
    setNumber(adult + child + baby);
  }, [adult, baby, child]);

  const [activeOriginCity, setActiveOriginCity] = useState(false);
  const [activeMovementCity, setActiveMoveMentCity] = useState(false);
  const [activeTypeClass, setActiveTypeClass] = useState(false);

  const [valueOriginCity, setValueOriginCity] = useState("");
  const [valueMoveMentCity, setValueMoveMentCity] = useState("");

  const refOriginCity = useRef(null);
  const refMoveMentCity = useRef(null);
  const refTravellType = useRef(null);

  const refOriginInput = useRef(null);
  const refMoveMentInput = useRef(null);

  const domNodeOrigin = useClickOutSide(() => setActiveOriginCity(false));
  const domNodeMoveMent = useClickOutSide(() => setActiveMoveMentCity(false));
  const domNodeTypeClassAndNumber = useClickOutSide(() =>
    setActiveTypeClass(false)
  );

  useEffect(() => {
    if (activeOriginCity) {
      refOriginInput.current.focus();
      const posEl = refOriginCity.current.getBoundingClientRect();
      const posElDialog = domNodeOrigin.current.getBoundingClientRect();
      domNodeOrigin.current.style.top = `${refOriginCity.current.clientHeight}px`;
      domNodeOrigin.current.style.left = `${
        posEl.x + posEl.width - posElDialog.width - 40
      }px`;
    }
    if (activeMovementCity) {
      refMoveMentInput.current.focus();
      const posEl = refMoveMentCity.current.getBoundingClientRect();
      const posElDialog = domNodeMoveMent.current.getBoundingClientRect();
      domNodeMoveMent.current.style.top = `${refMoveMentCity.current.clientHeight}px`;
      domNodeMoveMent.current.style.left = `${
        posEl.x + posEl.width - posElDialog.width - 40
      }px`;
    }
    if (activeTypeClass) {
      const posEl = refTravellType.current.getBoundingClientRect();
      domNodeTypeClassAndNumber.current.style.top = `${refTravellType.current.clientHeight}px`;
      domNodeTypeClassAndNumber.current.style.left = `${posEl.x - 40}px`;
    }
  }, [
    activeMovementCity,
    activeOriginCity,
    activeTypeClass,
    domNodeMoveMent,
    domNodeOrigin,
    domNodeTypeClassAndNumber,
  ]);

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

  const handleChangeSectionOriginCity = () => {
    return (
      <input
        placeholder="جستوجوی مبدا"
        value={valueOriginCity}
        onChange={(e) => setValueOriginCity(e.target.value)}
        ref={refOriginInput}
        style={{
          width: "100%",
          fontSize: "0.8rem",
          fontFamily: "vazir",
          height: "100%",
        }}
      />
    );
  };

  const handleChangeSectionMovementCity = () => {
    return (
      <input
        placeholder="جستوجوی مقصد"
        value={valueMoveMentCity}
        onChange={(e) => setValueMoveMentCity(e.target.value)}
        ref={refMoveMentInput}
        style={{
          width: "100%",
          fontSize: "0.8rem",
          fontFamily: "vazir",
          height: "100%",
        }}
      />
    );
  };

  const handleSectionClassType = () => {
    return (
      <div className="class-type d-flex py-2">
        <div className="icon">
          <i className="bi bi-people-fill"></i>
        </div>
        <div>
          <p className="pr-4" style={{ fontSize: "14px" }}>
            {classType}
          </p>
        </div>
      </div>
    );
  };
  const handleSectionNumbers = () => {
    return (
      <div className="passenger mr-8 pl-8">
        <div className="d-flex a-i-c j-c-b">
          <div>
            <span className="mx-4">{number}</span>
            <span>مسافر</span>
          </div>
          <div>{width <= 991 && <i className="bi bi-caret-down-fill"></i>}</div>
        </div>
      </div>
    );
  };

  const handleSectionDepartureDate = () => {
    return (
      <div className="d-flex j-c-a a-i-s">
        <div className="icon px-2">
          <i className="bi bi-calendar-event"></i>
        </div>
        <div className="info">
          <p className="date">تاریخ رفت</p>
          <p className="date-details">--</p>
        </div>
      </div>
    );
  };

  const handleSectionReturnDate = () => {
    return (
      <div className="d-flex j-c-a a-i-s">
        <div className="icon px-2">
          <i className="bi bi-calendar-event"></i>
        </div>
        <div className="info">
          <p className="date">تاریخ برگشت</p>
          <p className="date-details">--</p>
        </div>
      </div>
    );
  };

  return (
    <div className="info-flight rounded-2" dir="rtl">
      <FlightWay wayType={wayType} setWayType={setWayType} />
      <div className="flight-items my-8 d-flex a-i-c ">
        <FlightSectionOne
          active={activeOriginCity}
          setActive={setActiveOriginCity}
          icon={<i className="bi bi-geo-alt-fill"></i>}
          changeElByOnClick={handleChangeSectionOriginCity}
          valueInput={valueOriginCity}
          title={"مبدا"}
          className={"origin"}
          refEl={refOriginCity}
        />
        <ChangePaths handleChange={handleChangeCity} />
        <FlightSectionOne
          active={activeMovementCity}
          setActive={setActiveMoveMentCity}
          icon={<i className="bi bi-geo-alt-fill"></i>}
          changeElByOnClick={handleChangeSectionMovementCity}
          valueInput={valueMoveMentCity}
          title={"مقصد"}
          className={"destination"}
          refEl={refMoveMentCity}
        />
        <FlightSectionTwo
          handlePartOne={handleSectionDepartureDate}
          handlePartTwo={handleSectionReturnDate}
          refEl={refTravellType}
        />
        <FlightSectionTwo
          setActiveSection={setActiveTypeClass}
          handlePartOne={handleSectionClassType}
          handlePartTwo={handleSectionNumbers}
          refEl={refTravellType}
        />
        {activeOriginCity && (
          <div className="origin-citys rounded-2 my-4" ref={domNodeOrigin}>
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
          <div className="movement-citys rounded-2 my-4" ref={domNodeMoveMent}>
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
        {activeTypeClass && (
          <div
            className="typeClass-number rounded-2 my-4"
            ref={domNodeTypeClassAndNumber}
          >
            <div className="type-class">
              <select
                className=" rounded-2"
                onChange={(e) => setClassType(e.target.value)}
              >
                <option value={"همه کلاس ها"}>همه کلاس ها</option>
                <option value={"اکونومی"}>اکونومی</option>
                <option value={"بیزنس"}>بیزنس</option>
              </select>
            </div>
            <div className="numbers">
              <div className="adult">
                <div className="d-flex j-c-b a-i-c">
                  <div>
                    <p className="category">بزرگسال</p>
                    <p className="old">12 سال به بالا</p>
                  </div>
                  <div>
                    <div className="d-flex j-c-a a-i-c flex-reverse">
                      <div
                        className={`${
                          adult > 1 ? "decrement active" : "decrement"
                        }`}
                        onClick={() => adult > 1 && setAdult(adult - 1)}
                      >
                        <i className="bi bi-dash-circle-fill"></i>
                      </div>
                      <div className="num">{adult}</div>
                      <div
                        className="increment"
                        onClick={() => setAdult(adult + 1)}
                      >
                        <i className="bi bi-plus-circle-fill"></i>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="child">
                <div className="d-flex j-c-b a-i-c">
                  <div>
                    <p className="category">کودک</p>
                    <p className="old">2 تا 12 سال</p>
                  </div>
                  <div>
                    <div className="d-flex j-c-a a-i-c flex-reverse">
                      <div
                        className={`${
                          child > 0 ? "decrement active" : "decrement"
                        }`}
                        onClick={() => child > 0 && setChild(child - 1)}
                      >
                        <i className="bi bi-dash-circle-fill"></i>
                      </div>
                      <div className="num">{child}</div>
                      <div
                        className="increment"
                        onClick={() => setChild(child + 1)}
                      >
                        <i className="bi bi-plus-circle-fill"></i>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="baby">
                <div className="d-flex j-c-b a-i-c">
                  <div>
                    <p className="category">نوزاد</p>
                    <p className="old">زیر 2 سال</p>
                  </div>
                  <div>
                    <div className="d-flex j-c-a a-i-c flex-reverse">
                      <div
                        className={`${
                          baby > 0 ? "decrement active" : "decrement"
                        }`}
                        onClick={() => baby > 0 && setBaby(baby - 1)}
                      >
                        <i className="bi bi-dash-circle-fill"></i>
                      </div>
                      <div className="num">{baby}</div>
                      <div
                        className="increment"
                        onClick={() => setBaby(baby + 1)}
                      >
                        <i className="bi bi-plus-circle-fill"></i>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="btn-search">
        <Button>جستوجوی بلیط هواپیما</Button>
      </div>
    </div>
  );
};

export default FlightInfo;
