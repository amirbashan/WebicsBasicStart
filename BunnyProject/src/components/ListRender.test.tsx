import React from "react";
import { expect, describe, test } from "@jest/globals";
import ListRender from "./ListRender";
import renderer from "react-test-renderer";
import { Bunny } from "../store/bunny/interface";

describe("Test List Renderer", () => {
  test("renders correctly", () => {
    const tree = renderer
      .create(
        <ListRender
          bunny={{ id: 1, name: "max", cuteness: 1, color: "white" } as Bunny}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
