import React, { Fragment } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./app.scss";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import SignInPage from "./pages/signinpage/SignInPage";
import AppPhone from "./pages/appPhone/AppPhone";
const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/app" element={<AppPhone />} />
      </Routes>
    </Fragment>
  );
};

export default App;
