import React from "react";
import { expect, describe, test } from "@jest/globals";
import SingleBunny from "./SingleBunny";
import renderer from "react-test-renderer";
import { Bunny } from "../../store/bunny/interface";

describe("singleBunny", () => {
  test("Snapshot test", () => {
    const tree = renderer
      .create(
        <SingleBunny
          bunny={{ id: 1, name: "max", cuteness: 1, color: "white" } as Bunny}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
