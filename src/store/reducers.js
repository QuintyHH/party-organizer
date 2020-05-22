import { USER_UPDATE_NAME } from "./actions";

const userReducer = (state, action) => {
  switch (action.type) {
    case USER_UPDATE_NAME:
      return {
        ...state,
        name: action.name,
      };
    default:
      return state;
  }
};
const partyReducer = (state, action) => {};

export const mainReducer = ({ partyList, user }, action) => ({
  user: userReducer(user, action),
  partyList: partyReducer(partyList, action),
});
