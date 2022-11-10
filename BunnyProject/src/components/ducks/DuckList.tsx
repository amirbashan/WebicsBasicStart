import React from "react";
import { Duck } from "../../store/ducks/interface";
import SingleDuck from "./SingleDuck";

interface AppProps {
  props: Duck[];
}

export const DuckList = ({ props }: AppProps) => {
  return (
    <ul>
      {props.map((duck: Duck) => {
        return <SingleDuck key={duck.id} duck={duck} />;
      })}
    </ul>
  );
};
