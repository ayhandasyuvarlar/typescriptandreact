import React from "react";
import { ButtonProps } from "../types/ButtonProps.types";

const Button = (props: ButtonProps) => {
  return <button onClick={(event) => props.handleClick(event, 1)}>Click</button>;
};

export default Button;
