import React, { Fragment } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import Service from "./components/Service";
import "./services.scss";
import { Services as servicesItem } from "./../../data/Services";
const Services = () => {
  const { width } = useWindowDimensions();
  return (
    <Fragment>
      {width < 768 && <h2 className="text-center">سرویس ها</h2>}
      <div className="services d-flex a-i-c">
        {servicesItem.map((item) => (
          <Service key={item.id} item={item} />
        ))}
      </div>
    </Fragment>
  );
};

export default Services;
