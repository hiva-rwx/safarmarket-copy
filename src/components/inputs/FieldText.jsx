import React, { Fragment } from "react";
import "./input.scss";
const FieldText = ({
  label,
  placeholder,
  nameField,
  icon,
  descs,
  value,
  onChange,
}) => {
  return (
    <Fragment>
      <div className="form-control">
        <div className="field-text">
          <label className="label" htmlFor={nameField}>
            {label}
          </label>
          <input
            className="input"
            placeholder={placeholder}
            name={nameField}
            id={nameField}
            value={value}
            onChange={onChange}
          />
          <div className="icon">{icon}</div>
        </div>
        <div className="rules text-right">
          {descs?.map((desc, index) => (
            <span key={index} className="my-2">
              {desc}
            </span>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default FieldText;
