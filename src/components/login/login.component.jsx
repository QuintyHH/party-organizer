import React from "react";
import { Button } from "../button";
import { StyledLogin } from "./login.styles";
import { TextInput } from "../textinput";

export const Login = () => {
  let handleClick = (e) => {
    e.preventDefault();
    console.log("Clicky clicky", e);
  };

  return (
    <StyledLogin data-test-id="login">
      <form>
        <TextInput
          type="email"
          name="email"
          placeholder="Email"
          autoComplete="username"
        />
        <TextInput
          type="password"
          name="password"
          placeholder="Password"
          autoComplete="current-password"
        />
        <Button
          margin={"3rem auto auto auto"}
          background="rgba(250, 10, 10, 0.8)"
          color="white"
          width="10rem"
          onClick={handleClick}
        >
          Login
        </Button>
      </form>
    </StyledLogin>
  );
};
