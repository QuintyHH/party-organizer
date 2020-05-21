import React from "react";
import { StyledHeader } from "./header.styles";
export const Header = ({ children }) => (
  <StyledHeader data-test-id="header-wrapper">{children}</StyledHeader>
);
