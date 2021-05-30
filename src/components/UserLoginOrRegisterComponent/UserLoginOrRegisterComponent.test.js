import { render } from "@testing-library/react-native";
import React from "react";
import UserLoginOrRegisterComponent from "./UserLoginOrRegisterComponent";

describe("<UserLoginOrRegisterComponent />", () => {
  it("should render three login buttons", () => {
    const loginComponent = render(<UserLoginOrRegisterComponent />);
    const loginButtons =
      loginComponent.getByTestId("loginButtons").props.children;

    expect(loginButtons.length).toBe(3);
  });
});
