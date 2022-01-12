import React, { useState } from "react";
import { Field, Form } from "react-final-form";
import { Link } from "react-router-dom";
import Button from "../../components/buttons/Button";
import "./signin.scss";
const SignInPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = () => {};

  const validation = ({ phoneNumber, email, password }) => {
    const errors = {};
    if (!phoneNumber?.length) errors.phoneNumber = "این فیلد اجباری است";
    if (!email?.length) errors.email = "این فیلد اجباری است";
    if (!password?.length) errors.password = "این فیلد اجباری است";

    if (phoneNumber?.length < 11)
      errors.phoneNumber = "شماره وارد شده اشتباه است";

    if (password?.length < 4) errors.password = "رمز عبور کوتاه است";

    return errors;
  };

  return (
    <div className="signin">
      <div className="logo">
        <Link to={"/"}>
          <h4 className="d-flex j-c-c">
            <span style={{ color: "#ff6348" }}>Safar</span>
            <span style={{ color: "#747d8c" }}>estan</span>
          </h4>
        </Link>
      </div>
      <div className="form mx-auto my-8 w-100 p-8" style={{ direction: "rtl" }}>
        <p className="title text-right">ورود / ثبت نام</p>
        <Form
          onSubmit={onSubmit}
          validate={validation}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Field
                name="phoneNumber"
                render={({ input, meta }) => (
                  <div className="form-control">
                    <div className="input">
                      <label htmlFor="phoneNumber">تلفن همراه</label>
                      <input
                        {...input}
                        placeholder={"تلفن همراه"}
                        type="tel"
                        maxLength={11}
                      />
                      <div className="icon">
                        <i className="bi bi-phone"></i>
                      </div>
                      {!meta.active && meta.touched && meta.error && (
                        <span className="error">{meta.error}</span>
                      )}
                    </div>
                  </div>
                )}
              />
              <Field
                name="email"
                render={({ input, meta }) => (
                  <div className="form-control">
                    <div className="input">
                      <label htmlFor="email">ایمیل</label>
                      <input {...input} placeholder={"ایمیل"} type="email" />
                      <div className="icon">
                        <i className="bi bi-envelope"></i>
                      </div>
                      {!meta.active && meta.touched && meta.error && (
                        <span className="error">{meta.error}</span>
                      )}
                    </div>
                  </div>
                )}
              />
              <Field
                name="password"
                render={({ input, meta }) => (
                  <div className="form-control">
                    <div className="input">
                      <label htmlFor="password">رمز عبور</label>
                      <input
                        {...input}
                        placeholder={"رمز عبور"}
                        type={showPassword ? "text" : "password"}
                      />
                      <div className="icon">
                        <i className="bi bi-lock"></i>
                      </div>
                      <div
                        className="eye"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <i className="bi bi-eye"></i>
                        ) : (
                          <i className="bi bi-eye-slash"></i>
                        )}
                      </div>
                      {!meta.active && meta.touched && meta.error && (
                        <span className="error">{meta.error}</span>
                      )}
                    </div>
                  </div>
                )}
              />
              <Button>ورود یه سفرستان</Button>
            </form>
          )}
        />
        <p className="text-right desc my-8">
          با ورود و یا ثبت نام در سفرمارکت، شما شرایط و قوانین استفاده از سرویس
          های سایت سفرمارکت و قوانین حریم خصوصی آن را می‌پذیرید.
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
