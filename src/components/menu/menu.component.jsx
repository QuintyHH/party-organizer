import React, { useContext } from "react";
import { NavMenu, NavMenuDiv, NavAvatar } from "./menu.styles";
import { Button } from "../button";
import { Link } from "@reach/router";
import { MainContext } from "../../store";
import { userResetAction } from "../../store/actions";

export const Menu = () => {
  const pen = "/assets/ic_create.svg";
  const avatarOut = "/assets/ic_account_circle.svg";
  const avatarIn =
    "https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg";
  const { state, dispatch } = useContext(MainContext);

  const updateState = (action, ...value) => {
    dispatch(action(...value));
  };

  const handleLogout = () => {
    updateState(userResetAction);
  };

  return (
    <NavMenu data-test-id="top-nav-menu">
      <NavMenuDiv>
        {state.user.token && (
          <Link to="party/createparty">
            <Button
              icon={pen}
              radius={"50px"}
              padding={"0.5rem 1rem 0.5rem 0"}
              margin={"0 1rem"}
            >
              Create Party
            </Button>
          </Link>
        )}
      </NavMenuDiv>
      <NavMenuDiv>
        {state.user.token && (
          <Link to="party/new">
            <Button>Home</Button>
          </Link>
        )}
        {!state.user.token && (
          <Link to="authentication/signup">
            <Button>Signup</Button>
          </Link>
        )}

        <Link to="authentication/login">
          {!state.user.token ? (
            <Button>Login</Button>
          ) : (
            <Button onClick={handleLogout}>Logout</Button>
          )}
        </Link>

        <Link to="/help">
          <Button>Help</Button>
        </Link>

        <NavAvatar icon={state.user.token ? avatarIn : avatarOut}></NavAvatar>
      </NavMenuDiv>
    </NavMenu>
  );
};
