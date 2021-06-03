import "react-native";
import { render } from "@testing-library/react-native";
import App from "./App";
import React from "react";

beforeEach(() => {
  jest.useFakeTimers();
});

afterAll(() => {
  jest.resetAllMocks();
  jest.resetModules();
});

describe("<App />", () => {
  it("should render and match App snapshot", async () => {
    const renderedApp = await render(<App />);
    expect(renderedApp).toMatchSnapshot();
  });
});
