import "react-native";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { render } from "@testing-library/react-native";
import LoginIconComponent from "./LoginIconComponent";
import React from "react";

describe("<LoginIconComponent />", () => {
  it("should display login button with icon and label", () => {
    const icon = faGoogle;
    const bgColor = "#4a6ef0";
    const labelColor = "#f0f0f0";

    const renderedIconButton = render(
      <LoginIconComponent
        icon={icon}
        label="Login with google"
        bgColor={bgColor}
        labelColor={labelColor}
      />,
    );

    const buttonLabel = renderedIconButton.getByTestId("logoLabel");
    const testLabelText = buttonLabel.children[0];

    expect(buttonLabel).toBeTruthy();

    expect(testLabelText).toBe("Login with google");
  });
});
