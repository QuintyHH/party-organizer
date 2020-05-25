import React, { useEffect, useContext } from "react";
import { MainContext } from "../../store";
import { PartyRow, PartyRowHeader, PartyListWrapper } from "../party-row";
import { partyGetListAction, partyResetAction } from "../../store/actions";
import { getPartiesList } from "../../data/axios";
import { Button } from "../button";

export const ViewParties = (props) => {
  const { state, dispatch } = useContext(MainContext);
  const refresh = "/assets/ic_refresh.svg";
  useEffect(() => {
    updateState(partyResetAction);
    handleGetPartyList();
  }, []);

  const handleRefresh = () => {
    updateState(partyResetAction);
    handleGetPartyList();
  };

  const updateState = (action, ...value) => {
    dispatch(action(...value));
  };

  const handleGetPartyList = async () => {
    const token = state.user.token;
    updateState(partyGetListAction, await getPartiesList(token));
  };

  return (
    <PartyListWrapper>
      <PartyRowHeader />
      {state.partyList.map((party) => {
        return <PartyRow key={party.id}>{party}</PartyRow>;
      })}
      <Button
        onClick={handleRefresh}
        icon={refresh}
        radius="50px"
        margin="1rem auto"
        display="flex"
        height="3.5rem"
        padding="0.5rem 1.5rem 0.5rem 0.5rem"
      >
        More Parties
      </Button>
    </PartyListWrapper>
  );
};
