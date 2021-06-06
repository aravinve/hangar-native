import "react-native";
import { UserLoginOrRegisterComponent } from "../UserLoginOrRegisterComponent";
import { render } from "@testing-library/react-native";
import React from "react";
import Splashscreen from "./Splashscreen";
import userLoginService from "./userLogin.service";

const propComponent = <UserLoginOrRegisterComponent key="loginComponent" />;
const navigationProps = {
  navigation: {
    navigate: jest.fn(),
  },
};

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
      <Splashscreen loginProp={propComponent} navigation={navigationProps} />,
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

  it("should navigate to HomeScreen when user is already logged in", async () => {
    jest.spyOn(userLoginService, "checkLoginStatus").mockImplementation(() => {
      return Promise.resolve({
        userLoginData: {
          userId: "123",
          loginDate: "",
          loginMode: "",
        },
      });
    });

    await render(
      <Splashscreen
        loginProp={propComponent}
        navigation={{ ...navigationProps.navigation }}
      />,
    );

    expect(navigationProps.navigation.navigate).toHaveBeenCalledTimes(1);
  });
});
