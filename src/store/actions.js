export const USER_UPDATE_FIRSTNAME = "USER_UPDATE_FIRSTNAME";
export const USER_UPDATE_LASTNAME = "USER_UPDATE_LASTNAME";
export const USER_UPDATE_DISPLAYNAME = "USER_UPDATE_DISPLAYNAME";
export const USER_UPDATE_TELEPHONE = "USER_UPDATE_TELEPHONE";
export const USER_UPDATE_EMAIL = "USER_UPDATE_EMAIL";
export const USER_UPDATE_BIRTHDATE = "USER_UPDATE_BIRTHDATE";
export const USER_UPDATE_ID = "USER_UPDATE_ID";
export const USER_UPDATE_PASSWORD = "USER_UPDATE_PASSWORD";
export const USER_UPDATE_TOKEN = "USER_UPDATE_TOKEN";
export const USER_UPDATE_ROLE = "USER_UPDATE_ROLE";
export const USER_RESET = "USER_RESET";

export const PARTY_GET_LIST = "PARTY_GET_LIST";
export const PARTY_RESET = "PARTY_RESET";

export const userUpdateFirstNameAction = (value) => ({
  type: USER_UPDATE_FIRSTNAME,
  firstname: value,
});

export const userUpdateLastNameAction = (value) => ({
  type: USER_UPDATE_LASTNAME,
  lastname: value,
});

export const userUpdateDisplayNameAction = (value) => ({
  type: USER_UPDATE_DISPLAYNAME,
  displayName: value,
});

export const userUpdateIDAction = (value) => ({
  type: USER_UPDATE_ID,
  uid: value,
});

export const userUpdateTelephoneAction = (value) => ({
  type: USER_UPDATE_TELEPHONE,
  tel: value,
});

export const userUpdateEmailAction = (value) => ({
  type: USER_UPDATE_EMAIL,
  email: value,
});

export const userUpdateBirthDateAction = (value) => ({
  type: USER_UPDATE_BIRTHDATE,
  bday: value,
});

export const userUpdatePasswordAction = (value) => ({
  type: USER_UPDATE_PASSWORD,
  pass: value,
});

export const userUpdateTokenAction = (value) => ({
  type: USER_UPDATE_TOKEN,
  token: value,
});

export const userUpdateRoleAction = (value) => ({
  type: USER_UPDATE_ROLE,
  role: value,
});

export const userResetAction = () => ({
  type: USER_RESET,
});

export const partyGetListAction = (value) => ({
  type: PARTY_GET_LIST,
  party: value,
});

export const partyResetAction = () => ({
  type: PARTY_RESET,
});
