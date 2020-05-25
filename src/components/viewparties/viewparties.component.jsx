import React, { useEffect, useContext } from "react";
import { MainContext } from "../../store";
import { PartyRow, PartyRowHeader, PartyListWrapper } from "../party-row";
import { partyGetListAction, partyResetAction } from "../../store/actions";
import axios from "axios";
import { Button } from "../button";

export const ViewParties = () => {
  const { state, dispatch } = useContext(MainContext);
  const refresh = "/assets/ic_refresh.svg";
  useEffect(() => {
    if (state.partyList.length < 1) {
      getPartiesList();
    }
  }, []);

  useEffect(() => {
    console.log(state);
  }, [state]);

  const handleRefresh = () => {
    updateState(partyResetAction);
    getPartiesList();
  };

  const updateState = (action, ...value) => {
    dispatch(action(...value));
  };

  const getPartiesList = async () => {
    try {
      const partyResponse = await axios.get(
        "https://us-central1-party-organizer-98c23.cloudfunctions.net/api/party",
        {
          headers: {
            Authorization: `Bearer ${state.user.token}`,
          },
        }
      );
      updateState(partyGetListAction, partyResponse.data.partyList);
    } catch (err) {
      console.log(err);
    }
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
