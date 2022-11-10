import React from "react";
import { expect, describe, test } from "@jest/globals";
import { store } from "../store";
import { addBunny } from "./bunnySlice";

import renderer from "react-test-renderer";
import { Bunny } from "./interface";

describe("Bunny Slice", () => {
  test("Initial state", () => {
    let state = store.getState().bunny;
    expect(state.bunnies).toEqual([]);
    expect(state.loading).toBe(false);
    expect(state.error).toBe("");
  });
  // test("addBunny action", () => {
  //   const state = store.getState().bunny;
  //   store.dispatch(addBunny());
  //   const sampleBunny = state.bunnies.find((bunny) => bunny.id === 1);
  //   expect(typeof sampleBunny?.color).toBe("string");
  // });
});

// describe("Duck Slice", () => {
//   test("Initial state", () => {
//     let state = store.getState().duck;
//     expect(state.ducks).toEqual([]);
//     expect(state.loading).toBe(false);
//     expect(state.error).toBe("");
//   });
// });
