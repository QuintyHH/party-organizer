import React from "react";
import styled from "styled-components";

export const StyledInput = styled.input`
  margin: 1rem 5%;
  padding: 1rem;
  width: 40%;
  font-size: 1rem;
  color: grey;
  box-sizing: border-box;
  border-radius: 3px;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.2);
  border: 0;

  &::placeholder {
    color: #b2b2b2;
  }
`;
