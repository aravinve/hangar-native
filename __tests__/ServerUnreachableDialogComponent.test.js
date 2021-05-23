import "react-native";
import { BackHandler } from "react-native";
import { fireEvent, render } from "@testing-library/react-native";
import React from "react";
import ServerUnreachableDialogComponent from "../src/components/ServerUnreachableDialogComponent";

beforeEach(() => {
  jest.useFakeTimers();
});

it("should render ServerUnreachableDialogComponent with expected dialog title", () => {
  const dialogTitleComponent = render(
    <ServerUnreachableDialogComponent />,
  ).getByTestId("dialogTitle");

  const dialogText = dialogTitleComponent.props.children;

  expect(dialogTitleComponent).toBeTruthy();
  expect(dialogText).toBe("Unable to reach Hangar server");
});

it("should close app when EXIT is pressed", () => {
  BackHandler.exitApp = jest.fn();

  const dialogComponent = render(<ServerUnreachableDialogComponent />);
  fireEvent.press(dialogComponent.getByTestId("dialogExitButton"));

  expect(BackHandler.exitApp).toHaveBeenCalledTimes(1);
});
