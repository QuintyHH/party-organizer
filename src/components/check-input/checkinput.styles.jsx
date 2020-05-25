import React from "react";
import styled from "styled-components";

const SInput = styled.div`
  display: block;
  min-width: max-content;
  box-sizing: border-box;
  input {
    display: inline-block;
    margin: 1rem 1rem 1rem 5%;
    padding: 1rem;
    font-size: 1rem;
    color: grey;
    border-radius: 3px;
  }
`;

const SLabel = styled.div`
  display: inline-block;
  font-size: 1rem;
  color: grey;
`;

export const StyledInput = ({
  children,
  type,
  name,
  placeholder,
  autoComplete,
  value,
  label,
}) => {
  return (
    <SInput data-test-id="check-input">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        autoComplete={autoComplete}
        value={value}
      >
        {children}
      </input>
      <SLabel>{label}</SLabel>
    </SInput>
  );
};
