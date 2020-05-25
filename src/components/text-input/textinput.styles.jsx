import styled from "styled-components";

export const StyledInputWrapper = styled.div`
  display: ${(prop) => (prop.display ? prop.display : "inline-block")};
  width: ${(prop) => (prop.width ? prop.width : "40%")};
  margin: 0.5rem 5%;
`;

export const StyledLabel = styled.div`
  display: ${(prop) => (prop.display ? prop.display : "inline-block")};
  width: ${(prop) => (prop.width ? prop.width : "40%")};
  margin: 1rem 5%;
  color: #b2b2b2;
`;

export const StyledInput = styled.input`
  padding: 1rem;
  width: 100%;
  font-size: 1rem;
  color: #b2b2b2;
  box-sizing: border-box;
  border-radius: 3px;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.2);
  border: 0;
  height: 3rem;

  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #b2b2b2;
  }
`;
