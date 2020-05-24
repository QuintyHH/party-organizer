export const USER_UPDATE_FIRSTNAME = "USER_UPDATE_FIRSTNAME";
export const USER_UPDATE_LASTNAME = "USER_UPDATE_LASTNAME";

export const userUpdateFirstNameAction = (name) => ({
  type: USER_UPDATE_FIRSTNAME,
  firstname: name,
});

export const userUpdateLastNameAction = (name) => ({
  type: USER_UPDATE_LASTNAME,
  lastname: name,
});
