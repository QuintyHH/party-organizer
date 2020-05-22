import React, { useContext } from "react";
import { Button } from "../button";
import { StyledSignin } from "./signin.styles";
import { TextInput } from "../textinput";
import { CheckInput } from "../checkinput";
import { MainContext } from "../../store";
import { userUpdateNameAction } from "../../store/actions";

export const Signin = () => {
  const { state, dispatch } = useContext(MainContext);

  const handleClick = (e) => {
    e.preventDefault();
    console.log("Clicky clicky", e);
    dispatch(userUpdateNameAction("Raz"));
  };

  return (
    <StyledSignin data-test-id="signin">
      <form>
        <TextInput type="text" name="firstName" placeholder="First Name" />
        <TextInput type="text" name="lastName" placeholder="Last Name" />
        <TextInput type="tel" name="telephone" placeholder="Phone Number" />
        <TextInput
          type="email"
          name="telephone"
          placeholder="Email"
          autoComplete="username"
        />
        <TextInput type="date" name="birthdate" placeholder="Date of birth" />
        <TextInput
          type="password"
          name="password"
          placeholder="Password"
          autoComplete="current-password"
        />
        <CheckInput
          type="checkbox"
          label={"I'd like to recieve emails"}
        ></CheckInput>
        <CheckInput
          type="checkbox"
          label={"Yes, I want to get text updates and reminders about my party"}
        ></CheckInput>

        <Button
          margin={"3rem auto auto auto"}
          background="rgba(250, 10, 10, 0.8)"
          color="white"
          width="10rem"
          onClick={handleClick}
        >
          Join The Fun
        </Button>
      </form>
    </StyledSignin>
  );
};
