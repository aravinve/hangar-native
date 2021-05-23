import "react-native";
import { render } from "@testing-library/react-native";
import App from "../App";
import React from "react";
import renderer from "react-test-renderer";

beforeEach(() => {
  jest.useFakeTimers();
});

it("should render App components with all children", () => {
  const renderedApp = renderer.create(<App />);
  const { children } = renderedApp.toJSON();

  expect(renderedApp).toBeTruthy();
  expect(children.length).toBeGreaterThan(0);
});

it("should show modal if server is not reachable", () => {
  jest.mock("../src/ApiClient.js", () => {
    return {
      AxiosClient: {
        get: async () => {
          return Promise.reject(() => {});
        },
      },
    };
  });

  const testModal = render(<App />).getByTestId("serverErrorModal").children;

  expect(testModal).toBeTruthy();
});
