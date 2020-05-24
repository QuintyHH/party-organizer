import React, { useEffect, useContext } from "react";
import axios from "axios";
import { MainContext } from "../../store";

export const Help = ({ children }) => {
  const { state, dispatch } = useContext(MainContext);

  useEffect(() => {
    console.log(state);
  }, []);

  // const getUserList = async () => {
  //   try {
  //     const userList = await axios.get(
  //       "https://us-central1-party-organizer-98c23.cloudfunctions.net/api/party",
  //       {
  //         headers: {
  //           Authorization: "Bearer " + state.user.token,
  //         },
  //       }
  //     );
  //     console.log(userList);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return <div>Nu e nimic despre pagina asta in Adobe XD! HELP!</div>;
};
