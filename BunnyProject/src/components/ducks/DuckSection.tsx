import { useState } from "react";
import { useSelector } from "react-redux";
import { duckState } from "../../store/hooks";
import { socket } from "../../App";
import { DuckList } from "./DuckList";
import DucksVsBunnies from "./DucksVsBunnies";

export const DuckSection = () => {
  const myDuckState = useSelector(duckState);

  const getDucks = () => {
    socket.emit("getDucks");
  };

  return (
    <div>
      {myDuckState.ducks.length && <DuckList props={myDuckState.ducks} />}
      <button onClick={getDucks}>getDucks</button>
      <DucksVsBunnies />
    </div>
  );
};
