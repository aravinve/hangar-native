import { UserLoginSchema } from "../../schema/userLogin.schema";
import Realm from "realm";
import UserLoginService from "./userLogin.service";

describe("User Login Service", () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.resetAllMocks();
    jest.clearAllMocks();
    jest.clearAllTimers();
    jest.resetModules();
  });

  beforeEach(() => {
    Realm.clearTestState();
  });

  it("should throw error if the database cannot be opened while reading", async () => {
    const dbError = new Error("Unable to access user DB");
    // @ts-ignore
    Realm.open = jest.fn(() => {
      return Promise.reject(new Error());
    });

    const loginError = await UserLoginService.checkLoginStatus().catch(
      (err) => err,
    );

    expect(Realm.open).toHaveBeenCalledTimes(1);
    expect(loginError.message).toBe(dbError.message);
  });

  it("should return empty object if user is logging in for the first time", async () => {
    // @ts-ignore
    Realm.open = jest.fn(() => {
      return Promise.resolve(new Realm({ schema: [UserLoginSchema] }));
    });

    const { userLoginData } = await UserLoginService.checkLoginStatus();

    expect(userLoginData).toStrictEqual({});
  });

  it("should return user details if user is already logged in", async () => {
    const expectedUserId = "13c1a330-c630-11eb-b8bc-0242ac130003";

    // @ts-ignore
    Realm.open = jest.fn(() => {
      const realm = new Realm({
        schema: [UserLoginSchema],
        inMemory: true,
      });

      realm.write(() => {
        // @ts-ignore
        realm.create("HangarUser", {
          userId: "13c1a330-c630-11eb-b8bc-0242ac130003",
          loginMode: "google",
          loginDate: new Date(),
        });
      });

      return Promise.resolve(realm);
    });

    const { userLoginData } = await UserLoginService.checkLoginStatus();

    expect(userLoginData.userId).toStrictEqual(expectedUserId);
  });
});
