import React from "react";
import Square from "./Square";
import { array } from "prop-types";

function Gamebox(props) {
  const [colors, setColors] = React.useState([]);
  const hero = props.hero;
  const villans = props.villans;
  let counter = 0;

  // React.useEffect(()=>{
  //   setColors(props.colors);

  // })

  // game logic
  function delay() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("hello");
      }, 100);
    });
  }
  async function reset() {
    await setColors([]);
    await setColors(props.colors);
  }

  async function asyncCall() {
    setColors(props.colors);
    await delay();
    await Game();
    alert("The number of steps to complete the game " + counter);

    // expected output: 'resolved'
  }
  async function Game() {
    console.log("HELLO" + hero);
    for (var i = 0; i < villans.length; i++) {
      let path = [hero[0] - villans[i][0], hero[1] - villans[i][1]];
      console.log("step " + (i + 1));
      console.log("hero " + hero);
      console.log("villan " + villans[i]);
      console.log("path " + path);

      await move(path);
    }
  }
  async function move(path) {
    if (path[0] > 0) {
      for (let i = 0; i < path[0]; i++) {
        props.colors[hero[0]][hero[1]] = 0;
        await reset();
        await delay();
        hero[0]--;

        props.colors[hero[0]][hero[1]] = 1;
        await reset();
        await delay();
        counter++;
      }
    } else {
      for (let j = 0; j < Math.abs(path[0]); j++) {
        props.colors[hero[0]][hero[1]] = 0;
        await reset();
        await delay();
        hero[0]++;
        props.colors[hero[0]][hero[1]] = 1;
        await reset();
        await delay();
        counter++;
      }
    }
    if (path[1] > 0) {
      for (let i = 0; i < path[1]; i++) {
        props.colors[hero[0]][hero[1]] = 0;
        await reset();
        await delay();
        hero[1]--;
        props.colors[hero[0]][hero[1]] = 1;
        await reset();
        await delay();
        counter++;
      }
    } else {
      for (let j = 0; j < Math.abs(path[1]); j++) {
        props.colors[hero[0]][hero[1]] = 0;
        await reset();
        await delay();
        hero[1]++;
        props.colors[hero[0]][hero[1]] = 1;
        await reset();
        await delay();
        counter++;
      }
    }
  }

  return (
    <div className="center">
      {colors.map((items, indexr) => {
        return (
          <div className="row">
            {items.map((value, indexc) => {
              return <Square color={value} />;
            })}
          </div>
        );
      })}

      <button onClick={asyncCall}>Start </button>
    </div>
  );
}

export default Gamebox;
