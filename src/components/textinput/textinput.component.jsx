import React from "react";
import { StyledInput } from "./textinput.styles";
export const TextInput = ({
  children,
  type,
  name,
  placeholder,
  autoComplete,
  value,
  onChange,
}) => {
  return (
    <StyledInput
      type={type}
      name={name}
      placeholder={placeholder}
      autoComplete={autoComplete}
      value={value}
      onChange={onChange}
    />
  );
};
