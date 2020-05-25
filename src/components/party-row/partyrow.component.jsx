import React, { useContext } from "react";
import { MainContext } from "../../store";
import { partyGetListAction, partyResetAction } from "../../store/actions";
import { getPartiesList, attendParty, deleteParty } from "../../data/axios";
import {
  StyledPartyRow,
  PartyListImg,
  PartyListImgTiny,
  PartyListText,
} from "./partyrow.styles";

export const PartyRow = ({ children }) => {
  const { state, dispatch } = useContext(MainContext);
  const avatar = "/assets/ic_account_circle.svg";
  const add = "/assets/ic_playlist_add.svg";
  const favorite = "/assets/ic_favorite.svg";
  const discard = "/assets/ic_delete.svg";
  const token = state.user.token;

  const handleGetPartyList = async () => {
    updateState(partyGetListAction, await getPartiesList(token));
  };

  const handleRefresh = () => {
    updateState(partyResetAction);
    handleGetPartyList();
  };

  const updateState = (action, ...value) => {
    dispatch(action(...value));
  };

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

  const handleDeleteParty = () => {
    const payload = { id: children.id };
    deleteParty(token, payload);
    handleRefresh();
    console.log("deleted");
  };

  const addToAttend = () => {
    const token = state.user.token;
    const payload = {
      ...children,
      atendeeList: {
        ...children.atendeeList,
        [state.user.uid]: state.user.displayName,
      },
    };
    attendParty(token, payload);
  };

  return (
    <StyledPartyRow>
      {children.avatarURL ? (
        <PartyListImg src={children.avatarURL} />
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
      <PartyListImgTiny src={discard} onClick={handleDeleteParty} />
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
