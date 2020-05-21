import React from "react";
import styled from "styled-components";

const SSlider = styled.div`
  background-image: url("/assets/partyAlternative.jpg");
  width: 100%;
  height: 500px;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 1;
`;

const SStrip = styled.div`
  min-height: max-content;
  width: 100%;
  background-color: rgba(250, 10, 10, 0.5);
  margin: auto;
  padding: 1rem 0;
  transform: translateY(-50%);
  top: 50%;
  position: relative;
  box-sizing: border-box;
  display: flex;
`;

const SText = styled.div`
  color: white;
  font-size: 3rem;
  margin: auto;
  width: max-content;
  text-align: center;
  font-family: "Roboto", sans-serif;
`;

export const StyledSlider = ({ children }) => {
  return (
    <SSlider data-test-id="slider">
      <SStrip>
        <SText>{children}</SText>
      </SStrip>
    </SSlider>
  );
};
