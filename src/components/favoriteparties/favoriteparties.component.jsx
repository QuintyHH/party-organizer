import React, { useContext, useEffect, useState } from "react";
import { MainContext } from "../../store";
import { PartyRow, PartyRowHeader, PartyListWrapper } from "../party-row";
import { Button } from "../button";

export const FavoriteParties = () => {
  const { state } = useContext(MainContext);
  const [favList, setFavList] = useState([]);
  const refresh = "/assets/ic_refresh.svg";

  useEffect(() => {
    getFavList();
  }, []);

  const handleRefresh = () => {
    setFavList([]);
    getFavList();
  };

  const getFavList = () => {
    let favoriteList =
      JSON.parse(window.localStorage.getItem(`${state.user.uid}-favList`)) ||
      [];
    setFavList(favoriteList);
  };

  return (
    <PartyListWrapper>
      <PartyRowHeader />
      {favList.map((party) => {
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
