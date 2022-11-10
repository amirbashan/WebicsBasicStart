import React from "react";
import { Duck } from "../../store/ducks/interface";

interface AppProps {
  duck: Duck;
}

export default function SingleDuck({ duck }: AppProps) {
  return (
    <li>
      <div>Id: {duck.id}</div>
      <div>Name: {duck.name}</div>
      <div>Cuteness: {duck.cuteness}</div>
      <div>Color: {duck.color}</div>
    </li>
  );
}
