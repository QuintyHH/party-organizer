import React from "react";
import { NavMenu, NavMenuDiv } from "./menu.styles";
import { Button } from "../button";
import { Link } from "@reach/router";

export const Menu = () => {
  const pen = "/assets/ic_create.svg";
  const avatar = "/assets/ic_account_circle.svg";

  return (
    <NavMenu data-test-id="top-nav-menu">
      <NavMenuDiv>
        <Link to="/">
          <Button
            icon={pen}
            radius={"50px"}
            padding={"0.5rem 1rem 0.5rem 0"}
            margin={"0"}
          >
            Create Party
          </Button>
        </Link>
      </NavMenuDiv>
      <NavMenuDiv>
        <Link to="/help">
          <Button>Help</Button>
        </Link>
        <Link to="authentication/signup">
          <Button>Signup</Button>
        </Link>
        <Link to="authentication/login">
          <Button>Login</Button>
        </Link>
        <Button
          icon={avatar}
          width={"2.5rem"}
          height={"2.5rem"}
          radius={"50px"}
          padding={"0"}
          margin={"auto"}
        ></Button>
      </NavMenuDiv>
    </NavMenu>
  );
};
