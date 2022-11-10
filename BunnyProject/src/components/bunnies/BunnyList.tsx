import React from "react";
import { Bunny } from "../../store/bunny/interface";
import SingleBunny from "./SingleBunny";

interface AppProps {
  props: Bunny[];
}

export default function BunnyList({ props }: AppProps) {
  return (
    <ul>
      {props.map((bunny: Bunny) => {
        return <SingleBunny key={bunny.id} bunny={bunny} />;
      })}
    </ul>
  );
}
