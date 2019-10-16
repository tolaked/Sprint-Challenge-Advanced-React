import React from "react";

function Player({ name, country, searches, id }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>id: {id}</p>
      <p>Country: {country}</p>
      <p>Searches: {searches}</p>
    </div>
  );
}

export default Player;
