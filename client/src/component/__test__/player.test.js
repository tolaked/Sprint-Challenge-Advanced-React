import React from "react";
import "@testing-library/jest-dom/extend-expect";
import * as rtl from "@testing-library/react";
import Player from "../Player";

let tools;

const props = {
  name: "Megan",
  country: "US",
  searches: 100,
  id: 0
};

expect.extend({
  toBeWithinRange(received, floor, ceiling) {
    const pass = received >= floor && received <= ceiling;
    if (pass) {
      return {
        message: () =>
          `expected ${received} not to be within range ${floor} - ${ceiling}`,
        pass: true
      };
    } else {
      return {
        message: () =>
          `expected ${received} to be within range ${floor} - ${ceiling}`,
        pass: false
      };
    }
  }
});

beforeEach(() => {
  rtl.cleanup();
  tools = rtl.render(
    <div>
      <h3>
        <Player {...props} />
      </h3>
    </div>
  );
});

describe("Counter component", () => {
  it("can debug the output", () => {
    tools.debug();
  });

  it("shows the correct player", () => {
    const elementWithJoshText = tools.queryByText(/megan/i);
    expect(elementWithJoshText).toBeInTheDocument();
  });

  it("shows the correct player", () => {
    const elementWithJoshText = tools.queryByText(/us/i);
    expect(elementWithJoshText).toBeInTheDocument();
  });

  it("shows the correct searches", () => {
    expect(tools.queryByText(/100/)).toBeInTheDocument();
  });
});
