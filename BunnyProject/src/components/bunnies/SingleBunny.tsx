import React from "react";
import { Bunny } from "../../store/bunny/interface";

interface AppProps {
  bunny: Bunny;
}

export default function SingleBunny({ bunny }: AppProps) {
  return (
    <li>
      <div>Id: {bunny.id}</div>
      <div>Name: {bunny.name}</div>
      <div>Cuteness: {bunny.cuteness}</div>
      <div>Color: {bunny.color}</div>
    </li>
  );
}
