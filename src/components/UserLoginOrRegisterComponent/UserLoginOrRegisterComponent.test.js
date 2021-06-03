import { render } from "@testing-library/react-native";
import React from "react";
import UserLoginOrRegisterComponent from "./UserLoginOrRegisterComponent";

beforeEach(() => {
  jest.useFakeTimers();
});

afterAll(() => {
  jest.resetAllMocks();
  jest.resetModules();
});

describe("<UserLoginOrRegisterComponent />", () => {
  it("should render three login buttons", async () => {
    const loginComponent = await render(<UserLoginOrRegisterComponent />);
    const loginButtons =
      loginComponent.getByTestId("loginButtons").props.children;

    expect(loginButtons.length).toBe(3);
  });
});
