import React from "react";
import {
  StyledInput,
  StyledInputWrapper,
  StyledLabel,
} from "./textinput.styles";
export const TextInput = ({
  type,
  name,
  placeholder,
  autoComplete,
  label,
  value,
  width,
  display,
  onChange,
}) => {
  return (
    <StyledInputWrapper width={width} display={display}>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput
        type={type}
        name={name}
        placeholder={placeholder}
        autoComplete={autoComplete}
        value={value}
        onChange={onChange}
      />
    </StyledInputWrapper>
  );
};
