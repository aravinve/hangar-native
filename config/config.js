export const config = {
  hostname: () => {
    switch (process.env.HANGAR_ENVIRONMENT) {
      case "local":
        return "localhost";
      case "dev":
        return "";
    }
  },
};
