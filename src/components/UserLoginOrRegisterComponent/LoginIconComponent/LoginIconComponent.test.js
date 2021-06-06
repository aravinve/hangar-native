import "react-native";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { render } from "@testing-library/react-native";
import LoginIconComponent from "./LoginIconComponent";
import React from "react";

beforeEach(() => {
  jest.useFakeTimers();
});

afterAll(() => {
  jest.resetAllMocks();
  jest.resetModules();
});

describe("<LoginIconComponent />", () => {
  it("should display login button with icon and label", async () => {
    const icon = faGoogle;
    const bgColor = "#4a6ef0";
    const labelColor = "#f0f0f0";

    const renderedIconButton = await render(
      <LoginIconComponent
        icon={icon}
        label="Login with google"
        bgColor={bgColor}
        labelColor={labelColor}
      />,
    );

    const buttonLabel = renderedIconButton.getByTestId("loginButtonLabel");
    const testLabelText = buttonLabel.children[0];

    expect(buttonLabel).toBeTruthy();

    expect(testLabelText).toBe("Login with google");
  });
});
