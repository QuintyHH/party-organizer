import React, { createContext, useReducer } from "react";
import { mainReducer } from "./reducers";
export const MainContext = createContext();

const initState = {
  user:
    JSON.parse(window.sessionStorage.getItem("userInformation")) !== null
      ? JSON.parse(window.sessionStorage.getItem("userInformation"))
      : {},
  partyList: [],
};

export const Store = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initState);
  return (
    <MainContext.Provider value={{ state, dispatch }}>
      {children}
    </MainContext.Provider>
  );
};
