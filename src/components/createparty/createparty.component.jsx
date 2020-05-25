import React, { useContext, useState } from "react";

import { MainContext } from "../../store";
import { StyledCreateParty } from "./createparty.styles";
import { TextInput } from "../textinput";
import { Button } from "../button";
import axios from "axios";
import { navigate } from "@reach/router";

export const CreateParty = () => {
  const { state } = useContext(MainContext);
  const [name, setName] = useState("");
  const [avatarURL, setAvatarURL] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");
  const discardIcon = "/assets/ic_delete.svg";

  const createParty = async () => {
    try {
      const author = state.user.displayName;
      axios.defaults.headers.common = {
        Authorization: `Bearer ${state.user.token}`,
      };
      await axios.post(
        "https://us-central1-party-organizer-98c23.cloudfunctions.net/api/party",
        { author, name, description, endDate, startDate, avatarURL }
      );
    } catch (err) {
      alert(err);
    }
  };

  const discard = async () => {
    navigate("/party/new");
  };

  return (
    <StyledCreateParty data-test-id="createparty">
      <form>
        <TextInput
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          width="90%"
          onChange={(e) => setName(e.target.value)}
        />
        <TextInput
          type="text"
          name="avatar"
          width="90%"
          placeholder="Avatar URL"
          value={avatarURL}
          onChange={(e) => setAvatarURL(e.target.value)}
        />

        <TextInput
          type="datetime-local"
          name="startDate"
          width="fit-content"
          display="inline-block"
          label="Start Date"
          value={startDate}
          onChange={(e) => setStartDate(String(e.target.value))}
        />

        <TextInput
          type="datetime-local"
          name="endDate"
          display="inline-block"
          width="fit-content"
          label="End Date"
          value={endDate}
          onChange={(e) => setEndDate(String(e.target.value))}
        />
        <TextInput
          type="textarea"
          name="description"
          placeholder="Description"
          width="90%"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button
          onClick={createParty}
          background="#0178FF"
          color="white"
          radius="50px"
          margin="1rem 0 1rem 5%"
          display="inline-flex"
          height="3.5rem"
          padding="0.5rem 1rem 0.5rem 1rem"
        >
          Create
        </Button>
        <Button
          icon={discardIcon}
          onClick={discard}
          radius="50px"
          margin="1rem 0 1rem 1rem"
          display="inline-flex"
          height="3.5rem"
          padding="0.5rem 1.5rem 0.5rem 0.5rem"
          position="absolute"
        >
          Discard
        </Button>
      </form>
    </StyledCreateParty>
  );
};
