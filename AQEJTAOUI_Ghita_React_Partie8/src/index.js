import React from "react";
import ReactDOM from "react-dom/client";
import Message from "./components/Message";
import Compteur from "./components/CompteurVisites";

const root = ReactDOM.createRoot(document.getElementById("root"));

function App() {
  return (
    <>
    <Message/>
    <Compteur/>
    </>
  )
}
root.render(
    <App />
);
