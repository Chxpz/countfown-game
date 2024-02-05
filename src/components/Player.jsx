import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();

  const [entenredPlayerName, setEntenredPlayerName] = useState(null);

  const handleClick = () => {
    setEntenredPlayerName(playerName.current.value);
    playerName.current.value = "";
  };

  return (
    <section id="player">
      <h2>Welcome {entenredPlayerName ?? "unknown entity"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
