import { render } from "@testing-library/react-native";
import React from "react";
import UserLoginOrRegisterComponent from "./UserLoginOrRegisterScreen";

beforeEach(() => {
  jest.useFakeTimers();
});

afterAll(() => {
  jest.resetAllMocks();
  jest.resetModules();
});

describe("<InitialScreen />", () => {
  it("should render and match InitialScreen snapshot", async () => {
    const renderedUserLoginComponent = await render(
      <UserLoginOrRegisterComponent />,
    );
    expect(renderedUserLoginComponent).toMatchSnapshot();
  });
});
