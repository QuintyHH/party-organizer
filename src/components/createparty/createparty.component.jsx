import React, { useContext } from "react";

import { MainContext } from "../../store";

export const CreateParty = () => {
  const { state, dispatch } = useContext(MainContext);

  return (
    <div>
      <div>Create Party</div>
    </div>
  );
};
