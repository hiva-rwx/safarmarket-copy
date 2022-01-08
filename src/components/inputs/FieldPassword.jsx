import React, { Fragment, useState } from "react";
import "./input.scss";
const FieldPassword = ({
  label,
  placeholder,
  nameField,
  icon,
  error,
  value,
  onChange,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Fragment>
      <div className="form-control">
        <div className="field-password">
          <label className="label" htmlFor={nameField}>
            {label}
          </label>
          <input
            className="input"
            placeholder={placeholder}
            name={nameField}
            id={nameField}
            type={showPassword ? "text" : "password"}
            value={value}
            onChange={onChange}
          />
          <div className="icon">{icon}</div>
          <div
            className="show-password"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <i className="bi bi-eye"></i>
            ) : (
              <i className="bi bi-eye-slash"></i>
            )}
          </div>
        </div>
        <div className="error">{error}</div>

        {/* {Object.values(errors).map((error, index) => (
          <div className="rules text-right" key={index}>
            {error}
          </div>
        ))} */}
        {/* <div className="rules text-right">
          {rules.reqired && !value.length && (
            <span className="my-2">{rules.reqired}</span>
          )}
          {rules.min && value.length <= 5 && (
            <span className="my-2">{rules.min}</span>
          )}
        </div> */}
      </div>
    </Fragment>
  );
};

export default FieldPassword;
