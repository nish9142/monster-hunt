import React from "react";
import Gamebox from "./Gamebox";

function App() {
  const rows = +prompt("enter the rows");
  const columns = +prompt("enter the columns");
  const gameMatrix = new Array(rows)
    .fill(0)
    .map(() => new Array(columns).fill(0));
  const hero = [Math.floor(rows / 2), Math.floor(columns / 2)];
  const villans = [];
  for (let h = 0; h < rows; h++) {
    const villan = [
      Math.floor(Math.random() * rows),
      Math.floor(Math.random() * columns)
    ];
    villans.push(villan);
  }
  gameMatrix[hero[0]][hero[1]] = 1;
  villans.forEach(([vx, vy]) => (gameMatrix[vx][vy] = 2));

  return <Gamebox hero={hero} villans={villans} colors={gameMatrix} />;
}

export default App;
