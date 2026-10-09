import React from "react";
import ReactDOM from "react-dom/client";
import {App } from "./components/App";
import {Class} from "./classComponents/App";

const element = document.getElementById("root");
const root = ReactDOM.createRoot(element);

const element2 = document.getElementById("classRoot");
const classRoot = ReactDOM.createRoot(element2);

root.render(<App />);
classRoot.render(<Class/>);