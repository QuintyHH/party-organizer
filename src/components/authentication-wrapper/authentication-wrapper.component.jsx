import React from "react";
import { AuthenticationNav } from "../authentication-nav";

export const Authentication = ({ children }) => {
  return (
    <div>
      <AuthenticationNav />
      {children}
    </div>
  );
};
