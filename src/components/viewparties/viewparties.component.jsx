import React, { useEffect, useContext } from "react";
import axios from "axios";
import { MainContext } from "../../store";
import { partyGetListAction, partyResetAction } from "../../store/actions";

export const ViewParties = () => {
  const { state, dispatch } = useContext(MainContext);

  useEffect(() => {
    getPartiesList();
    return () => {
      updateState(partyResetAction);
      console.log("Unmount", state);
    };
  }, []);

  useEffect(() => {
    console.log(state);
  }, [state]);

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
    <div>
      {state.partyList.map((party) => {
        return (
          <div key={party.id}>
            <div>{party.name}</div>
            <div>{party.description}</div>
            <div>{party.author}</div>
          </div>
        );
      })}
    </div>
  );
};
// {
//   React.useMemo(() => {
//     console.log("Name re-render");
//     return <h2>Selected Name: {name ? name : "None"}</h2>;
//   }, [name]);
// }
