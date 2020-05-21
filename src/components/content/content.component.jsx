import React from "react";
import { StyledContentWrapper } from "./content.styles";
export const ContentWrapper = ({ children }) => {
  return (
    <StyledContentWrapper data-test-id="content-wrapper">
      {children}
    </StyledContentWrapper>
  );
};
