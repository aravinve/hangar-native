import "react-native";
import { render } from "@testing-library/react-native";
import React from "react";
import Splashscreen from "./Splashscreen";

beforeEach(() => {
  jest.useFakeTimers();
});

afterAll(() => {
  jest.resetAllMocks();
  jest.resetModules();
});

describe("<Splashscreen />", () => {
  it("renders Splashscreen with logo image", async () => {
    const renderedSplashScreen = await render(
      <Splashscreen loginProp={null} />,
    );
    const renderedImage = renderedSplashScreen.getByTestId("logoImage");
    const renderedLabel = renderedSplashScreen.getByTestId("logoLabel");

    const testImageSource = renderedImage.props.source.testUri;
    const testLabelText = renderedLabel.children[0];

    expect(renderedImage).toBeTruthy();
    expect(renderedLabel).toBeTruthy();

    expect(testImageSource.includes("logo.png")).toBe(true);
    expect(testLabelText).toBe("Hangar");
  });
});
