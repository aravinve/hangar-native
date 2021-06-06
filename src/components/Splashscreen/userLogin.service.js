import { UserLoginSchema } from "schema/userLogin.schema";
import Realm from "realm";

const checkLoginStatus = async () => {
  const realm = await Realm.open({
    path: "user_data_realm",
    schema: [UserLoginSchema],
  }).catch(() => {
    throw new Error("Unable to access user DB");
  });

  const userData = realm.objects("HangarUser")[0];

  if (!userData) {
    return { userLoginData: {} };
  }

  const { userId, loginMode, loginDate } = userData;
  return { userLoginData: { userId, loginDate, loginMode } };
};

export default {
  checkLoginStatus,
};
