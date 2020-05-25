import React, { useEffect } from "react";
import { Menu } from "../menu";
import { Slider } from "../slider";
import { Header } from "../header";
import { Login } from "../login";
import { StyledWrapper } from "./main.styles";
import { ContentWrapper } from "../content";
import { Router, navigate } from "@reach/router";
import { Signup } from "../signup";
import { Help } from "../help";
import { ViewParties } from "../view-parties";
import { AuthenticationNav } from "../authentication-nav";
import { CreateParty } from "../create-a-party";
import { PartiesNav } from "../parties-nav";
import { FavoriteParties } from "../favorite-parties";
import { CreatedParties } from "../created-parties";
import { JoinedParties } from "../joined-parties";

export const Main = () => {
  useEffect(() => {
    if (window.sessionStorage.getItem("userInformation")) {
      console.log("Still in session");
      navigate("/party/new");
    } else {
      console.log("New session");
      navigate("/authentication/login");
    }
  }, []);

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
          <FavoriteParties path="favorite" />
          <CreatedParties path="created" />
          <JoinedParties path="joined" />
          <ContentWrapper path="/">
            <CreateParty path="createparty" />
          </ContentWrapper>
        </PartiesNav>
      </Router>
    </StyledWrapper>
  );
};
