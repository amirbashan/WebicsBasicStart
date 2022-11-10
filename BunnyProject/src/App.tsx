import { useState, useEffect } from "react";
import "./App.css";
import { bunnyState, duckState, useAppDispatch } from "./store/hooks";
import { setAllDucks } from "./store/ducks/DuckSlice";
import { useSelector } from "react-redux";
import { Duck } from "./store/ducks/interface";
import { io, Socket } from "socket.io-client";
import { BunnySection } from "./components/bunnies/BunnySection";
import { DuckSection } from "./components/ducks/DuckSection";
export const socket: Socket = io("http://localhost:4000");

// import socketIOClient from "socket.io-client";

export const URL = "http://localhost:8000";

function App() {
  useEffect(() => {
    socket.on(`connected`, () => {
      console.log("connected to socket");
    });
    socket.on("DucksDB", (payload: Duck[]) => {
      dispatch(setAllDucks(payload));
    });
    return () => {
      socket.off("connected");
      socket.off("DucksDB");
    };
  }, []);

  const dispatch = useAppDispatch();
  const myBunnyState = useSelector(bunnyState);
  const myDuckState = useSelector(duckState);
  const loading = myBunnyState.loading && myDuckState.loading;

  return (
    <div className="App">
      {loading && <div>Loading...</div>}
      {!loading && (
        <div>
          <BunnySection />
          <DuckSection />
        </div>
      )}
    </div>
  );
}

export default App;
