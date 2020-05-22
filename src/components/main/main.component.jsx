import React, { useContext } from "react";
import { Menu } from "../menu";
import { Slider } from "../slider";
import { Header } from "../header";
import { Login } from "../login";
import { StyledWrapper } from "./main.styles";
import { ContentWrapper } from "../content";
import { Router } from "@reach/router";
import { Signin } from "../signin";
import { Help } from "../help";
import { Authentication } from "../authentication-wrapper";
import { MainContext } from "../../store";
//https://us-central1-party-organizer-98c23.cloudfunctions.net/api
///user and /party
export const Main = () => {
  const { state, dispatch } = useContext(MainContext);
  console.log(state, dispatch);

  return (
    <StyledWrapper data-test-id="wrapper">
      <Header>
        <Menu />
        <Slider />
      </Header>
      <ContentWrapper>
        <Router>
          <Authentication path="authentication">
            <Signin path="signup" />
            <Login path="login" />
          </Authentication>
          <Help path="help" />
        </Router>
      </ContentWrapper>
    </StyledWrapper>
  );
};
