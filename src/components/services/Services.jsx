import React, { Fragment } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import Service from "./components/Service";
import "./services.scss";
const Services = () => {
  const items = [
    {
      id: 1,
      title: "مقایسه قیمت",
      desc: "قیمت سایت‌های مختلف رو توی اولین و بزرگترین بازار سفر یکجا ببین، مقایسه کن و بهترین گزینه رو انتخاب کن",
      icon: "services1",
    },
    {
      id: 2,
      title: "دیگه گرون نخر",
      desc: "همونطور که برای خرید کالا و خدمات با قیمت مناسب و ارزانتر از بقیه جاها به بازار و یا بورس اون می‌ری، برای خرید ارزونترین بلیط هواپیما و خدمات سفر هم ،به تنها بازار سفر گردشگری یعنی سفرمارکت بیا.",
      icon: "services2",
    },
    {
      id: 3,
      title: "خرید امن و مطمئن",
      desc: "همه فروشندگان سفرمارکت مجوزهای قانونی لازم از ارگان‌های مربوطه رو دارن. همچنین نماد اعتماد الکترونیک (ای‌نماد) پس با خیال راحت انتخاب و خرید کن",
      icon: "services3",
    },
    {
      id: 4,
      title: "خرید سریع و صحیح",
      desc: "به جای اینکه بین صدتا سایت و اپلیکیشن مختلف بگردی و آخرش هم گرون بخری، با سفرمارکت همه ی قیمت ها رو یکجا ببین و بهترین گزینه رو انتخاب کن.",
      icon: "services4",
    },
  ];
  const { width } = useWindowDimensions();
  return (
    <Fragment>
      {width < 768 && <h2 className="text-center">سرویس ها</h2>}
      <div className="services d-flex a-i-c">
        {items.map((item) => (
          <Service key={item.id} item={item} />
        ))}
      </div>
    </Fragment>
  );
};

export default Services;
