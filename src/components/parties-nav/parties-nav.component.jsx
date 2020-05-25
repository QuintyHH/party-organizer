import React from "react";
import { Link } from "@reach/router";
import { Button, ButtonGroup } from "../button";
import { PartyNavMenu, PartyNavMenuDiv } from "./parties-nav.styles";

export const PartiesNav = ({ children, ...props }) => {
  console.log("partynav", props);

  return (
    <div>
      <PartyNavMenu>
        <PartyNavMenuDiv>Available parties</PartyNavMenuDiv>
        <PartyNavMenuDiv>
          <ButtonGroup>
            <Link to="new">
              <Button>New</Button>
            </Link>

            <Link to="created">
              <Button>Created</Button>
            </Link>

            <Link to="joined">
              <Button>Joined</Button>
            </Link>

            <Link to="favorite">
              <Button>Favorite</Button>
            </Link>
          </ButtonGroup>
        </PartyNavMenuDiv>
      </PartyNavMenu>
      {children}
    </div>
  );
};
