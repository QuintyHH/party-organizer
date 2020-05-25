import React, { useContext, useEffect, useState } from "react";
import { MainContext } from "../../store";
import { PartyRow, PartyRowHeader, PartyListWrapper } from "../party-row";
import { Button } from "../button";

export const CreatedParties = () => {
  const { state } = useContext(MainContext);
  const [createdList, setCreatedList] = useState([]);
  const refresh = "/assets/ic_refresh.svg";

  useEffect(() => {
    getFavList();
  }, []);

  const handleRefresh = () => {
    setCreatedList([]);
    getFavList();
  };

  const getFavList = () => {
    let list = state.partyList.filter(
      (item) => item.author === state.user.displayName
    );
    setCreatedList(list);
  };

  return (
    <PartyListWrapper>
      <PartyRowHeader />
      {createdList.map((party) => {
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
