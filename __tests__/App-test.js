import "react-native";
import React from "react";
import App from "../App";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const renderedApp = renderer.create(<App />);
  const { children } = renderedApp.toJSON();

  expect(renderedApp).toBeTruthy();
  expect(children.length).toBeGreaterThan(0);
});
