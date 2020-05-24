import React from "react";
import { Link } from "@reach/router";
import { Button } from "../button";
import { PartyNavMenu, PartyNavMenuDiv } from "./parties-nav.styles";

export const PartiesNav = ({ children }) => {
  return (
    <PartyNavMenu>
      <PartyNavMenuDiv>Text</PartyNavMenuDiv>
      <PartyNavMenuDiv>
        <Link to="new">
          <Button>New</Button>
        </Link>
        <Link to="created">
          <Button>Created</Button>
        </Link>
        <Link to="joined">
          <Button>Joined</Button>
        </Link>
        <Link to="created">
          <Button>Favorite</Button>
        </Link>
      </PartyNavMenuDiv>
      {children}
    </PartyNavMenu>
  );
};
