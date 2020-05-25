import React, { useContext } from "react";
import { MainContext } from "../../store";
import axios from "axios";
import {
  StyledPartyRow,
  PartyListImg,
  PartyListImgTiny,
  PartyListText,
} from "./partyrow.styles";

export const PartyRow = ({ children }) => {
  const { state } = useContext(MainContext);
  const avatar = "/assets/ic_account_circle.svg";
  const add = "/assets/ic_playlist_add.svg";
  const favorite = "/assets/ic_favorite.svg";

  const addToFavorites = () => {
    let favoriteList =
      JSON.parse(window.localStorage.getItem(`${state.user.uid}-favList`)) ||
      [];

    if (favoriteList.filter((item) => item.id === children.id).length === 0) {
      window.localStorage.setItem(
        `${state.user.uid}-favList`,
        JSON.stringify([...favoriteList, children])
      );
    }
  };

  const addToAttend = async () => {
    try {
      const atendeeList = {
        ...children.atendeeList,
        id: state.user.displayName,
      };
      axios.defaults.headers.common = {
        Authorization: `Bearer ${state.user.token}`,
      };
      await axios.post(
        "https://us-central1-party-organizer-98c23.cloudfunctions.net/api/party",
        { ...children, atendeeList }
      );
    } catch (err) {
      alert(err);
    }
  };

  return (
    <StyledPartyRow>
      {children.avatarURL ? (
        <PartyListImg src={children.avatarURLavatar} />
      ) : (
        <PartyListImgTiny src={avatar} />
      )}
      <PartyListText>{children.name}</PartyListText>
      <PartyListText>
        {children.atendeeList ? Object.keys(children.atendeeList).length : 0}
      </PartyListText>
      <PartyListText>{children.author}</PartyListText>
      <PartyListText>{children.description}</PartyListText>
      <PartyListImgTiny src={favorite} onClick={addToFavorites} />
      <PartyListImgTiny src={add} onClick={addToAttend} />
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
