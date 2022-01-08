import React, { Fragment } from "react";
import "./input.scss";
const FieldNumber = ({
  label,
  placeholder,
  nameField,
  icon,
  error,
  max,
  type,
  value,
  onChange,
}) => {
  return (
    <Fragment>
      <div className="form-control">
        <div className="field-number">
          <label className="label" htmlFor={nameField}>
            {label}
          </label>
          <input
            className="input"
            placeholder={placeholder}
            name={nameField}
            id={nameField}
            type={type}
            autoComplete="off"
            maxLength={max}
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
        {/* {rules.length && (
          <div className="rules text-right">
            {rules?.map((rule, i) => {
              return (
                <div key={i}>
                  {rule === "required" && <span>این فیلد اجباری است</span>}
                </div>
              );
            })}
          </div> */}
        {/* )} */}
        {/* <div className="rules text-right">
          {rules?.map((rule, i) => {
            console.log(rule);
            return (
              <div key={i}>
                {rule.reqired && <span className="my-2">{rule.reqired}</span>}
                {rule.max && <span className="my-2">{rule.max}</span>}
              </div>
            );
          })}
        </div> */}
      </div>
    </Fragment>
  );
};

export default FieldNumber;
