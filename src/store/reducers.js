import {
  USER_UPDATE_FIRSTNAME,
  USER_UPDATE_LASTNAME,
  USER_UPDATE_TELEPHONE,
  USER_UPDATE_EMAIL,
  USER_UPDATE_BIRTHDATE,
  USER_UPDATE_PASSWORD,
  USER_UPDATE_TOKEN,
  USER_UPDATE_ROLE,
  USER_RESET,
  PARTY_GET_LIST,
  PARTY_RESET,
} from "./actions";

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
    case USER_UPDATE_TELEPHONE:
      return {
        ...state,
        tel: action.tel,
      };
    case USER_UPDATE_EMAIL:
      return {
        ...state,
        email: action.email,
      };
    case USER_UPDATE_BIRTHDATE:
      return {
        ...state,
        bday: action.bday,
      };
    case USER_UPDATE_PASSWORD:
      return {
        ...state,
        pass: action.pass,
      };
    case USER_UPDATE_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    case USER_UPDATE_ROLE:
      return {
        ...state,
        role: action.role,
      };
    case USER_RESET:
      return {};
    default:
      return state;
  }
};

const partyReducer = (state, action) => {
  switch (action.type) {
    case PARTY_GET_LIST:
      return [...state, ...action.party];
    case PARTY_RESET:
      return [];
    default:
      return state;
  }
};

export const mainReducer = ({ partyList, user }, action) => ({
  user: userReducer(user, action),
  partyList: partyReducer(partyList, action),
});
