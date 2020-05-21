import React from "react";
import styled from "styled-components";

const SInput = styled.div`
  display: contents;
  input {
    margin: 1rem 5%;
    padding: 1rem;
    width: 40%;
    font-size: 1rem;
    color: grey;
    box-sizing: border-box;
    border-radius: 3px;
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.2);
    border: 0;
  }

  input::placeholder {
    color: #b2b2b2;
  }
`;

export const StyledInput = ({
  children,
  type,
  name,
  placeholder,
  autoComplete,
  value,
}) => {
  return (
    <SInput data-test-id="text-input">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        autoComplete={autoComplete}
        value={value}
      >
        {children}
      </input>
    </SInput>
  );
};
