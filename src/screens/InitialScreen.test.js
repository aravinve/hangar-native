import { AxiosClient } from "../ApiClient";
import { render } from "@testing-library/react-native";
import InitialScreen from "./InitialScreen";
import React from "react";

beforeEach(() => {
  jest.useFakeTimers();
});

afterAll(() => {
  jest.resetAllMocks();
  jest.resetModules();
  jest.clearAllTimers();
});

describe("<InitialScreen />", () => {
  it("should render and match InitialScreen snapshot", async () => {
    const renderedInitialScreen = await render(<InitialScreen />);
    expect(renderedInitialScreen).toMatchSnapshot();
  });

  it("should show error modal if server is not reachable", async () => {
    jest.spyOn(AxiosClient, "get").mockImplementation(() => {
      return Promise.reject(new Error());
    });

    const testModal = await render(<InitialScreen />).getByTestId(
      "serverErrorModal",
    ).children;

    expect(AxiosClient.get).toHaveBeenCalledTimes(1);
    expect(testModal).toBeTruthy();
  });

  it("should show error modal if server health is not Up", async () => {
    jest.spyOn(AxiosClient, "get").mockImplementation(() => {
      return Promise.resolve({
        data: {
          health: "UnHealthy",
        },
      });
    });

    const testModal = await render(<InitialScreen />).getByTestId(
      "serverErrorModal",
    ).children;

    expect(AxiosClient.get).toHaveBeenCalledTimes(1);
    expect(testModal).toBeTruthy();
  });

  it("should show login buttons if server is reachable", async () => {
    jest.spyOn(AxiosClient, "get").mockImplementation(() => {
      return Promise.resolve({
        data: {
          health: "Up",
        },
      });
    });

    let initialScreen = await render(<InitialScreen />);

    const loginButtons = initialScreen.getByTestId("loginButtons").children;

    expect(AxiosClient.get).toHaveBeenCalledTimes(1);
    expect(loginButtons).toBeTruthy();
    expect(loginButtons.length).toBe(3);
  });
});
