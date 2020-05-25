import React, { useContext } from "react";
import { Button } from "../button";
import { StyledSignup } from "./signup.styles";
import { TextInput } from "../text-input";
import { CheckInput } from "../check-input";
import { MainContext } from "../../store";
import { createUser } from "../../data/axios";
import {
  userUpdateFirstNameAction,
  userUpdateLastNameAction,
  userUpdateTelephoneAction,
  userUpdateEmailAction,
  userUpdateBirthDateAction,
  userUpdatePasswordAction,
} from "../../store/actions";
import { navigate } from "@reach/router";

export const Signup = () => {
  const { state, dispatch } = useContext(MainContext);

  const updateState = (action, ...value) => {
    dispatch(action(...value));
  };

  const handleClick = async (e) => {
    console.log("Clicky clicky", state.user);
    e.preventDefault();
    if (state.user.email && state.user.pass && state.user.firstname) {
      handleCreateUser();
    } else {
      alert("Error: All fields are required!");
    }
  };

  const handleCreateUser = async () => {
    const payload = {
      displayName: state.user.firstname,
      email: state.user.email,
      password: state.user.pass,
      role: "role",
    };
    await createUser(payload);
    navigate("/login");
  };

  return (
    <StyledSignup data-test-id="signin">
      <form>
        <TextInput
          type="text"
          name="firstName"
          placeholder="First Name"
          value={state.user.firstname}
          required
          onChange={(e) =>
            updateState(userUpdateFirstNameAction, e.target.value)
          }
        />
        <TextInput
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={state.user.lastname}
          required
          onChange={(e) =>
            updateState(userUpdateLastNameAction, e.target.value)
          }
        />
        <TextInput
          type="tel"
          name="telephone"
          placeholder="Phone Number"
          onChange={(e) =>
            updateState(userUpdateTelephoneAction, e.target.value)
          }
        />
        <TextInput
          type="email"
          name="telephone"
          placeholder="Email"
          autoComplete="username"
          onChange={(e) => updateState(userUpdateEmailAction, e.target.value)}
        />
        <TextInput
          type="date"
          name="birthdate"
          placeholder="Date of birth"
          onChange={(e) =>
            updateState(userUpdateBirthDateAction, e.target.value)
          }
        />
        <TextInput
          type="password"
          name="password"
          placeholder="Password"
          autoComplete="current-password"
          onChange={(e) =>
            updateState(userUpdatePasswordAction, e.target.value)
          }
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
    </StyledSignup>
  );
};
