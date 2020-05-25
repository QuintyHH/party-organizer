import React from "react";
import { Link } from "@reach/router";
import { Button, ButtonGroup } from "../button";
import { PartyNavMenu, PartyNavMenuDiv } from "./parties-nav.styles";

export const PartiesNav = ({ children, ...props }) => {
  const star = "/assets/Icon-1.svg";

  const getPartyMenuTitle = () => {
    switch (props.location.pathname) {
      case "/party/new":
        return "Top Parties";
      case "/party/created":
        return "Parties I created";
      case "/party/joined":
        return "Parties I Joined";
      case "/party/favorite":
        return "Favorite Parties";
      case "/party/createparty":
        return "Organize new party";
      default:
        return "Available Parties";
    }
  };

  const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <PartyNavMenu>
        <PartyNavMenuDiv>
          <Button
            onClick={handleScroll}
            icon={star}
            margin={"auto 0"}
            iconMargin={"auto 1rem auto 0"}
            padding={"0"}
          >
            {getPartyMenuTitle()}
          </Button>
        </PartyNavMenuDiv>
        <PartyNavMenuDiv>
          <ButtonGroup>
            <Link to="new">
              {props.location.pathname === "/party/new" ? (
                <Button color={"darkslategray"}>New</Button>
              ) : (
                <Button>New</Button>
              )}
            </Link>

            <Link to="created">
              {props.location.pathname === "/party/created" ? (
                <Button color={"darkslategray"}>Created</Button>
              ) : (
                <Button>Created</Button>
              )}
            </Link>

            <Link to="joined">
              {props.location.pathname === "/party/joined" ? (
                <Button color={"darkslategray"}>Joined</Button>
              ) : (
                <Button>Joined</Button>
              )}
            </Link>

            <Link to="favorite">
              {props.location.pathname === "/party/favorite" ? (
                <Button color={"darkslategray"}>Favorite</Button>
              ) : (
                <Button>Favorite</Button>
              )}
            </Link>
          </ButtonGroup>
        </PartyNavMenuDiv>
      </PartyNavMenu>
      {children}
    </div>
  );
};
