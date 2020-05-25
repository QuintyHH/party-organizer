import React from "react";
import {
  StyledPartyRow,
  PartyListImg,
  PartyListImgTiny,
  PartyListText,
} from "./partyrow.styles";
export const PartyRow = ({ children }) => {
  const avatar = "/assets/ic_account_circle.svg";
  const add = "/assets/ic_playlist_add.svg";
  const favorite = "/assets/ic_favorite.svg";
  return (
    <StyledPartyRow>
      {children.avatarURL ? (
        <PartyListImg src={children.avatarURLavatar} />
      ) : (
        <PartyListImgTiny src={avatar} />
      )}
      <PartyListText>{children.name}</PartyListText>
      <div></div>
      <PartyListText>{children.author}</PartyListText>
      <PartyListText>{children.description}</PartyListText>
      <PartyListImgTiny src={favorite} />
      <PartyListImgTiny src={add} />
    </StyledPartyRow>
  );
};

export const PartyRowHeader = () => {
  return (
    <StyledPartyRow>
      <div></div>
      <PartyListText>Name</PartyListText>
      <PartyListText>People</PartyListText>
      <PartyListText>Host</PartyListText>
      <PartyListText>Location</PartyListText>
    </StyledPartyRow>
  );
};
