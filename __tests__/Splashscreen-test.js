import { render } from "@testing-library/react-native";
import React from "react";
import "react-native";
import Splashscreen from "../src/components/Splashscreen";

it("renders Splashscreen with logo image", () => {
  const renderedImage = render(<Splashscreen />).getByTestId("logoImage");
  const renderedLabel = render(<Splashscreen />).getByTestId("logoLabel");

  expect(renderedImage).toBeTruthy();
  expect(renderedLabel).toBeTruthy();
  expect(renderedLabel.children[0]).toBe("Hangar");
});
