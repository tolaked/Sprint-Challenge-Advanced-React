import React, { useState, useEffect } from "react";
import Player from "./Player";
import useLocalStorage from "../hooks/useLocalStorage";
function DataComponent() {
  const [players, setPlayers] = useLocalStorage("players", []);

  useEffect(() => {
    fetch("http://localhost:5000/api/players")
      .then(res => res.json())
      .then(body => {
        setPlayers(body);
      });
  }, []);

  return (
    <div>
      {players.map(data => (
        <Player
          key={data.id}
          name={data.name}
          country={data.country}
          searches={data.searches}
          id={data.id}
        />
      ))}
    </div>
  );
}

export default DataComponent;
