import React, { Fragment } from "react";
import { Field, Form } from "react-final-form";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Button from "../../components/buttons/Button";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import Sidebar from "../../components/sidebar/Sidebar";
import Container from "./../../components/container/Container";

import "./appphone.scss";
const AppPhone = () => {
  const items = [
    {
      id: 1,
      title: "قیمت های ویژه",
      desc: "قیمت های ویژه با تخفیف های وسوسه انگیز، فقط در اپلیکیشن سفرمارکت قابل خرید می باشد",
      image: "./images/item1.png",
    },
    {
      id: 2,
      title: "گلچین",
      desc: "با دانلود اپلیکیشن سفرمارکت دیگه نگران این نباش که کجا و کی و چطوری بری! گلچین سفر اونجاست",
      image: "./images/item2.png",
    },
    {
      id: 3,
      title: "وسوسه نارنجی",
      desc: "استفاده از تخفیف های ساعتی ویژه برای تور، بلیط هواپیما و هتل فقط در اپلیکیشن سفرمارکت امکان پذیر است.",
      image: "./images/item3.png",
    },
    {
      id: 4,
      title: "اطلاع رسانی",
      desc: "با نصب اپلیکیشن سفرمارکت هیچ تخفیف و یا جشنواره فروشی را از دست ندهید.",
      image: "./images/item4.png",
    },
    {
      id: 5,
      title: "هر ماه یک موتور برقی",
      desc: "با دانلود و نصب اپلیکیشن موبایل سفرمارکت در قرعه کشی ماهانه یک موتور برقی شرکت کنید",
      image: "./images/item5.png",
    },
  ];

  const { width } = useWindowDimensions();

  const onSubmit = () => {};

  return (
    <Fragment>
      <Sidebar />
      <div className="application">
        <Container>
          <Header />
          <div className={`banner d-flex j-c-a a-i-c`}>
            <div className="banner-img"></div>
            <div></div>
            <div></div>
            <div className="phone">
              <div className="el-sticky">
                <img src="./images/phone.png" alt="" width={300} />
              </div>
            </div>

            <div className="award text-right">
              <p>اپلیکیشن سفرستان رو نصب کن</p>
              <p>و موتور برقی برنده شو</p>
              <p>
                برای دریافت لینک دانلود اپلیکیشن بر روی موبایل، شماره همراه تان
                را در کادر زیر وارد کنید.
              </p>
              {width >= 991 && (
                <Form
                  onSubmit={onSubmit}
                  render={({ handleSubmit }) => (
                    <div className="form">
                      <form onSubmit={handleSubmit}>
                        <Field
                          name="phoneNumber"
                          render={({ input, meta }) => (
                            <div className="form-control">
                              <input
                                {...input}
                                className="rounded-1"
                                maxLength={11}
                                type={"tel"}
                                placeholder={
                                  "شماره موبایل خود را وارد کنید ، مثلا 09123456789"
                                }
                              />
                            </div>
                          )}
                        />
                      </form>
                    </div>
                  )}
                />
              )}
              <Button className={"get-link rounded-1"}>
                {width >= 991 ? "دریافت لینک دانلود" : "نصب کن"}
              </Button>
              <Button className={"share rounded-1 d-flex j-c-c a-i-c"}>
                <i class="bi bi-share-fill"></i> <span>به اشتراک بگذار</span>{" "}
              </Button>
            </div>
          </div>

          <section>
            <div className="content">
              <div className="title">
                <h3>چرا از اپلیکیشن سفرمارکت استفاده کنیم؟</h3>
                <p className="my-8">
                  دیگه لازم نیست تا ۱۰۰ تا اپلیکیشن سفر رو دانلود کنی تا ارزون
                  ترین بلیط هواپیما یا تور و یا ... خرید کنی
                </p>
                <p>
                  با{" "}
                  <span style={{ color: "#ff690f " }}>اپلیکیشن سفرمارکت</span>{" "}
                  همه ی اپ های سفر رو یکجا داشته باش، علاوه بر اون:
                </p>
                <div className="items">
                  {items.map((item) => (
                    <div className="item d-flex my-16" key={item.id}>
                      <div className="pictuer mx-8">
                        <img
                          src={`${item.image}`}
                          style={{ width: "5rem" }}
                          alt=""
                        />
                      </div>
                      <div className="desc d-flex flex-col">
                        <p style={{ fontSize: "1.5rem" }}>{item.title}</p>
                        <p style={{ fontSize: ".8rem" }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <div className="banner-setup">
            <p style={{ fontSize: "1.3rem" }}>همین الان نصب کن</p>
            <p className="my-8" style={{ fontSize: ".8rem" }}>
              اپلیکیشن سفرمارکت را از مارکت‌های زیر دانلود کنید
            </p>
            <div className="d-flex">
              <div className="store rounded-1 mx-8">
                <Link to={"/"}>
                  <img src="./images/googleplay.png" alt="" />
                </Link>
              </div>
              <div className="store rounded-1 mx-8">
                <Link to={"/"}>
                  <img src="./images/bazar.png" alt="" />
                </Link>
              </div>
            </div>
            <br />
            <div className="mt-8 mx-8">
              <Link to={"/"}>
                <img src="./images/iphone.png" alt="" />
              </Link>
            </div>
          </div>

          <Footer />
          {/* </div> */}
        </Container>
      </div>
    </Fragment>
  );
};

export default AppPhone;
