import React from "react";
function Presentation(props) {
    const {nom, prenom} = props
  return (
    <div>
      <h2>Salut – {props.prenom} {props.nom} </h2>
    </div>
  );
}

export default Presentation;