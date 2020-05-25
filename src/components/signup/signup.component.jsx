import React, { useContext } from "react";
import { Button } from "../button";
import { StyledSignup } from "./signup.styles";
import { TextInput } from "../textinput";
import { CheckInput } from "../checkinput";
import { MainContext } from "../../store";
import axios from "axios";
import {
  userUpdateFirstNameAction,
  userUpdateLastNameAction,
  userUpdateTelephoneAction,
  userUpdateEmailAction,
  userUpdateBirthDateAction,
  userUpdatePasswordAction,
} from "../../store/actions";

export const Signup = () => {
  const { state, dispatch } = useContext(MainContext);

  const updateState = (action, ...value) => {
    dispatch(action(...value));
  };

  const handleClick = async (e) => {
    console.log("Clicky clicky", state.user);
    e.preventDefault();
    if (state.user.email && state.user.pass && state.user.firstname) {
      createUser();
    } else {
      alert("Error: All fields are required!");
    }
  };

  const createUser = async () => {
    try {
      const role = "user";
      const displayName = state.user.firstname;
      const email = state.user.email;
      const password = state.user.pass;
      await axios.post(
        "https://us-central1-party-organizer-98c23.cloudfunctions.net/api/user",
        {
          displayName,
          email,
          password,
          role,
        }
      );
    } catch (err) {
      alert(err);
    }
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
