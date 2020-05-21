import React from "react";
import { Link } from "@reach/router";
import { Button } from "../button";
import { StyledAuthMenu } from "./authentication-nav.styles";

export const AuthenticationNav = ({ children }) => {
  return (
    <StyledAuthMenu data-test-id="auth-nav-menu">
      <Link to="signup">
        <Button>New User</Button>
      </Link>
      <Link to="login">
        <Button>Already a member?</Button>
      </Link>
    </StyledAuthMenu>
  );
};
