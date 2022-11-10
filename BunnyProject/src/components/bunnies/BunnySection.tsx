import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { bunnyState, useAppDispatch } from "../../store/hooks";
import {
  addBunny,
  deleteBunny,
  getAllBunnies,
} from "../../store/bunny/bunnySlice";
import BunnyList from "./BunnyList";
import BunnyDoughnut from "./BunnyDoughnut";

export const BunnySection = () => {
  const dispatch = useAppDispatch();
  const myBunnyState = useSelector(bunnyState);
  const [id, setID] = useState<string>("0");

  useEffect(() => {
    dispatch(getAllBunnies());
  }, []);

  return (
    <div>
      {myBunnyState.bunnies.length && (
        <BunnyList props={myBunnyState.bunnies} />
      )}
      <button onClick={() => dispatch(addBunny())}>add Random Bunny</button>
      <button onClick={() => dispatch(deleteBunny(id))}>delete Bunny</button>
      <input type="number" value={id} onChange={(e) => setID(e.target.value)} />
      <BunnyDoughnut />
    </div>
  );
};
