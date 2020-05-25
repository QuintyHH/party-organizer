import React, { useContext } from "react";
import { Menu } from "../menu";
import { Slider } from "../slider";
import { Header } from "../header";
import { Login } from "../login";
import { StyledWrapper } from "./main.styles";
import { ContentWrapper } from "../content";
import { Router } from "@reach/router";
import { Signup } from "../signup";
import { Help } from "../help";
import { ViewParties } from "../viewparties";
import { AuthenticationNav } from "../authentication-nav";
import { MainContext } from "../../store";
import { CreateParty } from "../createparty";
import { PartiesNav } from "../parties-nav";

export const Main = () => {
  // const { state, dispatch } = useContext(MainContext);

  return (
    <StyledWrapper data-test-id="wrapper">
      <Header>
        <Menu />
        <Slider />
      </Header>
      <Router>
        <ContentWrapper path="/">
          <AuthenticationNav path="authentication">
            <Signup path="signup" />
            <Login path="login" />
          </AuthenticationNav>
        </ContentWrapper>
        <Help path="help" />
        <PartiesNav path="party">
          <ViewParties path="new" />
          <ContentWrapper path="/">
            <CreateParty path="createparty" />
          </ContentWrapper>
        </PartiesNav>
      </Router>
    </StyledWrapper>
  );
};
