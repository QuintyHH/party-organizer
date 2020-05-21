import React from "react";
import { render } from "react-dom";
import { Main } from "./components/main";
import "./index.css";

const app = <Main />,
  here = document.querySelector("#here");

render(app, here);
