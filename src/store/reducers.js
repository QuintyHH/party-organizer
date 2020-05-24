import { USER_UPDATE_FIRSTNAME, USER_UPDATE_LASTNAME } from "./actions";

const userReducer = (state, action) => {
  switch (action.type) {
    case USER_UPDATE_FIRSTNAME:
      return {
        ...state,
        firstname: action.firstname,
      };
    case USER_UPDATE_LASTNAME:
      return {
        ...state,
        lastname: action.lastname,
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
