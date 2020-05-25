import axios from "axios";

const baseAPI =
  "https://us-central1-party-organizer-98c23.cloudfunctions.net/api";
const partyAPI = "/party";
const userAPI = "/user";

export const createParty = async (token, payload) => {
  try {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    await axios.post(`${baseAPI}${partyAPI}`, payload);
  } catch (err) {
    alert(err);
  }
};

export const attendParty = async (token, payload) => {
  try {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    await axios.patch(`${baseAPI}${partyAPI}`, payload);
  } catch (err) {
    alert(err);
  }
};

export const deleteParty = async (token, payload) => {
  try {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    axios.defaults.headers.common["Content-Type"] =
      "application/json; charset=UTF-8";
    console.log(`${baseAPI}${partyAPI}`, payload);
    await axios.delete(`${baseAPI}${partyAPI}`, { data: payload });
  } catch (err) {
    alert(err);
  }
};

export const getPartiesList = async (token) => {
  try {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    let response = await axios.get(`${baseAPI}${partyAPI}`);
    return response.data.partyList;
  } catch (err) {
    alert(err);
    return [];
  }
};

export const createUser = async (payload) => {
  try {
    await axios.patch(`${baseAPI}${userAPI}`, payload);
  } catch (err) {
    alert(err);
  }
};
