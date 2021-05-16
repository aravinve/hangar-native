import { render } from "@testing-library/react-native";
import React from "react";
import "react-native";
import Splashscreen from "../src/components/Splashscreen";

it("renders Splashscreen with logo image", () => {
  const renderedImage = render(<Splashscreen />).getByTestId("logoImage");
  const renderedLabel = render(<Splashscreen />).getByTestId("logoLabel");
  const testImageSource = renderedImage.props.source.testUri;
  const testLabelText = renderedLabel.children[0];

  expect(renderedImage).toBeTruthy();
  expect(renderedLabel).toBeTruthy();

  expect(testImageSource.includes("logo.png")).toBe(true);
  expect(testLabelText).toBe("Hangar");
});
