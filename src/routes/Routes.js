import React from "react";
import { Routes as Paths, Route } from "react-router-dom";
import HomePage from "../screens/HomePage";
import SignInPage from "../screens/SignInPage";
const Routes = () => {
  return (
    <Paths>
      <Route path="/" element={<HomePage />} />
      <Route path="/signin" element={<SignInPage />} />
    </Paths>
  );
};

export default Routes;
