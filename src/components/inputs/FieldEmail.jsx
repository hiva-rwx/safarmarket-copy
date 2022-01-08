import React, { Fragment } from "react";
import "./input.scss";
const FieldEmail = ({
  label,
  placeholder,
  nameField,
  icon,
  value,
  onChange,
  error,
}) => {
  return (
    <Fragment>
      <div className="form-control">
        <div className="field-email">
          <label className="label" htmlFor={nameField}>
            {label}
          </label>
          <input
            className="input"
            placeholder={placeholder}
            name={nameField}
            id={nameField}
            type={"email"}
            value={value}
            onChange={onChange}
          />
          <div className="icon">{icon}</div>
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
          {rules.valid && <span className="my-2">{rules.valid}</span>}
        </div> */}
      </div>
    </Fragment>
  );
};

export default FieldEmail;
