export const UserLoginSchema = {
  name: "HangarUser",
  properties: {
    userId: "string",
    loginMode: "string",
    loginDate: "date",
  },
  primaryKey: "userId",
};
