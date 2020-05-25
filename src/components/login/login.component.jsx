import React, { useContext, useEffect } from "react";
import { Button } from "../button";
import { StyledLogin } from "./login.styles";
import { TextInput } from "../text-input";
import { MainContext } from "../../store";
import { navigate } from "@reach/router";

import {
  userUpdateEmailAction,
  userUpdatePasswordAction,
  userUpdateTokenAction,
  userUpdateRoleAction,
  userUpdateFirstNameAction,
  userUpdateLastNameAction,
  userUpdateDisplayNameAction,
  userUpdateIDAction,
} from "../../store/actions";
import { auth } from "../../data/firebase";

export const Login = () => {
  const { state, dispatch } = useContext(MainContext);

  const updateState = (action, ...value) => {
    dispatch(action(...value));
  };

  useEffect(() => {
    updateUserInformationLocally();
  }, [state.user.token]);

  const handleClick = (e) => {
    e.preventDefault();
    if (state.user.email && state.user.pass) {
      attemptLogin();
    } else {
      alert("Error: All fields are required!");
    }
  };

  const attemptLogin = async () => {
    try {
      const { email, pass } = state.user;
      let { user } = await auth.signInWithEmailAndPassword(email, pass);
      let role = (await auth.currentUser.getIdTokenResult()).claims.role;
      let token = await auth.currentUser.getIdToken();
      updateUserState(user, role, token);
      console.log(user);
      navigate("/party/new");
    } catch (err) {
      alert(err);
    }
  };

  const updateUserState = (user, role, token) => {
    updateState(userUpdateRoleAction, role);
    updateState(userUpdateFirstNameAction, user.displayName.split(" ")[0]);
    updateState(userUpdateLastNameAction, user.displayName.split(" ")[1]);
    updateState(userUpdateDisplayNameAction, user.displayName);
    updateState(userUpdateIDAction, user.uid);
    updateState(userUpdatePasswordAction, undefined);
    updateState(userUpdateTokenAction, token);
  };

  const updateUserInformationLocally = () => {
    state.user.token
      ? window.sessionStorage.setItem(
          "userInformation",
          JSON.stringify(state.user)
        )
      : window.sessionStorage.removeItem("userInformation");
  };

  return (
    <StyledLogin data-test-id="login">
      <form onSubmit={handleClick}>
        <TextInput
          type="email"
          name="email"
          placeholder="Email"
          autoComplete="username"
          onChange={(e) => updateState(userUpdateEmailAction, e.target.value)}
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
