import "react-native";
import { BackHandler } from "react-native";
import { fireEvent, render } from "@testing-library/react-native";
import React from "react";
import ServerUnreachableDialogComponent from "./ServerUnreachableDialogComponent";

beforeEach(() => {
  jest.useFakeTimers();
});

afterAll(() => {
  jest.resetAllMocks();
  jest.resetModules();
});

describe("<ServerUnreachableDialogComponent />", () => {
  it("should render ServerUnreachableDialogComponent with expected dialog title", async () => {
    const dialogTitleComponent = await render(
      <ServerUnreachableDialogComponent />,
    ).getByTestId("dialogTitle");

    const dialogText = dialogTitleComponent.props.children;

    expect(dialogTitleComponent).toBeTruthy();
    expect(dialogText).toBe("Unable to reach Hangar server");
  });

  it("should close app when EXIT is pressed", async () => {
    BackHandler.exitApp = jest.fn();

    const dialogComponent = await render(<ServerUnreachableDialogComponent />);
    fireEvent.press(dialogComponent.getByTestId("dialogExitButton"));

    expect(BackHandler.exitApp).toHaveBeenCalledTimes(1);
  });
});
