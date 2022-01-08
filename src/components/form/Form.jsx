import React from "react";

const Form = (props, { onSubmit }) => {
  return (
    <form onSubmit={onSubmit} {...props}>
      {props.children}
    </form>
  );
};

export default Form;
