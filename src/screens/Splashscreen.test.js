import { render } from "@testing-library/react-native";
import React from "react";
import SplashScreen from "./SplashscreenScreen";

beforeEach(() => {
  jest.useFakeTimers();
});

afterAll(() => {
  jest.resetAllMocks();
  jest.resetModules();
});

describe("<InitialScreen />", () => {
  it("should render and match InitialScreen snapshot", async () => {
    const renderedSplashScreen = await render(<SplashScreen />);
    expect(renderedSplashScreen).toMatchSnapshot();
  });
});
