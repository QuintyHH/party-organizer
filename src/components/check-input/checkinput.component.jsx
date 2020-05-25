import React from "react";
import { StyledInput } from "./checkinput.styles";
export const CheckInput = ({
  children,
  type,
  name,
  placeholder,
  autoComplete,
  value,
  label,
}) => {
  return (
    <StyledInput
      type={type}
      name={name}
      placeholder={placeholder}
      autoComplete={autoComplete}
      value={value}
      label={label}
    >
      {children}
    </StyledInput>
  );
};
