import React from "react";
import { Link } from "@reach/router";
import { Button } from "../button";
import { StyledAuthMenu } from "./authentication-nav.styles";

export const AuthenticationNav = ({ children, ...props }) => {
  return (
    <div>
      <StyledAuthMenu data-test-id="auth-nav-menu">
        <Link to="signup">
          {props.location.pathname === "/authentication/signup" ? (
            <Button color={"darkslategray"}>New User</Button>
          ) : (
            <Button>New User</Button>
          )}
        </Link>

        <Link to="login">
          {props.location.pathname === "/authentication/login" ? (
            <Button color={"darkslategray"}>Already a member?</Button>
          ) : (
            <Button>Already a member?</Button>
          )}
        </Link>
      </StyledAuthMenu>
      {children}
    </div>
  );
};
